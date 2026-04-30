export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export type TimelineItem = {
  role: string;
  organization: string;
  period: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
};

export type ExpertiseItem = {
  number: string;
  title: string;
  description: string;
};

export type StackGroup = {
  title: string;
  tools: string[];
};

export type QuarterImpact = {
  quarter: string;
  period: string;
  title: string;
  description: string;
};

export type WorkCategory = {
  number: string;
  title: string;
  description: string;
};

export type ShowreelItem = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export type CaseStudy = {
  number: string;
  title: string;
  subtitle: string;
  tags: string[];
  context?: string;
  role?: string;
  challenge?: string;
  workflow?: string[];
  content?: string;
  discipline?: string;
  impact?: string;
  outcome?: string;
};

export type Capability = {
  number: string;
  outcome: string;
  explanation: string;
  stack: string;
};

export type RecognitionItem = {
  title: string;
  description: string;
};

export const person = {
  name: "Mehraj Shaikh",
  title: "Senior Creative Technologist · AI Video & Generative Content",
  location: "Mumbai, India",
  email: "shaikh.mehraj@outlook.com",
  phone: "+91 9967 868 954",
  linkedIn: "linkedin.com/in/mehrajshaikh",
  linkedInUrl: "https://www.linkedin.com/in/mehrajshaikh",
  tagline: "Frame by frame, prompt by prompt.",
  positioning:
    "A creative technologist’s portfolio of AI video, production leadership, and the systems behind them.",
};

export const navItems: NavItem[] = [
  { label: "Snapshot", href: "#snapshot" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Cases", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export const executiveStats: Stat[] = [
  {
    value: "15+",
    label: "Years in video production",
    detail: "Post-production, creative leadership, editing, colour, sound, motion and corporate AVs.",
  },
  {
    value: "160+",
    label: "Videos delivered in FY 2025-26",
    detail: "A high-volume year across AI video, product films, executive content and campaigns.",
  },
  {
    value: "10+",
    label: "Workflow tools built",
    detail: "Personal production tooling using Cursor, Claude, Codex, Gemini CLI and custom scripts.",
  },
  {
    value: "~40%",
    label: "Turnaround reduction",
    detail: "AI-driven automation and repurposing patterns reduced delivery time across recurring workflows.",
  },
  {
    value: "8",
    label: "Creative professionals upskilled",
    detail: "Prompt engineering, generative AI tools and applied production workflows.",
  },
];

export const currentRole =
  "Senior Manager, AI Video & Creative Technology at Jio Platforms";

export const pastClients = [
  "Reliance Jio",
  "Meta/Facebook",
  "Saudi Aramco",
  "United Nations CDP",
  "Reliance Foundation",
  "JioAds",
];

export const aboutStory = [
  "Mehraj Shaikh’s creative arc started in Mumbai post-production rooms, where deadlines were real, timelines were unforgiving and every frame had to earn its place.",
  "Over 15 years, that foundation expanded across editing, colour, sound, motion, compositing, corporate AVs, product storytelling and executive communications.",
  "Today, Mehraj works across Premiere, DaVinci, Cursor, Gemini CLI, Sora, Synthesia and emerging AI video systems, connecting production craft with the workflows that make modern content teams faster.",
];

export const philosophy =
  "AI accelerates output, but craft decides what ships.";

export const careerTimeline: TimelineItem[] = [
  {
    role: "Senior Manager — AI Video & Creative Technology",
    organization: "Jio Platforms Limited",
    period: "Oct 2021-Present",
  },
  {
    role: "Video Content Manager",
    organization: "Jio Platforms Limited",
    period: "Jun 2020-Sep 2021",
  },
  {
    role: "Video Content Manager",
    organization: "Reliance Industries Limited",
    period: "Nov 2018-Jun 2020",
  },
  {
    role: "Video Specialist",
    organization: "KPIT Technologies · Reliance Corporate Park",
    period: "Feb 2015-Nov 2018",
  },
  {
    role: "Video Specialist",
    organization: "Vu Technologies Pvt. Ltd.",
    period: "Jan 2014-Feb 2015",
  },
  {
    role: "Freelance Video Editor",
    organization: "Independent",
    period: "Jan 2013-Jan 2014",
  },
];

export const education: EducationItem[] = [
  {
    degree: "PGDM, Media & Advertising",
    institution: "Welingkar Institute",
  },
  {
    degree: "BMM, Arts, Entertainment & Media",
    institution: "Mumbai University",
  },
  {
    degree: "Film/Video Production",
    institution: "Scottsdale Community College, USA",
  },
];

export const expertise: ExpertiseItem[] = [
  {
    number: "01",
    title: "AI Video Production",
    description:
      "End-to-end pipelines from prompt to final cut. Sora, Veo and Runway in active production.",
  },
  {
    number: "02",
    title: "Post-Production Leadership",
    description:
      "Editing, colour, sound, motion and compositing across Premiere, After Effects and DaVinci.",
  },
  {
    number: "03",
    title: "Creative Technology",
    description:
      "Vibe coding, CLI workflows, custom scripts and production tools for content teams.",
  },
  {
    number: "04",
    title: "Brand Storytelling",
    description:
      "Corporate films, marketing videos and executive communications for Reliance Jio, Meta, Aramco and UN.",
  },
  {
    number: "05",
    title: "Workflow Innovation",
    description:
      "Repurposing patterns, subtitle automation, AI review experiments and pipeline design.",
  },
  {
    number: "06",
    title: "Team Leadership",
    description:
      "Upskilling creative teams on AI tools, prompt engineering and production workflows.",
  },
];

export const stackGroups: StackGroup[] = [
  {
    title: "AI Video Generation",
    tools: ["Sora", "Veo", "Runway ML", "Kling", "Pika Labs"],
  },
  {
    title: "Avatars & Voice",
    tools: ["Synthesia", "HeyGen", "ElevenLabs"],
  },
  {
    title: "Generative Imagery",
    tools: [
      "Adobe Firefly",
      "Midjourney",
      "Freepik",
      "Magnific AI",
      "Vertex AI",
      "Google Flow",
    ],
  },
  {
    title: "AI Assistants & Coding",
    tools: ["Claude", "Gemini", "ChatGPT", "Cursor", "Codex", "Gemini CLI", "VS Code"],
  },
  {
    title: "Post-Production",
    tools: [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "Photoshop",
      "Audition",
    ],
  },
  {
    title: "Personal Workflow Builds",
    tools: ["Vibe coding", "CLI scripts", "Custom plugins", "Repurposing pipelines"],
  },
];

export const impactQuarters: QuarterImpact[] = [
  {
    quarter: "Q1",
    period: "Apr-Jun",
    title: "Foundation & AI experimentation",
    description:
      "Built early prompt-to-edit workflows, evaluated production use cases and created repeatable foundations.",
  },
  {
    quarter: "Q2",
    period: "Jul-Sep",
    title: "Scaling the influencer ecosystem",
    description:
      "Expanded digital-character production patterns across voice, styling, cadence and quality control.",
  },
  {
    quarter: "Q3",
    period: "Oct-Dec",
    title: "High-stakes, high-visibility delivery",
    description:
      "Delivered executive and product-led films where fidelity, polish and response time mattered most.",
  },
  {
    quarter: "Q4",
    period: "Jan-Mar",
    title: "Strategic leadership & future tech",
    description:
      "Moved from experiments into repeatable systems, leadership rituals and future-facing production tests.",
  },
];

export const workCategories: WorkCategory[] = [
  {
    number: "01",
    title: "AI Video Innovation",
    description:
      "Sora, Veo and Runway in active production. Architecting prompt-to-final-cut pipelines.",
  },
  {
    number: "02",
    title: "AI Avatars & Influencers",
    description: "Lucky, Lyla, Reya Modi and Bachchan demo work.",
  },
  {
    number: "03",
    title: "Product Storytelling",
    description: "JioCreate, Jio Home Intel and JioXplor AIIMS DISHA.",
  },
  {
    number: "04",
    title: "Executive Communication",
    description: "JioAds Walk the Talk & Fireside Chats.",
  },
  {
    number: "05",
    title: "Corporate Films",
    description: "RIL, Reliance Foundation, Aramco and UN CDP.",
  },
  {
    number: "06",
    title: "Marketing & Brand",
    description: "Jio x Meta, Stree, Zero, JioFiber and MedLab.",
  },
  {
    number: "07",
    title: "Animation & Explainers",
    description: "Storyboarded and executed with After Effects collaborators.",
  },
  {
    number: "08",
    title: "Interviews & Podcasts",
    description: "Reliance group leader profiles and testimonials.",
  },
  {
    number: "09",
    title: "Event Films",
    description: "India Mobile Congress, JLF and RF School.",
  },
  {
    number: "10",
    title: "Workflow Automation",
    description: "Personal workflow tools using Cursor, Claude, Codex and Gemini CLI.",
  },
  {
    number: "11",
    title: "Future Tech Experiments",
    description: "SORA, Spectrum, Jio Frame and emerging-tech work.",
  },
];

export const showreelItems: ShowreelItem[] = [
  {
    title: "AI Video Creator",
    description: "Prompt-led production, avatar demos and generative motion workflows.",
    href: "https://drive.google.com/drive/folders/10vEBilCQLgad9LHghsdNDSkiitPuZzzv?usp=drive_link",
    image: "/images/ai-video-creator-clean.png",
  },
  {
    title: "Animation Videos",
    description: "Explainers, product animation and motion systems with After Effects collaborators.",
    href: "https://drive.google.com/drive/folders/1MZF9fJb-djcsGM5_mlo0IqZXq4fYVwsX",
    image: "/images/animation-videos.png",
  },
  {
    title: "Interview & Podcasts",
    description: "Executive conversations, testimonials and calm, premium editorial cuts.",
    href: "https://drive.google.com/drive/folders/1hIX7kp8ik_CwtCEYbjUrsk6MqTK4sLDa?usp=drive_link",
    image: "/images/interview-podcasts.png",
  },
  {
    title: "Corporate Films",
    description: "Brand-aligned narrative films for enterprise, foundation and global stakeholders.",
    href: "https://drive.google.com/drive/folders/13NuXMZHFqdisiXyDs7-91abZTbd_JyKF?usp=drive_link",
    image: "/images/corporate-films.png",
  },
  {
    title: "Marketing Videos",
    description: "Campaign, product and brand films designed for recall and speed.",
    href: "https://drive.google.com/drive/folders/1Ki5_YMU2bt3v6GU2LSqzgc8NigE7NxqN?usp=drive_link",
    image: "/images/marketing-videos.png",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    number: "01",
    title: "The AI Avatar Milestone",
    subtitle: "Amitabh Bachchan demo videos",
    tags: ["AI Avatars", "Voice", "Synthesia", "HeyGen", "ElevenLabs", "Emergency Timeline"],
    context:
      "A major IP-rights conversation at Reliance required demonstrable proof of AI avatar and voice capabilities applied to tier-one Indian entertainment IP.",
    role:
      "Lead executor: editing, avatar implementation, voice synthesis integration and output preparation.",
    challenge:
      "Compressed weekend timeline, no margin for retake and high fidelity required.",
    workflow: [
      "Brief intake",
      "Reference asset prep",
      "Avatar generation",
      "Voice synthesis",
      "Composite",
      "Polish edit",
      "Senior review",
      "Final delivery",
    ],
    impact:
      "Used inside high-stakes IP-rights discussions and became a reference benchmark for future AI-avatar conversations.",
  },
  {
    number: "02",
    title: "The Digital Influencer Ecosystem",
    subtitle: "Lucky, Lyla, Reya Modi",
    tags: ["AI Influencers", "Midjourney", "Firefly", "ElevenLabs", "Synthesia"],
    context:
      "Jio’s AI-driven influencer ecosystem with digital characters and consistent content cadence.",
    role:
      "End-to-end production lead: character development, visual styling, voice setup, workflow design, content production and QC.",
    workflow: [
      "Character bibles",
      "Reference asset banks",
      "Prompt templates",
      "Batch generation",
      "Curated selects",
      "Edit",
      "QC",
      "Publish",
    ],
    outcome:
      "Three live AI-influencer identities and a scalable template for future launches.",
  },
  {
    number: "03",
    title: "Product Storytelling",
    subtitle: "JioCreate & JioXplor AIIMS DISHA",
    tags: ["Product Videos", "Premiere", "After Effects", "DaVinci", "ElevenLabs"],
    content:
      "JioCreate cross-platform launch, Jio Home Intel and JioXplor AIIMS DISHA.",
    challenge:
      "Explain three different complex products without losing brand coherence.",
    impact:
      "Established visual register for Jio product launches across consumer, ambient AI and healthcare verticals.",
  },
  {
    number: "04",
    title: "The Big Stage",
    subtitle: "Jio Brain at IMC · JioAds Walk the Talk",
    tags: ["Event", "Executive", "Premiere", "After Effects", "DaVinci", "Broadcast-grade"],
    content:
      "India Mobile Congress 2025 Jio Brain showcase and JioAds premium executive content.",
    discipline:
      "Premium framing, slow cuts, strategic silence, warm colour grade and restrained lower-thirds.",
    impact:
      "Defined Jio’s executive-content visual register and represented AI capability on a major national tech stage.",
  },
];

export const capabilities: Capability[] = [
  {
    number: "01",
    outcome: "Faster content production",
    explanation: "Reduced cycle time through AI-assisted drafts, templates and repeatable review patterns.",
    stack: "Sora · Runway · Premiere · Cursor",
  },
  {
    number: "02",
    outcome: "AI-assisted ideation",
    explanation: "Uses prompts, visual references and rapid mockups to align stakeholders earlier.",
    stack: "ChatGPT · Claude · Gemini · Midjourney",
  },
  {
    number: "03",
    outcome: "Prompt-to-video pipelines",
    explanation: "Turns concept notes into prompt sets, selects, editorial structure and final output.",
    stack: "Sora · Veo · Runway ML · DaVinci",
  },
  {
    number: "04",
    outcome: "Voice & avatar workflows",
    explanation: "Builds avatar demos, synthesized voice passes and composited executive-ready outputs.",
    stack: "Synthesia · HeyGen · ElevenLabs · Premiere",
  },
  {
    number: "05",
    outcome: "Short-form scaling",
    explanation: "Repurposes long-form content into controlled, platform-ready short edits.",
    stack: "Premiere · After Effects · Gemini CLI",
  },
  {
    number: "06",
    outcome: "Repurposing workflows",
    explanation: "Creates reusable patterns for captions, selects, variants and review-ready cuts.",
    stack: "Cursor · Codex · Claude · Custom scripts",
  },
  {
    number: "07",
    outcome: "Production automation",
    explanation: "Builds personal tools that remove repeat effort from creative production loops.",
    stack: "Codex · Gemini CLI · VS Code · Plugins",
  },
  {
    number: "08",
    outcome: "Speed, consistency, experimentation",
    explanation: "Keeps output moving quickly without losing tone, brand system or review discipline.",
    stack: "Firefly · Midjourney · Magnific AI · DaVinci",
  },
  {
    number: "09",
    outcome: "Production foundation",
    explanation: "15 years of editing craft anchors the AI layer in judgement, timing and finish.",
    stack: "Premiere · After Effects · Audition · Photoshop",
  },
];

export const recognition: RecognitionItem[] = [
  {
    title: "AI Creator Console",
    description: "Conceptualized production-facing AI controls and creator workflows for fast experimentation.",
  },
  {
    title: "End-to-end GenAI Content Pipeline",
    description: "Built repeatable patterns from ideation and prompt design through edit, QC and delivery.",
  },
  {
    title: "Personal-workflow tooling",
    description: "Created tools and scripts that make repurposing, subtitle work and production checks faster.",
  },
  {
    title: "Reliance Jio x Meta",
    description: "Produced brand storytelling across major platform and product collaboration work.",
  },
  {
    title: "UN CDP & Saudi Aramco",
    description: "Delivered high-trust corporate film work for institutional and global stakeholders.",
  },
  {
    title: "AI upskilling lead",
    description: "Trained creative professionals on prompt engineering, AI tools and practical workflow design.",
  },
];
