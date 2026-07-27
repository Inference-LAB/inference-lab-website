import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionLabel } from "@/components/section-label";
import { FounderProfilePanel } from "@/components/founder-profile-panel";
import { TeamGrid, type TeamMember } from "@/components/team-grid";
export const metadata: Metadata = {
  title: "About INFERENCE Lab",
  description:
    "Learn about Muhammad Khubaib Ahmad, Founder & Director of INFERENCE Lab, and meet the researchers and engineers building AI research, engineering, and education.",
  alternates: {
    canonical: "https://www.inference-lab.org/about",
  },
  openGraph: {
    title: "About · INFERENCE Lab",
    description: "Meet the Founder and Team behind INFERENCE Lab.",
    url: "https://www.inference-lab.org/about",
  },
};

const profile = [
  {
    k: "Bio",
    v: "Muhammad Khubaib Ahmad is an AI Research Engineer and Founder of INFERENCE Lab, working at the intersection of artificial intelligence research and practical AI systems. His work focuses on machine learning, natural language processing, speech intelligence, and low-resource AI, with a strong emphasis on rigorous research, reproducibility, and real-world impact. He also serves as a peer reviewer for the Journal of Voice.",
  },
  {
    k: "Contribution to INFERENCE Lab",
    v: "As the Founder of INFERENCE Lab, Khubaib leads the labs research direction and technical vision, driving work across AI research, machine learning, and applied intelligent systems. He contributes to the development of research projects, datasets, models, and open-source resources while fostering a culture of rigorous experimentation, reproducibility, and practical education and innovation.",
  },
];

const focusAreas = [
  "Speech & Language Intelligence",
  "LLM Engineering",
  "Contrastive Learning",
  "Applied ML Systems",
  "MLOps & Deployment",
  "AI Engineering",
  "Applied AI Research",
  "Speech AI",
  "AI in Healthcare",
  "Low-Resource NLP",
  "Generative AI",
  "AI Systems Engineering",
  "AI Product Innovation",
];

// const team = [
//   {
//     name: 'Muzammil Shadab',
//     role: 'Research and Mentorship Associate',
//     bio: 'Guides new researchers through the lab\u2019s onboarding track and works across active research projects.',
//     photo: '/team/muzamil.png',
//   },
//   {
//     name: 'Kinza Yasir',
//     role: 'Web Engineer',
//     bio: 'Builds and maintains the lab\u2019s web presence, from the public site to internal tooling.',
//     photo: '/team/female.png',
//   },
//   {
//     name: 'Khadija Faisal',
//     role: 'Operations and Research Associate',
//     bio: 'Keeps the lab\u2019s day-to-day running and supports research coordination across teams.',
//     photo: '/team/female.png',
//   },
// ] satisfies {
//   name: string
//   role: string
//   bio: string
//   photo?: string
// }[]
const team: TeamMember[] = [
  {
    name: "Muzammil Shadab",
    role: "Research and Mentorship Associate",
    bio: "Guides new researchers through the lab\u2019s onboarding track and works across active research projects.",
    fullBio:
      "Muzammil is a Research and Mentorship Associate at INFERENCE Lab, working across generative AI research, AI model development, automation workflows, and AI-driven business solutions. He is passionate about helping students and emerging AI practitioners build practical skills through mentorship, workshops, and hands-on learning. His work focuses on exploring emerging AI technologies and translating them into practical, scalable solutions for real-world challenges.",
    contribution:
      "As a Research and Mentorship Associate, Muzammil contributes to the lab\u2019s research and educational initiatives by supporting generative AI research, developing AI models and intelligent automation workflows, and exploring AI-driven solutions for real-world business challenges. He also plays an active role in mentoring students, conducting technical workshops, and helping learners develop practical expertise in AI through structured guidance and hands-on projects.",
    focusAreas: [
      "Generative AI Research",
      "AI Model Development",
      "AI Automation",
      "Workflow Automation",
      "AI-Driven Business Solutions",
      "Student Mentorship",
      "Technical Workshops",
      "Applied AI",
    ],
    photo: "/team/muzamil.png",
  },
  {
    name: "Kinza Yasir",
    role: "Web Engineer",
    bio: "Builds and maintains the lab\u2019s web presence, from the public site to internal tooling.",
    fullBio:
      "Kinza is a Web Engineer at INFERENCE Lab, responsible for maintaining and evolving the lab\u2019s official online presence. Her work spans UI/UX design, web development, and application development, with a focus on creating intuitive, accessible, and reliable digital experiences. She ensures the lab\u2019s website remains current, functional, and aligned with its evolving research and organizational activities.",
    contribution:
      "As a Web Engineer, Kinza manages and maintains the lab\u2019s official website, keeping its content, structure, and digital presence up to date. She contributes to the design and development of user-focused web experiences and applications, helping communicate the lab\u2019s research, projects, team, and initiatives effectively. Her work ensures that INFERENCE Lab maintains a professional, accessible, and engaging presence across its digital platforms.",
    focusAreas: [
      "UI/UX Design",
      "Web Development",
      "Application Development",
      "Frontend Engineering",
      "Digital Experiences",
    ],
    photo: "/team/female.png",
  },
  {
    name: "Khadija Faisal",
    role: "Operations and Research Associate",
    bio: "Keeps the lab\u2019s day-to-day running and supports research coordination across teams.",
    fullBio:
      "Khadija is an Operations & Research Associate at INFERENCE Lab, contributing to healthcare AI research, organizational operations, analytics, and research-driven initiatives. She works at the intersection of technology, coordination, and research, supporting the lab\u2019s day-to-day operations while helping translate data and insights into informed decisions. She is also actively involved in guiding students and fostering a structured, collaborative learning environment.",
    contribution:
      "As an Operations & Research Associate, Khadija supports the lab\u2019s healthcare AI initiatives while managing key organizational operations, analytics, and reporting activities. She plays an important role in coordinating and leading student cohorts, providing technical guidance, and ensuring the smooth execution of educational and research programs. Her contributions help strengthen the lab\u2019s operational foundation, support student development, and enable the effective delivery of research and learning initiatives.",
    focusAreas: [
      "Healthcare AI",
      "AI Research",
      "Operations & Coordination",
      "Analytics & Reporting",
      "Cohort Management",
      "Student Leadership",
      "Technical Mentorship",
      "Program Management",
    ],
    photo: "/team/female.png",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Avatar({
  name,
  photo,
  size = 96,
}: {
  name: string;
  photo?: string;
  size?: number;
}) {
  return (
    <div
      className="
        group
        relative
        shrink-0
        overflow-hidden
        rounded-full
        border
        border-border
        bg-muted/40
        ring-4
        ring-background
        shadow-md
        transition-all
        duration-300
        ease-out
        hover:-translate-y-2
        hover:scale-105
        hover:shadow-2xl
        hover:shadow-black/20
      "
      style={{ width: size, height: size }}
    >
      {photo ? (
        <Image
          src={photo}
          alt={name}
          fill
          sizes={`${size}px`}
          className="
            object-cover
            transition-transform
            duration-500
            ease-out
            group-hover:scale-110
          "
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-grid">
          <span className="font-mono text-xl font-semibold tracking-tight text-brand">
            {initials(name)}
          </span>
        </div>
      )}
    </div>
  );
}
export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Founder Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />

          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20">
            <div className="grid items-start gap-10 sm:grid-cols-[1fr_auto]">
              <div>
                <SectionLabel>Founder &amp; Director</SectionLabel>

                <h1
  className="
    mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight
    sm:text-5xl lg:text-6xl
    transition-all duration-300 ease-out
    hover:text-brand
    hover:drop-shadow-[0_8px_24px_rgba(59,130,246,0.35)]
    hover:-translate-y-1
    cursor-default
  "
>
  Muhammad Khubaib Ahmad
</h1>

                <p
  className="
         mt-3
    font-mono
    text-sm
    uppercase
    tracking-widest
    text-brand
    transition-all
    duration-300
    ease-out
    hover:text-brand/90
    hover:drop-shadow-[0_2px_8px_rgba(59,130,246,0.25)]
    hover:-translate-y-0.5
    cursor-default
  "
>
  AI Research Engineer
</p>

                <p className="
    mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground
    rounded-2xl
    bg-muted/30
    px-5 py-4
    border border-border/60
    shadow-md
    transition-all duration-300 ease-out
    hover:-translate-y-1
    hover:scale-[1.02]
    hover:shadow-xl
    hover:bg-muted/40
    hover:border-brand/30
    cursor-default
  ">
                  INFERENCE Lab exists because most AI work sits on one of three
                  sides of a divide: research that never leaves the notebook,
                  engineering that ships without rigor, or AI training that
                  never reaches industry-level work. The lab treats architecture
                  decisions, evaluation, and deployment as one continuous
                  discipline—not three separate handoffs.
                </p>
              </div>
              <div className="justify-self-end lg:mr-8 xl:mr-12 lg:mt-12 xl:mt-16">
                <Avatar
                  name="Muhammad Khubaib Ahmad"
                  photo="/profile-images/founder-photo.png"
                  size={220}
                />
              </div>
            </div>

            <FounderProfilePanel profile={profile} focusAreas={focusAreas} />
          </div>
        </section>

        {/* Team Section */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <SectionLabel>Our Team</SectionLabel>

            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Meet the people behind INFERENCE Lab
            </h2>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Researchers and engineers working across artificial intelligence,
              software engineering, and research operations to transform
              academic ideas into production-ready systems and impactful
              education.
            </p>
          </div>

          {/* <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="flex flex-col rounded-lg border border-border bg-background p-6 transition-colors hover:border-brand/40"
              >
                <div className="flex items-center gap-4">
                  <Avatar name={member.name} photo={member.photo} />

                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-semibold tracking-tight">
                      {member.name}
                    </h3>

                    <p className="mt-1 font-mono text-xs uppercase tracking-widest text-brand">
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </article>
            ))}
          </div> */}
          <TeamGrid team={team} />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
