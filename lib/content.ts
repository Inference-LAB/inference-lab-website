export type Track = {
  id: string
  index: string
  title: string
  summary: string
  points: string[]
}

export const tracks: Track[] = [
  {
    id: 'research',
    index: '01',
    title: 'Research',
    summary:
      'Original research in low-resource NLP and speech intelligence — conducted independently and through international academic collaboration.',
    points: [
      'King Saud University · EPU Kuwait · Doane University (USA) · Hanyang University (Korea)',
      'Every release ships reproducible pipelines + a permanent DOI',
      'Deployable inference code, not leaderboard numbers',
    ],
  },
  {
    id: 'engineering',
    index: '02',
    title: 'Engineering Services',
    summary:
      'AI/ML engineering, LLM and RAG systems, computer vision, speech AI, and full-stack delivery for organizations.',
    points: [
      'Production REST APIs, containerized & monitored',
      'Same engineering discipline taught in the lab',
      'Owned end-to-end across the full ML lifecycle',
    ],
  },
  {
    id: 'education',
    index: '03',
    title: 'Engineering Education',
    summary:
      'A structured, deployment-focused curriculum that takes developers from basic Python syntax to deploying production AI systems.',
    points: [
      '12.5 months · 6 phases · live coding every week',
      'Engineering Fellowship for project-based contribution',
      'Built, deployed, and on GitHub — not certificates',
    ],
  },
]

export type Publication = {
  title: string
  venue: string
  status: 'Under Review' | 'Published Preprint' | 'In Progress'
  year: string
  doi?: string
  highlight: string
}

export const publications: Publication[] = [
  {
    title:
      'Modeling Vocal Fatigue as Embedding-Space Deviation Using Contrastively Trained ECAPA-TDNNs',
    venue: 'Springer · EURASIP J. on Signal Processing',
    status: 'Under Review',
    year: '2026',
    doi: '10.5281/zenodo.18305757',
    highlight:
      'ECAPA-TDNN-VHE designed from scratch with supervised contrastive loss — 2.5× accuracy over baseline (78% vs 36%), F1 scores 0.85 / 0.78 / 0.70 across three fatigue classes.',
  },
  {
    title: 'Continuous Vocal Load Monitoring in Professional Voice Users',
    venue: 'Journal of Voice · King Saud University & EPU Kuwait',
    status: 'Under Review',
    year: '2026',
    highlight:
      'Development and occupational validation of an automated vocal load assessment tool for professional voice users — clinical-grade speech analysis in production.',
  },
  {
    title:
      'RUEmoCorp: A Large-Scale Roman Urdu Emotion Corpus & Benchmark Suite',
    venue: 'Language Resources and Evaluation (Springer)',
    status: 'Under Review',
    year: '2026',
    doi: '10.21203/rs.3.rs-9759243/v1',
    highlight:
      'First large-scale Roman Urdu emotion corpus — 134K labeled samples with Fleiss κ = 0.658 (substantial agreement), multi-institute annotation, fully open-source on HuggingFace and Harvard Dataverse.',
  },
  {
    title:
      'RUDaSA: Roman Urdu Dataset for Sentiment Analysis — A Large-Scale, Curated Corpus with Privacy-Preserving Embeddings and Competitive Benchmarking of Transformer Models',
    venue: 'Research Square · Preprint',
    status: 'Published Preprint',
    year: '2026',
    doi: '10.21203/rs.3.rs-9827763/v1',
    highlight:
      'Large-scale Roman Urdu sentiment corpus built via privacy-preserving embedding pipelines. Benchmarks state-of-the-art Transformer models — addressing a critical gap in low-resource South Asian NLP.',
  },
  {
    title: 'Data-Centric Roman Urdu NLP: Dataset Curation & Model Benchmarking',
    venue: 'Zenodo · Preprint',
    status: 'Published Preprint',
    year: '2025',
    doi: '10.5281/zenodo.18080524',
    highlight:
      'Largest high-quality Roman Urdu sentiment dataset via privacy-preserving embedding pipelines — SOTA 0.84 accuracy, 0.83 Macro-F1.',
  },
  {
    title: 'Forecast-Based Decision Support System for Mango Malformation',
    venue: 'Zenodo · Preprint',
    status: 'Published Preprint',
    year: '2025',
    doi: '10.5281/zenodo.16090477',
    highlight:
      'Time-series forecasting and smart-agriculture DSS — demonstrated 50–60% yield improvement through data-driven intervention.',
  },
  {
    title:
      'Ergonomic Interventions and Cognitive Workload in Healthcare Settings: A Qualitative Case Study Using Cognitive Systems Engineering',
    venue:
      'Hanyang University (Korea) · King Saud University (Saudi Arabia) · Doane University (USA)',
    status: 'In Progress',
    year: '2026',
    highlight:
      'Multi-institutional international study applying Cognitive Systems Engineering to healthcare ergonomics — systematic analysis of workload, safety, and intervention efficacy.',
  },
]

export type Software = {
  name: string
  category: string
  description: string
  tags: string[]
  pypi?: boolean
}

export const software: Software[] = [
  {
    name: 'auralis-vfs',
    category: 'Speech AI · Library',
    description:
      'Pip-installable Python library for vocal fatigue scoring from raw speech. Built on ECAPA-TDNN-VHE — returns a normalized fatigue score from any audio input.',
    tags: ['PyPI', 'ECAPA-TDNN', 'Speech'],
    pypi: true,
  },
  {
    name: 'voiceMonitor',
    category: 'Speech AI · Real-Time',
    description:
      'Real-time vocal health monitoring tool — streams microphone input, runs auralis-vfs, and surfaces fatigue level and vocal load over a session.',
    tags: ['Real-Time', 'Monitoring', 'CLI'],
  },
  {
    name: 'VocalID',
    category: 'Speech AI · Verification',
    description:
      'Open-source speaker verification framework using embedding cosine similarity on ECAPA-TDNN representations. Lightweight, no external APIs required.',
    tags: ['Speaker Verification', 'Embeddings', 'Open Source'],
  },
  {
    name: 'faker-pk',
    category: 'Open Source · Library',
    description:
      'Pakistani synthetic data library for realistic test fixtures — Urdu and Roman Urdu names, CNIC numbers, phone formats, addresses, and locale-aware records.',
    tags: ['PyPI', 'Synthetic Data', 'Pakistan'],
    pypi: true,
  },
  {
    name: 'QueryVault',
    category: 'LLM Observability',
    description:
      'End-to-end LLM platform with real-time hallucination detection, structured logging, and a developer dashboard — hallucination rate, latency, P50/P95.',
    tags: ['Streamlit', 'Few-Shot', 'Observability'],
  },
  {
    name: 'DataForge',
    category: 'Multi-Agent System',
    description:
      'Multi-agent system for automated EDA, cleaning, visualization, and report generation — autonomous data analysis pipelines built on CrewAI.',
    tags: ['CrewAI', 'EDA', 'Agents'],
  },
  {
    name: 'SecureCipher v2.0',
    category: 'Image Encryption',
    description:
      'Image encryption scheme scoring 100/100 against 14 benchmark algorithms across standard cryptographic security tests.',
    tags: ['Cryptography', 'Benchmarked'],
  },
]

export type Phase = {
  id: string
  index: string
  title: string
  duration: string
  blurb: string
  weeks: string[]
  capstone: string
}

export const phases: Phase[] = [
  {
    id: 'phase-0',
    index: 'Phase 0',
    title: 'Engineering Foundations',
    duration: '2 months',
    blurb:
      'From a working terminal to production database architecture. Writing Python that does not break.',
    weeks: [
      'Developer Environment & Professional Python Setup',
      "Python Beyond Basics: Code That Doesn't Break",
      'File I/O: Reading and Writing Everything',
      'Git & GitHub: Engineering Collaboration',
      'Clean Code & Project Architecture',
      'Object Oriented Programming for Engineers',
      'SQL & SQLite: Databases From First Principles',
      'PostgreSQL & SQLAlchemy: Production Databases',
    ],
    capstone: 'Student Record Management System on PostgreSQL with full CRUD.',
  },
  {
    id: 'phase-1',
    index: 'Phase 1',
    title: 'Data Engineering & Visualization',
    duration: '2 months',
    blurb:
      'NumPy through publication-quality visualization, grounded in real statistical thinking.',
    weeks: [
      'NumPy: How Computers Actually Handle Numbers',
      'Pandas Part 1: Data Loading & Cleaning',
      'Pandas Part 2: Transformation & Analysis',
      'Matplotlib: Visualization From First Principles',
      'Descriptive Statistics & Probability',
      'Inferential Statistics & Hypothesis Testing',
      'Correlation, Regression & Statistical Thinking',
      'Seaborn & Publication-Quality Visualization',
    ],
    capstone:
      'Full data analysis project — EDA, statistical tests, PostgreSQL storage, notebook report.',
  },
  {
    id: 'phase-2',
    index: 'Phase 2',
    title: 'Machine Learning Engineering',
    duration: '2.5 months',
    blurb:
      'Classical ML the engineering way: pipelines, leakage-free evaluation, and experiment tracking.',
    weeks: [
      'The ML Mindset & Scikit-learn Architecture',
      'Supervised Learning: Classification',
      'Regression & Feature Engineering',
      'Evaluation, Cross-Validation & Tuning',
      'Unsupervised Learning & Dimensionality Reduction',
      'Imbalanced Data & Production-Ready ML Code',
      'MLflow: Experiment Tracking & Model Registry',
    ],
    capstone:
      'End-to-end ML project with CV, tuning, MLflow tracking, and a deployable predict() function.',
  },
  {
    id: 'phase-3',
    index: 'Phase 3',
    title: 'Deep Learning & NLP',
    duration: '2.5 months',
    blurb:
      'Neural networks from scratch to fine-tuned Transformers and speech AI pipelines.',
    weeks: [
      'Neural Networks From Scratch',
      'PyTorch: The Engineering Way',
      'CNNs & Computer Vision Basics',
      'Recurrent Networks & Sequence Modeling',
      'Text Processing & Classical NLP',
      'Transformers: Architecture & Intuition',
      'HuggingFace: Transformers in Practice',
      'Speech AI Engineering',
    ],
    capstone:
      'Complete NLP system with a fine-tuned Transformer pushed to the HuggingFace Hub.',
  },
  {
    id: 'phase-4',
    index: 'Phase 4',
    title: 'AI Systems & LLM Engineering',
    duration: '2 months',
    blurb:
      'Production AI APIs, disciplined LLM engineering, RAG systems, and agents that actually work.',
    weeks: [
      'Building Production AI APIs with FastAPI',
      'LLM Engineering: OpenAI & Anthropic APIs',
      'Vector Databases & RAG Systems',
      'AI Agents & Tool Use',
    ],
    capstone:
      'Complete AI application — RAG backend, LLM generation, FastAPI, frontend, deployed to cloud.',
  },
  {
    id: 'phase-5',
    index: 'Phase 5',
    title: 'MLOps & Deployment',
    duration: '1.5 months',
    blurb:
      'Containerize, automate, ship and monitor. The difference between a notebook and a product.',
    weeks: [
      'Docker for AI Systems',
      'GitHub Actions: CI/CD for AI Projects',
      'Cloud Deployment & Monitoring',
    ],
    capstone:
      'Dockerized, CI/CD-driven deployment of a monitored production AI service.',
  },
]

export const fellowshipProjects = [
  {
    name: 'faker-pk extension',
    description:
      'Extend the Pakistani synthetic data library with new locales, providers and record types.',
  },
  {
    name: 'Lab website',
    description:
      'Design and ship the public-facing engineering surface for the lab and its open-source work.',
  },
  {
    name: 'Dataset quality auditor',
    description:
      'A tooling project to automatically profile, score and flag quality issues in research datasets.',
  },
]
