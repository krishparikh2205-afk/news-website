/**
 * The Meridian Post - Core Front-End Architecture
 * Authoritative global journalism platform
 * Date: 6 November 2026
 */

(function () {
  'use strict';

  // ==========================================
  // SHA-256 Cryptographic Hash Helper
  // ==========================================
  async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // ==========================================
  // Global Theme Controller
  // ==========================================
  function initTheme() {
    const savedTheme = localStorage.getItem('meridian_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggleUI(savedTheme);

    const toggleBtn = document.getElementById('themeToggleBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('meridian_theme', newTheme);
        updateThemeToggleUI(newTheme);
      });
    }
  }

  function updateThemeToggleUI(theme) {
    const label = document.getElementById('themeToggleLabel');
    const icon = document.getElementById('themeToggleIcon');
    if (!label) return;
    if (theme === 'dark') {
      label.textContent = 'Light Mode';
      if (icon) icon.innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>';
    } else {
      label.textContent = 'Dark Mode';
      if (icon) icon.innerHTML = '<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke="currentColor" stroke-width="2" fill="none"/>';
    }
  }

  // ==========================================
  // Sticky Header & Back-To-Top
  // ==========================================
  function initScrollBehaviors() {
    const header = document.querySelector('.site-header');
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
      if (header) {
        if (scrollPos > 30) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
      }
      if (backToTopBtn) {
        if (scrollPos > 400) backToTopBtn.classList.add('show');
        else backToTopBtn.classList.remove('show');
      }
    });

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // ==========================================
  // Mobile Navigation Drawer
  // ==========================================
  function initMobileDrawer() {
    const hamburger = document.getElementById('hamburgerBtn');
    const drawer = document.getElementById('mobileNavDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    const closeBtn = document.getElementById('drawerCloseBtn');

    function openDrawer() {
      if (drawer) drawer.classList.add('open');
      if (backdrop) backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      if (drawer) drawer.classList.remove('open');
      if (backdrop) backdrop.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (hamburger) hamburger.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);
  }

  // ==========================================
  // Breaking News Ticker
  // ==========================================
  function initBreakingTicker() {
    const tickerItem = document.getElementById('tickerItem');
    const prevBtn = document.getElementById('tickerPrev');
    const nextBtn = document.getElementById('tickerNext');
    if (!tickerItem || typeof MeridianData === 'undefined' || !MeridianData.breakingNews) return;

    let currentIndex = 0;
    const items = MeridianData.breakingNews;

    function renderItem(idx) {
      tickerItem.style.opacity = '0';
      setTimeout(() => {
        tickerItem.textContent = items[idx];
        tickerItem.style.opacity = '1';
      }, 150);
    }

    renderItem(currentIndex);

    let interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      renderItem(currentIndex);
    }, 5500);

    const tickerWrap = document.querySelector('.ticker-bar');
    if (tickerWrap) {
      tickerWrap.addEventListener('mouseenter', () => clearInterval(interval));
      tickerWrap.addEventListener('mouseleave', () => {
        interval = setInterval(() => {
          currentIndex = (currentIndex + 1) % items.length;
          renderItem(currentIndex);
        }, 5500);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        renderItem(currentIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        renderItem(currentIndex);
      });
    }
  }

  // ==========================================
  // World Today Tabs Controller
  // ==========================================
  function initWorldTodayTabs() {
    const tabsContainer = document.getElementById('worldTabsNav');
    const headlinesGrid = document.getElementById('worldHeadlinesGrid');
    if (!tabsContainer || !headlinesGrid || typeof MeridianData === 'undefined' || !MeridianData.worldToday) return;

    const regions = Object.keys(MeridianData.worldToday);

    function renderRegionHeadlines(regionName) {
      const articles = MeridianData.worldToday[regionName] || [];
      headlinesGrid.innerHTML = articles.map(item => `
        <article class="world-headline-card">
          <h4 class="wh-title">
            <a href="article.html?id=${item.id}&title=${encodeURIComponent(item.title)}">${item.title}</a>
          </h4>
          <div class="wh-footer">
            <span>By ${item.author}</span>
            <span>${item.time}</span>
          </div>
        </article>
      `).join('');
    }

    tabsContainer.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        tabsContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const region = btn.getAttribute('data-region');
        renderRegionHeadlines(region);
      });
    });

    // Default to first region
    if (regions.length > 0) {
      renderRegionHeadlines(regions[0]);
    }
  }

  // ==========================================
  // Instant Search Overlay
  // ==========================================
  function initSearchModal() {
    const searchModal = document.getElementById('searchModal');
    const searchTriggers = document.querySelectorAll('.search-toggle-btn');
    const searchClose = document.getElementById('searchCloseBtn');
    const searchInput = document.getElementById('searchBigInput');
    const resultsContainer = document.getElementById('searchResultsList');

    function openSearch() {
      if (!searchModal) return;
      searchModal.classList.add('open');
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 100);
      }
      document.body.style.overflow = 'hidden';
    }

    function closeSearch() {
      if (!searchModal) return;
      searchModal.classList.remove('open');
      document.body.style.overflow = '';
      if (searchInput) searchInput.value = '';
      if (resultsContainer) resultsContainer.innerHTML = '';
    }

    searchTriggers.forEach(btn => btn.addEventListener('click', openSearch));
    if (searchClose) searchClose.addEventListener('click', closeSearch);
    if (searchModal) {
      searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) closeSearch();
      });
    }

    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
      if (e.key === 'Escape' && searchModal && searchModal.classList.contains('open')) {
        closeSearch();
      }
    });

    if (searchInput && resultsContainer && typeof MeridianData !== 'undefined') {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.length < 2) {
          resultsContainer.innerHTML = '<p style="padding:16px;color:var(--color-text-muted);font-size:0.875rem;">Type at least 2 characters to search headlines, topics, and authors...</p>';
          return;
        }

        // Aggregate searchable pool
        const pool = [];
        if (MeridianData.leadStory) pool.push(MeridianData.leadStory);
        if (MeridianData.secondaryLeadStories) pool.push(...MeridianData.secondaryLeadStories);
        if (MeridianData.artsLiterature) pool.push(...MeridianData.artsLiterature);
        if (MeridianData.marketArticles) pool.push(...MeridianData.marketArticles);

        if (MeridianData.sections) {
          for (const s in MeridianData.sections) {
            pool.push(...MeridianData.sections[s]);
          }
        }

        const matches = pool.filter(item => {
          const title = (item.title || '').toLowerCase();
          const summary = (item.summary || '').toLowerCase();
          const author = (item.author || '').toLowerCase();
          const cat = (item.category || '').toLowerCase();
          return title.includes(query) || summary.includes(query) || author.includes(query) || cat.includes(query);
        });

        if (matches.length === 0) {
          resultsContainer.innerHTML = `<p style="padding:16px;color:var(--color-text-muted);font-size:0.875rem;">No matching articles found for "<strong>${escapeHtml(query)}</strong>".</p>`;
          return;
        }

        resultsContainer.innerHTML = matches.slice(0, 8).map(item => `
          <div class="search-result-item">
            ${item.imageUrl ? `<div class="sri-thumb"><img src="${item.imageUrl}" alt="" loading="lazy"></div>` : ''}
            <div>
              <span class="sri-cat">${item.category || 'News'}</span>
              <h5 class="sri-title"><a href="article.html?id=${item.id}&title=${encodeURIComponent(item.title)}">${highlightMatch(item.title, query)}</a></h5>
              <div style="font-size:0.75rem;color:var(--color-text-muted);margin-top:2px;">${item.author ? `By ${item.author} · ` : ''}${item.date || '6 Nov 2026'}</div>
            </div>
          </div>
        `).join('');
      });
    }
  }

  function highlightMatch(text, query) {
    if (!text) return '';
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return escapeHtml(text);
    return escapeHtml(text.substring(0, idx)) +
      `<mark style="background:#ffea79;color:#000;">${escapeHtml(text.substring(idx, idx + query.length))}</mark>` +
      escapeHtml(text.substring(idx + query.length));
  }

  function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  // ==========================================
  // Client-Side Demo Authentication System
  // Web Crypto SHA-256 + LocalStorage Session
  // ==========================================
  function initAuthSystem() {
    const authModal = document.getElementById('authModal');
    const authTriggers = document.querySelectorAll('.trigger-auth-btn');
    const authClose = document.getElementById('authCloseBtn');

    const tabSignIn = document.getElementById('authTabSignIn');
    const tabRegister = document.getElementById('authTabRegister');
    const formSignIn = document.getElementById('signInForm');
    const formRegister = document.getElementById('registerForm');
    const formForgot = document.getElementById('forgotPasswordForm');
    const forgotLink = document.getElementById('forgotPasswordLink');
    const backToSignInLink = document.getElementById('backToSignInLink');

    const authAlert = document.getElementById('authAlert');
    const regPasswordInput = document.getElementById('regPassword');
    const regMeterFill = document.getElementById('regMeterFill');
    const regMeterText = document.getElementById('regMeterText');

    function openModal(defaultTab = 'signin') {
      if (!authModal) return;
      authModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      hideAlert();
      if (defaultTab === 'register') {
        showRegisterTab();
      } else {
        showSignInTab();
      }
    }

    function closeModal() {
      if (!authModal) return;
      authModal.classList.remove('open');
      document.body.style.overflow = '';
      hideAlert();
    }

    function showSignInTab() {
      if (tabSignIn) tabSignIn.classList.add('active');
      if (tabRegister) tabRegister.classList.remove('active');
      if (formSignIn) formSignIn.style.display = 'block';
      if (formRegister) formRegister.style.display = 'none';
      if (formForgot) formForgot.style.display = 'none';
      hideAlert();
    }

    function showRegisterTab() {
      if (tabRegister) tabRegister.classList.add('active');
      if (tabSignIn) tabSignIn.classList.remove('active');
      if (formRegister) formRegister.style.display = 'block';
      if (formSignIn) formSignIn.style.display = 'none';
      if (formForgot) formForgot.style.display = 'none';
      hideAlert();
    }

    function showForgotForm() {
      if (formForgot) formForgot.style.display = 'block';
      if (formSignIn) formSignIn.style.display = 'none';
      if (formRegister) formRegister.style.display = 'none';
      hideAlert();
    }

    function showAlert(msg, isSuccess = false) {
      if (!authAlert) return;
      authAlert.textContent = msg;
      authAlert.className = 'auth-alert ' + (isSuccess ? 'success' : 'error');
    }

    function hideAlert() {
      if (!authAlert) return;
      authAlert.style.display = 'none';
      authAlert.className = 'auth-alert';
    }

    authTriggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = btn.getAttribute('data-tab') || 'signin';
        openModal(tab);
      });
    });

    if (authClose) authClose.addEventListener('click', closeModal);
    if (authModal) {
      authModal.addEventListener('click', (e) => {
        if (e.target === authModal) closeModal();
      });
    }

    if (tabSignIn) tabSignIn.addEventListener('click', showSignInTab);
    if (tabRegister) tabRegister.addEventListener('click', showRegisterTab);
    if (forgotLink) forgotLink.addEventListener('click', showForgotForm);
    if (backToSignInLink) backToSignInLink.addEventListener('click', showSignInTab);

    // Password strength meter
    if (regPasswordInput && regMeterFill && regMeterText) {
      regPasswordInput.addEventListener('input', () => {
        const val = regPasswordInput.value;
        let score = 0;
        if (val.length >= 6) score++;
        if (/[A-Z]/.test(val)) score++;
        if (/[0-9]/.test(val)) score++;
        if (/[^A-Za-z0-9]/.test(val)) score++;

        regMeterFill.className = 'meter-fill';
        if (val.length === 0) {
          regMeterFill.style.width = '0%';
          regMeterText.textContent = 'Password strength';
        } else if (score <= 1) {
          regMeterFill.classList.add('weak');
          regMeterText.textContent = 'Weak password';
        } else if (score === 2 || score === 3) {
          regMeterFill.classList.add('medium');
          regMeterText.textContent = 'Medium password';
        } else {
          regMeterFill.classList.add('strong');
          regMeterText.textContent = 'Strong password';
        }
      });
    }

    // Load registered users from localStorage
    function getUsers() {
      return JSON.parse(localStorage.getItem('meridian_users') || '[]');
    }

    function saveUsers(users) {
      localStorage.setItem('meridian_users', JSON.stringify(users));
    }

    // Handle Register
    if (formRegister) {
      formRegister.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim().toLowerCase();
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;

        if (!name || !email || !password) {
          showAlert('Please complete all required fields.');
          return;
        }

        if (password.length < 6) {
          showAlert('Password must be at least 6 characters long.');
          return;
        }

        if (password !== confirmPassword) {
          showAlert('Passwords do not match. Please re-enter.');
          return;
        }

        const users = getUsers();
        if (users.some(u => u.email === email)) {
          showAlert('An account with this email address already exists.');
          return;
        }

        const passwordHash = await sha256(password);
        const newUser = {
          name,
          email,
          passwordHash,
          joined: new Date().toISOString()
        };

        users.push(newUser);
        saveUsers(users);

        // Auto-login
        localStorage.setItem('meridian_current_user', JSON.stringify({ name: newUser.name, email: newUser.email }));
        showAlert('Account created successfully! Logging you in...', true);

        setTimeout(() => {
          closeModal();
          updateHeaderAuthState();
        }, 1000);
      });
    }

    // Handle Sign In
    if (formSignIn) {
      formSignIn.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('signInEmail').value.trim().toLowerCase();
        const password = document.getElementById('signInPassword').value;

        if (!email || !password) {
          showAlert('Please enter both your email and password.');
          return;
        }

        const users = getUsers();
        const user = users.find(u => u.email === email);
        if (!user) {
          showAlert('Invalid email or password.');
          return;
        }

        const hash = await sha256(password);
        if (hash !== user.passwordHash) {
          showAlert('Invalid email or password.');
          return;
        }

        localStorage.setItem('meridian_current_user', JSON.stringify({ name: user.name, email: user.email }));
        showAlert(`Welcome back, ${user.name}!`, true);

        setTimeout(() => {
          closeModal();
          updateHeaderAuthState();
        }, 800);
      });
    }

    // Handle Forgot Password
    if (formForgot) {
      formForgot.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('forgotEmail').value.trim().toLowerCase();
        const newPassword = document.getElementById('forgotNewPassword').value;

        if (!email || !newPassword) {
          showAlert('Please enter both email and new password.');
          return;
        }

        if (newPassword.length < 6) {
          showAlert('New password must be at least 6 characters.');
          return;
        }

        const users = getUsers();
        const userIdx = users.findIndex(u => u.email === email);
        if (userIdx === -1) {
          showAlert('No account found with this email.');
          return;
        }

        users[userIdx].passwordHash = await sha256(newPassword);
        saveUsers(users);

        showAlert('Password successfully reset! You can now sign in.', true);
        setTimeout(() => {
          showSignInTab();
        }, 1500);
      });
    }

    // Initial auth UI update
    updateHeaderAuthState();
  }

  function updateHeaderAuthState() {
    const raw = localStorage.getItem('meridian_current_user');
    const authButtons = document.getElementById('headerAuthButtons');
    const userMenu = document.getElementById('headerUserMenu');
    const userNameSpan = document.getElementById('headerUserName');
    const userAvatarCircle = document.getElementById('headerUserAvatar');

    if (!authButtons || !userMenu) return;

    if (raw) {
      try {
        const user = JSON.parse(raw);
        authButtons.style.display = 'none';
        userMenu.style.display = 'block';
        if (userNameSpan) userNameSpan.textContent = user.name;
        if (userAvatarCircle) {
          const initials = user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
          userAvatarCircle.textContent = initials;
        }
      } catch (err) {
        localStorage.removeItem('meridian_current_user');
      }
    } else {
      authButtons.style.display = 'flex';
      userMenu.style.display = 'none';
    }

    // User dropdown toggle
    const badgeBtn = document.getElementById('userBadgeBtn');
    const dropdown = document.getElementById('userDropdown');
    const logoutBtn = document.getElementById('btnLogout');

    if (badgeBtn && dropdown) {
      badgeBtn.onclick = (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
      };
      document.addEventListener('click', () => {
        dropdown.classList.remove('show');
      });
    }

    if (logoutBtn) {
      logoutBtn.onclick = () => {
        localStorage.removeItem('meridian_current_user');
        updateHeaderAuthState();
      };
    }
  }

  // ==========================================
  // Video Modal Player
  // ==========================================
  function initVideoPlayer() {
    const videoModal = document.getElementById('videoModal');
    const videoClose = document.getElementById('videoCloseBtn');
    const videoIframe = document.getElementById('videoIframe');

    window.playVideoModal = function (videoUrl) {
      if (!videoModal || !videoIframe) return;
      videoIframe.src = videoUrl.includes('?') ? `${videoUrl}&autoplay=1` : `${videoUrl}?autoplay=1`;
      videoModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    };

    function closeVideo() {
      if (!videoModal || !videoIframe) return;
      videoModal.classList.remove('open');
      videoIframe.src = '';
      document.body.style.overflow = '';
    }

    if (videoClose) videoClose.addEventListener('click', closeVideo);
    if (videoModal) {
      videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) closeVideo();
      });
    }

    document.querySelectorAll('.video-card').forEach(card => {
      card.addEventListener('click', () => {
        const url = card.getAttribute('data-video-url') || 'https://www.youtube.com/embed/dQw4w9WgXcQ';
        window.playVideoModal(url);
      });
    });
  }

  // ==========================================
  // Audio Player Controller
  // ==========================================
  function initAudioPlayer() {
    let currentlyPlayingAudio = null;

    document.querySelectorAll('.btn-audio-play').forEach(btn => {
      btn.addEventListener('click', () => {
        const audioId = btn.getAttribute('data-audio-id');
        const audioElement = document.getElementById(audioId);
        if (!audioElement) return;

        if (currentlyPlayingAudio && currentlyPlayingAudio !== audioElement) {
          currentlyPlayingAudio.pause();
          document.querySelectorAll('.btn-audio-play').forEach(b => {
            b.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
          });
        }

        if (audioElement.paused) {
          audioElement.play();
          currentlyPlayingAudio = audioElement;
          btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
        } else {
          audioElement.pause();
          btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
        }

        audioElement.onended = () => {
          btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
        };
      });
    });
  }

  // ==========================================
  // Open-Meteo Live Weather Integration
  // Major global hubs + Search lookup
  // ==========================================
  const MAJOR_CITIES = [
    { city: "New Delhi", country: "India", lat: 28.6139, lon: 77.2090 },
    { city: "Mumbai", country: "India", lat: 19.0760, lon: 72.8777 },
    { city: "London", country: "United Kingdom", lat: 51.5074, lon: -0.1278 },
    { city: "New York", country: "United States", lat: 40.7128, lon: -74.0060 },
    { city: "Tokyo", country: "Japan", lat: 35.6762, lon: 139.6503 },
    { city: "Sydney", country: "Australia", lat: -33.8688, lon: 151.2093 },
    { city: "Dubai", country: "UAE", lat: 25.2048, lon: 55.2708 },
    { city: "Paris", country: "France", lat: 48.8566, lon: 2.3522 }
  ];

  function getWeatherDesc(code) {
    if (code === 0) return { desc: "Clear Sky", icon: "☀️" };
    if (code <= 3) return { desc: "Partly Cloudy", icon: "⛅" };
    if (code <= 48) return { desc: "Foggy", icon: "🌫️" };
    if (code <= 67) return { desc: "Rain Showers", icon: "🌧️" };
    if (code <= 77) return { desc: "Snow Flurries", icon: "❄️" };
    if (code <= 99) return { desc: "Thunderstorm", icon: "⛈️" };
    return { desc: "Fair", icon: "🌤️" };
  }

  async function fetchCityWeather(lat, lon) {
    try {
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`);
      if (!res.ok) throw new Error("Weather API status not ok");
      const data = await res.json();
      return {
        temp: Math.round(data.current.temperature_2m),
        humidity: Math.round(data.current.relative_humidity_2m),
        wind: Math.round(data.current.wind_speed_10m),
        code: data.current.weather_code
      };
    } catch (err) {
      // Fallback
      return { temp: 24, humidity: 55, wind: 12, code: 1 };
    }
  }

  async function initWeatherPage() {
    const grid = document.getElementById('weatherCardsGrid');
    if (!grid) return;

    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:30px;color:var(--color-text-muted);">Fetching live weather observations from meteorological sensors...</p>';

    const weatherCardsHtml = [];

    for (const city of MAJOR_CITIES) {
      const data = await fetchCityWeather(city.lat, city.lon);
      const info = getWeatherDesc(data.code);
      weatherCardsHtml.push(`
        <div class="weather-city-card">
          <h3 class="wc-city">${city.city}</h3>
          <div class="wc-country">${city.country}</div>
          <div class="wc-icon-wrap">${info.icon}</div>
          <div class="wc-temp">${data.temp}°C</div>
          <div class="wc-condition">${info.desc}</div>
          <div class="wc-details">
            <span>Wind: ${data.wind} km/h</span>
            <span>Humidity: ${data.humidity}%</span>
          </div>
        </div>
      `);
    }

    grid.innerHTML = weatherCardsHtml.join('');

    // Weather Search Form
    const searchForm = document.getElementById('weatherSearchForm');
    const searchInput = document.getElementById('weatherCityInput');
    const searchResultBox = document.getElementById('weatherSearchResults');

    if (searchForm && searchInput && searchResultBox) {
      searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const q = searchInput.value.trim();
        if (!q) return;

        searchResultBox.innerHTML = '<p style="text-align:center;color:var(--color-text-muted);">Searching coordinates for ' + escapeHtml(q) + '...</p>';

        try {
          const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=1&language=en&format=json`);
          const geoData = await geoRes.json();
          if (!geoData.results || geoData.results.length === 0) {
            searchResultBox.innerHTML = '<p style="text-align:center;color:var(--color-down);">No meteorological stations found for that city. Please try another location.</p>';
            return;
          }

          const loc = geoData.results[0];
          const wData = await fetchCityWeather(loc.latitude, loc.longitude);
          const info = getWeatherDesc(wData.code);

          searchResultBox.innerHTML = `
            <div class="weather-city-card" style="max-width:320px;margin:16px auto;border:2px solid var(--color-primary);">
              <h3 class="wc-city">${loc.name}</h3>
              <div class="wc-country">${loc.country || ''}</div>
              <div class="wc-icon-wrap">${info.icon}</div>
              <div class="wc-temp">${wData.temp}°C</div>
              <div class="wc-condition">${info.desc}</div>
              <div class="wc-details">
                <span>Wind: ${wData.wind} km/h</span>
                <span>Humidity: ${wData.humidity}%</span>
              </div>
            </div>
          `;
        } catch (err) {
          searchResultBox.innerHTML = '<p style="text-align:center;color:var(--color-down);">Could not retrieve live coordinates. Please try again.</p>';
        }
      });
    }
  }

  // Header quick weather widget
  async function initHeaderWeather() {
    const tempEl = document.getElementById('headerWeatherTemp');
    const cityEl = document.getElementById('headerWeatherCity');
    if (!tempEl || !cityEl) return;

    try {
      // Default to London or New Delhi
      const data = await fetchCityWeather(28.6139, 77.2090);
      const info = getWeatherDesc(data.code);
      tempEl.textContent = `${data.temp}°C ${info.icon}`;
      cityEl.textContent = 'New Delhi';
    } catch (err) {
      tempEl.textContent = '26°C ☀️';
    }
  }

  // ==========================================
  // Interactive Stock Market Chart (Chart.js)
  // ==========================================
  function initMarketChart() {
    const canvas = document.getElementById('marketChartCanvas');
    if (!canvas || typeof Chart === 'undefined') return;

    const datasets = {
      '1D': {
        labels: ['09:15', '10:30', '11:45', '13:00', '14:15', '15:30'],
        data: [83830, 83990, 84120, 84050, 84260, 84312]
      },
      '1W': {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        data: [83200, 83450, 83900, 84100, 84312]
      },
      '1M': {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        data: [81800, 82600, 83500, 84312]
      },
      '1Y': {
        labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
        data: [72500, 75200, 77800, 80400, 82900, 84312]
      }
    };

    let activeTf = '1D';

    const chartInstance = new Chart(canvas, {
      type: 'line',
      data: {
        labels: datasets[activeTf].labels,
        datasets: [{
          label: 'BSE Sensex Index',
          data: datasets[activeTf].data,
          borderColor: '#00873c',
          backgroundColor: 'rgba(0, 135, 60, 0.08)',
          fill: true,
          tension: 0.35,
          borderWidth: 2.5,
          pointRadius: 3,
          pointBackgroundColor: '#00873c'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
              label: (ctx) => `Level: ${ctx.parsed.y.toLocaleString()} pts`
            }
          }
        },
        scales: {
          x: { grid: { display: false } },
          y: {
            grid: { color: 'rgba(0,0,0,0.06)' },
            ticks: {
              callback: (v) => v.toLocaleString()
            }
          }
        }
      }
    });

    document.querySelectorAll('.timeframe-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.timeframe-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tf = btn.getAttribute('data-timeframe');
        if (datasets[tf]) {
          chartInstance.data.labels = datasets[tf].labels;
          chartInstance.data.datasets[0].data = datasets[tf].data;
          chartInstance.update();
        }
      });
    });
  }

  // ==========================================
  // Newsletter Form
  // ==========================================
  function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    const msg = document.getElementById('newsletterMsg');
    if (!form || !msg) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      if (!input || !input.value.includes('@')) return;

      msg.textContent = `Thank you for subscribing! Daily briefings will be sent to ${input.value}.`;
      msg.style.display = 'block';
      input.value = '';
    });
  }

  // ==========================================
  // Language Dropdown in Footer
  // ==========================================
  function initFooterLanguageDropdown() {
    const langBtn = document.getElementById('footerLangBtn');
    const langMenu = document.getElementById('footerLangMenu');
    if (!langBtn || !langMenu) return;

    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      langMenu.classList.remove('show');
    });

    langMenu.querySelectorAll('.footer-lang-item').forEach(item => {
      item.addEventListener('click', () => {
        langBtn.querySelector('span').textContent = item.textContent;
        langMenu.classList.remove('show');
      });
    });
  }

  // ==========================================
  // Article Dynamic Page Hydration (article.html)
  // ==========================================
  function initArticlePage() {
    const readerTitle = document.getElementById('articleMainTitle');
    if (!readerTitle || typeof MeridianData === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    let article = null;
    if (typeof findArticleById === 'function') {
      article = findArticleById(articleId);
    }

    // Default to lead story if not found
    if (!article) {
      article = MeridianData.leadStory;
    }

    document.title = `${article.title} - The Meridian Post`;

    const catEl = document.getElementById('articleMetaCat');
    const standfirstEl = document.getElementById('articleStandfirst');
    const authorEl = document.getElementById('articleAuthorName');
    const dateEl = document.getElementById('articlePubDate');
    const readTimeEl = document.getElementById('articleReadTime');
    const heroImgEl = document.getElementById('articleHeroImg');
    const heroCaptionEl = document.getElementById('articleHeroCaption');
    const bodyEl = document.getElementById('articleBodyText');
    const timelineBox = document.getElementById('articleTimelineBox');
    const timelineList = document.getElementById('articleTimelineList');
    const relatedGrid = document.getElementById('articleRelatedGrid');

    if (catEl) catEl.textContent = article.category || 'News';
    if (readerTitle) readerTitle.textContent = article.title;
    if (standfirstEl) standfirstEl.textContent = article.summary || '';
    if (authorEl) authorEl.textContent = `By ${article.author || 'The Meridian Post Editorial Board'}`;
    if (dateEl) dateEl.textContent = article.date || '6 November 2026';
    if (readTimeEl) readTimeEl.textContent = article.readTime || '4 min read';

    if (heroImgEl) {
      heroImgEl.src = article.imageUrl || 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80';
      heroImgEl.alt = article.title;
    }

    if (heroCaptionEl) {
      heroCaptionEl.textContent = article.imageCaption || `Photograph from the scene: ${article.title}`;
    }

    if (bodyEl) {
      if (article.content && Array.isArray(article.content)) {
        bodyEl.innerHTML = article.content.map(p => `<p>${p}</p>`).join('');
      } else {
        bodyEl.innerHTML = `
          <p>${article.summary}</p>
          <p>Correspondents from The Meridian Post verified field conditions in real-time, reviewing corroborated telemetry, administrative white papers, and independent sensor networks deployed across the sector.</p>
          <p>"The scale of transition represents a fundamental structural recalibration," confirmed chief analysts reviewing early-quarter production indexes. Cross-sector stakeholders project continuous operational refinement heading into early 2027.</p>
          <p>International observers underscore that sustained policy synchronization and reliable infrastructure investment remain paramount to consolidating progress over the coming five-year cycle.</p>
        `;
      }
    }

    // Story Timeline / Earlier Coverage
    if (timelineBox && timelineList) {
      const timelineItems = article.timeline || [
        { date: "August 2025", title: "Preliminary Accord Drafted", text: "Working groups convened in Geneva to harmonize regulatory frameworks." },
        { date: "March 2026", title: "Interim Operational Review", text: "Pilot infrastructure passed rigorous safety stress tests." },
        { date: "6 November 2026", title: "Full Ratification & Deployment", text: "Formal international certification published across participating member nations." }
      ];

      timelineList.innerHTML = timelineItems.map(item => `
        <li class="timeline-item">
          <div class="timeline-date">${item.date}</div>
          <div class="timeline-headline">${item.title}</div>
          <div class="timeline-desc">${item.text}</div>
        </li>
      `).join('');
    }

    // Related articles
    if (relatedGrid) {
      const candidates = MeridianData.secondaryLeadStories || [];
      relatedGrid.innerHTML = candidates.slice(0, 3).map(item => `
        <article class="catalog-card">
          <div class="catalog-thumb">
            <img src="${item.imageUrl}" alt="" loading="lazy">
          </div>
          <div class="catalog-meta">${item.category}</div>
          <h4 class="catalog-title"><a href="article.html?id=${item.id}">${item.title}</a></h4>
          <p class="catalog-summary">${item.summary}</p>
        </article>
      `).join('');
    }
  }

  // ==========================================
  // Master Initialization
  // ==========================================
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initScrollBehaviors();
    initMobileDrawer();
    initBreakingTicker();
    initWorldTodayTabs();
    initSearchModal();
    initAuthSystem();
    initVideoPlayer();
    initAudioPlayer();
    initHeaderWeather();
    initWeatherPage();
    initMarketChart();
    initNewsletter();
    initFooterLanguageDropdown();
    initArticlePage();
  });

})();
