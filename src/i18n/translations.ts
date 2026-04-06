export type Locale = "en" | "zh";

const translations = {
  // ─── Header / Nav ───────────────────────────────────────────────
  nav: {
    about: { en: "About", zh: "关于我们" },
    applications: { en: "Applications", zh: "应用场景" },
    displayConcept: { en: "Display Concept", zh: "展示概念" },
    whySteel: { en: "Why Steel", zh: "钢结构优势" },
    services: { en: "Services", zh: "服务范围" },
    resources: { en: "Resources", zh: "资源下载" },
    contact: { en: "Contact", zh: "联系我们" },
    getInTouch: { en: "Get in Touch", zh: "立即咨询" },
  },

  // ─── Hero ───────────────────────────────────────────────────────
  hero: {
    badge: {
      en: "Australian Steel Structure Supplier",
      zh: "澳大利亚钢结构供应商",
    },
    headlineMain: {
      en: "Prefabricated Steel Structure Solutions",
      zh: "预制钢结构系统解决方案",
    },
    headlineAccent: {
      en: "for Modern Projects",
      zh: "赋能现代建筑项目",
    },
    description: {
      en: "DREAMAKER PTY LTD supplies steel frame systems and project coordination support for residential, compact, and modular applications across Australia. We work alongside builders, developers, and project teams to deliver precision-fabricated steel solutions.",
      zh: "DREAMAKER PTY LTD 为澳大利亚市场提供钢框架系统及项目协调支持，服务涵盖住宅、紧凑型及模块化建筑应用。我们与建筑商、开发商及项目团队紧密协作，交付精密制造的钢结构解决方案。",
    },
    ctaPrimary: { en: "Explore Applications", zh: "探索应用场景" },
    ctaSecondary: { en: "View Display Concept", zh: "查看展示概念" },
    statSteelTitle: { en: "Steel", zh: "钢结构" },
    statSteelSub: { en: "Frame Systems", zh: "框架系统" },
    statModularTitle: { en: "Modular", zh: "模块化" },
    statModularSub: { en: "Ready Designs", zh: "标准化设计" },
    statAuTitle: { en: "AU", zh: "AU" },
    statAuSub: { en: "Focused Supply", zh: "澳洲本地供应" },
    imagePlaceholder: {
      en: "Architectural / Prefab Visual",
      zh: "建筑 / 预制效果图",
    },
    imagePlaceholderSub: {
      en: "Replace with project photography",
      zh: "请替换为项目实景照片",
    },
    tagSteel: { en: "Steel Frame", zh: "钢框架" },
    tagPrefab: { en: "Prefabricated", zh: "预制化" },
    tagModular: { en: "Modular", zh: "模块化" },
    floatingLabel: { en: "Project Support", zh: "项目支持" },
    floatingTitle: { en: "End-to-End Supply", zh: "全流程供应" },
    floatingDesc: {
      en: "Frame → Fabrication → Delivery",
      zh: "框架 → 制造 → 交付",
    },
  },

  // ─── Business Summary ───────────────────────────────────────────
  business: {
    label: { en: "What We Do", zh: "我们的业务" },
    title: {
      en: "Steel Structure Supply &\nProject Support Partner",
      zh: "钢结构供应与\n项目支持伙伴",
    },
    description: {
      en: "DREAMAKER PTY LTD is focused on prefabricated steel structure solutions for the Australian market. We supply builder-friendly steel frame systems and provide project coordination support — from design through fabrication to delivery — helping project teams achieve more efficient, more consistent outcomes.",
      zh: "DREAMAKER PTY LTD 专注于为澳大利亚市场提供预制钢结构解决方案。我们供应适配建筑商需求的钢框架系统，并提供从设计到制造再到交付的全流程项目协调支持，助力项目团队实现更高效、更稳定的交付成果。",
    },
    pillars: [
      {
        title: { en: "Steel Frame Systems", zh: "钢框架系统" },
        description: {
          en: "Precision-engineered steel framing packages designed for residential and compact project applications.",
          zh: "精密工程设计的钢框架系统，专为住宅及紧凑型项目应用打造。",
        },
      },
      {
        title: { en: "Fabrication Support", zh: "制造支持" },
        description: {
          en: "Coordinated fabrication processes that align with your project timeline and structural requirements.",
          zh: "协调制造流程，确保与项目时间节点及结构需求精准匹配。",
        },
      },
      {
        title: { en: "Delivery Planning", zh: "物流规划" },
        description: {
          en: "Logistics coordination to ensure materials arrive on-site when your project team needs them.",
          zh: "统筹物流安排，确保材料按项目团队需求准时到达施工现场。",
        },
      },
      {
        title: { en: "Project Coordination", zh: "项目协调" },
        description: {
          en: "Working alongside builders, designers, and developers to support smooth project delivery.",
          zh: "与建筑商、设计师及开发商协同合作，保障项目顺利交付。",
        },
      },
    ],
  },

  // ─── Audience Split ─────────────────────────────────────────────
  audience: {
    label: { en: "Who We Work With", zh: "我们的合作对象" },
    title: {
      en: "Built for Every Stage of Your Project",
      zh: "贯穿项目全阶段的专业支持",
    },
    homeowner: {
      title: {
        en: "For Homeowners & General Enquiries",
        zh: "面向业主及一般咨询",
      },
      description: {
        en: "Exploring the idea of a steel-framed home, granny flat, or backyard studio? We can help you understand the possibilities. Browse our application examples and display concepts, then reach out for an initial conversation about your project idea.",
        zh: "正在考虑钢结构住宅、附属住宅或后院工作室？我们可以帮助您了解各种可能性。浏览我们的应用案例和展示概念，随时与我们联系，探讨您的项目想法。",
      },
      cta: { en: "Explore Applications", zh: "探索应用案例" },
    },
    builder: {
      title: {
        en: "For Builders, Developers & Project Partners",
        zh: "面向建筑商、开发商及项目合作伙伴",
      },
      description: {
        en: "Looking for a reliable steel frame supplier for your next residential or compact project? We provide builder-ready frame packages, design coordination, and fabrication support — tailored to your project specifications and timelines.",
        zh: "正在为下一个住宅或紧凑型项目寻找可靠的钢框架供应商？我们提供即装即用的框架套件、设计协调及制造支持——依据您的项目规格和时间要求量身定制。",
      },
      cta: { en: "Partner With Us", zh: "成为合作伙伴" },
    },
  },

  // ─── Applications ───────────────────────────────────────────────
  applications: {
    label: { en: "Application Areas", zh: "应用领域" },
    title: {
      en: "Project Applications We Support",
      zh: "我们支持的项目类型",
    },
    description: {
      en: "Our steel structure systems are suited to a range of residential and compact project types. These examples illustrate typical application areas — your project may differ, and we're happy to discuss specific requirements.",
      zh: "我们的钢结构系统适用于多种住宅及紧凑型项目。以下为典型应用场景示例——您的项目可能有所不同，欢迎联系我们讨论具体需求。",
    },
    disclaimer: {
      en: "These represent example application areas. Specific project requirements, approvals, and scope will vary depending on your location and project team.",
      zh: "以上为应用场景示例，具体项目需求、审批及范围视项目所在地和团队情况而定。",
    },
    items: [
      {
        title: { en: "Compact Residential Structures", zh: "紧凑型住宅" },
        description: {
          en: "Steel-framed solutions suited to single-storey and compact residential projects. Ideal where precision and speed of assembly matter.",
          zh: "适用于单层及紧凑型住宅项目的钢框架方案，在精度和装配效率上优势突出。",
        },
        tag: { en: "Residential", zh: "住宅" },
      },
      {
        title: {
          en: "Granny Flats & Secondary Dwellings",
          zh: "附属住宅与次要住所",
        },
        description: {
          en: "Steel frame packages for secondary dwelling applications — from standard layouts to project-specific configurations.",
          zh: "适用于附属住宅的钢框架套件——从标准户型到定制化配置，灵活应对不同需求。",
        },
        tag: { en: "Secondary Dwelling", zh: "附属住宅" },
      },
      {
        title: { en: "Modular Housing Concepts", zh: "模块化住宅概念" },
        description: {
          en: "Supporting modular and repeatable housing concepts with consistent, factory-accurate steel framing systems.",
          zh: "以工厂级精度的钢框架系统，支持可复制、标准化的模块化住宅概念。",
        },
        tag: { en: "Modular", zh: "模块化" },
      },
      {
        title: { en: "Backyard Studios & Extensions", zh: "后院工作室与扩建" },
        description: {
          en: "Lightweight steel-framed structures for studio spaces, home offices, and liveable extensions to existing properties.",
          zh: "轻型钢框架结构，适用于工作室、家庭办公空间及现有物业的宜居扩建。",
        },
        tag: { en: "Studio", zh: "工作室" },
      },
      {
        title: {
          en: "Builder-Ready Steel Frame Packages",
          zh: "建筑商即用框架套件",
        },
        description: {
          en: "Complete steel frame supply packages prepared for builder installation — cut, formed, and labelled to project specifications.",
          zh: "按项目规格切割、成型并标注的完整钢框架供应套件，可直接交付建筑商安装。",
        },
        tag: { en: "Supply Package", zh: "供应套件" },
      },
      {
        title: {
          en: "Custom Project-Based Solutions",
          zh: "定制化项目方案",
        },
        description: {
          en: "Tailored steel framing support for unique or non-standard project applications. We work with your project team to scope and deliver.",
          zh: "为非标准或特殊项目提供定制钢框架支持，与您的项目团队协作完成方案设计与交付。",
        },
        tag: { en: "Custom", zh: "定制" },
      },
    ],
  },

  // ─── Display Concept ────────────────────────────────────────────
  display: {
    label: { en: "Featured Display Concept", zh: "精选展示概念" },
    title: {
      en: "Compact Steel-Framed\nLiving Display Concept",
      zh: "紧凑型钢结构\n居住展示概念",
    },
    description: {
      en: "This display concept illustrates how a compact, steel-framed residential layout can be configured. Featuring an open-plan living area, two bedrooms, and a full bathroom — all within an efficient 60m² footprint. This is a concept reference, not a fixed product offering. Actual project specifications depend on design requirements and applicable approvals.",
      zh: "本展示概念展示了一个紧凑型钢结构住宅的布局方案：开放式起居空间、两间卧室和一间完整卫浴——全部集约在60平方米的高效空间内。这仅为概念参考，并非固定产品。实际项目规格取决于设计需求及相关审批要求。",
    },
    ctaPrimary: { en: "Request Information", zh: "咨询详情" },
    ctaSecondary: { en: "Download Summary", zh: "下载概述" },
    disclaimer: {
      en: "This is a display concept only and does not constitute an offer or guarantee of specific construction outcomes. Project delivery depends on the appointed builder, relevant approvals, and site conditions.",
      zh: "本展示仅为概念展示，不构成任何特定建造成果的承诺或保证。项目交付取决于指定建筑商、相关审批及场地条件。",
    },
    imagePlaceholder: { en: "Display Concept Render", zh: "展示概念效果图" },
    imagePlaceholderSub: {
      en: "Replace with 3D render or photography",
      zh: "请替换为3D效果图或实景照片",
    },
    floatingLabel: { en: "Display Concept", zh: "展示概念" },
    floatingTitle: { en: "Steel-Framed Living", zh: "钢结构居住空间" },
    stats: [
      {
        value: "60m²",
        label: { en: "Total Area", zh: "总面积" },
      },
      {
        value: "2",
        label: { en: "Bedrooms", zh: "卧室" },
      },
      {
        value: "1",
        label: { en: "Bathroom", zh: "卫浴" },
      },
      {
        value: { en: "Open", zh: "开放式" },
        label: { en: "Plan Living", zh: "起居空间" },
      },
    ],
  },

  // ─── Why Steel ──────────────────────────────────────────────────
  whySteel: {
    label: { en: "Why Steel", zh: "钢结构优势" },
    title: {
      en: "The Advantages of Steel Framing",
      zh: "钢框架结构的核心优势",
    },
    description: {
      en: "Steel structure systems offer practical benefits over traditional timber framing in many residential and compact project applications. Here's what makes steel framing a strong choice.",
      zh: "在众多住宅及紧凑型项目中，钢结构系统相较传统木框架具有显著的实用优势。以下是选择钢框架的关键理由。",
    },
    benefits: [
      {
        title: {
          en: "Straight and Accurate Framing",
          zh: "笔直精准的框架结构",
        },
        description: {
          en: "Steel framing is manufactured to precise tolerances, resulting in straighter walls, more consistent openings, and a cleaner base for interior finishes. This matters especially in compact layouts where every millimetre counts.",
          zh: "钢框架按精密公差制造，墙体更加平直、开口更加统一，为室内装饰提供整洁的基底。这在紧凑型户型中尤为重要——每一毫米都不容浪费。",
        },
      },
      {
        title: {
          en: "Termite-Resistant Structural Frame",
          zh: "天然防白蚁结构框架",
        },
        description: {
          en: "Steel framing doesn't attract termites — one of the most common structural risks in Australian residential construction. A steel frame removes this concern at the structural level, potentially reducing ongoing treatment costs.",
          zh: "钢框架不会引来白蚁——这是澳大利亚住宅建筑中最常见的结构风险之一。从结构层面消除白蚁隐患，有助于降低长期防治成本。",
        },
      },
      {
        title: {
          en: "Better Suited to Repeatable Layouts",
          zh: "更适合可复制的标准化户型",
        },
        description: {
          en: "For projects involving multiple units or repeatable designs, steel framing delivers consistent, factory-quality results every time. This makes it well-suited to modular and project-based housing applications.",
          zh: "对于涉及多个单元或可复制设计的项目，钢框架每次都能提供一致的工厂级品质。这使其非常适合模块化及项目型住宅应用。",
        },
      },
      {
        title: {
          en: "Cleaner Coordination for Prefab Systems",
          zh: "预制体系下更顺畅的协调",
        },
        description: {
          en: "Steel integrates well with prefabricated construction approaches. Components are pre-cut and labelled, simplifying on-site assembly and reducing material waste during the framing stage of the project.",
          zh: "钢结构与预制建造方式高度兼容。构件预先切割并标注，简化了现场装配流程，也减少了框架阶段的材料浪费。",
        },
      },
    ],
  },

  // ─── Services ───────────────────────────────────────────────────
  services: {
    label: { en: "What We Provide", zh: "我们提供的服务" },
    title: { en: "Our Supply &\nSupport Scope", zh: "供应与支持范围" },
    description: {
      en: "We provide steel frame supply and project coordination support across the key stages of the structural framing process. Our role is to work alongside your project team — not to replace them.",
      zh: "我们在结构框架流程的关键环节提供钢框架供应及项目协调支持。我们的角色是与您的项目团队协作——而非取代他们。",
    },
    noteLabel: { en: "Please note:", zh: "请注意：" },
    noteText: {
      en: "Final project approvals, site works, and construction responsibilities sit with the appointed builder and project team. Our services relate to steel frame supply and coordination support. Specific scope will be confirmed on a project-by-project basis.",
      zh: "最终项目审批、场地施工及建造责任由指定建筑商和项目团队承担。我们的服务涉及钢框架供应及协调支持，具体范围将根据每个项目分别确认。",
    },
    items: [
      {
        title: { en: "Steel Frame Packages", zh: "钢框架套件" },
        description: {
          en: "Pre-engineered steel framing systems prepared to project specifications — cut, formed, and labelled for efficient on-site assembly.",
          zh: "按项目规格预先工程化的钢框架系统——经切割、成型及标注，实现高效现场装配。",
        },
      },
      {
        title: { en: "Design Coordination", zh: "设计协调" },
        description: {
          en: "We work with your design and engineering team to align steel frame specifications with the overall project design intent.",
          zh: "与您的设计和工程团队协作，确保钢框架规格与整体项目设计意图一致。",
        },
      },
      {
        title: { en: "Fabrication Support", zh: "制造支持" },
        description: {
          en: "Coordinated fabrication through our supply network, ensuring quality control and alignment with project timelines.",
          zh: "通过我们的供应网络协调制造，确保质量管控并与项目时间节点同步。",
        },
      },
      {
        title: { en: "Delivery Planning", zh: "物流规划" },
        description: {
          en: "Logistics coordination to manage material delivery to your project site, timed to your construction schedule.",
          zh: "统筹物流管理，按照施工计划将材料准时运达项目现场。",
        },
      },
      {
        title: { en: "Installation Support", zh: "安装支持" },
        description: {
          en: "Technical guidance and support during the steel frame installation phase, working alongside your appointed builder or installer.",
          zh: "在钢框架安装阶段提供技术指导与支持，与您指定的建筑商或安装团队协同作业。",
        },
      },
    ],
  },

  // ─── Interior Showcase ──────────────────────────────────────────
  interior: {
    label: { en: "Interior Concepts", zh: "室内概念" },
    title: { en: "Imagining the Finished Space", zh: "展望完工后的生活空间" },
    description: {
      en: "While we focus on the structural frame, these display concepts illustrate how the finished interior might look. The quality of a steel-framed structure provides a precise, stable base for interior fit-out.",
      zh: "我们专注于结构框架，以下展示概念呈现了室内完工后的效果参考。钢结构的高品质为室内装修提供了精准、稳定的基础。",
    },
    imagePlaceholder: { en: "Interior Concept", zh: "室内概念" },
    spaces: [
      {
        title: { en: "Living", zh: "起居室" },
        description: {
          en: "Open-plan living areas designed for natural light and flow",
          zh: "开放式起居空间，注重自然采光与动线流畅",
        },
      },
      {
        title: { en: "Bedroom", zh: "卧室" },
        description: {
          en: "Comfortable, well-proportioned bedrooms with built-in storage",
          zh: "舒适、比例得当的卧室，配备嵌入式收纳",
        },
      },
      {
        title: { en: "Kitchen", zh: "厨房" },
        description: {
          en: "Efficient kitchen layouts optimised for compact living",
          zh: "为紧凑型居住优化的高效厨房布局",
        },
      },
      {
        title: { en: "Bathroom", zh: "卫浴" },
        description: {
          en: "Modern bathroom design with quality fixture specifications",
          zh: "现代卫浴设计，搭配高品质卫浴配置",
        },
      },
    ],
  },

  // ─── Resources ──────────────────────────────────────────────────
  resources: {
    label: { en: "Resources", zh: "资源中心" },
    title: {
      en: "Useful Downloads & Documents",
      zh: "实用文档与资料下载",
    },
    description: {
      en: "Access our key documents to learn more about what we supply, how we work, and how we can support your next project.",
      zh: "获取我们的核心文档，深入了解我们的供应范围、工作方式以及如何为您的下一个项目提供支持。",
    },
    items: [
      {
        title: { en: "Product Summary", zh: "产品概述" },
        description: {
          en: "An overview of our steel frame systems, specifications, and typical application areas. Useful for initial project scoping.",
          zh: "钢框架系统、规格参数及典型应用领域概览，适合项目前期评估参考。",
        },
        button: { en: "Download PDF", zh: "下载PDF" },
      },
      {
        title: { en: "Capability Statement", zh: "企业能力说明" },
        description: {
          en: "A detailed summary of DREAMAKER PTY LTD's supply capabilities, coordination services, and project support scope.",
          zh: "DREAMAKER PTY LTD 供应能力、协调服务及项目支持范围的详细说明。",
        },
        button: { en: "View Document", zh: "查看文档" },
      },
      {
        title: { en: "Builder Collaboration Guide", zh: "建筑商合作指南" },
        description: {
          en: "A practical guide for builders and project partners on how to work with us — from initial enquiry through to delivery.",
          zh: "面向建筑商及项目合作伙伴的实用指南——从初步咨询到最终交付的完整协作流程。",
        },
        button: { en: "Download Guide", zh: "下载指南" },
      },
    ],
  },

  // ─── Contact ────────────────────────────────────────────────────
  contact: {
    label: { en: "Get in Touch", zh: "联系我们" },
    title: {
      en: "Start a Conversation\nAbout Your Project",
      zh: "开启关于您项目的\n初步沟通",
    },
    description: {
      en: "Whether you're a homeowner exploring options, a builder looking for a steel frame supplier, or a developer scoping a new project — we'd love to hear from you. Send us your details and we'll get back to you promptly.",
      zh: "无论您是正在探索方案的业主、寻找钢框架供应商的建筑商，还是正在规划新项目的开发商——我们都期待您的来信。请留下您的信息，我们会尽快回复。",
    },
    locationLabel: { en: "Location", zh: "地址" },
    locationValue: { en: "Sydney, NSW, Australia", zh: "澳大利亚 新南威尔士州 悉尼" },
    emailLabel: { en: "Email", zh: "邮箱" },
    phoneLabel: { en: "Phone", zh: "电话" },
    formName: { en: "Full Name", zh: "姓名" },
    formNamePlaceholder: { en: "Your name", zh: "请输入您的姓名" },
    formEmail: { en: "Email", zh: "邮箱" },
    formEmailPlaceholder: { en: "you@example.com", zh: "您的邮箱地址" },
    formPhone: { en: "Phone", zh: "电话" },
    formPhonePlaceholder: { en: "04xx xxx xxx", zh: "04xx xxx xxx" },
    formRole: { en: "I am a...", zh: "我的身份是..." },
    formRolePlaceholder: { en: "Select your role", zh: "请选择您的角色" },
    formRoleOptions: [
      { en: "Homeowner / General Enquiry", zh: "业主 / 一般咨询" },
      { en: "Builder / Contractor", zh: "建筑商 / 承包商" },
      { en: "Developer", zh: "开发商" },
      { en: "Designer / Architect", zh: "设计师 / 建筑师" },
      { en: "Consultant / Other", zh: "顾问 / 其他" },
    ],
    formLocation: { en: "Project Location", zh: "项目所在地" },
    formLocationPlaceholder: { en: "Suburb, State", zh: "区域, 州" },
    formMessage: { en: "Message", zh: "留言" },
    formMessagePlaceholder: {
      en: "Tell us about your project or enquiry...",
      zh: "请描述您的项目或咨询内容...",
    },
    formSubmit: { en: "Send Enquiry", zh: "发送咨询" },
    formNote: {
      en: "We typically respond within 1–2 business days.",
      zh: "我们通常在1-2个工作日内回复。",
    },
    thankYouTitle: { en: "Thank You", zh: "感谢您的咨询" },
    thankYouMessage: {
      en: "We've received your enquiry and will be in touch shortly.",
      zh: "我们已收到您的咨询，会尽快与您联系。",
    },
  },

  // ─── Footer ─────────────────────────────────────────────────────
  footer: {
    description: {
      en: "Prefabricated steel structure solutions for the Australian market. We supply steel frame systems and provide project coordination support for residential and compact project applications.",
      zh: "面向澳大利亚市场的预制钢结构解决方案。我们提供钢框架系统供应及住宅和紧凑型项目的协调支持服务。",
    },
    location: { en: "Sydney, NSW, Australia", zh: "澳大利亚 新南威尔士州 悉尼" },
    groupCompany: { en: "Company", zh: "公司" },
    groupResources: { en: "Resources", zh: "资源" },
    groupConnect: { en: "Connect", zh: "联系" },
    companyLinks: {
      about: { en: "About", zh: "关于我们" },
      applications: { en: "Applications", zh: "应用场景" },
      whySteel: { en: "Why Steel", zh: "钢结构优势" },
      services: { en: "Services", zh: "服务范围" },
    },
    resourceLinks: {
      productSummary: { en: "Product Summary", zh: "产品概述" },
      capabilityStatement: { en: "Capability Statement", zh: "企业能力说明" },
      builderGuide: { en: "Builder Guide", zh: "建筑商指南" },
      displayConcept: { en: "Display Concept", zh: "展示概念" },
    },
    connectLinks: {
      contactUs: { en: "Contact Us", zh: "联系我们" },
      requestInfo: { en: "Request Information", zh: "信息咨询" },
      partnerWithUs: { en: "Partner With Us", zh: "成为合作伙伴" },
    },
    copyright: {
      en: "© 2026 DREAMAKER PTY LTD. All rights reserved.",
      zh: "© 2026 DREAMAKER PTY LTD 版权所有",
    },
    privacy: { en: "Privacy Policy", zh: "隐私政策" },
    terms: { en: "Terms of Use", zh: "使用条款" },
  },
} as const;

export type TranslationKey = typeof translations;
export default translations;
