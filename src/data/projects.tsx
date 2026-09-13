import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
// Spline has no thesvg entry — keep the Three.js mark as its stand-in.
import {
  SiThreedotjs,
  SiFlutter,
  SiDart,
  SiTensorflow,
  SiFastapi,
} from "react-icons/si";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: brand("Firebase", "firebase-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  // Not in the thesvg registry — keep the Three.js stand-in.
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  // Not in the thesvg registry — keep the text marks.
  // Mobile & AI additions
  flutter: {
    title: "Flutter",
    bg: "black",
    fg: "white",
    icon: <SiFlutter />,
  },
  dart: {
    title: "Dart",
    bg: "black",
    fg: "white",
    icon: <SiDart />,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <SiTensorflow />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "brielle",
    category: "Web Application & Real-time System",
    title: "Brielle - Bug Tracking & Project Management",
    src: `${BASE_PATH}/codingducks/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "",
    github: "https://github.com/rosselvert/Brielle",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Platform Bug Tracking &amp; Manajemen Proyek Klien Real-time.
          </TypographyP>
          <TypographyP className="font-mono">
            Platform terpadu untuk monitoring dan pelaporan bug proyek klien yang dikembangkan saat magang di CV AMINS PROJECT TEKNOLOGI INDONESIA. Dilengkapi integrasi notifikasi otomatis via WhatsApp API untuk mempercepat respon penanganan isu teknis antara admin, developer, dan klien.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Fitur Utama</TypographyH3>
          <p className="font-mono mb-2">
            • Pelaporan isu &amp; tracking lifecycle status bug secara real-time.<br />
            • Integrasi WhatsApp API untuk otomatisasi pengiriman instant notification.<br />
            • Dashboard manajemen task dan progress sprint bagi developer dan klien.<br />
            • Arsitektur backend modular dan scalable dengan Node.js &amp; Express.
          </p>
        </div>
      );
    },
  },
  {
    id: "alisa",
    category: "AI & GraphRAG (Prosiding SENATIK 2026)",
    title: "A.L.I.S.A - Adaptive Learning & Intelligent System Assistant",
    src: `${BASE_PATH}/storekit/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "",
    github: "https://github.com/SannRainy/A.L.I.S.A.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Sistem Tutor Virtual Pembelajaran Bahasa Adaptif.
          </TypographyP>
          <TypographyP className="font-mono">
            Riset dan implementasi sistem kecerdasan buatan gabungan (Neuro-Symbolic AI) dan arsitektur Graph Retrieval-Augmented Generation (GraphRAG) untuk personalisasi jalur pembelajaran bahasa interaktif (dipublikasikan pada Prosiding SENATIK 2026).
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Fitur &amp; Inovasi Utama</TypographyH3>
          <p className="font-mono mb-2">
            • Graph Retrieval-Augmented Generation (GraphRAG) untuk pemodelan struktur materi pengetahuan.<br />
            • Neuro-Symbolic AI untuk penalaran logika pembelajaran adaptif yang presisi.<br />
            • Tutor virtual interaktif dengan analisis pemahaman dan feedback kontekstual pengguna.
          </p>
        </div>
      );
    },
  },
  {
    id: "virtual-assistant-nlu-nlg",
    category: "Conversational AI & Natural Language Processing",
    title: "Virtual Assistant NLU & NLG",
    src: `${BASE_PATH}/kanbi/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "",
    github: "https://github.com/SannRainy/Virtual_Assistant_NLU-NLG",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Asisten Virtual Cerdas Berbasis NLU &amp; NLG.
          </TypographyP>
          <TypographyP className="font-mono">
            Sistem asisten virtual cerdas yang mengimplementasikan end-to-end NLP pipeline: Natural Language Understanding (NLU) untuk ekstraksi intensi dan entitas, serta Natural Language Generation (NLG) untuk menyusun jawaban percakapan yang dinamis, kontekstual, dan mengalir secara alami.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Fitur Utama</TypographyH3>
          <p className="font-mono mb-2">
            • NLU Engine: Intent classification &amp; entity recognition berkecepatan tinggi.<br />
            • NLG Engine: Sintesis respon kalimat dinamis sesuai konteks percakapan.<br />
            • Manajemen dialog multi-turn dengan riwayat konteks interaktif.
          </p>
        </div>
      );
    },
  },
  {
    id: "ai-bahasa-isyarat-mobile",
    category: "Mobile Application & Computer Vision",
    title: "Sign Language AI Mobile",
    src: `${BASE_PATH}/waku/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
        PROJECT_SKILLS.dart,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.tensorflow,
      ],
    },
    live: "",
    github: "https://github.com/SannRainy/AI_Bahasa_Isyarat_mobile",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Aplikasi Flutter Pendeteksi &amp; Penerjemah Bahasa Isyarat Berbasis AI.
          </TypographyP>
          <TypographyP className="font-mono">
            Aplikasi mobile lintas platform berbasis Flutter yang terintegrasi langsung dengan model Deep Learning / Computer Vision untuk mendeteksi landmark tangan dan menerjemahkan gestur bahasa isyarat secara real-time melalui kamera ponsel guna mendukung komunikasi inklusif bagi teman tuli.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Fitur Utama</TypographyH3>
          <p className="font-mono mb-2">
            • Antarmuka mobile modern &amp; responsif dibangun dengan Flutter &amp; Dart.<br />
            • Real-time hand landmark tracking &amp; gesture recognition berakurasi tinggi.<br />
            • Deteksi instan kamera mobile dengan inferensi model Deep Learning ringan &amp; cepat.<br />
            • Desain antarmuka yang aksesibel dan ramah bagi pengguna disabilitas.
          </p>
        </div>
      );
    },
  },
];
export default projects;
