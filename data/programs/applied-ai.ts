export interface AppliedAIPhase {
  number: string
  title: string
  duration: string
  fee: string
  monthlyFee: string
  description: string
  skills: string[]
  project: {
    title: string
    description: string
  }
}

export interface AppliedAIAudience {
  title: string
  description: string
}

export interface AppliedAICapabilityDomain {
  number: string
  title: string
  topics: string
}

export interface AppliedAICareerPathway {
  title: string
  description: string
}

export interface AppliedAIPolicy {
  title: string
  content: string
}

export interface AppliedAIProgramData {
  id: string
  slug: string
  title: string
  tagline: string
  label: string
  heroDescription: string
  formUrl: string
  metadata: {
    duration: string
    phasesCount: string
    format: string
    mentorship: string
    cohortSize: string
  }
  whatIs: {
    heading: string
    paragraphs: string[]
    lifecycleSteps: string[]
  }
  audience: {
    heading: string
    intro: string
    prerequisite: string
    cards: AppliedAIAudience[]
  }
  domains: {
    heading: string
    items: AppliedAICapabilityDomain[]
  }
  phases: AppliedAIPhase[]
  projectDriven: {
    heading: string
    copy: string
  }
  engineeringWorkflow: {
    heading: string
    copy: string
    steps: string[]
  }
  outcomes: {
    heading: string
    items: Array<{
      title: string
      description: string
    }>
  }
  careers: {
    heading: string
    intro: string
    roles: AppliedAICareerPathway[]
    footnote: string
  }
  structure: {
    heading: string
    items: Array<{
      title: string
      description: string
    }>
  }
  cohortModel: {
    heading: string
    description: string
    badge: string
  }
  investment: {
    heading: string
    intro: string
    phases: Array<{
      phase: string
      duration: string
      monthlyFee: string
      totalFee: string
    }>
    fullProgramTotal: string
    fullProgramDuration: string
    paymentNote: string
  }
  policies: AppliedAIPolicy[]
  faqs: Array<{
    question: string
    answer: string
  }>
}

export const appliedAIData: AppliedAIProgramData = {
  id: 'applied-ai-engineering',
  slug: 'applied-ai-engineering',
  title: 'Applied AI Engineering Program',
  tagline: 'Build the technical foundation to engineer AI systems.',
  label: '02 · AI ENGINEERING TRACK',
  heroDescription:
    'A 12.5-month, project-driven program designed for learners who want to develop the technical skills required to build, integrate, deploy, and maintain complete AI systems.',
  formUrl: 'https://forms.gle/YQ1kiyvqYiu8TAho9',
  metadata: {
    duration: '12.5 Months',
    phasesCount: '6 Phases',
    format: 'Project-Based',
    mentorship: 'Mentor-Guided',
    cohortSize: 'Max 6–8 Students',
  },
  whatIs: {
    heading: 'What Is Applied AI Engineering?',
    paragraphs: [
      'The Applied AI Engineering Program is designed for learners who want to move beyond learning AI concepts and develop the ability to engineer complete AI systems.',
      'The program covers the practical engineering lifecycle of an AI application, from writing reliable software and working with data to developing machine learning models, building deep learning and NLP systems, integrating modern language models, and deploying AI applications.',
      'Rather than treating AI as a collection of algorithms, the program focuses on how models, data, software, APIs, applications, and deployment work together as a complete system.',
    ],
    lifecycleSteps: [
      'ENGINEERING',
      'DATA',
      'MACHINE LEARNING',
      'DEEP LEARNING & NLP',
      'LLM ENGINEERING',
      'DEPLOYMENT',
      'PRODUCTION AI SYSTEM',
    ],
  },
  audience: {
    heading: 'Who Is This Program For?',
    intro:
      'Applied AI Engineering is designed for motivated learners who have foundational programming skills and want to master the complete AI systems engineering stack.',
    prerequisite: 'Recommended starting point: Basic Python and programming fundamentals are required.',
    cards: [
      {
        title: 'AI / Computer Science Students',
        description: 'Students who already have programming foundations and want practical AI engineering experience alongside their academic studies.',
      },
      {
        title: 'Aspiring AI Engineers',
        description: 'Learners who want to progress from machine learning knowledge toward complete AI application development.',
      },
      {
        title: 'ML / Data Science Learners',
        description: 'Learners who understand basic machine learning or data science but want stronger software engineering and deployment skills.',
      },
      {
        title: 'Software Developers',
        description: 'Developers who want to add machine learning, generative AI, and AI application development to their technical skill set.',
      },
      {
        title: 'Early-Career Professionals',
        description: 'Graduates and junior technical professionals who want to build a stronger AI engineering portfolio.',
      },
    ],
  },
  domains: {
    heading: 'What You Will Learn',
    items: [
      {
        number: '01',
        title: 'Engineering Foundations',
        topics: 'Python engineering · Type hints · Clean code · Error handling · Linux · Git & GitHub · OOP · SQL · PostgreSQL · SQLAlchemy',
      },
      {
        number: '02',
        title: 'Data Engineering & Visualization',
        topics: 'NumPy · Pandas · Data cleaning · Statistical analysis · Matplotlib · Seaborn · Hypothesis testing · Correlation · Regression',
      },
      {
        number: '03',
        title: 'Machine Learning Engineering',
        topics: 'Scikit-learn · Pipelines · Feature engineering · Classification & Regression · Evaluation metrics · Cross-validation · Hyperparameter tuning · MLflow',
      },
      {
        number: '04',
        title: 'Deep Learning & NLP',
        topics: 'Neural networks · PyTorch · CNNs · Transfer learning · RNNs · LSTMs · Transformers · BERT · GPT · Hugging Face · Fine-tuning · Speech AI',
      },
      {
        number: '05',
        title: 'AI Systems & LLM Engineering',
        topics: 'LLM APIs · Structured outputs · Prompt engineering · Embeddings · Vector databases · RAG pipelines · Function calling · AI agents · Memory',
      },
      {
        number: '06',
        title: 'MLOps & Deployment',
        topics: 'FastAPI · Docker · Multi-stage builds · CI/CD · GitHub Actions · Cloud deployment · Monitoring · Logging · Prometheus · Grafana',
      },
    ],
  },
  phases: [
    {
      number: 'PHASE 0',
      title: 'Engineering Foundations',
      duration: '2 MONTHS',
      monthlyFee: 'PKR 6,000 / month',
      fee: 'PKR 12,000 phase total',
      description: 'Build the software engineering foundation required for practical AI development.',
      skills: [
        'Python engineering',
        'Type hints & Dataclasses',
        'Error handling & Logging',
        'Clean code & Modular design',
        'File I/O & Serialization',
        'Linux terminal & Bash scripting',
        'Git & GitHub team workflows',
        'Object-oriented programming (OOP)',
        'Relational Databases & SQL',
        'PostgreSQL & SQLite',
        'SQLAlchemy ORM',
      ],
      project: {
        title: 'Student Record Management System',
        description:
          'A PostgreSQL-backed application with a CLI interface, relational schema, CRUD operations, type validation, and automated CSV export.',
      },
    },
    {
      number: 'PHASE 1',
      title: 'Data Engineering & Visualization',
      duration: '2 MONTHS',
      monthlyFee: 'PKR 6,000 / month',
      fee: 'PKR 12,000 phase total',
      description: 'Learn how to turn raw data into reliable, understandable datasets for analysis and machine learning.',
      skills: [
        'NumPy arrays & Vectorized operations',
        'Pandas DataFrames & Series',
        'Matplotlib & Seaborn visualization',
        'Descriptive statistics (central tendency, variance)',
        'Inferential statistics & Probability distributions',
        'Hypothesis testing (t-tests, Chi-square, ANOVA)',
        'Correlation & Linear regression',
        'Data cleaning & Missing value imputation',
        'Data transformation & Feature encoding',
      ],
      project: {
        title: 'Full Exploratory Data Analysis (EDA) Project',
        description:
          'Comprehensive data analysis on real-world datasets with statistical hypothesis testing, interactive visualizations, PostgreSQL integration, and an executive technical report.',
      },
    },
    {
      number: 'PHASE 2',
      title: 'Machine Learning Engineering',
      duration: '2.5 MONTHS',
      monthlyFee: 'PKR 8,000 / month',
      fee: 'PKR 20,000 phase total',
      description: 'Move from studying machine learning algorithms to building complete, reproducible machine learning workflows.',
      skills: [
        'Scikit-learn architecture',
        'Pipelines & ColumnTransformer',
        'Classification & Regression algorithms',
        'Feature engineering & Feature scaling',
        'Model evaluation (Precision, Recall, F1, ROC-AUC)',
        'Cross-validation & Learning curves',
        'Hyperparameter tuning (GridSearchCV, RandomizedSearch)',
        'Handling imbalanced data (SMOTE, class weights)',
        'MLflow experiment tracking',
        'MLflow model registry & Versioning',
      ],
      project: {
        title: 'End-to-End Machine Learning Pipeline',
        description:
          'Compare multiple ML algorithms, track experiments with MLflow, log metrics and artifacts, save the production model, and prepare it for real-time inference.',
      },
    },
    {
      number: 'PHASE 3',
      title: 'Deep Learning & NLP',
      duration: '2.5 MONTHS',
      monthlyFee: 'PKR 8,000 / month',
      fee: 'PKR 20,000 phase total',
      description:
        'Develop practical experience with neural networks, modern deep learning architectures, NLP, transformers, and model fine-tuning.',
      skills: [
        'Neural network architectures & Backpropagation',
        'Gradient descent & Optimization algorithms',
        'PyTorch Tensors, Autograd & Training loops',
        'Convolutional Neural Networks (CNNs)',
        'Transfer learning with pretrained vision models',
        'Recurrent Neural Networks (RNNs & LSTMs)',
        'Transformer architecture & Self-attention',
        'BERT & GPT model families',
        'Hugging Face Transformers & Datasets ecosystem',
        'Fine-tuning XLM-RoBERTa & BERT models',
        'Speech AI (Whisper ASR, TTS pipelines)',
      ],
      project: {
        title: 'Fine-Tuned Transformer System',
        description:
          'Fine-tune an open-source Transformer on specialized text/audio data, publish evaluation reports with model cards, and provide a runnable inference pipeline.',
      },
    },
    {
      number: 'PHASE 4',
      title: 'AI Systems & LLM Engineering',
      duration: '2 MONTHS',
      monthlyFee: 'PKR 10,000 / month',
      fee: 'PKR 20,000 phase total',
      description: 'Learn how modern language models are integrated into complete, resilient AI applications.',
      skills: [
        'Production FastAPI & Pydantic schemas',
        'Async endpoints & API versioning',
        'API authentication & Rate limiting',
        'LLM APIs (OpenAI, Anthropic, open weights)',
        'Structured outputs & JSON enforcement',
        'Token management & Prompt engineering (few-shot, CoT)',
        'LLM failure modes & Guardrails',
        'Text embeddings & Similarity search',
        'Vector databases (ChromaDB, Qdrant)',
        'Retrieval-Augmented Generation (RAG) pipelines',
        'RAG evaluation & Chunking strategies',
        'Function calling & Tool use',
        'AI Agents (ReAct framework, Memory systems)',
      ],
      project: {
        title: 'Complete Production AI Application',
        description:
          'A domain-specific RAG chatbot or NLP system with a FastAPI backend and interactive Streamlit UI, integrated with vector search and deployed publicly.',
      },
    },
    {
      number: 'PHASE 5',
      title: 'MLOps & Deployment',
      duration: '1.5 MONTHS',
      monthlyFee: 'PKR 10,000 / month',
      fee: 'PKR 15,000 phase total',
      description:
        'Learn how to move AI systems from development environments into reproducible, monitored, deployable cloud services.',
      skills: [
        'Docker containerization & Dockerfiles',
        'Multi-stage Docker builds & Image optimization',
        'Docker Compose & Multi-container services',
        'Persistent volumes & Networking',
        'GitHub Actions CI/CD pipelines',
        'Cloud deployment (Render, AWS, DigitalOcean)',
        'Health checks & Automated rollback',
        'Secrets management & Environment isolation',
        'Structured logging & Error tracking',
        'Prometheus metrics & Grafana dashboards',
        'Model monitoring in production',
      ],
      project: {
        title: 'Production-Grade Containerized AI System',
        description:
          'A fully containerized, cloud-deployed AI service with automated CI/CD pipelines, live health monitoring, Grafana metrics, and architectural documentation.',
      },
    },
  ],
  projectDriven: {
    heading: 'Every Phase Ends With Something You Can Show.',
    copy:
      'The program is designed around implementation rather than certificate collection. Each phase concludes with a substantial project that demonstrates the skills developed during that phase. Projects are developed, documented, and submitted through the INFERENCE Lab GitHub organization.\n\nBy the end of the program, participants have a progression of projects that demonstrates how their engineering ability developed from foundational programming to complete AI systems.',
  },
  engineeringWorkflow: {
    heading: 'Not Just Models. Complete Systems.',
    copy: 'The program emphasizes the complete AI application lifecycle. You learn to move from a problem and data to a model, then from a model to an application, API, deployment, monitoring, and documentation.',
    steps: [
      'PROBLEM',
      'DATA',
      'MODEL',
      'APPLICATION',
      'API',
      'DEPLOYMENT',
      'MONITORING',
      'IMPROVEMENT',
    ],
  },
  outcomes: {
    heading: 'What You Build Throughout the Program',
    items: [
      {
        title: 'Engineering Foundation',
        description: 'Professional Python, Git, SQL, PostgreSQL, and software engineering practices.',
      },
      {
        title: 'ML Portfolio',
        description: 'End-to-end machine learning projects with documented evaluation and reproducible workflows.',
      },
      {
        title: 'Deep Learning Experience',
        description: 'Practical experience with PyTorch, Transformers, NLP, and model fine-tuning.',
      },
      {
        title: 'LLM Applications',
        description: 'RAG systems, vector search, AI agents, tool use, and LLM-powered applications.',
      },
      {
        title: 'Deployment Experience',
        description: 'APIs, Docker, cloud deployment, CI/CD, monitoring, and production workflows.',
      },
      {
        title: 'Public Technical Portfolio',
        description: 'Projects, GitHub repositories, documentation, and deployed systems that demonstrate what you can build.',
      },
    ],
  },
  careers: {
    heading: 'Where Can This Lead?',
    intro:
      'The program is designed to provide a foundation for several technical career paths. Your eventual role will depend on your interests, portfolio, experience, and further specialization.',
    roles: [
      {
        title: 'AI Engineer',
        description: 'Build and integrate AI capabilities into complete software systems.',
      },
      {
        title: 'Machine Learning Engineer',
        description: 'Develop, evaluate, and deploy machine learning models and pipelines.',
      },
      {
        title: 'Applied AI Engineer',
        description: 'Apply modern AI techniques to practical products, services, and real-world problems.',
      },
      {
        title: 'Generative AI / LLM Engineer',
        description: 'Build applications using LLMs, RAG, embeddings, tools, and agents.',
      },
      {
        title: 'MLOps / ML Platform Engineer',
        description: 'Develop workflows and infrastructure for deploying, monitoring, and maintaining ML systems.',
      },
      {
        title: 'AI Software Developer',
        description: 'Combine software development with machine learning and generative AI capabilities.',
      },
    ],
    footnote:
      'The program develops a foundation that can support these career pathways. Related specializations may include NLP, computer vision, data science, AI research engineering, or AI-focused full-stack development.',
  },
  structure: {
    heading: 'How the Program Works',
    items: [
      {
        title: 'Live Sessions',
        description: 'Sessions are held every Saturday and Sunday, 1.5 hours each, covering concepts, demonstrations, and live code reviews.',
      },
      {
        title: 'Practical Assignments',
        description: 'Assignments are submitted through GitHub pull requests and form part of your public project portfolio.',
      },
      {
        title: 'Phase Gate Assessments',
        description: 'Students complete a practical gate assessment before progressing to each subsequent phase.',
      },
      {
        title: 'Engineering Mentorship',
        description: 'Mentorship focuses on implementation, debugging, architectural decisions, and production practices.',
      },
    ],
  },
  cohortModel: {
    heading: 'Small Cohorts. Closer Mentorship.',
    description:
      'Cohorts are intentionally kept small to maintain meaningful mentor interaction, personalized code reviews, and direct technical feedback.',
    badge: 'MAXIMUM 6–8 STUDENTS PER COHORT',
  },
  investment: {
    heading: 'Program Investment',
    intro:
      'The program is divided into six phases. Students pay phase-by-phase rather than committing to the full program upfront.',
    phases: [
      {
        phase: 'Phase 0 · Engineering Foundations',
        duration: '2 months',
        monthlyFee: 'PKR 6,000',
        totalFee: 'PKR 12,000',
      },
      {
        phase: 'Phase 1 · Data Engineering & Visualization',
        duration: '2 months',
        monthlyFee: 'PKR 6,000',
        totalFee: 'PKR 12,000',
      },
      {
        phase: 'Phase 2 · Machine Learning Engineering',
        duration: '2.5 months',
        monthlyFee: 'PKR 8,000',
        totalFee: 'PKR 20,000',
      },
      {
        phase: 'Phase 3 · Deep Learning & NLP',
        duration: '2.5 months',
        monthlyFee: 'PKR 8,000',
        totalFee: 'PKR 20,000',
      },
      {
        phase: 'Phase 4 · AI Systems & LLM Engineering',
        duration: '2 months',
        monthlyFee: 'PKR 10,000',
        totalFee: 'PKR 20,000',
      },
      {
        phase: 'Phase 5 · MLOps & Deployment',
        duration: '1.5 months',
        monthlyFee: 'PKR 10,000',
        totalFee: 'PKR 15,000',
      },
    ],
    fullProgramTotal: 'PKR 99,000',
    fullProgramDuration: '~12.5 months',
    paymentNote:
      'Fees are due at the start of each month. Payment is accepted through JazzCash, Easypaisa, or direct bank transfer. Payment plans discussed during the application interview.',
  },
  policies: [
    {
      title: 'Progression & Gate Assessments',
      content:
        'Students must pass a practical gate assessment at the conclusion of each phase before advancing to the next phase.',
    },
    {
      title: 'Attendance & Session Recordings',
      content:
        'Live sessions are held every Saturday and Sunday. Recordings are provided for missed sessions. Consistent absence beyond two consecutive sessions may result in suspension.',
    },
    {
      title: 'Assignment Submissions',
      content:
        'Assignments are submitted exclusively through GitHub pull requests to the INFERENCE Lab organization. Email submissions are not accepted.',
    },
    {
      title: 'Refund Policy',
      content:
        'No refund is available after the second session of a phase. Each phase is billed independently.',
    },
    {
      title: 'Certificates & Verification',
      content:
        'A completion certificate is issued at the end of each phase. Certificates include a QR-verified link to the student’s deployed project and GitHub repository.',
    },
  ],
  faqs: [
    {
      question: 'Do I need programming experience?',
      answer:
        'Yes. Basic Python syntax and programming fundamentals are expected before entering the program.',
    },
    {
      question: 'Is this a machine learning course?',
      answer:
        'It includes machine learning, but the program is broader. It progresses from software and data foundations through machine learning, deep learning, NLP, LLM engineering, and deployment.',
    },
    {
      question: 'Will I learn LLMs and AI agents?',
      answer:
        'Yes. The program includes LLM APIs, embeddings, vector databases, RAG, tool use, and AI agents.',
    },
    {
      question: 'Will I deploy my projects?',
      answer:
        'Yes. Deployment is integrated into the program, and each phase is designed around a practical project outcome.',
    },
    {
      question: 'Is this suitable for someone who has never coded?',
      answer:
        'No. AI Builder is the better starting point for complete beginners. Applied AI Engineering assumes basic programming foundations.',
    },
    {
      question: 'Is employment guaranteed?',
      answer:
        'No. The program develops technical skills, project experience, and a portfolio, but employment depends on the learner’s performance, experience, specialization, and the opportunities they pursue.',
    },
    {
      question: 'Can AI Builder graduates join this program?',
      answer:
        'Yes. AI Builder can serve as a practical foundation, although students should still meet the programming prerequisites for Applied AI Engineering.',
    },
  ],
}
