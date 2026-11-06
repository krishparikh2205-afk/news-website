// The Meridian Post - Master Editorial News Database
// Date: 6 November 2026

const MeridianData = {
  breakingNews: [
    "GLOBAL CLIMATE SUMMIT: Over 80 nations ratify historic clean energy grid integration pact in Geneva",
    "INDIA TECH: Dholera Semiconductor Fab rolls out first commercial 28nm silicon wafers ahead of schedule",
    "SPACE: Artemis III lunar science module transmits first high-resolution thermal maps of Shackleton Crater",
    "FINANCE: Asian markets rally as central banks signal synchronized easing following cooling inflation data",
    "GLOBAL HEALTH: WHO approves next-generation dual-antigen malaria vaccine for nationwide deployment across 14 nations"
  ],

  leadStory: {
    id: "lead-2026-clean-energy-accord",
    title: "Global Clean Energy Milestone: Renewables Overtake Coal in Major Industrial Grids",
    kicker: "ENERGY TRANSITION",
    summary: "In a landmark turning point for global decarbonisation, solar and wind power have officially surpassed coal output across three continental grids this quarter, propelled by rapid storage deployment and high-capacity interconnectors.",
    category: "News",
    author: "Elena Rostova",
    role: "Global Energy & Climate Editor",
    date: "6 November 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80",
    imageCaption: "Large-scale offshore wind array and solar battery complex operational off the North Sea coastline.",
    content: [
      "GENEVA — International energy monitors confirmed on Friday that renewable electricity generation has permanently overtaken coal-fired power across three of the world's largest industrial regions, marking an unprecedented milestone in the global transition away from fossil fuels.",
      "According to consolidated grid data presented at the United Nations Energy Directorate in Geneva, solar photovoltaic systems and offshore wind installations generated 41.8% of combined electricity across Western Europe, the US Western Interconnection, and India's southern industrial belt during the previous quarter, exceeding coal's 34.2% share for the first time in modern industrial history.",
      "Analysts credit two primary accelerators: the plummeting cost of sodium-ion grid battery installations and large-scale cross-border high-voltage direct current (HVDC) transmission lines that allow surplus solar power generated in arid zones to supply metropolitan centres during peak evening demand.",
      "\"What was deemed an aspirational goal five years ago has become an irreversible technological and economic reality,\" said Dr. Tariq Al-Mansoor, chief analyst at the International Clean Power Council. \"Industrial users are not choosing renewables out of moral altruism; they are choosing them because unsubsidised levelised costs are now 30% below thermal baseload.\"",
      "The transition has not been without operational hurdles. Grid operators in Germany, the UK, and California noted that fast-ramping gas peaker plants and grid-forming inverters remain indispensable to maintain frequency stability during seasonal lulls in wind output. Nonetheless, capital expenditures in green hydrogen electrolysers and grid storage grew by 47% year-on-year."
    ],
    timeline: [
      { date: "May 2025", title: "Battery Storage Parity", text: "Utility-scale battery storage costs drop below $65/kWh, unlocking round-the-clock solar dispatch." },
      { date: "January 2026", title: "HVDC Link Activation", text: "New intercontinental transmission cables achieve record low transmission loss across maritime corridors." },
      { date: "September 2026", title: "Q3 Grid Assessment", text: "Official generation figures confirm renewable output eclipsed thermal coal across 18 OECD economies." },
      { date: "6 November 2026", title: "Geneva Ratification", text: "International Energy Forum drafts global standards for synchronized microgrids and clean peak power." }
    ],
    relatedIds: ["news-india-semiconductor", "biz-market-rally", "live-climate-talks"]
  },

  secondaryLeadStories: [
    {
      id: "sec-india-semiconductor",
      title: "India's Silicon Corridor: Dholera Fab Begins Commercial Silicon Wafer Shipments",
      kicker: "TECHNOLOGY",
      summary: "The $10bn facility in Gujarat delivers its initial batch of microcontrollers, strengthening supply chain resilience for automotive and industrial electronics.",
      category: "Business",
      author: "Aarav Sharma",
      date: "6 November 2026",
      readTime: "4 min read",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sec-artemis-lunar-water",
      title: "Lunar Discovery: Artemis Subsurface Probe Detects Stable Ice Deposits Near South Pole",
      kicker: "SPACE EXPLORATION",
      summary: "Spectrometer scans from the joint NASA-ESA rover confirm hydrated mineral veins inside permanently shadowed craters, paving the way for sustained lunar habitats.",
      category: "News",
      author: "Dr. Sarah Jenkins",
      date: "6 November 2026",
      readTime: "4 min read",
      imageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sec-global-ai-treaty",
      title: "Geneva Summit: 42 Delegations Sign Enforceable AI Safety & Sovereign Compute Protocol",
      kicker: "WORLD DIPLOMACY",
      summary: "The treaty mandates standardized watermarking for synthetic media and independent red-team audits for frontier multi-modal reasoning models.",
      category: "News",
      author: "Marcus Vance",
      date: "6 November 2026",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sec-premier-league-clash",
      title: "Title Race Intensifies: Arsenal & Manchester City Prepare for Defining Emirates Showdown",
      kicker: "FOOTBALL",
      summary: "With just two points separating the top three clubs, tactical adjustments and injury recoveries take center stage ahead of Saturday's fixture.",
      category: "Sport",
      author: "Oliver Hughes",
      date: "6 November 2026",
      readTime: "3 min read",
      imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80"
    }
  ],

  mustWatchVideos: [
    {
      id: "vid-1",
      title: "Inside the Dholera Megafab: How Microchips Are Built from Raw Quartz",
      category: "Tech Documentary",
      duration: "08:45",
      views: "245K views",
      thumb: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "vid-2",
      title: "Shackleton Crater Explored: 4K Panoramic Camera Sends First Visuals",
      category: "Space & Science",
      duration: "05:12",
      views: "580K views",
      thumb: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "vid-3",
      title: "Global Central Banks Pivot: Why Lower Interest Rates Are Re-energising Venture Capital",
      category: "Business Analysis",
      duration: "11:20",
      views: "180K views",
      thumb: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "vid-4",
      title: "High-Speed Rail Revolution: Testing the 400km/h Prototype on Japan's Chuo Line",
      category: "Transport & Engineering",
      duration: "06:38",
      views: "310K views",
      thumb: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ],

  worldToday: {
    "India": [
      { id: "wt-in-1", title: "Reserve Bank Maintains Growth Forecast at 7.2% as Festive Demand Surges", time: "2 hours ago", author: "Pooja Singhal" },
      { id: "wt-in-2", title: "Unified Payments Interface Crosses 18 Billion Monthly Transactions Globally", time: "4 hours ago", author: "Rohan Verma" },
      { id: "wt-in-3", title: "High-Speed Rail Project: Mumbai-Ahmedabad Viaduct Completed in Navsari Section", time: "6 hours ago", author: "Kunal Joshi" },
      { id: "wt-in-4", title: "ISRO Prepares Shukrayaan Venus Mission Payload Integration for Late 2027 Window", time: "8 hours ago", author: "Dr. Ananya Nair" }
    ],
    "USA": [
      { id: "wt-us-1", title: "Federal Reserve Signals Gradual Rate Cuts as Core PCE Moderates to 2.3%", time: "1 hour ago", author: "David Miller" },
      { id: "wt-us-2", title: "Bipartisan Infrastructure Bill Delivers 500,000 EV Fast-Chargers Nationwide", time: "3 hours ago", author: "Rachel Adams" },
      { id: "wt-us-3", title: "California High-Speed Rail Begins Dynamic Electrification Testing in Central Valley", time: "5 hours ago", author: "Brian Ortiz" },
      { id: "wt-us-4", title: "Tech Giants Commit $60B to On-Premise Clean Geothermal and Nuclear Power for Data Hubs", time: "7 hours ago", author: "Jennifer Vance" }
    ],
    "UK": [
      { id: "wt-uk-1", title: "Bank of England Lowers Base Rate by 25bps to Stimulate Housing Market Recovery", time: "2 hours ago", author: "Simon Clark" },
      { id: "wt-uk-2", title: "North Sea Grid Interconnector with Norway Hits Record Export Volume", time: "4 hours ago", author: "Fiona MacLeod" },
      { id: "wt-uk-3", title: "London Tech Week Announces Sovereign Quantum Computing Testbed in Cambridge", time: "6 hours ago", author: "Gareth Evans" },
      { id: "wt-uk-4", title: "National Health Service Rolls Out AI Diagnostic Assistance Across 120 Hospitals", time: "9 hours ago", author: "Dr. Claire Wright" }
    ],
    "Australia": [
      { id: "wt-au-1", title: "Renewables Supply 85% of National Electricity Market During Peak Daylight Hours", time: "3 hours ago", author: "Liam Campbell" },
      { id: "wt-au-2", title: "Great Barrier Reef Coral Spawning Survey Reveals Robust Larval Settlement", time: "5 hours ago", author: "Zoe Taylor" },
      { id: "wt-au-3", title: "Critical Minerals Reserve: Canberra Inks Export Compact with Japan and Korea", time: "7 hours ago", author: "Mitchell Barnes" },
      { id: "wt-au-4", title: "Perth-to-Singapore Subsea Fibre Cable Upgrade Cuts Latency by 18 Milliseconds", time: "10 hours ago", author: "Hannah Davies" }
    ],
    "China": [
      { id: "wt-cn-1", title: "State Council Expands Targeted Liquidity for Advanced Green Manufacturing Firms", time: "2 hours ago", author: "Li Wei" },
      { id: "wt-cn-2", title: "Tiangong Space Station Welcomes New Crew for Extended Microgravity Metallurgy Experiments", time: "5 hours ago", author: "Chen Zhang" },
      { id: "wt-cn-3", title: "Domestic Commercial Aviation C919 Fleet Completes 100,000 Passenger Flight Hours", time: "7 hours ago", author: "Zhao Feng" },
      { id: "wt-cn-4", title: "Yangtze River Clean Corridor Project Restores Over 3,000 Hectares of Wetland Ecosystems", time: "9 hours ago", author: "Lin Mei" }
    ],
    "Middle East": [
      { id: "wt-me-1", title: "Riyadh & Abu Dhabi Sovereign Funds Announce $25B Green Hydrogen Pipeline", time: "1 hour ago", author: "Farah Al-Hassan" },
      { id: "wt-me-2", title: "Gulf Railway Network Tests Cross-Border Freight Linkage Between Oman and UAE", time: "4 hours ago", author: "Kareem Nassar" },
      { id: "wt-me-3", title: "Regional Water Security Initiative Completes Solar Desalination Plant in Jordan", time: "6 hours ago", author: "Youssef Qasim" },
      { id: "wt-me-4", title: "Doha International Book Fair Opens with Record Participation from 68 Countries", time: "8 hours ago", author: "Nour Mansour" }
    ],
    "Russia/Ukraine": [
      { id: "wt-ru-1", title: "Black Sea Commercial Grain Corridor Transits 1.8 Million Tonnes Under UN Monitoring", time: "2 hours ago", author: "Serhiy Kovalenko" },
      { id: "wt-ru-2", title: "IAEA Confirms Stable Perimeter and Offsite Power Integrity at Zaporizhzhia Plant", time: "4 hours ago", author: "Mikhail Petrov" },
      { id: "wt-ru-3", title: "European Reconstruction Bank Commits Further €4.5B to Decentralised Energy Grids", time: "6 hours ago", author: "Kateryna Boyko" },
      { id: "wt-ru-4", title: "Diplomatic Envoys Convene in Istanbul for Maritime Trade Deconfliction Working Group", time: "9 hours ago", author: "Dmitri Orlov" }
    ],
    "Africa": [
      { id: "wt-af-1", title: "African Continental Free Trade Area Reports 28% Increase in Intra-African Manufacturing Shipments", time: "2 hours ago", author: "Amina Diallo" },
      { id: "wt-af-2", title: "Kenya Connects Additional 400MW Geothermal Project in the Great Rift Valley", time: "4 hours ago", author: "Moses Mwangi" },
      { id: "wt-af-3", title: "Nigeria Launches Sovereign Digital Identity Overhaul to Streamline Social Payments", time: "6 hours ago", author: "Chinedu Okafor" },
      { id: "wt-af-4", title: "Morocco Expands Ouarzazate Solar Complex with Concentrated Solar Molten Salt Storage", time: "8 hours ago", author: "Hassan Berrada" }
    ]
  },

  marketData: [
    { name: "Sensex", symbol: "BSE SENSEX", value: "84,312.40", change: "+482.15", pct: "+0.58%", isUp: true },
    { name: "Nifty 50", symbol: "NSE NIFTY", value: "25,720.90", change: "+148.60", pct: "+0.58%", isUp: true },
    { name: "Dow Jones", symbol: "DJIA", value: "43,890.12", change: "+210.40", pct: "+0.48%", isUp: true },
    { name: "NASDAQ", symbol: "COMP", value: "19,245.80", change: "+182.20", pct: "+0.96%", isUp: true },
    { name: "S&P 500", symbol: "SPX", value: "5,892.40", change: "+34.10", pct: "+0.58%", isUp: true },
    { name: "Gold", symbol: "XAU/USD", value: "$2,748.20", change: "-8.40", pct: "-0.31%", isUp: false },
    { name: "Crude Oil", symbol: "BRENT", value: "$74.15", change: "-0.85", pct: "-1.13%", isUp: false },
    { name: "USD/INR", symbol: "USDINR", value: "83.92", change: "-0.08", pct: "-0.10%", isUp: true }
  ],

  marketArticles: [
    {
      id: "mkt-1",
      title: "Tech Valuations Rebound as Sovereign AI Spending Reaches $120B Annually",
      author: "Catherine Vance",
      date: "6 November 2026",
      summary: "Institutional inflows pivot toward enterprise data orchestration and energy-efficient neural accelerators as corporate adoption accelerates."
    },
    {
      id: "mkt-2",
      title: "Commodities Roundup: Copper Surges to 18-Month High on EV Grid Upgrades",
      author: "Rajesh Kothari",
      date: "6 November 2026",
      summary: "Smelter bottlenecks in Latin America and unprecedented demand for grid transmission cables tighten physical supply."
    },
    {
      id: "mkt-3",
      title: "Bond Yields Moderate Across US & European Markets Following Core Inflation Easing",
      author: "Julian Sterling",
      date: "6 November 2026",
      summary: "Ten-year Treasury notes settle near 3.92% as fixed-income traders price in two quarter-point rate reductions by mid-2027."
    }
  ],

  artsLiterature: [
    {
      id: "arts-1",
      title: "The Architecture of Light: Tadao Ando's New Pavilion Opens in Kyoto",
      category: "Architecture",
      author: "Kenji Sato",
      summary: "Concrete, water, and cedar converge in a contemplative public sanctuary celebrating natural cycles and quietude.",
      imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "arts-2",
      title: "Booker Prize 2026 Shortlist: A Masterclass in Multi-Generational Storytelling",
      category: "Literature",
      author: "Beatrice Hall",
      summary: "Six diverse novels explore migration, generational memory, and the enduring human bond across changing landscapes.",
      imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "arts-3",
      title: "Venice Biennale 2026: Indigenous Textile Traditions Take Center Stage",
      category: "Visual Arts",
      author: "Lucia Moretti",
      summary: "Weavers from the Andes, the Nile delta, and Rajasthan bridge centuries of handloom artistry with contemporary sculpture.",
      imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=700&q=80"
    }
  ],

  mostRead: [
    { id: "mr-1", rank: 1, title: "Global Clean Energy Milestone: Renewables Overtake Coal in Major Grids", category: "Energy", reads: "840K" },
    { id: "mr-2", rank: 2, title: "India's Dholera Semiconductor Fab Rolls Out First Commercial Silicon Wafers", category: "Technology", reads: "720K" },
    { id: "mr-3", rank: 3, title: "Artemis III Probe Confirms Extensive Subsurface Ice Deposits on Lunar South Pole", category: "Science", reads: "680K" },
    { id: "mr-4", rank: 4, title: "Geneva AI Protocol: 42 Delegations Agree on Sovereign Compute Standards", category: "World", reads: "590K" },
    { id: "mr-5", rank: 5, title: "WHO Clears Next-Gen Malaria Vaccine with 82% Efficacy in Field Trials", category: "Health", reads: "510K" },
    { id: "mr-6", rank: 6, title: "Sensex Jumps 480 Points as Central Banks Signal Coordinated Easing", category: "Business", reads: "470K" },
    { id: "mr-7", rank: 7, title: "Booker Prize 2026: Why This Year's Shortlist Represents a Fiction Renaissance", category: "Culture", reads: "420K" },
    { id: "mr-8", rank: 8, title: "High-Speed Rail: Madrid-to-Paris Direct Link Cuts Travel Time to Under 5 Hours", category: "Travel", reads: "390K" },
    { id: "mr-9", rank: 9, title: "Champions Trophy: Team India Announces 15-Man Squad with Focus on Pace Depth", category: "Sport", reads: "380K" },
    { id: "mr-10", rank: 10, title: "The Deep Sleep Revolution: Why Neuroscience Is Rethinking Cognitive Longevity", category: "Health", reads: "350K" }
  ],

  podcasts: [
    {
      id: "pod-1",
      title: "The Global Briefing: How Clean Grids Are Reshaping Geopolitics",
      host: "Elena Rostova & Marcus Vance",
      duration: "28:14",
      date: "6 Nov 2026",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      cover: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80",
      description: "A comprehensive deep dive into how intercontinental power cables and battery chemistry are shifting the global trade map."
    },
    {
      id: "pod-2",
      title: "The Tech Frontier: Inside India's High-Tech Semiconductor Ambitions",
      host: "Aarav Sharma",
      duration: "34:50",
      date: "5 Nov 2026",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      cover: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      description: "We report from the Dholera Special Investment Region on how Gujarat is engineering a full chip ecosystem."
    },
    {
      id: "pod-3",
      title: "Market Compass: Inflation Trajectories and 2027 Interest Rate Projections",
      host: "Julian Sterling",
      duration: "22:15",
      date: "4 Nov 2026",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      cover: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
      description: "Our chief financial strategists break down Federal Reserve minutes, Asian market resilience, and currency flows."
    },
    {
      id: "pod-4",
      title: "Cultural Horizons: The Architectural Language of Quiet Spaces",
      host: "Beatrice Hall",
      duration: "41:05",
      date: "3 Nov 2026",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      cover: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      description: "Examining contemporary museum architecture, sacred spaces, and the human impulse for stillness in hyperconnected cities."
    }
  ],

  liveUpdates: [
    {
      id: "live-101",
      time: "10:45 AM IST",
      badge: "LIVE UPDATE",
      title: "Geneva Plenary Adopts Section 4 on Interconnector Protocols",
      content: "Delegates unanimously passed the regulatory framework governing trans-boundary power trading during emergency supply crunches.",
      author: "Elena Rostova, reporting from Geneva"
    },
    {
      id: "live-102",
      time: "10:15 AM IST",
      badge: "MARKET WATCH",
      title: "BSE Sensex Extends Gains to 510 Points as IT Stocks Advance",
      content: "Strong quarterly operating margins from major enterprise IT service exporters boost benchmark index past 84,340.",
      author: "Rajesh Kothari, Mumbai Desk"
    },
    {
      id: "live-103",
      time: "09:50 AM IST",
      badge: "TECH BULLETIN",
      title: "Minister of Electronics Inspects Gujarat Cleanroom Operations",
      content: "Commercial yield rates on initial silicon wafers meet Tier-1 quality certification benchmarks, official briefing confirms.",
      author: "Aarav Sharma, Dholera"
    },
    {
      id: "live-104",
      time: "09:10 AM IST",
      badge: "SCIENTIFIC DISPATCH",
      title: "NASA Transmits High-Bandwidth Telemetry from Artemis Rover",
      content: "Thermal probes verify permafrost ice density in the lunar south pole exceeds preliminary orbital estimates by 15 percent.",
      author: "Dr. Sarah Jenkins"
    },
    {
      id: "live-105",
      time: "08:30 AM IST",
      badge: "EARLY EDITION",
      title: "Asian Markets Open Firm Across Tokyo, Hong Kong, and Singapore",
      content: "Nikkei 225 advances 1.1% while Hang Seng rises 0.8% following positive semiconductor guidance overnight.",
      author: "The Meridian Post Global Markets Desk"
    }
  ],

  // Section-specific full article catalog (8 to 12 articles each)
  sections: {
    news: [
      {
        id: "news-clean-energy",
        title: "Global Clean Energy Milestone: Renewables Overtake Coal in Major Industrial Grids",
        summary: "In a landmark turning point, solar and wind power surpass thermal coal generation across three continental regions.",
        category: "Energy",
        date: "6 Nov 2026",
        author: "Elena Rostova",
        imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=700&q=80",
        readTime: "5 min read"
      },
      {
        id: "news-artemis-lunar",
        title: "Artemis III Subsurface Probe Confirms Vast Hydrated Deposits on Moon",
        summary: "NASA and ESA instruments detect extensive mineral-bound water near the south pole's permanently shadowed craters.",
        category: "Space",
        date: "6 Nov 2026",
        author: "Dr. Sarah Jenkins",
        imageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "news-geneva-ai",
        title: "Geneva AI Treaty Mandates Enforceable Safety Protocols for Frontier Models",
        summary: "Forty-two nations sign binding agreement requiring third-party algorithmic audits and verifiable synthetic provenance.",
        category: "World",
        date: "6 Nov 2026",
        author: "Marcus Vance",
        imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80",
        readTime: "5 min read"
      },
      {
        id: "news-india-semiconductor",
        title: "Dholera Semiconductor Megafab Delivers First Commercial 28nm Wafers",
        summary: "India's flagship foundry completes pilot production runs for automotive clients ahead of projected schedule.",
        category: "Technology",
        date: "6 Nov 2026",
        author: "Aarav Sharma",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "news-who-malaria",
        title: "WHO Clears Next-Generation Dual-Antigen Malaria Vaccine for 14 African Nations",
        summary: "Phase IV trials confirm 82% efficacy in children under five, setting the stage for nationwide immunization drives.",
        category: "Health",
        date: "5 Nov 2026",
        author: "Dr. Claire Wright",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "news-cross-border-rail",
        title: "Trans-European High-Speed Network Completes Alpine Base Tunnel Section",
        summary: "Travel times between Milan and Zurich drop to two hours as high-capacity passenger and freight trains begin test runs.",
        category: "Transport",
        date: "5 Nov 2026",
        author: "Fiona MacLeod",
        imageUrl: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=700&q=80",
        readTime: "3 min read"
      },
      {
        id: "news-biodiversity-accord",
        title: "Amazon Basin Treaty: South American Nations Establish Joint Satellite Forest Patrol",
        summary: "Real-time synthetic aperture radar data will trigger rapid multilateral response against illegal deforestation.",
        category: "Environment",
        date: "4 Nov 2026",
        author: "Carlos Mendez",
        imageUrl: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "news-quantum-computing",
        title: "Cambridge Quantum Testbed Achieves Logical Qubit Fault-Tolerant Milestone",
        summary: "Neutral-atom quantum processor sustains error-corrected operation for twelve consecutive hours.",
        category: "Science",
        date: "4 Nov 2026",
        author: "Gareth Evans",
        imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=700&q=80",
        readTime: "5 min read"
      }
    ],

    sport: [
      {
        id: "sport-arsenal-city",
        title: "Premier League Title Showdown: Arsenal Host Manchester City at Emirates",
        summary: "With two points separating the contenders, Arteta and Guardiola make tactical tweaks in a pivotal encounter.",
        category: "Football",
        date: "6 Nov 2026",
        author: "Oliver Hughes",
        imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "sport-champions-trophy",
        title: "ICC Champions Trophy: Team India Unveils Balanced Squad Led by Pace Arsenal",
        summary: "Selection committee highlights seam bowling depth and aggressive top-order intent for upcoming tournament.",
        category: "Cricket",
        date: "6 Nov 2026",
        author: "Vikram Rathore",
        imageUrl: "https://images.unsplash.com/photo-1531415074868-036b1c57e329?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "sport-formula1-vegas",
        title: "Formula 1 Las Vegas Grand Prix: Ferrari and McLaren Neck-and-Neck in Practice",
        summary: "Cold asphalt temperatures and low downforce setups produce blistering straight-line speeds under the neon lights.",
        category: "Motorsport",
        date: "5 Nov 2026",
        author: "Dominic Thorne",
        imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=700&q=80",
        readTime: "3 min read"
      },
      {
        id: "sport-tennis-finals",
        title: "ATP Tour Finals Turin: Alcaraz and Sinner Set Up Dream Year-End Climax",
        summary: "The world's top two ranked players advance through round-robin stages with dominant straight-set victories.",
        category: "Tennis",
        date: "5 Nov 2026",
        author: "Mateo Rossi",
        imageUrl: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=700&q=80",
        readTime: "3 min read"
      },
      {
        id: "sport-nba-season",
        title: "NBA Week 3 Review: Young Stars Spark Dynamic Fast-Break Surge Across League",
        summary: "Pace-and-space offenses hit historic scoring efficiency averages in an electrifying opening month.",
        category: "Basketball",
        date: "4 Nov 2026",
        author: "Kobe Sanders",
        imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "sport-olympic-legacy",
        title: "Los Angeles 2028 Infrastructure Report: Transit Extensions Running Ahead of Schedule",
        summary: "Automated people movers and bus rapid transit arteries prepare to host millions of international spectators.",
        category: "Olympics",
        date: "4 Nov 2026",
        author: "Rachel Adams",
        imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "sport-rugby-championship",
        title: "Autumn Nations Series: Ireland and All Blacks Prepare for Physical Clash in Dublin",
        summary: "Set-piece discipline and breakdown dominance will decide rugby's most anticipated international test.",
        category: "Rugby",
        date: "3 Nov 2026",
        author: "Conor O'Brien",
        imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=700&q=80",
        readTime: "3 min read"
      },
      {
        id: "sport-chess-candidates",
        title: "FIDE World Championship Prep: Grandmasters Deploy Novel Deep Neural Openings",
        summary: "Advanced evaluation engines reveal deep positional sacrifices in modern queen pawn structures.",
        category: "Chess",
        date: "3 Nov 2026",
        author: "Arjun Sengupta",
        imageUrl: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      }
    ],

    business: [
      {
        id: "biz-market-rally",
        title: "Global Central Banks Pivot: Coordinated Easing Stirs Manufacturing Expansion",
        summary: "Sustained deceleration in global services inflation provides room for systematic borrowing cost reductions.",
        category: "Macroeconomics",
        date: "6 Nov 2026",
        author: "Julian Sterling",
        imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=700&q=80",
        readTime: "5 min read"
      },
      {
        id: "biz-semiconductor-capex",
        title: "Global Foundry Spending Exceeds $180B as Sovereign Semiconductor Pacts Mature",
        summary: "New chip fabrication facilities in North America, Europe, and Asia prepare for 2nm process ramp-ups.",
        category: "Semiconductors",
        date: "6 Nov 2026",
        author: "Aarav Sharma",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "biz-electric-aviation",
        title: "Regional Electric Flight Reaches Commercial Certification in Scandinavia",
        summary: "Forty-passenger regional commuter planes begin scheduled carbon-neutral island routes between Oslo and Bergen.",
        category: "Aviation",
        date: "5 Nov 2026",
        author: "Erik Lindqvist",
        imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "biz-sovereign-wealth",
        title: "Gulf Wealth Funds Anchor $25B Green Hydrogen Intercontinental Pipeline",
        summary: "Joint agreements with Mediterranean maritime operators secure low-emission ammonia shipping agreements.",
        category: "Energy Finance",
        date: "5 Nov 2026",
        author: "Farah Al-Hassan",
        imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "biz-india-fintech",
        title: "UPI Crosses 18 Billion Monthly Transactions: Financial Inclusion Deepens",
        summary: "Cross-border settlement links with ASEAN, Gulf countries, and Europe boost remittance speed and reduce friction.",
        category: "Fintech",
        date: "4 Nov 2026",
        author: "Pooja Singhal",
        imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "biz-automotive-solid-state",
        title: "Solid-State Batteries Enter Mass Vehicle Assembly: 900km Range on 15-Min Charge",
        summary: "Automakers showcase long-range platform architectures built on non-flammable ceramic electrolyte cells.",
        category: "Automotive",
        date: "4 Nov 2026",
        author: "David Miller",
        imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80",
        readTime: "5 min read"
      },
      {
        id: "biz-commercial-real-estate",
        title: "Adaptive Reuse: Urban Office Towers Successfully Transformed into Green Residential Hubs",
        summary: "Metropolitan zoning reforms revitalize downtown cores across London, Chicago, and Tokyo.",
        category: "Real Estate",
        date: "3 Nov 2026",
        author: "Gareth Evans",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "biz-logistics-autonomous",
        title: "Autonomous Maritime Cargo Ships Begin Uncrewed Coastal Feeder Service in Baltic",
        summary: "Satellite-supervised container ships complete zero-emission coastal runs between Gothenburg and Helsinki.",
        category: "Logistics",
        date: "3 Nov 2026",
        author: "Fiona MacLeod",
        imageUrl: "https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      }
    ],

    health: [
      {
        id: "health-malaria-breakthrough",
        title: "WHO Approves Next-Generation Dual-Antigen Malaria Vaccine for 14 Nations",
        summary: "Groundbreaking vaccine demonstrates over 80% durable protection against multiple plasmodium variants.",
        category: "Public Health",
        date: "6 Nov 2026",
        author: "Dr. Claire Wright",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "health-alzheimers-blood-test",
        title: "Precision Diagnostics: High-Accuracy Blood Test Detects Early Neurodegeneration",
        summary: "Phosphorylated tau biomarkers enable routine screening twenty years before clinical symptoms manifest.",
        category: "Neurology",
        date: "6 Nov 2026",
        author: "Dr. Ananya Nair",
        imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=700&q=80",
        readTime: "5 min read"
      },
      {
        id: "health-circadian-longevity",
        title: "The Neuroscience of Deep Sleep: Cellular Autophagy and Cognitive Longevity",
        summary: "New clinical trials reveal how optimizing slow-wave sleep cycles accelerates cerebrospinal fluid waste clearance.",
        category: "Wellness",
        date: "5 Nov 2026",
        author: "Beatrice Hall",
        imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "health-mrna-cancer-vaccine",
        title: "Personalized mRNA Neoantigen Therapies Double Melanoma Remission Rates",
        summary: "Tailored cancer vaccines combined with checkpoint inhibitors yield unprecedented five-year survival metrics.",
        category: "Oncology",
        date: "5 Nov 2026",
        author: "Dr. Claire Wright",
        imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&q=80",
        readTime: "5 min read"
      },
      {
        id: "health-microbiome-metabolism",
        title: "Gut-Brain Axis: Targeted Synbiotics Normalize Metabolic Markers in Clinical Study",
        summary: "Standardized microbial strains demonstrate substantial blood glucose regulation without pharmacological side effects.",
        category: "Nutrition",
        date: "4 Nov 2026",
        author: "Simon Clark",
        imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "health-bionic-vision",
        title: "Subretinal Micro-Electrode Implants Restore Functional Vision in Retinitis Pigmentosa",
        summary: "Patients read standard book typography and navigate pedestrian crosswalks independently.",
        category: "Medical Tech",
        date: "4 Nov 2026",
        author: "Dr. Sarah Jenkins",
        imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "health-mental-health-workplace",
        title: "Four-Day Work Week Trials Yield 32% Reduction in Chronic Stress Hormones",
        summary: "Multi-hospital biomarker study links flexible scheduling directly to lower systemic inflammation markers.",
        category: "Workplace Health",
        date: "3 Nov 2026",
        author: "Rachel Adams",
        imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "health-antimicrobial-peptides",
        title: "Synthetic Peptides Overcome Multi-Drug Resistant Superbugs in Preclinical Phase",
        summary: "Engineered biomolecules disrupt bacterial membranes without prompting genetic resistance pathways.",
        category: "Pharmacology",
        date: "3 Nov 2026",
        author: "Dr. Ananya Nair",
        imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      }
    ],

    culture: [
      {
        id: "cult-quiet-urbanism",
        title: "Quiet Urbanism: Why Cities Worldwide Are Banning Acoustic Pollution",
        summary: "From Paris to Seoul, acoustic radar cameras and sound-dampening asphalt transform metropolitan streetscapes.",
        category: "Society",
        date: "6 Nov 2026",
        author: "Beatrice Hall",
        imageUrl: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "cult-slow-craft-revival",
        title: "The Analog Renaissance: Why Gen Z Artisans Are Choosing Traditional Bookbinding",
        summary: "Hand-stitched leather bindings, marbling techniques, and letterpress typography find a passionate new generation.",
        category: "Craft",
        date: "5 Nov 2026",
        author: "Lucia Moretti",
        imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "cult-culinary-heritage",
        title: "Ancient Grains and Resilient Soil: How Heritage Millets Conquered Fine Dining",
        summary: "Drought-hardy pearl and finger millets take center stage on Michelin-starred menus from London to New Delhi.",
        category: "Food Culture",
        date: "5 Nov 2026",
        author: "Amina Diallo",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "cult-cinema-35mm",
        title: "Celluloid's Unshakable Hold: Why Major Directors Refuse to Abandon 35mm & 70mm Film",
        summary: "Organic grain and photochemical richness draw sold-out audiences to historic independent cinema palaces.",
        category: "Cinema",
        date: "4 Nov 2026",
        author: "Mateo Rossi",
        imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "cult-digital-detox",
        title: "Unplugged Retreats: The Growing Movement Toward Offline Communities",
        summary: "No-screen sanctuaries in the Scottish Highlands and the Western Ghats see bookings double year-on-year.",
        category: "Lifestyle",
        date: "4 Nov 2026",
        author: "Liam Campbell",
        imageUrl: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "cult-fashion-circular",
        title: "Zero-Waste Haute Couture: Bio-Fabricated Mycelium Leathers on Paris Runways",
        summary: "Mushroom roots and bacterial cellulose replace synthetic polymers in sustainable luxury collections.",
        category: "Fashion",
        date: "3 Nov 2026",
        author: "Fiona MacLeod",
        imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "cult-public-libraries",
        title: "The Reimagined Public Library: Civic Centers for Creation, Seed-Sharing, and Debate",
        summary: "Modern public libraries evolve into vibrant town squares offering 3D tool access and intergenerational learning.",
        category: "Civic Space",
        date: "3 Nov 2026",
        author: "Gareth Evans",
        imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "cult-music-orchestral",
        title: "Symphonic Hybridization: Orchestras Collaborate with Electronic Modular Synthesists",
        summary: "Concert halls sell out as classical acoustic instruments blend seamlessly with analog sound design.",
        category: "Music",
        date: "2 Nov 2026",
        author: "Dominic Thorne",
        imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      }
    ],

    arts: [
      {
        id: "arts-tadao-ando",
        title: "The Architecture of Light: Tadao Ando's New Sanctuary Opens in Kyoto",
        summary: "Water basins, exposed concrete, and skylit corridors celebrate silence in the historic temple district.",
        category: "Architecture",
        date: "6 Nov 2026",
        author: "Kenji Sato",
        imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "arts-booker-shortlist",
        title: "Booker Prize 2026: Why This Year's Shortlist Represents a Fiction Renaissance",
        summary: "Six masterfully crafted novels interrogate history, migration, and the resilient human bond.",
        category: "Literature",
        date: "6 Nov 2026",
        author: "Beatrice Hall",
        imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "arts-venice-biennale",
        title: "Venice Biennale 2026: Indigenous Textile Traditions Bridge Continents",
        summary: "Handloom weavers from Rajasthan and the Peruvian Altiplano install monumental fiber sculptures in the Arsenale.",
        category: "Visual Arts",
        date: "5 Nov 2026",
        author: "Lucia Moretti",
        imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=700&q=80",
        readTime: "5 min read"
      },
      {
        id: "arts-renaissance-restoration",
        title: "AI Spectral Imaging Uncovers Hidden Underdrawing in Leonardo's Workshop Canvas",
        summary: "Infrared reflectography reveals original preparatory sketches beneath 16th-century pigments in Florence.",
        category: "Art Conservation",
        date: "5 Nov 2026",
        author: "Mateo Rossi",
        imageUrl: "https://images.unsplash.com/photo-1577720643272-265f09367456?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "arts-contemporary-theatre",
        title: "National Theatre's Epic Staging of 'The Climate Epic' Redefines Stagecraft",
        summary: "Hydraulic platforms, rainwater harvesting cycles, and live choir deliver a tour-de-force theatrical experience.",
        category: "Theatre",
        date: "4 Nov 2026",
        author: "Oliver Hughes",
        imageUrl: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "arts-poetry-anthology",
        title: "New International Voices: Modern Poetry Translates the Fragile Global Landscape",
        summary: "A landmark trilingual anthology brings twenty emerging poets into vivid translation.",
        category: "Poetry",
        date: "4 Nov 2026",
        author: "Arjun Sengupta",
        imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=80",
        readTime: "3 min read"
      },
      {
        id: "arts-sculpture-public",
        title: "Monumental Bronze: Anish Kapoor Unveils New Reflective Form in London Park",
        summary: "The 18-meter parabolic mirror sculpture distorts the city skyline into kinetic organic geometry.",
        category: "Sculpture",
        date: "3 Nov 2026",
        author: "Simon Clark",
        imageUrl: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "arts-photography-documentary",
        title: "Living on the Edge: World Press Photo Winner Captures Arctic Archipelago Life",
        summary: "A hauntingly intimate documentary series chronicling seasonal rhythms in northernmost Svalbard.",
        category: "Photography",
        date: "3 Nov 2026",
        author: "Elena Rostova",
        imageUrl: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      }
    ],

    travel: [
      {
        id: "travel-high-speed-rail",
        title: "Madrid-to-Paris in 4.5 Hours: The Trans-Pyrenees Bullet Train Era Begins",
        summary: "A journey through mountain tunnels, vineyards, and historic capitals at 320km/h with panoramic vista cars.",
        category: "Rail Journeys",
        date: "6 Nov 2026",
        author: "Fiona MacLeod",
        imageUrl: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "travel-bhutan-carbon-negative",
        title: "The Himalayan Trail: Walking Bhutan's Ancient Footpaths in Carbon-Negative Luxury",
        summary: "Community-run eco-lodges along the restored Trans-Bhutan Trail foster mindful travel and conservation.",
        category: "Eco-Travel",
        date: "6 Nov 2026",
        author: "Kunal Joshi",
        imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
        readTime: "5 min read"
      },
      {
        id: "travel-kyoto-autumn",
        title: "Beyond the Crowds: Hidden Zen Gardens in Northern Kyoto During Maple Season",
        summary: "Moss-carpeted courtyards and stone gardens offering tranquility away from bustling tourist hubs.",
        category: "Destinations",
        date: "5 Nov 2026",
        author: "Kenji Sato",
        imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "travel-iceland-geothermal",
        title: "Geothermal Lagoons of the Eastfjords: Iceland's Untamed Volcanic Coastline",
        summary: "Soak in cliffside mineral baths overlooking dramatic Atlantic fjords under the northern lights.",
        category: "Adventure",
        date: "5 Nov 2026",
        author: "Erik Lindqvist",
        imageUrl: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "travel-rajasthan-heritage",
        title: "Living Fortresses: The Preserved Haveli Mansions of Shekhawati, Rajasthan",
        summary: "Open-air fresco galleries, sandstone archways, and royal hospitality in India's painted desert.",
        category: "Heritage",
        date: "4 Nov 2026",
        author: "Pooja Singhal",
        imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=700&q=80",
        readTime: "5 min read"
      },
      {
        id: "travel-norway-fjords-electric",
        title: "Silent Cruising: Electric Catamarans Glide Through Norway's UNESCO Nærøyfjord",
        summary: "Zero engine noise and zero emissions allow passengers to hear waterfalls cascading down 1,000-meter cliffs.",
        category: "Sustainable",
        date: "4 Nov 2026",
        author: "Dominic Thorne",
        imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "travel-tasmania-wilderness",
        title: "Tasmania's Tarkine Rainforest: Ancient Gondwana Trees and Pristine Coastlines",
        summary: "One of Earth's greatest temperate rainforests offers untouched rivers and rugged southern ocean views.",
        category: "Wilderness",
        date: "3 Nov 2026",
        author: "Zoe Taylor",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      },
      {
        id: "travel-sicily-culinary",
        title: "The Lemon Groves of Noto: Farm-to-Table Gastronomy in Baroque Southeastern Sicily",
        summary: "Artisanal ricotta, wild mountain capers, and sun-drenched vineyards beneath golden limestone palazzi.",
        category: "Culinary",
        date: "3 Nov 2026",
        author: "Lucia Moretti",
        imageUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=700&q=80",
        readTime: "4 min read"
      }
    ]
  }
};

// Global helper to find an article by ID
function findArticleById(id) {
  if (MeridianData.leadStory && MeridianData.leadStory.id === id) {
    return MeridianData.leadStory;
  }
  for (const item of MeridianData.secondaryLeadStories) {
    if (item.id === id) return item;
  }
  for (const cat in MeridianData.sections) {
    for (const item of MeridianData.sections[cat]) {
      if (item.id === id) return item;
    }
  }
  for (const item of MeridianData.marketArticles) {
    if (item.id === id) return item;
  }
  for (const item of MeridianData.artsLiterature) {
    if (item.id === id) return item;
  }
  return null;
}
