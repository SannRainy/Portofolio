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
  SiNeo4J,
  SiWhatsapp,
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
  neo4j: {
    title: "Neo4j",
    bg: "black",
    fg: "white",
    icon: <SiNeo4J />,
  },
  whatsapp: {
    title: "WhatsApp API",
    bg: "black",
    fg: "white",
    icon: <SiWhatsapp />,
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
    src: `${BASE_PATH}/Management Bug/DashboardMain.png`,
    screenshots: [
      "AdminDashboard.jpg",
      "DevBoard.jpg",
      "AdminBug.jpg",
      "ClientBugReport.jpg",
      "AdminCS.jpg",
      "ClientDashboard.jpg",
      "DevDashboard.jpg",
      "DevBug.jpg",
      "AdminProject.jpg",
      "AdminUsers.jpg",
      "ClientProject.jpg",
      "ClientCS.jpg",
      "DevCS.jpg",
      "AdminProfile.jpg",
      "DevProfile.jpg",
      "ClientProfile.jpg",
    ].map((s) => `${BASE_PATH}/Management Bug/${s}`),
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.whatsapp,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "",
    github: "https://github.com/rosselvert/Brielle",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-xl md:text-2xl text-center font-semibold">
            Platform Bug Tracking &amp; Manajemen Proyek Multi-Role Real-Time
          </TypographyP>

          <p className="text-sm font-mono text-center text-muted-foreground max-w-2xl mx-auto">
            Dikembangkan selama magang di <strong>CV AMINS PROJECT TEKNOLOGI INDONESIA</strong> sebagai sistem terpadu untuk monitoring isu teknis, tracking progress sprint, dan koordinasi transparan antara Admin, Developer, dan Klien.
          </p>

          <ProjectsLinks live={this.live} repo={this.github} />

          {/* Interactive SlideShow */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground px-1">
              <span>📸 Galeri Tangkapan Layar Sistem ({this.screenshots.length} Tampilan)</span>
              <span>Navigasi menggunakan tombol panah atau swipe</span>
            </div>
            <SlideShow images={this.screenshots} />
          </div>

          {/* Ringkasan Arsitektur & Peran */}
          <div className="space-y-3 pt-2">
            <TypographyH3 className="border-b border-border/40 pb-2">
              Arsitektur Multi-Role (RBAC)
            </TypographyH3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Brielle dirancang dengan sistem perizinan berbasis peran (Role-Based Access Control) yang memisahkan alur kerja, hak akses data, dan antarmuka sesuai tanggung jawab pengguna:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="rounded-xl border border-border/60 bg-card/50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <h4 className="font-semibold text-sm">Admin Workspace</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Monitoring metrik kesehatan proyek secara komprehensif, alokasi tugas ke developer, manajemen direktori pengguna/klien, serta eskalasi tiket bug prioritas tinggi.
                </p>
                <span className="inline-block text-[11px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                  AdminDashboard • AdminBug • AdminProject
                </span>
              </div>

              <div className="rounded-xl border border-border/60 bg-card/50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <h4 className="font-semibold text-sm">Developer Workspace</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Papan kerja Kanban interaktif untuk sprint tracking, inspeksi detail reproduksi bug, pembaruan status pengerjaan (In Progress, Testing, Resolved), dan saluran CS internal.
                </p>
                <span className="inline-block text-[11px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                  DevBoard • DevBug • DevCS
                </span>
              </div>

              <div className="rounded-xl border border-border/60 bg-card/50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <h4 className="font-semibold text-sm">Client Portal</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Form pelaporan bug intuitif lengkap dengan bukti screenshot &amp; level keparahan, transparansi progress perbaikan real-time, dan konsultasi tiket via modul CS.
                </p>
                <span className="inline-block text-[11px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                  ClientBugReport • ClientDashboard • ClientProject
                </span>
              </div>
            </div>
          </div>

          {/* Deep-dive Teknis */}
          <div className="space-y-3 pt-2">
            <TypographyH3 className="border-b border-border/40 pb-2">
              Sorotan Teknologi &amp; Implementasi Teknis
            </TypographyH3>
            <div className="space-y-3 text-sm leading-relaxed">
              <div className="rounded-lg border border-border/40 bg-muted/20 p-3.5 space-y-1">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span>⚡ Otomatisasi Notifikasi WhatsApp API</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Mengintegrasikan WhatsApp Business API / Webhook untuk otomatisasi pengiriman push notification instan ke nomor WhatsApp klien maupun engineer ketika terdapat laporan bug baru, eskalasi tiket kritis, atau pembaruan status penyelesaian. Langkah ini secara drastis memangkas response time penanganan masalah teknis.
                </p>
              </div>

              <div className="rounded-lg border border-border/40 bg-muted/20 p-3.5 space-y-1">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span>🔄 Siklus Hidup Bug Terstruktur (Bug Lifecycle Pipeline)</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Alur pelacakan bug menyeluruh dari status <em>Reported ➔ Verified ➔ Assigned ➔ In Progress ➔ QA / Testing ➔ Closed</em> dengan riwayat audit trail lengkap, lampiran log, dan threads percakapan terpusat.
                </p>
              </div>

              <div className="rounded-lg border border-border/40 bg-muted/20 p-3.5 space-y-1">
                <div className="font-semibold text-foreground flex items-center gap-2">
                  <span>🐳 Arsitektur Backend Modular &amp; Containerization Docker</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Backend dirancang modular menggunakan Node.js dan Express dengan pemisahan concern berlapis (controller, services, data validation middleware), dikemas dalam container Docker demi konsistensi environment runtime dan kemudahan skalabilitas.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    id: "alisa",
    category: "AI & GraphRAG (Prosiding SENATIK 2026)",
    title: "A.L.I.S.A - Adaptive Learning & Intelligent System Assistant",
    src: `${BASE_PATH}/A.L.I.S.A/ChatbotPage.png`,
    screenshots: [
      "ChatbotPage.png",
      "Neo4JManagement.png",
      "AICorrectionPage.png",
      "KanjiDojoPage.png",
      "KanjiFlashcard.png",
      "KanjiExam.png",
      "SRSReviewPage.png",
      "SpeakingModePage.png",
      "QuizModePage.png",
      "QuizPage.png",
      "AdminDashboard.png",
      "AchievementPage.png",
      "ProfileModePage.png",
      "LoginPage.png",
      "RegisterPage.png",
    ].map((s) => `${BASE_PATH}/A.L.I.S.A/${s}`),
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.neo4j,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "",
    github: "https://github.com/SannRainy/A.L.I.S.A.",
    get content() {
      return (
        <div className="space-y-6">
          <TypographyP className="font-mono text-xl md:text-2xl text-center font-semibold">
            Sistem Tutor Virtual Cerdas Berbasis Neuro-Symbolic AI &amp; GraphRAG
          </TypographyP>

          <p className="text-sm font-mono text-center text-muted-foreground max-w-2xl mx-auto">
            Riset inovasi tutor pembelajaran bahasa adaptif yang memadukan <strong>Graph Retrieval-Augmented Generation (GraphRAG)</strong> dan <strong>Neuro-Symbolic Reasoning</strong>. Dipublikasikan pada <strong>Prosiding Seminar Nasional Rekayasa Teknologi Informasi (SENATIK) 2026</strong>.
          </p>

          <ProjectsLinks live={this.live} repo={this.github} />

          {/* Interactive SlideShow */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground px-1">
              <span>📸 Galeri Tangkapan Layar Sistem ({this.screenshots.length} Tampilan)</span>
              <span>Navigasi menggunakan tombol panah atau swipe</span>
            </div>
            <SlideShow images={this.screenshots} />
          </div>

          {/* Latar Belakang & Inovasi Riset */}
          <div className="space-y-3 pt-2">
            <TypographyH3 className="border-b border-border/40 pb-2">
              Latar Belakang Riset &amp; Paradigma Baru
            </TypographyH3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Aplikasi tutor bahasa konvensional berbasis LLM seringkali mengalami halusinasi aturan gramatikal dan gagal memahami keterkaitan prasyarat (prerequisite relationships) antartopik materi. A.L.I.S.A memecahkan tantangan ini dengan menyinergikan representasi graf pengetahuan (Knowledge Graph) dan penalaran simbolik berbasis kaidah bahasa formal.
            </p>
          </div>

          {/* Deep-dive Teknis */}
          <div className="space-y-3 pt-2">
            <TypographyH3 className="border-b border-border/40 pb-2">
              Arsitektur AI &amp; Deep Technical Exploration
            </TypographyH3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border/60 bg-card/50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-500" />
                  <h4 className="font-semibold text-sm">GraphRAG via Neo4j Knowledge Graph</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Memodelkan struktur materi tata bahasa, hierarki kanji, radikal, dan keterkaitan semantik ke dalam graf multi-relasional Neo4j. Memungkinkan retrieval materi kontekstual yang memahami hierarki prasyarat sebelum konsep baru diajarkan.
                </p>
                <span className="inline-block text-[11px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                  Neo4JManagement • Graph Traversal &amp; Cypher
                </span>
              </div>

              <div className="rounded-xl border border-border/60 bg-card/50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                  <h4 className="font-semibold text-sm">Neuro-Symbolic Reasoning</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Menggabungkan fleksibilitas conversational Large Language Model dengan aturan tata bahasa simbolik deterministik. Menjamin koreksi sintaksis akurat dan bebas dari halusinasi aturan gramatikal.
                </p>
                <span className="inline-block text-[11px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                  AICorrectionPage • Formal Grammar Verification
                </span>
              </div>

              <div className="rounded-xl border border-border/60 bg-card/50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <h4 className="font-semibold text-sm">Spaced Repetition System (SRS)</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Algoritma kurva lupa adaptif (berbasis prinsip interval FSRS/SM-2) untuk menghitung interval repetisi optimal kosakata dan kanji, disesuaikan dengan retensi memori spesifik masing-masing pembelajar.
                </p>
                <span className="inline-block text-[11px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                  SRSReviewPage • KanjiFlashcard • KanjiDojo
                </span>
              </div>

              <div className="rounded-xl border border-border/60 bg-card/50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <h4 className="font-semibold text-sm">High-Throughput Fullstack Pipeline</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Backend asinkron berkecepatan tinggi dengan Python &amp; FastAPI untuk streaming percakapan LLM dan speech processing, berpadu dengan antarmuka Next.js &amp; Tailwind CSS yang interaktif.
                </p>
                <span className="inline-block text-[11px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                  FastAPI • Next.js • Docker Container
                </span>
              </div>
            </div>
          </div>

          {/* Ekosistem Modul Pembelajaran */}
          <div className="space-y-3 pt-2">
            <TypographyH3 className="border-b border-border/40 pb-2">
              Modul Pembelajaran &amp; Fitur Unggulan
            </TypographyH3>
            <div className="space-y-2.5 text-xs text-muted-foreground font-mono">
              <div className="p-2.5 rounded-lg border border-border/40 bg-muted/20">
                <strong className="text-foreground">💬 Chatbot AI Tutor (ChatbotPage):</strong> Percakapan real-time multi-turn dengan adaptive scaffolding, penjelasan kontekstual, dan personalisasi respon.
              </div>
              <div className="p-2.5 rounded-lg border border-border/40 bg-muted/20">
                <strong className="text-foreground">🌐 Visualisasi Graf Neo4j (Neo4JManagement):</strong> Manajemen visual simpul materi, relasi prasyarat, dan ontologi pengetahuan bahasa.
              </div>
              <div className="p-2.5 rounded-lg border border-border/40 bg-muted/20">
                <strong className="text-foreground">📝 Koreksi Kalimat AI (AICorrectionPage):</strong> Analisis struktur kalimat, penandaan kesalahan partikel/sintaksis, dan saran rekonstruksi kalimat alami.
              </div>
              <div className="p-2.5 rounded-lg border border-border/40 bg-muted/20">
                <strong className="text-foreground">🥋 Kanji Dojo, Flashcard &amp; Ujian (KanjiDojoPage, KanjiExam, KanjiFlashcard):</strong> Pembelajaran kanji interaktif dengan urutan goresan (stroke order), kunyomi, onyomi, dan evaluasi berkala.
              </div>
              <div className="p-2.5 rounded-lg border border-border/40 bg-muted/20">
                <strong className="text-foreground">🎙️ Speaking &amp; Pronunciation Mode (SpeakingModePage):</strong> Latihan pelafalan interaktif dengan evaluasi kemiripan fonetik.
              </div>
              <div className="p-2.5 rounded-lg border border-border/40 bg-muted/20">
                <strong className="text-foreground">🏆 Gamifikasi &amp; Analitik Progres (AchievementPage, QuizModePage, AdminDashboard):</strong> Kuis dinamis, pelacakan milestone, streak harian, dan dashboard evaluasi.
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    id: "virtual-assistant-nlu-nlg",
    category: "Conversational AI & Natural Language Processing",
    title: "Virtual Assistant NLU & NLG",
    src: "",
    screenshots: [],
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
    src: "",
    screenshots: [],
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
