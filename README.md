# The Meridian Post 🗞️
> **Independent Global Journalism · Established 1894**  
> An authoritative, multi-section international news platform built with pure semantic HTML5, CSS3, and vanilla JavaScript. Designed in the classic editorial broadsheet tradition with zero build steps, complete mobile responsiveness, dark mode, and seamless GitHub Pages hosting compatibility.

---

## 🌐 Live Demonstration
- **Live URL**: `https://<your-github-username>.github.io/news-website/`
- **Current Editorial Edition**: Friday, 6 November 2026 (Global Edition)

---

## 🏛️ Project Overview
**The Meridian Post** replicates the authoritative editorial layout, sharp typography, and hairline grid discipline of world-class news organisations (such as BBC News and The Financial Times), while establishing its own distinguished identity:
- **Editorial Brand**: The Meridian Post (`[M]` emblem badge in deep editorial crimson `#b80000`).
- **Typography**: Paired editorial typefaces loaded via Google Fonts — `Merriweather` (authoritative serif for display headlines) and `Source Sans 3` (clean, highly readable grotesque sans-serif for body prose).
- **Zero-Dependency Core**: 100% vanilla web stack without node build requirements, bundlers, or frameworks. Works straight out of the box on static web servers and GitHub Pages.

---

## 🌟 Key Features

### 1. Persistent Sticky Navigation & Breaking Ticker
- **Sticky Header**: Automatically compresses smoothly on downward scroll with elevation shadows.
- **Breaking News Ticker**: Smoothly cycles real breaking news bulletins with manual pause and step controls.
- **Responsive Mobile Drawer**: Accessible hamburger menu with slide-out sidebar for handheld devices.
- **Theme Switcher**: Dark Mode and Light Mode support with persistent state stored in `localStorage`.
- **Keyboard Search**: Instant modal search overlay accessible via `Ctrl+K` or `Cmd+K`, filtering articles across titles, summaries, categories, and bylines with highlighted keywords.

### 2. Multi-Section News Coverage
Each editorial department features a hero lead story, verified 8–12 article catalog, and dedicated analytical sidebar:
- **Home (`index.html`)**: Big lead story, secondary grid, "Must Watch" video cards, "World Today" regional tabs (India, USA, UK, Australia, China, Middle East, Russia/Ukraine, Africa), Stock Market Analysis, Arts & Literature feature block, Most Read (1 to 10), and Newsletter signup.
- **News (`news.html`)**: World politics, diplomacy, energy transitions, and frontier science.
- **Sport (`sport.html`)**: Premier League, ICC Champions Trophy, Formula 1, tennis grand slams, and live fixtures sidebar.
- **Business (`business.html`)**: Global macroeconomic policy, central bank pivots, sovereign semiconductor investment, and market indices.
- **Health (`health.html`)**: Biomedical breakthroughs, malaria vaccine distribution, Alzheimer's blood diagnostics, and circadian neuroscience.
- **Culture (`culture.html`)**: Quiet urbanism, the analog craft revival, cinema on 35mm, and sustainable luxury.
- **Arts & Literature (`arts.html`)**: Tadao Ando's architecture, Booker Prize shortlists, Venice Biennale textile pavilions, and art conservation.
- **Travel (`travel.html`)**: High-speed trans-continental rail, carbon-negative Himalayan trails, and Icelandic volcanic coastlines.
- **Audio (`audio.html`)**: Working HTML5 audio podcast players with play/pause state controls and episode waveforms.
- **Video (`video.html`)**: Grid of documentary dispatches with runtime badges and responsive video modal playback.
- **Live (`live.html`)**: Live-blog format with timestamped bulletins, pulsing red "LIVE" badge, and key developments summary.
- **Weather (`weather.html`)**: Live meteorological sensor observations for 8 major global metropolises via the free **Open-Meteo API** (zero API key required) plus an interactive real-time city weather search.
- **Stocks (`stocks.html`)**: Detailed market ticker for BSE Sensex, Nifty 50, S&P 500, NASDAQ, Dow Jones, Gold, Brent Crude, and USD/INR, interactive **Chart.js** historical benchmark chart (1D, 1W, 1M, 1Y), gainer tables, and trading feed.
- **Article Reader (`article.html`)**: Dynamic article view (`article.html?id=...`) with hero imagery, caption, standfirst, byline, date, reading time, full formatted paragraphs, **Earlier Coverage / Related Stories Timeline**, share buttons, and related stories.

---

## 🔐 Client-Side Demo Authentication System
The website includes a complete, functioning front-end membership system:
1. **Create Account (Register)**:
   - Full name, email, password, and confirm password.
   - Real-time password strength meter (calculating length, mixed casing, numbers, and symbols).
   - Validates matching passwords and enforces minimum length requirements.
   - Prevents duplicate email registrations.
2. **Cryptographic Security**:
   - Uses the browser's native **Web Crypto API** (`crypto.subtle.digest('SHA-256', ...)`) to generate secure SHA-256 hexadecimal hashes before storing accounts in `localStorage`.
   - Passwords are never stored in plain text.
3. **Sign In & Persistent Session**:
   - Matches entered credentials against the stored SHA-256 hash.
   - Replaces header "Sign In" and "Register" buttons with a personalized subscriber avatar badge and dropdown menu (Profile, Reading List, Sign Out).
4. **Forgot Password Flow**:
   - Verifies the registered email address and allows setting a new password locally.

> ℹ️ **Note on Production Upgrade (Firebase Authentication)**  
> This authentication system is designed as a front-end client-side demonstration using Web Crypto SHA-256 and `localStorage`. For production grade deployment with multi-device synchronization and backend verification:
> 1. Sign up for a free project at [Firebase Console](https://console.firebase.google.com).
> 2. Enable **Authentication > Sign-in method > Email/Password** (or Google Sign-In).
> 3. Add the Firebase SDK via CDN (`https://www.gstatic.com/firebasejs/10.x.x/firebase-auth.js`).
> 4. Replace the `localStorage` helpers in `script.js` with `signInWithEmailAndPassword(auth, email, password)` and `createUserWithEmailAndPassword(auth, email, password)`.

---

## 📑 File Structure
```text
news-website/
├── index.html         # Homepage (Lead story, Must Watch, World Today, Stocks, Most Read)
├── news.html          # World & National News section
├── sport.html         # Sports news, match reports, and live fixtures
├── business.html      # Global markets, enterprise, and fintech
├── health.html        # Medical research, public health, and wellness
├── culture.html       # Society, analog crafts, and cultural essays
├── arts.html          # Architecture, literature, and visual arts
├── travel.html        # High-speed rail and global destination guides
├── audio.html         # Podcast hub with functioning HTML5 audio players
├── video.html         # Video dispatches grid with modal video player
├── live.html          # Real-time live blog with timestamped updates & LIVE badge
├── weather.html       # Open-Meteo live weather API & city search
├── stocks.html        # Financial terminal, market tables & Chart.js chart
├── article.html       # Dynamic reader with "Earlier Coverage" timeline
├── style.css          # Master responsive stylesheet & CSS custom properties
├── script.js          # Core JavaScript: auth, theme, search, ticker, weather, chart
├── data.js            # Structured master editorial news database
├── data.json          # Clean JSON export of the news catalog
├── .gitignore         # Clean repository ignore file
├── README.md          # Project documentation and student presentation guide
└── assets/            # Vector branding and site icons
    ├── favicon.svg    # Red [M] editorial favicon
    └── logo.svg       # Brand vector emblem & wordmark
```

---

## 🚀 How to Run Locally

Because the project uses plain vanilla HTML, CSS, and JavaScript, you can run it without installing Node.js or any build tools:

### Method 1: Direct File Opening
Double-click `index.html` in your file explorer to open it directly in any modern browser (Chrome, Edge, Firefox, Safari).

### Method 2: Local Web Server (Recommended)
If you have Python installed:
```bash
# In the project directory:
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## ✏️ How to Edit or Add News Stories
All editorial stories, ticker headlines, and market numbers are stored centrally in `data.js` (and mirrored in `data.json`).
1. Open `data.js` in any text editor (VS Code, Notepad, etc.).
2. To add a breaking news alert, append a string to the `MeridianData.breakingNews` array.
3. To edit or add an article, modify or add an object in `MeridianData.sections[category]`. Every article supports:
   - `id`: unique identifier (e.g. `news-clean-energy`)
   - `title`: headline
   - `summary`: standfirst summary
   - `category`: topic label
   - `author`: journalist byline
   - `date`: publication date
   - `imageUrl`: direct photo URL (Unsplash/Pexels)
   - `readTime`: estimated reading duration

---

## 📤 Git & GitHub Pages Deployment Guide

### Step 1: Initialise Local Repository
```bash
git init
git add .
git commit -m "Initial commit: authoritative editorial broadsheet portal"
```

### Step 2: Create a Public GitHub Repository
1. Log into your account at [GitHub](https://github.com).
2. Click the **+** (plus) icon in the top right corner and select **New repository**.
3. Name the repository: `news-website`.
4. Ensure the repository is set to **Public**.
5. Leave "Add a README file" **unchecked** (since we already have one).
6. Click **Create repository**.

### Step 3: Link and Push to GitHub
Copy the commands shown on GitHub under "…or push an existing repository from the command line":
```bash
git branch -M main
git remote add origin https://github.com/<your-username>/news-website.git
git push -u origin main
```
*(GitHub will ask you to sign in or authorize Git credential manager in your browser — click **Authorize GitCredentialManager**).*

### Step 4: Enable GitHub Pages (Free Hosting)
1. On your GitHub repository page, click the **Settings** tab (gear icon at the top).
2. In the left navigation menu, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment > Branch**:
   - Select `main` from the dropdown.
   - Leave the folder as `/ (root)`.
   - Click **Save**.
4. Refresh the page after 1–2 minutes. A green banner will appear stating:
   > **Your site is live at `https://<your-username>.github.io/news-website/`**

---

## 🎓 5-Line Presentation Summary for Your Professor
> 1. *"The Meridian Post is an authoritative, multi-section global journalism platform built entirely with pure semantic HTML5, CSS3, and modern vanilla JavaScript with zero build steps or external bundlers."*  
> 2. *"It features a high-density, editorial broadsheet layout with 13 distinct sections, an instant live search modal, a breaking news ticker, and responsive mobile drawers."*  
> 3. *"Dynamic integrations include real-time global weather from the Open-Meteo API, interactive financial charts powered by Chart.js, working HTML5 podcast audio streams, and video dispatch modals."*  
> 4. *"The platform incorporates a client-side authentication system utilizing browser-native Web Crypto SHA-256 cryptographic hashing and local session state with full form validation and password strength analysis."*  
> 5. *"The entire repository is engineered with relative asset architecture, fully hosted and live for free on GitHub Pages."*

---

## 👤 Credits & Contact
- **Project Lead**: Krish Parikh
- **Instagram**: [@krishparikh25](https://instagram.com/krishparikh25)
- **WhatsApp**: [+91 93137 75724](https://wa.me/919313775724)
- **Copyright**: © 2026 The Meridian Post. All rights reserved.
