const config = {
  title: "Krisna Satya Arisandy | Full-Stack Developer & AI Enthusiast",
  description: {
    long: "Portofolio Krisna Satya Arisandy, Full-Stack Developer & AI Enthusiast yang fokus pada pengembangan web interaktif, sistem cerdas, dan UI/UX modern.",
    short:
      "Portofolio Krisna Satya Arisandy - Full-Stack Developer & AI Enthusiast.",
  },
  keywords: [
    "Krisna Satya Arisandy",
    "Krisna Satya",
    "portfolio",
    "full-stack developer",
    "AI Enthusiast",
    "web development",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Python",
    "UI/UX Design",
    "GraphRAG",
    "Generative AI",
  ],
  author: "Krisna Satya",
  email: "satyakrisna80@gmail.com",
  site: "https://github.com/SannRainy",

  // for github stars button
  githubUsername: "SannRainy",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/krisnasatya",
    instagram: "https://www.instagram.com/mrsstya/",
    facebook: "",
    github: "https://github.com/SannRainy",
  },
};
export { config };
