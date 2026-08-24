export interface ProgramPhase {
  number: string
  title: string
  duration?: string
  fee?: string
  monthlyFee?: string
  description: string
  skills: string[]
  project: {
    title: string
    description: string
    deliverables?: string[]
  }
}

export interface ProgramAudience {
  title: string
  description: string
}

export interface ProgramCapability {
  title: string
  description: string
}

export interface CareerRole {
  title: string
  description: string
}

export interface ProgramFaq {
  question: string
  answer: string
}

export interface PaymentOption {
  option: string
  totalInvestment: string
  paymentTiming: string
  flexibility: string
  savings: string
}

export interface AIBuilderProgramData {
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
    entryLevel: string
  }
  whatIs: {
    heading: string
    paragraphs: string[]
  }
  audience: {
    heading: string
    intro: string
    cards: ProgramAudience[]
  }
  capabilities: {
    heading: string
    items: ProgramCapability[]
  }
  phases: ProgramPhase[]
  weeklyStructure: {
    heading: string
    intro: string
    schedule: Array<{
      day: string
      type: string
      description: string
    }>
  }
  outcomes: {
    heading: string
    cards: Array<{
      title: string
      description: string
    }>
  }
  demoDay: {
    heading: string
    description: string
    requirements: string[]
  }
  careers: {
    heading: string
    intro: string
    roles: string[]
    nextStepText: string
  }
  investment: {
    heading: string
    intro: string
    phases: Array<{
      phase: string
      whatYouLearn?: string
      duration: string
      monthlyFee: string
      fee: string
      totalFee?: string
      note?: string
    }>
    phaseTotal: string
    bundleFee: string
    bundleDiscountText: string
    notes: string[]
    paymentOptions?: PaymentOption[]
    whatIsIncluded?: string[]
    howToEnroll?: Array<{
      step: string
      text: string
    }>
  }
  faqs: ProgramFaq[]
}

export const aiBuilderData: AIBuilderProgramData = {
  id: 'ai-builder',
  slug: 'ai-builder',
  title: 'AI Builder Program',
  tagline: 'Build and ship a real AI-powered product.',
  label: '01 · BEGINNER-FRIENDLY',
  heroDescription:
    'A practical, beginner-friendly program where you learn by building. Start with Python, build a web application, add useful AI capabilities, deploy your product online, and learn how to present your work beyond the classroom.',
  formUrl: 'https://forms.gle/S2rzk2vfzVFpNhM69',
  metadata: {
    duration: '5.5 Months',
    phasesCount: '6 Phases',
    format: 'Project-Based',
    mentorship: 'Live Mentorship',
    entryLevel: 'Beginner-Friendly',
  },
  whatIs: {
    heading: 'What Is AI Builder?',
    paragraphs: [
      "AI Builder is INFERENCE Lab's beginner-friendly program for people who want to learn how to build real AI-powered products.",
      "You don't start by studying advanced machine learning theory. You start by making something work.",
      "You learn Python, build a backend, create a frontend, connect AI models to your application, add useful features such as document Q&A and AI assistants, deploy your application, and learn how to present and take your work into the real world.",
      "The goal is not to complete a collection of tutorials. The goal is to finish with something you actually built, understand, and can demonstrate.",
    ],
  },
  audience: {
    heading: 'Who Is AI Builder For?',
    intro: 'AI Builder is designed for learners who want a practical entry point into software and AI development.',
    cards: [
      {
        title: 'University & College Students',
        description: 'Build practical skills alongside your degree and create projects you can actually show.',
      },
      {
        title: 'School Students & Recent Graduates',
        description: 'A structured starting point for learners who are curious about programming, software, and AI.',
      },
      {
        title: 'Teachers & Professionals',
        description: 'Develop practical familiarity with modern AI tools and learn how AI-powered applications are built.',
      },
      {
        title: 'Aspiring Freelancers',
        description: 'Build a portfolio and learn how to present AI development skills to potential clients.',
      },
      {
        title: 'Curious Beginners',
        description: "If you've tried learning to code through disconnected tutorials, this program gives you something concrete to build toward.",
      },
    ],
  },
  capabilities: {
    heading: 'What You Will Be Able to Build',
    items: [
      {
        title: 'Python Tools',
        description: 'Write Python programs that process data and solve practical problems.',
      },
      {
        title: 'Web Applications',
        description: 'Build applications with a backend, database, authentication, and APIs.',
      },
      {
        title: 'AI Features',
        description: 'Add summarization, classification, content generation, document Q&A, and AI assistants.',
      },
      {
        title: 'RAG Applications',
        description: 'Connect AI applications to your own documents and data using retrieval techniques.',
      },
      {
        title: 'Deployed Products',
        description: 'Take your application from your computer to a live URL on the internet.',
      },
      {
        title: 'Portfolio & Presentation',
        description: 'Document your work, present your product, and build a public technical portfolio.',
      },
    ],
  },
  phases: [
    {
      number: 'PHASE 0',
      title: 'Learning to Talk to a Computer',
      duration: '1.5 Months / 6 Weeks',
      monthlyFee: 'PKR 5,000 / mo',
      fee: 'PKR 7,500',
      description:
        'Start with Python, your development environment, Git, and AI-assisted coding. Build your first useful tool. Lowest entry point — intentionally priced to lower the barrier for complete beginners.',
      skills: [
        'Python Fundamentals',
        'Git & GitHub',
        'Development Environment Setup',
        'File Handling & Scripting',
        'Clean Programming Practices',
        'AI-Assisted Coding (Cursor/Copilot)',
      ],
      project: {
        title: 'Your First Python Tool',
        description:
          'A functional, well-documented Python CLI utility with version control on GitHub solving a real file or data manipulation problem.',
      },
    },
    {
      number: 'PHASE 1',
      title: 'Building Something People Can Use',
      duration: '1.5 Months / 6 Weeks',
      monthlyFee: 'PKR 5,000 / mo',
      fee: 'PKR 7,500',
      description:
        'Move from standalone Python scripts to a usable web application with a backend, database, authentication, and APIs. You now have your first live web API. Commitment step up as scope increases.',
      skills: [
        'FastAPI Framework',
        'Backend Architecture',
        'Databases & SQL',
        'User Authentication & JWT',
        'RESTful API Design',
        'API Testing (Postman/Pytest)',
        'Structured GitHub Workflows',
      ],
      project: {
        title: 'Your First Web Application Backend',
        description:
          'A complete, authenticated REST API backed by a relational database with data validation, CRUD endpoints, and thorough documentation.',
      },
    },
    {
      number: 'PHASE 2',
      title: 'Making It Look Real',
      duration: '1 Month / 4 Weeks',
      monthlyFee: 'PKR 5,000 / mo',
      fee: 'PKR 5,000',
      description:
        'Build the user-facing side of your application and connect it cleanly to your backend. Shortest paid phase. Focused on frontend — 4 weeks to get a real UI built and connected.',
      skills: [
        'HTML5 & Modern CSS',
        'JavaScript Fundamentals',
        'React & Component Architecture',
        'Vite Tooling',
        'AI-Assisted UI Development',
        'Backend API Integration',
        'Responsive Web Design',
      ],
      project: {
        title: 'A Complete Frontend for Your Application',
        description:
          'A multi-screen React application connected to your live backend API with auth states, loading states, and error handling.',
      },
    },
    {
      number: 'PHASE 3',
      title: 'Adding the AI Brain',
      duration: '1.5 Months / 6 Weeks',
      monthlyFee: 'PKR 7,000 / mo',
      fee: 'PKR 10,500',
      description:
        'Connect real AI models to your application and build features that solve useful problems rather than adding AI for its own sake. Covers AI APIs with real usage costs (OpenAI, Anthropic), RAG pipelines, and agents.',
      skills: [
        'OpenAI & Anthropic APIs',
        'Prompt Engineering',
        'Structured Outputs & JSON Mode',
        'Retrieval-Augmented Generation (RAG)',
        'Text Embeddings',
        'Vector Databases (ChromaDB)',
        'Document Q&A Pipelines',
        'Function Calling & Tool Use',
        'AI Assistants & Reliability',
        'AI Cost & Token Awareness',
      ],
      project: {
        title: 'An AI-Powered Feature Inside Your Product',
        description:
          'A production-grade AI feature inside your web app (such as Document Q&A, smart search, automated summarization, or an interactive assistant).',
      },
    },
    {
      number: 'PHASE 4',
      title: 'Shipping It',
      duration: '0.75 Months / 3 Weeks',
      monthlyFee: 'PKR 7,000 / mo',
      fee: 'PKR 5,250',
      description:
        'Move from "it works on my laptop" to a real product that people can access online across the internet. Production infrastructure, cloud deployment, custom domains, and going live.',
      skills: [
        'Production Configuration',
        'Environment Variables & Secrets',
        'Web Security Fundamentals',
        'Cloud Backend Deployment',
        'Frontend CDN Deployment',
        'Custom Domains & HTTPS',
        'Managed Cloud Databases',
        'Basic CI/CD Automation',
      ],
      project: {
        title: 'Your Complete Product Live on the Internet',
        description:
          'A deployed, fully functional product with frontend, backend, database, and AI feature operating smoothly on live URLs.',
      },
    },
    {
      number: 'PHASE 5',
      title: 'Making It Matter',
      duration: '0.75 Months / 3 Weeks',
      monthlyFee: 'PKR 7,000 / mo',
      fee: 'PKR 5,250',
      description:
        'Learn how to present your product, build a public presence, understand basic analytics, and explore what you can do with your skills. Portfolio, freelancing strategy, Demo Day. Mentorship intensity at its highest.',
      skills: [
        'Product Presentation & Storytelling',
        'Landing Page Optimization',
        'Basic Product Analytics',
        'GitHub Portfolio Showcase',
        'Freelancing Fundamentals',
        'Project Pricing & Scoping',
        'Client Proposals',
        'LinkedIn Technical Positioning',
        'Live Demo Delivery',
      ],
      project: {
        title: 'A Public Product Portfolio + Demo Day',
        description:
          'A live public presentation showcasing your deployed product, key architecture decisions, and portfolio presence.',
      },
    },
  ],
  weeklyStructure: {
    heading: 'How the Program Works',
    intro: 'Every week combines live instruction, guided practice, and independent project work.',
    schedule: [
      {
        day: 'Saturday',
        type: 'CONCEPT SESSION',
        description: 'A new topic is introduced through explanation, demonstration, and live coding with mentors.',
      },
      {
        day: 'Sunday',
        type: 'PRACTICE SESSION',
        description: 'Students work through problems, build features, ask questions, and receive direct technical guidance.',
      },
      {
        day: 'Monday – Friday',
        type: 'BUILD & SUBMIT',
        description: 'Students continue working independently, implementing assignments, and submitting code via GitHub pull requests.',
      },
    ],
  },
  outcomes: {
    heading: 'What You Leave With',
    cards: [
      {
        title: 'A Live Product',
        description: 'A real AI-powered application deployed and accessible online.',
      },
      {
        title: 'GitHub Portfolio',
        description: 'Public repositories showing your code, commit history, and development progress.',
      },
      {
        title: 'AI Development Experience',
        description: 'Practical experience integrating LLMs, embeddings, and RAG into software applications.',
      },
      {
        title: 'Deployment Experience',
        description: 'Experience taking an application from local development to a live production URL.',
      },
      {
        title: 'A Clearer Next Step',
        description: 'A strong foundation for freelancing, employment, further study, product development, or deeper AI engineering.',
      },
    ],
  },
  demoDay: {
    heading: 'Finish by Showing What You Built',
    description:
      'The program concludes with a live demonstration of your deployed product. You present what you built, explain the problem it solves, demonstrate an AI feature, describe an important technical decision, and explain what you want to do next.',
    requirements: [
      'Live demonstration of your deployed product',
      'Clear explanation of the problem solved and architecture',
      'Demonstration of the integrated AI feature (e.g. RAG, Assistant)',
      'Review of an important technical trade-off made during development',
      'Public GitHub repository and documented portfolio',
    ],
  },
  careers: {
    heading: 'Where Can This Take You?',
    intro:
      'AI Builder is designed as a practical starting point. It can help you develop the foundation needed to pursue opportunities in AI-powered software development, freelancing, product building, or further technical study.',
    roles: [
      'AI Application Developer',
      'AI Product Builder',
      'Freelance AI Developer',
      'Junior Software Developer',
      'Generative AI Application Builder',
    ],
    nextStepText:
      'For learners who want deeper machine learning, deep learning, and advanced AI engineering skills, the Applied AI Engineering Program provides a natural next stage.',
  },
  investment: {
    heading: 'Fee Structure & Pricing Guide',
    intro:
      'Billing is per phase. You commit to one phase at a time. Pay when you join each phase — not the full program upfront. Continuation is confirmed after each capstone review.',
    phases: [
      {
        phase: 'Phase 0',
        whatYouLearn: 'Learning to Talk to a Computer',
        duration: '1.5 months / 6 weeks',
        monthlyFee: 'PKR 5,000/mo',
        fee: 'PKR 7,500',
        totalFee: 'PKR 7,500',
        note: 'Intentionally the lowest entry point at PKR 5,000/month. Once a student finishes Phase 0 and builds their first tool, continuing becomes an easy yes.',
      },
      {
        phase: 'Phase 1',
        whatYouLearn: 'Building Something People Can Use',
        duration: '1.5 months / 6 weeks',
        monthlyFee: 'PKR 5,000/mo',
        fee: 'PKR 7,500',
        totalFee: 'PKR 7,500',
        note: 'You now have your first live web API. Commitment step up as scope increases.',
      },
      {
        phase: 'Phase 2',
        whatYouLearn: 'Making It Look Real',
        duration: '1 month / 4 weeks',
        monthlyFee: 'PKR 5,000/mo',
        fee: 'PKR 5,000',
        totalFee: 'PKR 5,000',
        note: 'Shortest paid phase. Focused on frontend — 4 weeks to get a real UI built and connected.',
      },
      {
        phase: 'Phase 3',
        whatYouLearn: 'Adding the AI Brain',
        duration: '1.5 months / 6 weeks',
        monthlyFee: 'PKR 7,000/mo',
        fee: 'PKR 10,500',
        totalFee: 'PKR 10,500',
        note: 'Covers AI APIs with real usage costs (OpenAI, Anthropic), RAG pipelines, and agents.',
      },
      {
        phase: 'Phase 4',
        whatYouLearn: 'Shipping It',
        duration: '0.75 months / 3 weeks',
        monthlyFee: 'PKR 7,000/mo',
        fee: 'PKR 5,250',
        totalFee: 'PKR 5,250',
        note: 'Production infrastructure, cloud deployment, custom domains, and going live.',
      },
      {
        phase: 'Phase 5',
        whatYouLearn: 'Making It Matter',
        duration: '0.75 months / 3 weeks',
        monthlyFee: 'PKR 7,000/mo',
        fee: 'PKR 5,250',
        totalFee: 'PKR 5,250',
        note: 'Portfolio, freelancing strategy, Demo Day. Mentorship intensity at its highest.',
      },
    ],
    phaseTotal: 'PKR 41,000',
    bundleFee: 'PKR 36,900',
    bundleDiscountText: '⭐ FULL PROGRAM BUNDLE — Save PKR 4,100: PKR 36,900 one payment · full 5.5-month access · 10% discount',
    notes: [
      'Phase 0 note: Intentionally the lowest entry point at PKR 5,000/month. Once a student finishes Phase 0 and builds their first tool, continuing becomes an easy yes.',
      'Phases 3–5 note: Priced higher because they cover production infrastructure, and mentorship intensity increases.',
      'Bundle note: PKR 36,900 — saves PKR 4,100 vs phase-by-phase. One clean number, easy to communicate.',
      'Billing is per phase. You commit to one phase at a time. Pay when you join each phase — not the full program upfront. Continuation is confirmed after each capstone review.',
    ],
    paymentOptions: [
      {
        option: 'Phase-by-Phase',
        totalInvestment: 'PKR 41,000',
        paymentTiming: 'Pay before each phase',
        flexibility: 'Can pause between phases',
        savings: '—',
      },
      {
        option: 'Full Bundle',
        totalInvestment: 'PKR 36,900',
        paymentTiming: 'Pay once upfront',
        flexibility: 'Full commitment required',
        savings: 'PKR 4,100 saved (10%)',
      },
    ],
    whatIsIncluded: [
      '2 live mentor-led sessions per week (Saturday + Sunday, 1 hour each)',
      'Weekly assignments reviewed via GitHub',
      'Dedicated mentor support for debugging and questions',
      'Access to all course materials and code examples',
      'End-of-phase capstone review with written feedback',
      'Certificate of completion upon finishing Phase 5 (Demo Day)',
    ],
    howToEnroll: [
      {
        step: 'Step 1',
        text: 'Contact us at contact@inference-lab.org or visit inference-lab.org to express interest.',
      },
      {
        step: 'Step 2',
        text: 'Attend a free 20-minute onboarding call. We confirm fit and answer any questions.',
      },
      {
        step: 'Step 3',
        text: 'Pay Phase 0 fee (or full bundle). Receive your welcome kit and join the first session.',
      },
    ],
  },
  faqs: [
    {
      question: 'Do I need prior programming experience?',
      answer:
        'No. AI Builder is designed as a beginner-friendly starting point and does not assume any prior coding or technical background.',
    },
    {
      question: 'Can I join mid-program?',
      answer:
        'No. The program is sequential — each phase builds on the previous one. Students must start from Phase 0.',
    },
    {
      question: 'What if I need to pause between phases?',
      answer:
        'Phase-by-phase students may take a break between phases. Full bundle students have 8 months from purchase to complete the program.',
    },
    {
      question: 'Is there a refund policy?',
      answer:
        'Phase fees are non-refundable once the phase has begun. Students who do not meet capstone criteria will not proceed to the next phase and will be offered remedial sessions.',
    },
    {
      question: 'Is this only about AI?',
      answer:
        'No. You first learn the core software development foundations needed to build functional applications (Python, backend, frontend, database), and then progressively add real AI capabilities.',
    },
    {
      question: 'Will I build a real product?',
      answer:
        'Yes. The entire program is structured around progressively building a real software product and ends with a live deployed demonstration on Demo Day.',
    },
    {
      question: 'Will my project be deployed online?',
      answer:
        'Yes. Deployment is a dedicated phase of the program where your application is deployed to production cloud infrastructure with a public URL.',
    },
    {
      question: 'Will I learn RAG and AI assistants?',
      answer:
        'Yes. The AI phase covers Retrieval-Augmented Generation (RAG), document Q&A, text embeddings, vector databases (ChromaDB), function calling, and building interactive AI assistants.',
    },
    {
      question: 'Is a job guaranteed?',
      answer:
        'No. The program develops practical skills and portfolio experience but does not guarantee employment, clients, or income.',
    },
    {
      question: 'Can I continue to Applied AI Engineering later?',
      answer:
        'Yes. AI Builder can provide a practical foundation for learners who later want to pursue deeper machine learning, deep learning, and advanced AI engineering through the Applied AI Engineering program.',
    },
  ],
}
