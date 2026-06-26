export type Locale = "en" | "id";

const en = {
  common: {
    startProject: "Bring an idea",
    seeSolutions: "Explore solutions",
    talkToUs: "Talk to us",
    readMore: "Read more",
    getStarted: "Get started",
  },
  nav: {
    solutions: "Solutions",
    products: "Products",
    industries: "Industries",
    company: "Company",
  },
  hero: {
    eyebrow: "AI · Digital transformation",
    slogan: "One idea. N executions.",
    subcopy:
      "1nx turns a single idea into many engineered executions — AI-enabled solutions, digital transformation and automation, delivered for the enterprise.",
    ctaPrimary: "Bring us an idea",
    ctaSecondary: "Explore solutions",
    scrollCue: "Scroll to see how",
  },
  thesis: {
    eyebrow: "The 1 → N model",
    titleA: "From a single idea to ",
    titleAccent: "many executions.",
    subtitle:
      "Strategy is where most work stalls. 1nx is built to multiply — one validated idea becomes a portfolio of running, measured executions across your business.",
    ideaLabel: "1 idea",
    executionsLabel: "N executions",
  },
  pillars: {
    eyebrow: "What we do",
    titleA: "Four ways we turn ideas into ",
    titleAccent: "outcomes.",
    items: [
      {
        title: "AI-Enabled Solutions",
        blurb:
          "Production-grade AI woven into your products and operations — not demos. Agents, copilots, RAG and ML where they move a real metric.",
        points: ["LLM agents & copilots", "RAG over your data", "ML models in production", "Evaluation & guardrails"],
      },
      {
        title: "Digital Transformation",
        blurb:
          "Modernize the core: platforms, data and ways of working — so the business can ship change continuously instead of in multi-year programs.",
        points: ["Platform & cloud modernization", "Data foundations", "Legacy replacement", "Operating-model change"],
      },
      {
        title: "Automation & Workflow",
        blurb:
          "Take the manual, error-prone work out of the loop. Orchestrated workflows and AI automation that run reliably and audit themselves.",
        points: ["Process orchestration", "Document & data automation", "Human-in-the-loop", "Idempotent, observable runs"],
      },
      {
        title: "Enterprise Professional Solutions",
        blurb:
          "Senior engineering and delivery teams that integrate with yours — architecture, build and run, accountable to outcomes and SLAs.",
        points: ["Solution architecture", "Build & integration", "Managed run & SLAs", "Security & compliance"],
      },
    ],
  },
  method: {
    eyebrow: "How we execute",
    titleA: "A path from idea to ",
    titleAccent: "scale.",
    subtitle: "A disciplined loop — not a one-way waterfall. Each step is measurable and reversible.",
    steps: [
      { k: "01", t: "Idea", d: "Frame the problem, the value and the riskiest assumption." },
      { k: "02", t: "Blueprint", d: "Architecture, data and an execution plan you can fund." },
      { k: "03", t: "Build", d: "Ship a working slice fast; prove it against real usage." },
      { k: "04", t: "Execute", d: "Roll out, integrate and operate with guardrails and SLAs." },
      { k: "05", t: "Scale", d: "Multiply what works across teams, regions and products." },
    ],
  },
  capabilities: {
    eyebrow: "Capabilities",
    titleA: "An execution engine, ",
    titleAccent: "end to end.",
    subtitle:
      "The capabilities behind every engagement — composed to fit, never one-size-fits-all.",
    items: [
      { t: "AI agents & copilots", d: "Goal-driven agents wired to your tools and data." },
      { t: "Data & ML platform", d: "Pipelines, features and models, governed and observable." },
      { t: "Cloud & DevOps", d: "Kubernetes, IaC and CI/CD that ship safely and often." },
      { t: "Integration & APIs", d: "Clean contracts across legacy and modern systems." },
      { t: "Security & compliance", d: "Built-in controls, audit trails and least privilege." },
      { t: "Product & design", d: "Interfaces people actually adopt." },
    ],
  },
  industries: {
    eyebrow: "Industries",
    titleA: "Execution tuned to ",
    titleAccent: "your sector.",
    items: [
      { name: "Financial services", body: "Payments, risk and compliance-grade automation." },
      { name: "Retail & commerce", body: "Personalization, fulfilment and demand intelligence." },
      { name: "Healthcare", body: "Secure data, workflow automation and decision support." },
      { name: "Logistics & supply chain", body: "Visibility, routing and exception handling." },
      { name: "Public sector", body: "Service digitization with accountability and audit." },
      { name: "SaaS & technology", body: "AI features, platform scale and time-to-market." },
    ],
  },
  impact: {
    eyebrow: "How we operate",
    title: "Built to execute, not to advise.",
    note: "We're accountable to the outcome you need — and we operate what we build.",
    stats: [
      { k: "1 team", v: "Strategy, build and run — one accountable team, end to end." },
      { k: "Prod-first", v: "Strategy only counts once it's running in production and measured." },
      { k: "AI-native", v: "Agents, RAG and automation built into the execution, not bolted on." },
    ],
  },
  family: {
    eyebrow: "Products & services",
    titleA: "Innovation, ",
    titleAccent: "shipped as products.",
    subtitle: "1nx builds and operates a family of products and services on one execution engine.",
    tag: "Product",
    items: [
      {
        category: "Payments",
        blurb: "Payment orchestration — one integration, every gateway.",
        long: "The orchestration layer over Indonesia's payment gateways. Integrate once, accept every method — QRIS, virtual accounts, e-wallets, cards and PayLater — and route across providers for uptime and coverage. Money settles straight to you.",
        points: [
          "One API, every gateway",
          "QRIS · VA · e-wallets · cards · PayLater",
          "Health-aware routing & failover",
          "Funds settle straight to you",
        ],
      },
      {
        category: "Messaging & automation",
        blurb: "Workflow automation + omnichannel messaging, AI-enabled.",
        long: "AI-enabled workflow automation and omnichannel messaging. Orchestrate customer conversations across WhatsApp, SMS and voice, with visual automations, campaigns and AI-assisted replies and routing.",
        points: [
          "Omnichannel: WhatsApp · SMS · voice",
          "Visual workflow automation",
          "AI-assisted replies & routing",
          "Campaigns & broadcasts",
        ],
      },
      {
        category: "Banking software",
        blurb: "Banking & lending software with AI-assisted workflows.",
        long: "Banking and lending software for Indonesia — loan origination (LOS), appraisal, collections, treasury and KYC/CDD on one shared BPMN/DMN workflow engine, with AI-assisted credit analysis. Built for BPRs, multifinance and regional banks.",
        points: [
          "Loan origination (LOS) & management",
          "Appraisal · collections · treasury · KYC",
          "BPMN/DMN workflow engine",
          "AI credit narrative (advisory)",
        ],
      },
      {
        category: "Secure access",
        blurb: "Secure SSH access & encrypted credential vault.",
        long: "Secure SSH access and a zero-knowledge, encrypted credential vault — browser and native terminals with SFTP, SSH key management, sync, SSO and host-key pinning. Built like an instrument, for DevOps and platform teams.",
        points: [
          "Browser + native SSH terminals",
          "Zero-knowledge encrypted vault",
          "SFTP & SSH key management",
          "Sync · SSO · host-key pinning",
        ],
      },
    ],
  },
  productsPage: {
    hero: {
      eyebrow: "Products & services",
      titleA: "Built by 1nx. ",
      titleAccent: "Run by you.",
      subcopy:
        "A family of products and services on one execution engine — payments, messaging, banking software and secure access.",
    },
    capabilitiesLabel: "What it does",
    visit: "Visit",
  },
  cta: {
    titleA: "Bring us one idea. ",
    titleAccent: "We'll engineer the executions.",
    subcopy: "Tell us the outcome you need. We'll come back with an execution plan, not a sales deck.",
    button: "Bring us an idea",
  },
  footer: {
    tagline: "AI-enabled solutions, digital transformation and automation for the enterprise. ",
    taglineStrong: "One idea. N executions.",
    columns: [
      {
        title: "Solutions",
        links: [
          { label: "AI-Enabled Solutions", href: "/solutions#ai" },
          { label: "Digital Transformation", href: "/solutions#transformation" },
          { label: "Automation & Workflow", href: "/solutions#automation" },
          { label: "Enterprise Solutions", href: "/solutions#enterprise" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About 1nx", href: "/company" },
          { label: "Industries", href: "/industries" },
          { label: "Talk to us", href: "/contact" },
        ],
      },
      {
        title: "Products",
        links: [
          { label: "1pay2link", href: "https://1pay2link.com" },
          { label: "1ncall", href: "https://1ncall.com" },
          { label: "1nflow", href: "https://1nflow.ai" },
          { label: "termssh", href: "https://termssh.com" },
        ],
      },
    ],
    copyright: "1nx. One idea. N executions.",
    madeIn: "Engineered for the enterprise.",
  },
  solutions: {
    hero: {
      eyebrow: "Solutions",
      titleA: "From idea to ",
      titleAccent: "running execution.",
      subcopy:
        "Four practices, one execution engine. Engage one or all — each is delivered to outcomes, not output.",
    },
    outcomesLabel: "Representative outcomes",
  },
  industriesPage: {
    hero: {
      eyebrow: "Industries",
      titleA: "Sector-tuned ",
      titleAccent: "execution.",
      subcopy:
        "The same engine, calibrated to the constraints, data and regulation of your industry.",
    },
    challengeLabel: "Challenge",
    approachLabel: "How 1nx executes",
  },
  company: {
    hero: {
      eyebrow: "Company",
      titleA: "We exist to ",
      titleAccent: "execute.",
      subcopy:
        "1nx is an AI-tech and transformation company built on one belief: the gap between a good idea and a working result is an engineering problem — so we engineer it.",
    },
    philosophy: {
      eyebrow: "Philosophy",
      titleA: "1 → N is an ",
      titleAccent: "operating principle.",
      subtitle:
        "We don't stop at strategy. We multiply a validated idea into many running executions, each measured and owned.",
    },
    values: {
      eyebrow: "How we work",
      title: "What we hold to.",
      items: [
        { t: "Outcomes over output", d: "We're accountable to the metric, not the deliverable." },
        { t: "Engineer everything", d: "Strategy is only real once it runs in production." },
        { t: "Multiply what works", d: "We scale proven executions, not slideware." },
        { t: "Own the run", d: "We operate what we build, to SLAs." },
      ],
    },
  },
  contact: {
    eyebrow: "Talk to us",
    titleA: "Bring us ",
    titleAccent: "one idea.",
    subcopy:
      "Tell us the outcome you need and a little about your stack. A senior engineer replies within one business day.",
    form: {
      name: "Full name",
      namePh: "Your name",
      email: "Work email",
      emailPh: "you@company.com",
      company: "Company",
      companyPh: "Company name (optional)",
      interest: "What do you need?",
      interestOptions: [
        "AI-Enabled Solutions",
        "Digital Transformation",
        "Automation & Workflow",
        "Enterprise Professional Solutions",
        "Not sure yet",
      ],
      message: "Tell us about it",
      messagePh: "The outcome you're after, your timeline and current stack…",
      submit: "Send enquiry",
      sending: "Sending…",
      successTitle: "Thanks — we've got it.",
      successBody: "A senior engineer will reply to your email within one business day.",
      error: "Something went wrong. Please try again or email us directly.",
      required: "required",
    },
    aside: {
      title: "What happens next",
      points: [
        "A senior engineer reads every enquiry — no bots.",
        "We map your goal to an execution plan, not a sales deck.",
        "A working slice can be live in weeks, not quarters.",
      ],
      emailLabel: "Prefer email?",
      email: "hello@1nx.io",
    },
  },
};

export type Dict = typeof en;

const id: Dict = {
  common: {
    startProject: "Bawa satu ide",
    seeSolutions: "Lihat solusi",
    talkToUs: "Hubungi kami",
    readMore: "Selengkapnya",
    getStarted: "Mulai",
  },
  nav: {
    solutions: "Solusi",
    products: "Produk",
    industries: "Industri",
    company: "Perusahaan",
  },
  hero: {
    eyebrow: "AI · Transformasi digital",
    slogan: "Satu ide. N eksekusi.",
    subcopy:
      "1nx mengubah satu ide menjadi banyak eksekusi yang terrekayasa — solusi berbasis AI, transformasi digital, dan otomasi, untuk skala enterprise.",
    ctaPrimary: "Bawa satu ide ke kami",
    ctaSecondary: "Lihat solusi",
    scrollCue: "Gulir untuk melihat caranya",
  },
  thesis: {
    eyebrow: "Model 1 → N",
    titleA: "Dari satu ide menjadi ",
    titleAccent: "banyak eksekusi.",
    subtitle:
      "Strategi adalah tempat sebagian besar pekerjaan macet. 1nx dirancang untuk menggandakan — satu ide tervalidasi menjadi portofolio eksekusi yang berjalan dan terukur di seluruh bisnis Anda.",
    ideaLabel: "1 ide",
    executionsLabel: "N eksekusi",
  },
  pillars: {
    eyebrow: "Yang kami kerjakan",
    titleA: "Empat cara kami mengubah ide menjadi ",
    titleAccent: "hasil.",
    items: [
      {
        title: "Solusi Berbasis AI",
        blurb:
          "AI tingkat produksi yang menyatu ke produk dan operasi Anda — bukan demo. Agent, copilot, RAG, dan ML di tempat yang menggerakkan metrik nyata.",
        points: ["Agent & copilot LLM", "RAG atas data Anda", "Model ML di produksi", "Evaluasi & guardrail"],
      },
      {
        title: "Transformasi Digital",
        blurb:
          "Modernisasi inti: platform, data, dan cara kerja — agar bisnis bisa mengirim perubahan terus-menerus, bukan dalam program bertahun-tahun.",
        points: ["Modernisasi platform & cloud", "Fondasi data", "Penggantian sistem lama", "Perubahan model operasi"],
      },
      {
        title: "Otomasi & Workflow",
        blurb:
          "Keluarkan pekerjaan manual yang rawan kesalahan dari alur. Workflow terorkestrasi dan otomasi AI yang berjalan andal dan mengaudit dirinya sendiri.",
        points: ["Orkestrasi proses", "Otomasi dokumen & data", "Human-in-the-loop", "Eksekusi idempoten & terpantau"],
      },
      {
        title: "Solusi Profesional Enterprise",
        blurb:
          "Tim engineering dan delivery senior yang menyatu dengan tim Anda — arsitektur, build, dan run, bertanggung jawab atas hasil dan SLA.",
        points: ["Arsitektur solusi", "Build & integrasi", "Managed run & SLA", "Keamanan & kepatuhan"],
      },
    ],
  },
  method: {
    eyebrow: "Cara kami eksekusi",
    titleA: "Jalur dari ide menuju ",
    titleAccent: "skala.",
    subtitle: "Sebuah loop yang disiplin — bukan waterfall satu arah. Setiap langkah terukur dan dapat dibalik.",
    steps: [
      { k: "01", t: "Ide", d: "Rumuskan masalah, nilainya, dan asumsi paling berisiko." },
      { k: "02", t: "Blueprint", d: "Arsitektur, data, dan rencana eksekusi yang bisa didanai." },
      { k: "03", t: "Build", d: "Kirim irisan yang berfungsi dengan cepat; buktikan pada penggunaan nyata." },
      { k: "04", t: "Eksekusi", d: "Gulirkan, integrasikan, dan operasikan dengan guardrail dan SLA." },
      { k: "05", t: "Skala", d: "Gandakan yang berhasil ke seluruh tim, wilayah, dan produk." },
    ],
  },
  capabilities: {
    eyebrow: "Kapabilitas",
    titleA: "Mesin eksekusi, ",
    titleAccent: "ujung ke ujung.",
    subtitle: "Kapabilitas di balik setiap engagement — dikomposisikan sesuai kebutuhan, bukan satu ukuran untuk semua.",
    items: [
      { t: "Agent & copilot AI", d: "Agent berbasis tujuan yang terhubung ke tools dan data Anda." },
      { t: "Platform data & ML", d: "Pipeline, fitur, dan model yang tata kelola dan terpantau." },
      { t: "Cloud & DevOps", d: "Kubernetes, IaC, dan CI/CD yang mengirim aman dan sering." },
      { t: "Integrasi & API", d: "Kontrak yang bersih lintas sistem lama dan modern." },
      { t: "Keamanan & kepatuhan", d: "Kontrol bawaan, jejak audit, dan least privilege." },
      { t: "Produk & desain", d: "Antarmuka yang benar-benar diadopsi orang." },
    ],
  },
  industries: {
    eyebrow: "Industri",
    titleA: "Eksekusi yang disetel untuk ",
    titleAccent: "sektor Anda.",
    items: [
      { name: "Jasa keuangan", body: "Pembayaran, risiko, dan otomasi kelas kepatuhan." },
      { name: "Ritel & commerce", body: "Personalisasi, fulfilment, dan intelijen permintaan." },
      { name: "Kesehatan", body: "Data aman, otomasi workflow, dan dukungan keputusan." },
      { name: "Logistik & rantai pasok", body: "Visibilitas, routing, dan penanganan eksepsi." },
      { name: "Sektor publik", body: "Digitalisasi layanan dengan akuntabilitas dan audit." },
      { name: "SaaS & teknologi", body: "Fitur AI, skala platform, dan time-to-market." },
    ],
  },
  impact: {
    eyebrow: "Cara kami beroperasi",
    title: "Dibangun untuk eksekusi, bukan sekadar nasihat.",
    note: "Kami bertanggung jawab atas hasil yang Anda butuhkan — dan kami mengoperasikan yang kami bangun.",
    stats: [
      { k: "1 tim", v: "Strategi, build, dan run — satu tim yang bertanggung jawab, ujung ke ujung." },
      { k: "Prod-first", v: "Strategi baru berarti saat berjalan di produksi dan terukur." },
      { k: "AI-native", v: "Agent, RAG, dan otomasi menyatu dalam eksekusi, bukan tempelan." },
    ],
  },
  family: {
    eyebrow: "Produk & layanan",
    titleA: "Inovasi, ",
    titleAccent: "dikirim sebagai produk.",
    subtitle: "1nx membangun dan mengoperasikan keluarga produk dan layanan di atas satu mesin eksekusi.",
    tag: "Produk",
    items: [
      {
        category: "Pembayaran",
        blurb: "Orkestrasi pembayaran — satu integrasi, semua gateway.",
        long: "Lapisan orkestrasi di atas payment gateway Indonesia. Integrasi sekali, terima semua metode — QRIS, virtual account, e-wallet, kartu, dan PayLater — dan rutekan antar penyedia demi uptime dan cakupan. Dana langsung masuk ke Anda.",
        points: [
          "Satu API, semua gateway",
          "QRIS · VA · e-wallet · kartu · PayLater",
          "Routing sadar-kesehatan & failover",
          "Dana langsung masuk ke Anda",
        ],
      },
      {
        category: "Pesan & otomasi",
        blurb: "Otomasi workflow + pesan omnichannel, berbasis AI.",
        long: "Otomasi workflow dan pesan omnichannel berbasis AI. Orkestrasi percakapan pelanggan di WhatsApp, SMS, dan suara, dengan otomasi visual, kampanye, serta balasan dan routing berbantuan AI.",
        points: [
          "Omnichannel: WhatsApp · SMS · suara",
          "Otomasi workflow visual",
          "Balasan & routing berbantuan AI",
          "Kampanye & broadcast",
        ],
      },
      {
        category: "Perangkat lunak perbankan",
        blurb: "Perangkat lunak perbankan & lending dengan workflow berbantuan AI.",
        long: "Perangkat lunak perbankan dan lending untuk Indonesia — loan origination (LOS), appraisal, collections, treasury, dan KYC/CDD di atas satu mesin workflow BPMN/DMN, dengan analisis kredit berbantuan AI. Dibuat untuk BPR, multifinance, dan bank daerah.",
        points: [
          "Loan origination (LOS) & manajemen",
          "Appraisal · collections · treasury · KYC",
          "Mesin workflow BPMN/DMN",
          "Narasi kredit AI (advisory)",
        ],
      },
      {
        category: "Akses aman",
        blurb: "Akses SSH aman & vault kredensial terenkripsi.",
        long: "Akses SSH aman dan vault kredensial terenkripsi zero-knowledge — terminal browser dan native dengan SFTP, manajemen kunci SSH, sinkronisasi, SSO, dan host-key pinning. Dibuat seperti instrumen, untuk tim DevOps dan platform.",
        points: [
          "Terminal SSH browser + native",
          "Vault terenkripsi zero-knowledge",
          "SFTP & manajemen kunci SSH",
          "Sinkronisasi · SSO · host-key pinning",
        ],
      },
    ],
  },
  productsPage: {
    hero: {
      eyebrow: "Produk & layanan",
      titleA: "Dibangun 1nx. ",
      titleAccent: "Dijalankan Anda.",
      subcopy:
        "Keluarga produk dan layanan di atas satu mesin eksekusi — pembayaran, pesan, perangkat lunak perbankan, dan akses aman.",
    },
    capabilitiesLabel: "Yang dilakukannya",
    visit: "Kunjungi",
  },
  cta: {
    titleA: "Bawa satu ide. ",
    titleAccent: "Kami rekayasa eksekusinya.",
    subcopy: "Sampaikan hasil yang Anda butuhkan. Kami kembali dengan rencana eksekusi, bukan deck penjualan.",
    button: "Bawa satu ide ke kami",
  },
  footer: {
    tagline: "Solusi berbasis AI, transformasi digital, dan otomasi untuk enterprise. ",
    taglineStrong: "Satu ide. N eksekusi.",
    columns: [
      {
        title: "Solusi",
        links: [
          { label: "Solusi Berbasis AI", href: "/solutions#ai" },
          { label: "Transformasi Digital", href: "/solutions#transformation" },
          { label: "Otomasi & Workflow", href: "/solutions#automation" },
          { label: "Solusi Enterprise", href: "/solutions#enterprise" },
        ],
      },
      {
        title: "Perusahaan",
        links: [
          { label: "Tentang 1nx", href: "/company" },
          { label: "Industri", href: "/industries" },
          { label: "Hubungi kami", href: "/contact" },
        ],
      },
      {
        title: "Produk",
        links: [
          { label: "1pay2link", href: "https://1pay2link.com" },
          { label: "1ncall", href: "https://1ncall.com" },
          { label: "1nflow", href: "https://1nflow.ai" },
          { label: "termssh", href: "https://termssh.com" },
        ],
      },
    ],
    copyright: "1nx. Satu ide. N eksekusi.",
    madeIn: "Direkayasa untuk enterprise.",
  },
  solutions: {
    hero: {
      eyebrow: "Solusi",
      titleA: "Dari ide ke ",
      titleAccent: "eksekusi yang berjalan.",
      subcopy:
        "Empat praktik, satu mesin eksekusi. Ambil satu atau semua — masing-masing dikirim untuk hasil, bukan sekadar output.",
    },
    outcomesLabel: "Contoh hasil",
  },
  industriesPage: {
    hero: {
      eyebrow: "Industri",
      titleA: "Eksekusi yang ",
      titleAccent: "disetel per sektor.",
      subcopy: "Mesin yang sama, dikalibrasi pada batasan, data, dan regulasi industri Anda.",
    },
    challengeLabel: "Tantangan",
    approachLabel: "Cara 1nx eksekusi",
  },
  company: {
    hero: {
      eyebrow: "Perusahaan",
      titleA: "Kami ada untuk ",
      titleAccent: "eksekusi.",
      subcopy:
        "1nx adalah perusahaan AI-tech dan transformasi yang dibangun atas satu keyakinan: jarak antara ide bagus dan hasil yang berjalan adalah masalah engineering — jadi kami merekayasanya.",
    },
    philosophy: {
      eyebrow: "Filosofi",
      titleA: "1 → N adalah ",
      titleAccent: "prinsip operasi.",
      subtitle:
        "Kami tidak berhenti di strategi. Kami menggandakan satu ide tervalidasi menjadi banyak eksekusi yang berjalan, terukur, dan ada pemiliknya.",
    },
    values: {
      eyebrow: "Cara kami bekerja",
      title: "Yang kami pegang.",
      items: [
        { t: "Hasil di atas output", d: "Kami bertanggung jawab pada metrik, bukan dokumen." },
        { t: "Rekayasa semuanya", d: "Strategi baru nyata saat berjalan di produksi." },
        { t: "Gandakan yang berhasil", d: "Kami menskalakan eksekusi terbukti, bukan slide." },
        { t: "Operasikan hasilnya", d: "Kami mengoperasikan yang kami bangun, sesuai SLA." },
      ],
    },
  },
  contact: {
    eyebrow: "Hubungi kami",
    titleA: "Bawa kami ",
    titleAccent: "satu ide.",
    subcopy:
      "Sampaikan hasil yang Anda butuhkan dan sedikit tentang stack Anda. Engineer senior membalas dalam satu hari kerja.",
    form: {
      name: "Nama lengkap",
      namePh: "Nama Anda",
      email: "Email kerja",
      emailPh: "anda@perusahaan.com",
      company: "Perusahaan",
      companyPh: "Nama perusahaan (opsional)",
      interest: "Apa yang Anda butuhkan?",
      interestOptions: [
        "Solusi Berbasis AI",
        "Transformasi Digital",
        "Otomasi & Workflow",
        "Solusi Profesional Enterprise",
        "Belum yakin",
      ],
      message: "Ceritakan kepada kami",
      messagePh: "Hasil yang Anda tuju, timeline, dan stack Anda saat ini…",
      submit: "Kirim permintaan",
      sending: "Mengirim…",
      successTitle: "Terima kasih — sudah kami terima.",
      successBody: "Engineer senior akan membalas ke email Anda dalam satu hari kerja.",
      error: "Terjadi kesalahan. Coba lagi atau email kami langsung.",
      required: "wajib",
    },
    aside: {
      title: "Langkah berikutnya",
      points: [
        "Engineer senior membaca setiap permintaan — bukan bot.",
        "Kami petakan tujuan Anda ke rencana eksekusi, bukan deck penjualan.",
        "Irisan yang berfungsi bisa aktif dalam hitungan minggu, bukan kuartal.",
      ],
      emailLabel: "Lebih suka email?",
      email: "hello@1nx.io",
    },
  },
};

export const dictionaries: Record<Locale, Dict> = { en, id };
