/**
 * Single source of truth for every piece of personal data on the site.
 *
 * Edit this file to update the portfolio — no component hardcodes your details.
 * Figures here mirror `public/resume.pdf`; keep the two in sync.
 */

export const profile = {
  name: 'Swami Agnivesh Shaga',
  shortName: 'Agnivesh Shaga',
  role: 'AI/ML & Quant Research',
  institution: 'VNR VJIET',
  location: 'Hyderabad, India',
  available: true,
  tagline:
    'I work where machine learning meets financial markets — systematic trading algorithms, the validation frameworks that keep them honest, and the data infrastructure underneath.',
  email: 'agniveshshaga@gmail.com',
  phone: '+91 86398 71199',
  resume: '/resume.pdf',
} as const;

/** Longer-form "about me" copy, split into paragraphs. */
export const about: string[] = [
  "I'm a Computer Science undergrad at VNR VJIET specialising in Artificial Intelligence & Machine Learning, and currently a Quantitative Research Intern at Alfago Research LLP.",
  'Most of my work lives at the intersection of ML and markets: designing systematic long/short strategies, stress-testing them with Monte Carlo permutation and walk-forward analysis so they survive contact with real data, and building the pipelines that feed them. I care as much about the validation that stops a strategy from being curve-fit as I do about the strategy itself.',
  'Away from that I run an enterprise-grade homelab on pfSense, trade my own equity and commodities book, and solve algorithmic problems most days of the week.',
];

export const socials = {
  github: 'https://github.com/agnivesh13',
  linkedin: 'https://www.linkedin.com/in/agniveshshaga/',
  x: 'https://x.com/Amuul13',
  codeforces: 'https://codeforces.com/profile/im_amuul',
  leetcode: 'https://leetcode.com/u/agniveshshaga/',
  codechef: 'https://www.codechef.com/users/agniveshshaga',
} as const;

/* ------------------------------------------------------------------ *
 * Experience & education
 * ------------------------------------------------------------------ */

export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  highlights: { label: string; text: string }[];
  metrics: { label: string; value: string }[];
  tags: string[];
}

export const experience: Role[] = [
  {
    company: 'Alfago Research LLP',
    title: 'Quantitative Research Intern',
    period: 'Dec 2025 – May 2026',
    location: 'Hyderabad, India',
    highlights: [
      {
        label: 'Algorithm Engineering',
        text: 'Engineered automated systematic long/short trading algorithms for Silver and Natural Gas commodities across 2+ years of historical market data.',
      },
      {
        label: 'Statistical Validation',
        text: 'Designed validation frameworks using Monte Carlo permutation tests, in-sample and walk-forward analysis to prevent curve-fitting and prove system resilience.',
      },
      {
        label: 'Parameter Optimisation',
        text: 'Tuned volatility-based parameters — ATR-driven stop loss and trailing stop loss, TEMA, RSI — to maximise risk-adjusted performance.',
      },
      {
        label: 'Financial Modelling',
        text: 'Built Discounted Cash Flow models to evaluate complex equity valuations for investment research.',
      },
    ],
    metrics: [
      { label: 'Silver win rate', value: '88%' },
      { label: 'Nat. Gas win rate', value: '83%' },
      { label: 'Simulated return', value: '₹22.34L' },
    ],
    tags: ['Python', 'Monte Carlo', 'Walk-forward', 'ATR / TEMA / RSI', 'DCF'],
  },
];

export interface Education {
  institution: string;
  qualification: string;
  detail: string;
  score: string;
  year: string;
  location: string;
}

export const education: Education[] = [
  {
    institution: 'VNR Vignana Jyothi Institute of Engineering & Technology',
    qualification: 'B.Tech, Computer Science & Engineering',
    detail: 'Specialisation: Artificial Intelligence & Machine Learning',
    score: 'CGPA 8.55',
    year: '2027 (expected)',
    location: 'Hyderabad',
  },
  {
    institution: 'Acumen Junior College',
    qualification: 'Intermediate (MPC)',
    detail: 'Mathematics, Physics, Chemistry',
    score: '91.6%',
    year: '2022',
    location: 'Warangal',
  },
  {
    institution: 'Shine High School',
    qualification: 'Class X',
    detail: 'Secondary School Certificate',
    score: 'CGPA 10.0',
    year: '2020',
    location: 'Warangal',
  },
];

export interface Achievement {
  title: string;
  detail: string;
  icon: 'flame' | 'award' | 'chart' | 'badge';
}

export const achievements: Achievement[] = [
  {
    title: '466 problems on LeetCode',
    detail:
      'Algorithms and data structures across 524 active days, with a peak 144-day daily streak.',
    icon: 'flame',
  },
  {
    title: 'Honourable Mention — CodeVerse',
    detail: 'Top 10 of 300+ teams at Turing Hut, qualifying among the top 25 finalists.',
    icon: 'award',
  },
  {
    title: 'Independent algo trader',
    detail: 'Manage a ₹3.4 Lakh equity and commodities book with disciplined risk management.',
    icon: 'chart',
  },
  {
    title: 'SEBI Investor Certification',
    detail: 'Scored 50/50 across equity, mutual funds and financial markets.',
    icon: 'badge',
  },
];

/* ------------------------------------------------------------------ *
 * Coding profiles
 * ------------------------------------------------------------------ */

export const handles = {
  codeforces: 'im_amuul',
  github: 'agnivesh13',
  leetcode: 'agniveshshaga',
  codechef: 'agniveshshaga',
} as const;

/**
 * Codeforces IS fetched live (their API sends `Access-Control-Allow-Origin: *`).
 * These values are the last known-good snapshot: they render instantly while
 * the request is in flight, and remain if the API is unreachable.
 */
export const codeforcesFallback = {
  handle: 'im_amuul',
  rating: 1138,
  maxRating: 1157,
  rank: 'newbie',
  maxRank: 'newbie',
  contests: 10,
  /** Rating after each rated contest — drives the sparkline. */
  history: [429, 716, 906, 1042, 1139, 1157, 1152, 1115, 1133, 1138],
};

/** GitHub is fetched live too; this is the offline fallback. */
export const githubFallback = {
  publicRepos: 12,
  followers: 8,
  following: 11,
} as const;

/**
 * Hand-maintained — LeetCode's GraphQL endpoint is not CORS-enabled, so the
 * browser cannot read it directly.
 *
 * To refresh, run this and paste the numbers back in:
 *   curl -s -X POST https://leetcode.com/graphql \
 *     -H 'Content-Type: application/json' -H 'Referer: https://leetcode.com' \
 *     -d '{"query":"query($u:String!){matchedUser(username:$u){submitStatsGlobal{acSubmissionNum{difficulty count}}} userContestRanking(username:$u){rating attendedContestsCount topPercentage}}","variables":{"u":"agniveshshaga"}}'
 *
 * Last synced: 2026-08-09.
 */
export const leetcodeStats = {
  rating: 1553,
  contests: 19,
  topPercent: 31.8,
  solved: 466,
  easy: 285,
  medium: 172,
  hard: 9,
  /** Days with at least one accepted submission, 2024–2026. */
  activeDays: 524,
} as const;

/** Hand-maintained — CodeChef exposes no CORS-enabled public API. */
export const codechefStats = {
  rating: 1567,
  stars: 2,
} as const;

/* ------------------------------------------------------------------ *
 * Projects
 * ------------------------------------------------------------------ */

export type ProjectCategory = 'quant' | 'ml' | 'infra' | 'web';

export interface Project {
  title: string;
  blurb: string;
  category: ProjectCategory;
  tags: string[];
  /** Source repository, when the work is public. */
  github?: string;
  /** Live deployment. */
  live?: string;
  /** Write-up, used when there is no public repo. */
  writeup?: string;
  period?: string;
  /** Headline results, rendered as a metric strip. */
  metrics?: { label: string; value: string }[];
  featured?: boolean;
  /** Flags forked repos so nothing reads as original work when it isn't. */
  fork?: boolean;
  status?: 'In progress';
}

export const projects: Project[] = [
  {
    title: 'Automated OHLCV Data Pipeline',
    blurb:
      'Resilient ingestion pipeline fetching 1-minute OHLCV data for every NSE-listed company. AWS Lambda rotates access tokens autonomously, an async Token Bucket implementation eliminates rate-limit errors at high concurrency, and raw JSON is compacted into Parquet on S3 for cheap analytical queries.',
    category: 'quant',
    tags: ['Python', 'Asyncio', 'FastAPI', 'AWS EC2', 'AWS Lambda', 'S3', 'Parquet'],
    github:
      'https://github.com/agnivesh13/Automated-OHLCV-Data-Pipeline-for-Algorithmic-Trading',
    period: 'Feb 2025',
    metrics: [
      { label: 'Coverage', value: 'All NSE' },
      { label: 'Granularity', value: '1-min' },
      { label: 'Rate-limit errors', value: 'Zero' },
    ],
    featured: true,
  },
  {
    title: 'Niyantrana — NAFLD Risk Prediction',
    blurb:
      'LSTM–MLP fusion model for early detection of non-alcoholic fatty liver disease, forecasting biomarkers and computing Fatty Liver Index scores. A RAG module turns those predictions into evidence-based lifestyle coaching, and the whole thing ships through an automated retraining and container pipeline.',
    category: 'ml',
    tags: ['TensorFlow', 'scikit-learn', 'RAG', 'Flask', 'Docker', 'GitHub Actions'],
    writeup:
      'https://www.linkedin.com/posts/agniveshshaga_nexovate25-hackathon-healthcareai-activity-7368703740356292610-1MBO',
    period: 'Sep 2025',
    metrics: [
      { label: 'ROC-AUC', value: '88%' },
      { label: 'Manual toil', value: '−70%' },
    ],
    featured: true,
  },
  {
    title: 'Price Feed Parser',
    blurb:
      'End-to-end market data platform: OAuth2 through API Gateway, rate-limited async ingestion of 1-minute history into S3, then AWS Glue aggregation into partitioned Parquet across 1m/5m/15m/1d timeframes for Athena querying. Ships with CI/CD.',
    category: 'quant',
    tags: ['Python', 'AWS Glue', 'Parquet', 'Athena', 'Terraform', 'CI/CD'],
    github: 'https://github.com/agnivesh13/Price-Feed-Parser',
    metrics: [
      { label: 'Timeframes', value: '4' },
      { label: 'Format', value: 'Parquet' },
    ],
  },
  {
    title: 'Enterprise-Grade Homelab Network',
    blurb:
      'Zero-trust network topology built on pfSense: 802.1Q VLANs isolating trusted, IoT, surveillance and guest zones, a custom OpenVPN server with an internal certificate authority, and NAT redirection forcing every client through a local resolver.',
    category: 'infra',
    tags: ['pfSense', 'OpenVPN', 'VLANs', 'PKI', 'Unbound DNS', 'Omada SDN'],
    writeup:
      'https://www.linkedin.com/posts/agniveshshaga_homelab-networking-pfsense-activity-7418316640167178240-Zfeo',
    period: 'Dec 2025 – Jan 2026',
  },
  {
    title: 'Tennis Match Outcome Prediction',
    blurb:
      'Predicts ATP match winners across ~96,000 matches (1990–2024) by combining a tuned Elo rating system with engineered form, head-to-head and serve features, then calibrating the resulting probabilities.',
    category: 'ml',
    tags: ['Python', 'scikit-learn', 'pandas', 'NumPy', 'Jupyter'],
    github: 'https://github.com/agnivesh13/Tennis-Outcome-Prediction',
    metrics: [
      { label: 'Accuracy', value: '74%' },
      { label: 'AUC', value: '0.80' },
      { label: 'Matches', value: '96K' },
    ],
  },
  {
    title: 'OHLCV FastAPI Endpoints',
    blurb:
      'A typed FastAPI service serving processed OHLCV datasets straight out of S3, giving backtesting engines and notebooks a low-latency HTTP interface instead of ad-hoc bucket reads.',
    category: 'quant',
    tags: ['Python', 'FastAPI', 'AWS S3', 'REST'],
    github: 'https://github.com/agnivesh13/ohlcv-FastAPI-endpoints',
  },
  {
    title: 'PrimoAgent',
    blurb:
      'Multi-agent LLM system for stock analysis — a fork I work in to study how agent orchestration, tool use and role specialisation behave on real financial data.',
    category: 'quant',
    tags: ['Python', 'LLM Agents', 'Multi-Agent'],
    github: 'https://github.com/agnivesh13/PrimoAgent',
    fork: true,
  },
  {
    title: 'WebShare',
    blurb:
      'Cross-platform file sharing over peer-to-peer transfers on the local network or short room codes — no account, no upload step, no server holding your files.',
    category: 'web',
    tags: ['TypeScript', 'React', 'WebRTC', 'Socket.io'],
    github: 'https://github.com/agnivesh13/WebShare',
    live: 'https://web-share-psi.vercel.app/',
    status: 'In progress',
  },
  {
    title: 'Train-Trac',
    blurb:
      'Full-stack train tracking application with authentication, live schedule lookups and a responsive React front end backed by Node and MongoDB.',
    category: 'web',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/agnivesh13/Train-Trac/tree/main/TrainTrac-main',
    live: 'https://train-trac-tawny.vercel.app/',
  },
  {
    title: 'VNR Blog',
    blurb:
      'A publishing platform for VNR VJIET students to share technical write-ups, event recaps and campus stories, with authoring and feed views.',
    category: 'web',
    tags: ['JavaScript', 'React', 'Node.js'],
    github: 'https://github.com/agnivesh13/VNR-BLOG',
    live: 'https://vnr-blog.vercel.app/',
  },
  {
    title: 'Home Cloud Storage',
    blurb:
      'Self-hosted storage for a household: secure file access, sharing and role-based user management across family devices, with real-time sync over Socket.io.',
    category: 'web',
    tags: ['React', 'Node.js', 'Socket.io'],
    github: 'https://github.com/agnivesh13/HomeCloudStorage',
    status: 'In progress',
  },
];

export const projectFilters: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'quant', label: 'Quant & Trading' },
  { id: 'ml', label: 'AI / ML' },
  { id: 'infra', label: 'Infra' },
  { id: 'web', label: 'Web' },
];

/* ------------------------------------------------------------------ *
 * Skills
 * ------------------------------------------------------------------ */

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['Python', 'C++', 'C', 'Java', 'R', 'SQL'],
  },
  {
    title: 'Quant & Trading',
    items: [
      'Monte Carlo tests',
      'Walk-forward analysis',
      'Backtesting',
      'ATR / TEMA / RSI',
      'DCF modelling',
      'Risk management',
    ],
  },
  {
    title: 'ML & Data',
    items: ['TensorFlow', 'scikit-learn', 'pandas', 'NumPy', 'RAG', 'Jupyter'],
  },
  {
    title: 'Cloud & Infra',
    items: ['AWS EC2', 'AWS Lambda', 'S3', 'Docker', 'Terraform', 'GitHub Actions'],
  },
  {
    title: 'Networking',
    items: ['pfSense', 'OpenVPN', 'VLANs', 'TCP/IP', 'Linux'],
  },
  {
    title: 'Web & Tools',
    items: ['FastAPI', 'Flask', 'React', 'Node.js', 'MySQL', 'Git'],
  },
];

/** Flat list feeding the marquee. */
export const marqueeSkills: string[] = skillGroups.flatMap((g) => g.items);

/* ------------------------------------------------------------------ *
 * Highlights timeline (LinkedIn write-ups)
 * ------------------------------------------------------------------ */

export interface EventItem {
  title: string;
  kind: string;
  date: string;
  isoDate: string;
  location?: string;
  summary: string;
  highlights: string[];
  tags: string[];
  link: string;
  /**
   * Optional photo served from `public/events/`.
   * If the file is missing the card falls back to a designed gradient panel,
   * so it never renders broken — drop the image in and it appears.
   */
  image?: string;
  icon: 'trophy' | 'server' | 'shield';
  accent: string;
  result?: string;
}

export const events: EventItem[] = [
  {
    title: 'Trading Bot in Production on AWS',
    kind: 'Deployment',
    date: 'January 2026',
    isoDate: '2026-01-27',
    summary:
      'Took a private silver-commodity algorithm from a local script to a hardened, always-on service on AWS EC2 — the difference between code that runs and code that stays running.',
    highlights: [
      'Daemonised as a systemd service for automatic restart and state recovery across reboots',
      'Real-time market data streamed over Fyers API WebSockets',
      'Custom logging pipelines for granular request tracking and open-position state',
    ],
    tags: ['AWS EC2', 'Python', 'systemd', 'WebSockets', 'Ubuntu'],
    link: 'https://www.linkedin.com/posts/agniveshshaga_aws-python-cloudcomputing-activity-7421981633643376642-Zn-2',
    image: '/events/aws-trading-bot.jpg',
    icon: 'server',
    accent: '#f59e0b',
    result: '99.9% uptime target',
  },
  {
    title: 'Zero-Trust Home Network with pfSense',
    kind: 'Home Lab',
    date: 'January 2026',
    isoDate: '2026-01-17',
    summary:
      'Rebuilt my home infrastructure from a flat ISP router into a fully segmented, zero-trust network running pfSense on a Lenovo tiny PC.',
    highlights: [
      'VLAN segmentation isolating trusted, IoT, surveillance and guest zones',
      'OpenVPN server backed by an internal Certificate Authority, with FreeDNS DDNS tracking a rotating WAN IP',
      'Tuned OpenVPN keepalive for mobile NAT, NAT-redirected DoH to a local AdGuard/Unbound resolver, and fixed WAN MTU fragmentation',
    ],
    tags: ['pfSense', 'OpenVPN', 'VLANs', 'PKI', 'pfBlockerNG', 'Networking'],
    link: 'https://www.linkedin.com/posts/agniveshshaga_homelab-networking-pfsense-activity-7418316640167178240-Zfeo',
    image: '/events/pfsense-homelab.jpg',
    icon: 'shield',
    accent: '#22d3ee',
  },
  {
    title: "Nexovate'25 Hackathon",
    kind: 'Hackathon',
    date: 'August 2025',
    isoDate: '2025-08-29',
    location: 'Presidency University, Bengaluru',
    summary:
      'Built Niyantrana in 24 hours — the health-tech system that became my NAFLD risk-prediction project — linking wearable activity data to blood vitals.',
    highlights: [
      'LSTM modelling how long-term lifestyle patterns from wearables move Triglycerides and GGT',
      'MLP capturing short-term dietary effects on the same vitals',
      'RAG-based engine turning those predictions into personalised, habit-driven recommendations',
    ],
    tags: ['LSTM', 'MLP', 'RAG', 'Healthcare AI', 'Python'],
    link: 'https://www.linkedin.com/posts/agniveshshaga_nexovate25-hackathon-healthcareai-activity-7368703740356292610-1MBO',
    image: '/events/nexovate-hackathon.jpg',
    icon: 'trophy',
    accent: '#a78bfa',
    result: 'Top 25 of 600+ teams',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'Projects', href: '#projects' },
  { label: 'Highlights', href: '#events' },
  { label: 'Contact', href: '#contact' },
];
