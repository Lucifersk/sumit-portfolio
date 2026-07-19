"use client";

import { FormEvent, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Download,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MessageSquareText,
  Send,
  Smartphone,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const navItems = ["About", "Skills", "Projects", "Journey", "Contact"];

const skills = [
  { name: "Java", mark: "JV", level: "Comfortable", usage: "4 repos", detail: "Strongest project-backed language across file handling, chat app, REST API, and recommendation tasks.", strength: 84 },
  { name: "Next.js & React", mark: "NX", level: "Building with it", usage: "3 apps", detail: "Used to build deployed web projects including ChaosOS, StudyWiki AI, and StudyFlow.", strength: 76 },
  { name: "TypeScript", mark: "TS", level: "Learning actively", usage: "3 TS repos", detail: "Used through Next.js project structure; currently strengthening TypeScript fundamentals.", strength: 56 },
  { name: "CSS", mark: "CSS", level: "UI styling", usage: "Project UI", detail: "Used for responsive layouts, visual polish, spacing, and interface styling.", strength: 64 },
  { name: "Git & GitHub", mark: "GT", level: "Daily workflow", usage: "7 repos", detail: "Used for version control, repository hosting, and sharing completed projects publicly.", strength: 82 },
  { name: "JavaScript", mark: "JS", level: "Core basics", usage: "Support code", detail: "Used for frontend logic and as a base for learning React and TypeScript projects.", strength: 58 },
  { name: "HTML", mark: "HTML", level: "Frontend base", usage: "Markup", detail: "Used for page structure and frontend fundamentals across web development work.", strength: 55 },
  { name: "REST APIs", mark: "API", level: "Practicing", usage: "1 repo", detail: "Applied in the REST API task while learning backend request-response flow.", strength: 52 },
  { name: "Python", mark: "PY", level: "Certified", usage: "Learning", detail: "Certified foundation with ongoing practice; not shown as a primary project language.", strength: 44 },
  { name: "AI Integration", mark: "AI", level: "Exploring", usage: "2 ideas", detail: "Explored through ChaosOS and StudyWiki AI concepts with practical product thinking.", strength: 50 },
];

const projects = [
  {
    number: "01",
    name: "ChaosOS",
    kind: "AI / SYSTEMS",
    description:
      "An AI-powered operating system concept designed around persistent memory, adaptive planning, and context-aware assistance.",
    technologies: ["TypeScript", "Next.js", "AI", "CSS"],
    accent: "violet",
    symbol: "C/OS",
    logo: "/projects/chaosos-logo.png",
    github: "https://github.com/Lucifersk/chaosos.git",
    live: "https://chaosos.vercel.app/",
    liveLabel: "Live demo",
  },
  {
    number: "02",
    name: "StudyWiki AI",
    kind: "EDTECH / AI",
    description:
      "An AI-assisted educational platform for organizing, discovering, and sharing study resources with a cleaner learning workflow.",
    technologies: ["TypeScript", "Next.js", "AI", "CSS"],
    accent: "cyan",
    symbol: "S/AI",
    logo: "/projects/studywiki-ai-logo.png",
    github: "https://github.com/Lucifersk/studywiki-ai.git",
    live: "https://studywiki-ai.vercel.app/",
    liveLabel: "Live demo",
  },
  {
    number: "03",
    name: "StudyFlow",
    kind: "PRODUCTIVITY / STUDY",
    description:
      "A study productivity project focused on helping students structure learning tasks, resources, and progress more effectively.",
    technologies: ["TypeScript", "CSS", "HTML", "JavaScript"],
    accent: "indigo",
    symbol: "S/F",
    logo: "/projects/studyflow-logo.png",
    github: "https://github.com/Lucifersk/StudyFlow.git",
    live: "https://study-flow-psi-seven.vercel.app/",
    liveLabel: "Live demo",
  },
  {
    number: "04",
    name: "Book Recommendation System",
    kind: "JAVA / RECOMMENDATION",
    description:
      "A recommendation-system project that suggests books using software logic, data handling, and user-focused filtering ideas.",
    technologies: ["Java", "Algorithms", "Data Handling", "OOP"],
    accent: "violet",
    symbol: "B/R",
    github: "https://github.com/Lucifersk/BookRecommendationSystemtask4.git",
    live: "#contact",
    liveLabel: "Discuss demo",
  },
  {
    number: "05",
    name: "Chat Application",
    kind: "JAVA / NETWORKING",
    description:
      "A chat application task demonstrating client-server communication, message flow, and practical backend programming concepts.",
    technologies: ["Java", "Sockets", "OOP", "Networking"],
    accent: "cyan",
    symbol: "C/A",
    github: "https://github.com/Lucifersk/ChatApplicationTask3.git",
    live: "#contact",
    liveLabel: "Discuss demo",
  },
  {
    number: "06",
    name: "REST API Task",
    kind: "BACKEND / API",
    description:
      "A backend API project focused on RESTful endpoints, structured request handling, and clean server-side application flow.",
    technologies: ["Java", "REST APIs", "Backend", "JSON"],
    accent: "indigo",
    symbol: "API",
    github: "https://github.com/Lucifersk/RestAPItask2.git",
    live: "#contact",
    liveLabel: "Discuss demo",
  },
  {
    number: "07",
    name: "File Handling Utility",
    kind: "JAVA / UTILITIES",
    description:
      "A utility project built around file operations, input/output handling, and reliable Java programming fundamentals.",
    technologies: ["Java", "File I/O", "OOP", "Utilities"],
    accent: "violet",
    symbol: "F/H",
    github: "https://github.com/Lucifersk/filehandlingutilitytask1.git",
    live: "#contact",
    liveLabel: "Discuss demo",
  },
];

const journey = [
  {
    icon: GraduationCap,
    eyebrow: "2023 — 2027",
    title: "B.Tech in Computer Science & Engineering",
    text: "Building strong foundations in software engineering, data structures, system design, and modern product development.",
  },
  {
    icon: BriefcaseBusiness,
    eyebrow: "2024 · CODTECH",
    title: "Java Developer Intern",
    text: "Built and tested Java modules while applying OOP, collections, exception handling, multithreading, and software development best practices.",
  },
  {
    icon: Award,
    eyebrow: "2024 — 2026",
    title: "Certified across Python, problem solving, and AI",
    text: "Earned credentials from Google, Coursera, HackerRank, TCS iON, and Google Cloud through consistent hands-on learning.",
  },
];

const certificates = [
  {
    title: "Google Cloud Gen AI Academy",
    issuer: "Google Cloud · Hack2skill",
    date: "Apr 2026",
    href: "/certificates/google-cloud-gen-ai-academy.pdf",
  },
  {
    title: "AI and Cybersecurity Awareness",
    issuer: "TCS iON · AI for All",
    date: "Apr 2026",
    href: "/certificates/tcs-ai-cybersecurity.pdf",
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "Jul 2025",
    href: "/certificates/hackerrank-python-basic.pdf",
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "Jun 2025",
    href: "/certificates/hackerrank-problem-solving.pdf",
  },
  {
    title: "Concepts in Python",
    issuer: "Coursera Project Network",
    date: "Apr 2025",
    href: "/certificates/coursera-python-concepts.pdf",
  },
  {
    title: "Crash Course on Python",
    issuer: "Google · Coursera",
    date: "Aug 2024",
    href: "/certificates/google-crash-course-python.pdf",
  },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <motion.div {...reveal} className="section-heading">
      <div className="eyebrow"><span />{eyebrow}</div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

function ProjectVisual({ accent, symbol, number, logo }: { accent: string; symbol: string; number: string; logo?: string }) {
  return (
    <div className={`project-visual visual-${accent}`} aria-hidden="true">
      <div className="visual-grid" />
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className={logo ? "visual-core visual-core-logo" : "visual-core"}>
        {logo ? (
          <Image src={logo} alt="" fill sizes="160px" />
        ) : (
          <span>{symbol}</span>
        )}
      </div>
      <div className="visual-chip chip-top">BUILD_{number}</div>
      <div className="visual-chip chip-bottom"><i /> LIVE SYSTEM</div>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [sent, setSent] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 28, restDelta: 0.001 });
  const role = "Software Engineer";

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedText(role.slice(0, index));
      if (index >= role.length) window.clearInterval(timer);
    }, 78);
    return () => window.clearInterval(timer);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${String(form.get("name"))}`);
    const body = encodeURIComponent(
      `From: ${String(form.get("name"))} (${String(form.get("email"))})\n\n${String(form.get("message"))}`,
    );
    setSent(true);
    window.location.href = `mailto:sk8235499@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <a className="skip-link" href="#content">Skip to content</a>

      <nav className="nav-wrap" aria-label="Primary navigation">
        <a href="#home" className="brand" aria-label="Sumit Kumar — home">
          <span>SK</span><i />
        </a>
        <div className="desktop-nav">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button
          className="menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
          </motion.div>
        )}
      </nav>

      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
        <div className="grain" />
        <div className="hero-content" id="content">
          <motion.div
            className="available"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <span /> Available for opportunities
          </motion.div>
          <motion.div
            className="hero-mobile-portrait"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            <Image
              src="/sumit-kumar-profile.png"
              alt="Portrait of Sumit Kumar"
              fill
              priority
              sizes="(max-width: 899px) 260px, 0px"
            />
          </motion.div>
          <motion.p
            className="hero-kicker"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            Hello, world. I&apos;m
          </motion.p>
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
          >
            Sumit <span>Kumar.</span>
          </motion.h1>
          <motion.div
            className="hero-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span>{typedText}</span><i />
          </motion.div>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            I build modern websites, mobile applications, and AI-powered solutions that solve real-world problems.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <a href="#projects" className="button button-primary">View projects <ArrowDown size={17} /></a>
            <a href="/sumit-kumar-resume.pdf" download className="button button-secondary">Resume <Download size={16} /></a>
            <a href="#contact" className="text-link">Contact me <ArrowUpRight size={15} /></a>
          </motion.div>
          <motion.div
            className="hero-proof"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          >
            <div><strong>07</strong><span>Public<br />projects</span></div>
            <div><strong>10</strong><span>Project-backed<br />skills</span></div>
            <div><strong>∞</strong><span>Curiosity<br />to keep building</span></div>
          </motion.div>
        </div>

        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
          aria-hidden="true"
        >
          <div className="portrait-stage animate-float">
            <div className="portrait-glow" />
            <div className="portrait-frame">
              <Image
                src="/sumit-kumar-profile.png"
                alt=""
                fill
                priority
                sizes="(min-width: 1200px) 420px, 42vw"
              />
            </div>
          </div>
          <div className="floating-tag tag-react"><Code2 size={16} /> React</div>
          <div className="floating-tag tag-mobile"><Smartphone size={16} /> Mobile</div>
          <div className="floating-tag tag-ai"><Sparkles size={16} /> AI</div>
          <div className="orbit-ring"><span /></div>
        </motion.div>
        <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={15} /></a>
      </section>

      <section id="about" className="section about-section">
        <div className="section-inner about-grid">
          <SectionHeading
            eyebrow="ABOUT ME"
            title={<>Engineer by craft.<br /><span>Builder by instinct.</span></>}
          />
          <motion.div {...reveal} className="about-copy">
            <p className="lead">I&apos;m a Computer Science Engineering student who enjoys turning complex ideas into products that feel simple, useful, and human.</p>
            <p>My foundations span Java, Python, data structures, algorithms, and object-oriented programming. I&apos;ve built recommendation systems, multithreaded applications, and educational platforms while continuing to explore full-stack, mobile, and practical AI development.</p>
            <p>I&apos;m constantly learning, experimenting, and looking for the next hard problem worth solving.</p>
            <div className="about-values">
              <div><CheckCircle2 /><span><strong>Product-minded</strong>Building with purpose</span></div>
              <div><CheckCircle2 /><span><strong>Always learning</strong>Curious by default</span></div>
              <div><CheckCircle2 /><span><strong>Detail driven</strong>Polish matters</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="section-inner">
          <SectionHeading
            eyebrow="MY TOOLKIT"
            title={<>Project-backed<br /><span>technology stack.</span></>}
            description="Balanced by actual GitHub project usage, deployed apps, and current learning focus."
          />
          <motion.div className="skills-grid" {...reveal}>
            {skills.map((skill, index) => (
              <motion.div
                className="skill-card"
                key={skill.name}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <div className="skill-topline">
                  <span className="skill-mark">{skill.mark}</span>
                  <span className="skill-level">{skill.level}</span>
                </div>
                <div>
                  <strong>{skill.name}</strong>
                  <p>{skill.detail}</p>
                </div>
                <div className="skill-usage">
                  <span>{skill.usage}</span>
                  <b><em style={{ width: `${skill.strength}%` }} /></b>
                </div>
                <i>{String(index + 1).padStart(2, "0")}</i>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-inner">
          <div className="projects-heading-row">
            <SectionHeading eyebrow="SELECTED WORK" title={<>Projects with<br /><span>purpose.</span></>} />
            <motion.p {...reveal}>A selection of ideas I&apos;ve shaped into thoughtful, usable digital products.</motion.p>
          </div>
          <div className="projects-list">
            {projects.map((project, index) => (
              <motion.article className="project-card" key={project.name} {...reveal}>
                <ProjectVisual accent={project.accent} symbol={project.symbol} number={project.number} logo={project.logo} />
                <div className="project-info">
                  <div className="project-meta"><span>{project.number}</span><i />{project.kind}</div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
                    <a
                      href={project.live}
                      target={project.live.startsWith("http") ? "_blank" : undefined}
                      rel={project.live.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {project.liveLabel} <ArrowUpRight size={17} />
                    </a>
                  </div>
                </div>
                <span className="project-index">0{index + 1}</span>
              </motion.article>
            ))}
          </div>
          <motion.a {...reveal} className="github-banner" href="https://github.com/Lucifersk" target="_blank" rel="noreferrer">
            <span><Github /><i /></span>
            <div><strong>More builds live on GitHub</strong><p>Experiments, works in progress, and code I&apos;m learning from.</p></div>
            <ArrowUpRight />
          </motion.a>
        </div>
      </section>

      <section id="journey" className="section journey-section">
        <div className="section-inner journey-grid">
          <div className="journey-sticky">
            <SectionHeading eyebrow="THE JOURNEY" title={<>Learning.<br />Building.<br /><span>Repeating.</span></>} />
            <p>Good engineering is a practice. Every class, certificate, and challenge adds another layer.</p>
          </div>
          <div className="journey-content">
            <div className="timeline">
              {journey.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article className="timeline-card" key={item.title} {...reveal}>
                    <div className="timeline-icon"><Icon /></div>
                    <div>
                      <span className="timeline-eyebrow">{item.eyebrow}</span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                    <span className="timeline-number">0{index + 1}</span>
                  </motion.article>
                );
              })}
            </div>
            <motion.div className="certificates-block" {...reveal}>
              <div className="certificates-title"><Award size={17} /><span>VERIFIED CREDENTIALS</span></div>
              <div className="certificates-grid">
                {certificates.map((certificate) => (
                  <a key={certificate.title} href={certificate.href} target="_blank" rel="noreferrer" className="certificate-card">
                    <span>{certificate.date}</span>
                    <strong>{certificate.title}</strong>
                    <small>{certificate.issuer}</small>
                    <ArrowUpRight size={15} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-glow" />
        <div className="section-inner">
          <motion.div {...reveal} className="contact-intro">
            <div className="eyebrow"><span />GET IN TOUCH</div>
            <h2>Have an idea?<br /><span>Let&apos;s build it.</span></h2>
            <p>I&apos;m open to internships, freelance projects, collaborations, and conversations about interesting problems.</p>
          </motion.div>
          <div className="contact-grid">
            <motion.div className="contact-details" {...reveal}>
              <a href="mailto:sk8235499@gmail.com" className="contact-line">
                <span><Mail /></span><div><small>PRIMARY EMAIL</small><strong>sk8235499@gmail.com</strong></div><ArrowUpRight />
              </a>
              <a href="mailto:sk8235499@icloud.com" className="contact-line">
                <span><Mail /></span><div><small>ALTERNATE EMAIL</small><strong>sk8235499@icloud.com</strong></div><ArrowUpRight />
              </a>
              <a href="https://www.linkedin.com/in/sumitkumar-066a59326" target="_blank" rel="noreferrer" className="contact-line">
                <span><Linkedin /></span><div><small>CONNECT</small><strong>LinkedIn</strong></div><ArrowUpRight />
              </a>
              <a href="https://github.com/Lucifersk" target="_blank" rel="noreferrer" className="contact-line">
                <span><Github /></span><div><small>FOLLOW MY WORK</small><strong>GitHub</strong></div><ArrowUpRight />
              </a>
              <div className="availability-card">
                <span className="status-dot" />
                <div><strong>Available for opportunities</strong><p>Based in India · Open to remote</p></div>
              </div>
            </motion.div>
            <motion.form className="contact-form" onSubmit={handleSubmit} {...reveal}>
              <div className="form-top"><MessageSquareText /><span>START A CONVERSATION</span></div>
              <label>Name<input type="text" name="name" placeholder="Your name" required /></label>
              <label>Email<input type="email" name="email" placeholder="you@company.com" required /></label>
              <label>Message<textarea name="message" rows={5} placeholder="Tell me about your project, role, or idea..." required /></label>
              <button className="button button-primary" type="submit">
                {sent ? <>Ready in your mail app <CheckCircle2 size={17} /></> : <>Send message <Send size={17} /></>}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <a href="#home" className="brand"><span>SK</span><i /></a>
          <p>© 2026 Sumit Kumar. Designed and developed with passion.</p>
          <a href="#home" className="back-top">Back to top <ArrowDown size={15} /></a>
        </div>
      </footer>
    </main>
  );
}
