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
      'King Saud University · EPU Kuwait · Doane University (USA)',
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
      'ECAPA-TDNN-VHE designed from scratch with supervised contrastive loss — 2.5× accuracy over baseline (78% vs 36%).',
  },
  {
    title: 'Continuous Vocal Load Monitoring in Professional Voice Users',
    venue: 'Journal of Voice · King Saud University & EPU Kuwait',
    status: 'Under Review',
    year: '2026',
    highlight:
      'Development and occupational validation of an automated vocal load assessment tool for professional voice users.',
  },
  {
    title:
      'RUEmoCorp: A Large-Scale Roman Urdu Emotion Corpus & Benchmark Suite',
    venue: 'Language Resources and Evaluation (Springer)',
    status: 'Under Review',
    year: '2026',
    doi: '10.21203/rs.3.rs-9759243/v1',
    highlight:
      'First large-scale Roman Urdu emotion corpus — 134K labeled samples, Fleiss κ = 0.658 (substantial), fully open-source.',
  },
  {
    title: 'Data-Centric Roman Urdu NLP: Dataset Curation & Model Benchmarking',
    venue: 'Zenodo · Preprint',
    status: 'Published Preprint',
    year: '2025',
    doi: '10.5281/zenodo.18080524',
    highlight:
      'Largest high-quality Roman Urdu sentiment dataset via privacy-preserving embedding pipelines — SOTA 0.84 accuracy.',
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
    title: 'Ergonomic Interventions & Cognitive Workload in Healthcare',
    venue: 'King Saud University · EPU Kuwait · Doane University (USA)',
    status: 'In Progress',
    year: '2026',
    highlight:
      'Cognitive Systems Engineering framework applied to healthcare ergonomics — multi-institutional international collaboration.',
  },
]

export type Software = {
  name: string
  category: string
  description: string
  tags: string[]
}

export const software: Software[] = [
  {
    name: 'Auralis Ecosystem',
    category: 'Speech AI Suite',
    description:
      'Vocal fatigue scoring from raw speech. Includes auralis-vfs (pip), voiceMonitor (real-time), VocalID (speaker verification) and a containerized production REST API.',
    tags: ['PyPI', 'HuggingFace Spaces', 'ECAPA-TDNN'],
  },
  {
    name: 'QueryVault',
    category: 'LLM Observability',
    description:
      'End-to-end LLM platform with real-time hallucination detection, structured logging and a developer dashboard — hallucination rate, latency, P50/P95.',
    tags: ['Streamlit', 'Few-Shot', 'Observability'],
  },
  {
    name: 'DataForge',
    category: 'Multi-Agent System',
    description:
      'Multi-agent system for automated EDA, cleaning, visualization and report generation — autonomous data analysis pipelines.',
    tags: ['CrewAI', 'EDA', 'Agents'],
  },
  {
    name: 'LLM Knowledge Base',
    category: 'RAG Pipeline',
    description:
      'Retrieval-augmented generation pipeline built on LangChain with Pinecone / Qdrant vector search and a FastAPI serving layer.',
    tags: ['LangChain', 'Qdrant', 'FastAPI'],
  },
  {
    name: 'faker-pk',
    category: 'Open Source Library',
    description:
      'Pakistani synthetic data library for realistic test fixtures — names, addresses, identifiers and locale-aware records.',
    tags: ['PyPI', 'Synthetic Data'],
  },
  {
    name: 'SecureCipher v2.0',
    category: 'Image Encryption',
    description:
      'Image encryption scheme that scored 100/100 against 14 benchmark algorithms across standard cryptographic security tests.',
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
