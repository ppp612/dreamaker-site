export type Locale = "en" | "zh";

const translations = {
  // ─── Header / Nav ───────────────────────────────────────────────
  nav: {
    about: { en: "About", zh: "关于我们" },
    applications: { en: "Applications", zh: "应用场景" },
    displayConcept: { en: "Display Concept", zh: "样板展示" },
    whySteel: { en: "Why Steel", zh: "为什么选钢结构" },
    services: { en: "Services", zh: "服务内容" },
    resources: { en: "Resources", zh: "资料下载" },
    contact: { en: "Contact", zh: "联系我们" },
    getInTouch: { en: "Get in Touch", zh: "立即咨询" },
  },

  // ─── Hero ───────────────────────────────────────────────────────
  hero: {
    badge: {
      en: "Australian Steel Structure Supplier",
      zh: "澳洲本土钢结构供应商",
    },
    headlineMain: {
      en: "Prefabricated Steel Structure Solutions",
      zh: "预制钢结构整体解决方案",
    },
    headlineAccent: {
      en: "for Modern Projects",
      zh: "让好房子从好框架开始",
    },
    description: {
      en: "DREAMAKER PTY LTD supplies steel frame systems and project coordination support for residential, compact, and modular applications across Australia. We work alongside builders, developers, and project teams to deliver precision-fabricated steel solutions.",
      zh: "DREAMAKER PTY LTD 为澳洲住宅、小型建筑及模块化项目提供钢框架系统与项目协调服务。我们与建筑商、开发商和项目团队并肩合作，用精准制造的钢结构方案，让每个项目落地更顺畅。",
    },
    ctaPrimary: { en: "Explore Applications", zh: "了解应用场景" },
    ctaSecondary: { en: "View Display Concept", zh: "查看样板方案" },
    statSteelTitle: { en: "Steel", zh: "钢结构" },
    statSteelSub: { en: "Frame Systems", zh: "框架体系" },
    statModularTitle: { en: "Modular", zh: "模块化" },
    statModularSub: { en: "Ready Designs", zh: "成熟方案" },
    statAuTitle: { en: "AU", zh: "AU" },
    statAuSub: { en: "Focused Supply", zh: "深耕澳洲" },
    imagePlaceholder: {
      en: "Architectural / Prefab Visual",
      zh: "建筑效果图展示区",
    },
    imagePlaceholderSub: {
      en: "Replace with project photography",
      zh: "后续替换为实景照片",
    },
    tagSteel: { en: "Steel Frame", zh: "钢框架" },
    tagPrefab: { en: "Prefabricated", zh: "预制化" },
    tagModular: { en: "Modular", zh: "模块化" },
    floatingLabel: { en: "Project Support", zh: "项目支持" },
    floatingTitle: { en: "End-to-End Supply", zh: "全流程供应" },
    floatingDesc: {
      en: "Frame → Fabrication → Delivery",
      zh: "框架 → 加工 → 交付",
    },
  },

  // ─── Business Summary ───────────────────────────────────────────
  business: {
    label: { en: "What We Do", zh: "我们做什么" },
    title: {
      en: "Steel Structure Supply &\nProject Support Partner",
      zh: "钢结构供应\n与项目协作伙伴",
    },
    description: {
      en: "DREAMAKER PTY LTD is focused on prefabricated steel structure solutions for the Australian market. We supply builder-friendly steel frame systems and provide project coordination support — from design through fabrication to delivery — helping project teams achieve more efficient, more consistent outcomes.",
      zh: "DREAMAKER PTY LTD 专注于澳洲市场的预制钢结构方案。我们提供对建筑商友好的钢框架产品，从设计对接、工厂加工到现场交付，全程配合项目团队，让施工更高效，品质更稳定。",
    },
    pillars: [
      {
        title: { en: "Steel Frame Systems", zh: "钢框架系统" },
        description: {
          en: "Precision-engineered steel framing packages designed for residential and compact project applications.",
          zh: "针对住宅和小型项目设计的高精度钢框架产品，开箱即可进场安装。",
        },
      },
      {
        title: { en: "Fabrication Support", zh: "加工配合" },
        description: {
          en: "Coordinated fabrication processes that align with your project timeline and structural requirements.",
          zh: "根据项目进度和结构要求协调加工流程，做到按时、按规格交货。",
        },
      },
      {
        title: { en: "Delivery Planning", zh: "配送安排" },
        description: {
          en: "Logistics coordination to ensure materials arrive on-site when your project team needs them.",
          zh: "统一安排物流，确保材料在施工节点准时送达工地。",
        },
      },
      {
        title: { en: "Project Coordination", zh: "项目对接" },
        description: {
          en: "Working alongside builders, designers, and developers to support smooth project delivery.",
          zh: "与建筑商、设计师、开发商紧密配合，让项目推进更顺畅。",
        },
      },
    ],
  },

  // ─── Audience Split ─────────────────────────────────────────────
  audience: {
    label: { en: "Who We Work With", zh: "谁在和我们合作" },
    title: {
      en: "Built for Every Stage of Your Project",
      zh: "不管您处于哪个阶段，我们都能帮上忙",
    },
    homeowner: {
      title: {
        en: "For Homeowners & General Enquiries",
        zh: "如果您是业主或正在了解中",
      },
      description: {
        en: "Exploring the idea of a steel-framed home, granny flat, or backyard studio? We can help you understand the possibilities. Browse our application examples and display concepts, then reach out for an initial conversation about your project idea.",
        zh: "想了解钢结构住宅、Granny Flat 或后院独立屋？先看看我们的应用案例和样板方案，有任何想法都欢迎直接聊聊——没有销售压力，先了解再决定。",
      },
      cta: { en: "Explore Applications", zh: "看看有哪些方案" },
    },
    builder: {
      title: {
        en: "For Builders, Developers & Project Partners",
        zh: "如果您是建筑商、开发商或行业伙伴",
      },
      description: {
        en: "Looking for a reliable steel frame supplier for your next residential or compact project? We provide builder-ready frame packages, design coordination, and fabrication support — tailored to your project specifications and timelines.",
        zh: "需要一个靠谱的钢框架供应商？我们提供可直接进场的框架套件，配合设计对接和加工服务，按照您的项目要求和工期来定制。",
      },
      cta: { en: "Partner With Us", zh: "洽谈合作" },
    },
  },

  // ─── Applications ───────────────────────────────────────────────
  applications: {
    label: { en: "Application Areas", zh: "应用场景" },
    title: {
      en: "Project Applications We Support",
      zh: "这些项目类型，我们都能做",
    },
    description: {
      en: "Our steel structure systems are suited to a range of residential and compact project types. These examples illustrate typical application areas — your project may differ, and we're happy to discuss specific requirements.",
      zh: "我们的钢结构系统适用于各类住宅和中小型项目。以下是一些常见的应用方向——每个项目情况不同，欢迎和我们具体聊聊。",
    },
    disclaimer: {
      en: "These represent example application areas. Specific project requirements, approvals, and scope will vary depending on your location and project team.",
      zh: "以上为典型应用示例，具体的项目要求、审批流程和实施范围因地区和团队而异。",
    },
    items: [
      {
        title: { en: "Compact Residential Structures", zh: "小型独立住宅" },
        description: {
          en: "Steel-framed solutions suited to single-storey and compact residential projects. Ideal where precision and speed of assembly matter.",
          zh: "适合单层和小户型住宅，钢结构的精度高、装配快，特别适合空间紧凑的项目。",
        },
        tag: { en: "Residential", zh: "住宅" },
      },
      {
        title: {
          en: "Granny Flats & Secondary Dwellings",
          zh: "Granny Flat / 附属住宅",
        },
        description: {
          en: "Steel frame packages for secondary dwelling applications — from standard layouts to project-specific configurations.",
          zh: "从标准户型到定制方案，为 Granny Flat 和附属住宅项目提供成套钢框架。",
        },
        tag: { en: "Secondary Dwelling", zh: "副宅" },
      },
      {
        title: { en: "Modular Housing Concepts", zh: "模块化住宅" },
        description: {
          en: "Supporting modular and repeatable housing concepts with consistent, factory-accurate steel framing systems.",
          zh: "工厂统一生产、品质一致，非常适合需要批量复制的模块化住宅项目。",
        },
        tag: { en: "Modular", zh: "模块化" },
      },
      {
        title: { en: "Backyard Studios & Extensions", zh: "后院工作室 / 加建" },
        description: {
          en: "Lightweight steel-framed structures for studio spaces, home offices, and liveable extensions to existing properties.",
          zh: "轻钢结构的独立工作室、居家办公室或加建空间，给现有住宅多一种可能。",
        },
        tag: { en: "Studio", zh: "工作室" },
      },
      {
        title: {
          en: "Builder-Ready Steel Frame Packages",
          zh: "建筑商成套框架",
        },
        description: {
          en: "Complete steel frame supply packages prepared for builder installation — cut, formed, and labelled to project specifications.",
          zh: "按图纸切割成型、逐件标注，建筑商收到即可安装，省去大量现场加工。",
        },
        tag: { en: "Supply Package", zh: "成套供应" },
      },
      {
        title: {
          en: "Custom Project-Based Solutions",
          zh: "项目定制方案",
        },
        description: {
          en: "Tailored steel framing support for unique or non-standard project applications. We work with your project team to scope and deliver.",
          zh: "遇到特殊或非标项目？我们可以配合您的团队，从方案设计到生产交付一起搞定。",
        },
        tag: { en: "Custom", zh: "定制" },
      },
    ],
  },

  // ─── Display Concept ────────────────────────────────────────────
  display: {
    label: { en: "Featured Display Concept", zh: "样板方案展示" },
    title: {
      en: "Compact Steel-Framed\nLiving Display Concept",
      zh: "紧凑型钢结构\n居住样板方案",
    },
    description: {
      en: "This display concept illustrates how a compact, steel-framed residential layout can be configured. Featuring an open-plan living area, two bedrooms, and a full bathroom — all within an efficient 60m² footprint. This is a concept reference, not a fixed product offering. Actual project specifications depend on design requirements and applicable approvals.",
      zh: "这个样板方案展示了钢结构小户型住宅可以做成什么样：开放式客厅、两间卧室、一间卫浴，总共只用了60平方米。这是一个概念参考，不是固定产品——实际方案会根据设计需求和审批要求来定。",
    },
    ctaPrimary: { en: "Request Information", zh: "了解更多" },
    ctaSecondary: { en: "Download Summary", zh: "下载资料" },
    disclaimer: {
      en: "This is a display concept only and does not constitute an offer or guarantee of specific construction outcomes. Project delivery depends on the appointed builder, relevant approvals, and site conditions.",
      zh: "本方案仅供展示参考，不构成任何施工承诺。实际项目由指定建筑商负责施工，需符合相关审批和场地条件。",
    },
    imagePlaceholder: { en: "Display Concept Render", zh: "样板效果图" },
    imagePlaceholderSub: {
      en: "Replace with 3D render or photography",
      zh: "后续替换为效果图或实景照片",
    },
    floatingLabel: { en: "Display Concept", zh: "样板展示" },
    floatingTitle: { en: "Steel-Framed Living", zh: "钢结构宜居空间" },
    stats: [
      {
        value: "60m²",
        label: { en: "Total Area", zh: "建筑面积" },
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
        label: { en: "Plan Living", zh: "客厅" },
      },
    ],
  },

  // ─── Why Steel ──────────────────────────────────────────────────
  whySteel: {
    label: { en: "Why Steel", zh: "为什么选钢结构" },
    title: {
      en: "The Advantages of Steel Framing",
      zh: "钢框架的几个实在优势",
    },
    description: {
      en: "Steel structure systems offer practical benefits over traditional timber framing in many residential and compact project applications. Here's what makes steel framing a strong choice.",
      zh: "和传统木框架相比，钢结构在很多住宅和小型项目中都有明显的优势。以下几点，是很多人选择钢结构的原因。",
    },
    benefits: [
      {
        title: {
          en: "Straight and Accurate Framing",
          zh: "又直又准，误差极小",
        },
        description: {
          en: "Steel framing is manufactured to precise tolerances, resulting in straighter walls, more consistent openings, and a cleaner base for interior finishes. This matters especially in compact layouts where every millimetre counts.",
          zh: "钢框架在工厂按精密标准生产，墙面更平直、门窗洞口更规整，后续装修也更省心。户型越小，这种精度优势就越明显。",
        },
      },
      {
        title: {
          en: "Termite-Resistant Structural Frame",
          zh: "不怕白蚁，省心省钱",
        },
        description: {
          en: "Steel framing doesn't attract termites — one of the most common structural risks in Australian residential construction. A steel frame removes this concern at the structural level, potentially reducing ongoing treatment costs.",
          zh: "白蚁是澳洲住宅最头疼的问题之一，但钢结构从根本上不存在这个烦恼。不用年年做防蚁处理，长期下来能省不少维护费。",
        },
      },
      {
        title: {
          en: "Better Suited to Repeatable Layouts",
          zh: "批量项目，品质如一",
        },
        description: {
          en: "For projects involving multiple units or repeatable designs, steel framing delivers consistent, factory-quality results every time. This makes it well-suited to modular and project-based housing applications.",
          zh: "如果项目涉及多套重复户型，钢框架能保证每一套都是工厂级的一致品质，特别适合模块化住宅和批量开发项目。",
        },
      },
      {
        title: {
          en: "Cleaner Coordination for Prefab Systems",
          zh: "预制装配，干净利落",
        },
        description: {
          en: "Steel integrates well with prefabricated construction approaches. Components are pre-cut and labelled, simplifying on-site assembly and reducing material waste during the framing stage of the project.",
          zh: "钢构件在工厂预切割、预标注，到了工地直接拼装，现场更整洁，浪费更少，施工节奏也更好把控。",
        },
      },
    ],
  },

  // ─── Services ───────────────────────────────────────────────────
  services: {
    label: { en: "What We Provide", zh: "我们能提供什么" },
    title: { en: "Our Supply &\nSupport Scope", zh: "供应与服务范围" },
    description: {
      en: "We provide steel frame supply and project coordination support across the key stages of the structural framing process. Our role is to work alongside your project team — not to replace them.",
      zh: "在钢结构框架的关键环节，我们提供材料供应和项目协调服务。我们是您项目团队的协作方，不是替代者。",
    },
    noteLabel: { en: "Please note:", zh: "温馨提示：" },
    noteText: {
      en: "Final project approvals, site works, and construction responsibilities sit with the appointed builder and project team. Our services relate to steel frame supply and coordination support. Specific scope will be confirmed on a project-by-project basis.",
      zh: "项目最终的审批、现场施工和建造工作由指定建筑商和项目团队负责。我们的服务范围主要是钢框架供应和协调配合，具体以每个项目的实际情况为准。",
    },
    items: [
      {
        title: { en: "Steel Frame Packages", zh: "成套钢框架" },
        description: {
          en: "Pre-engineered steel framing systems prepared to project specifications — cut, formed, and labelled for efficient on-site assembly.",
          zh: "按项目图纸预先加工好的钢框架套件，切割、成型、标注一步到位，到场即可安装。",
        },
      },
      {
        title: { en: "Design Coordination", zh: "设计对接" },
        description: {
          en: "We work with your design and engineering team to align steel frame specifications with the overall project design intent.",
          zh: "和您的设计团队、工程师协调配合，让钢框架的技术参数与整体设计方案无缝衔接。",
        },
      },
      {
        title: { en: "Fabrication Support", zh: "加工服务" },
        description: {
          en: "Coordinated fabrication through our supply network, ensuring quality control and alignment with project timelines.",
          zh: "通过我们的加工网络统一生产，严格品控，确保交期和项目进度匹配。",
        },
      },
      {
        title: { en: "Delivery Planning", zh: "配送安排" },
        description: {
          en: "Logistics coordination to manage material delivery to your project site, timed to your construction schedule.",
          zh: "配合施工计划安排运输，让材料按时到达工地，不耽误工期。",
        },
      },
      {
        title: { en: "Installation Support", zh: "安装技术支持" },
        description: {
          en: "Technical guidance and support during the steel frame installation phase, working alongside your appointed builder or installer.",
          zh: "框架安装阶段提供现场技术指导，配合您的建筑商或安装团队把活干好。",
        },
      },
    ],
  },

  // ─── Interior Showcase ──────────────────────────────────────────
  interior: {
    label: { en: "Interior Concepts", zh: "室内概念" },
    title: { en: "Imagining the Finished Space", zh: "看看住进去是什么样" },
    description: {
      en: "While we focus on the structural frame, these display concepts illustrate how the finished interior might look. The quality of a steel-framed structure provides a precise, stable base for interior fit-out.",
      zh: "虽然我们专注做框架，但好框架决定了好装修。钢结构的高精度和稳定性，为后续的室内装修打下了扎实基础。以下是几种室内效果的概念参考。",
    },
    imagePlaceholder: { en: "Interior Concept", zh: "效果参考" },
    spaces: [
      {
        title: { en: "Living", zh: "客厅" },
        description: {
          en: "Open-plan living areas designed for natural light and flow",
          zh: "开放式设计，通透明亮，动线自然舒适",
        },
      },
      {
        title: { en: "Bedroom", zh: "卧室" },
        description: {
          en: "Comfortable, well-proportioned bedrooms with built-in storage",
          zh: "比例舒适的卧室空间，自带充足收纳",
        },
      },
      {
        title: { en: "Kitchen", zh: "厨房" },
        description: {
          en: "Efficient kitchen layouts optimised for compact living",
          zh: "紧凑高效的厨房布局，小空间也好用",
        },
      },
      {
        title: { en: "Bathroom", zh: "卫浴" },
        description: {
          en: "Modern bathroom design with quality fixture specifications",
          zh: "现代简洁的卫浴设计，配置不将就",
        },
      },
    ],
  },

  // ─── Resources ──────────────────────────────────────────────────
  resources: {
    label: { en: "Resources", zh: "资料下载" },
    title: {
      en: "Useful Downloads & Documents",
      zh: "实用资料，随时查阅",
    },
    description: {
      en: "Access our key documents to learn more about what we supply, how we work, and how we can support your next project.",
      zh: "下载我们的核心文档，快速了解产品信息、合作模式和项目支持方式。",
    },
    items: [
      {
        title: { en: "Product Summary", zh: "产品手册" },
        description: {
          en: "An overview of our steel frame systems, specifications, and typical application areas. Useful for initial project scoping.",
          zh: "钢框架系统介绍、规格参数和常见应用场景一览，适合项目前期快速了解。",
        },
        button: { en: "Download PDF", zh: "下载 PDF" },
      },
      {
        title: { en: "Capability Statement", zh: "公司能力简介" },
        description: {
          en: "A detailed summary of DREAMAKER PTY LTD's supply capabilities, coordination services, and project support scope.",
          zh: "DREAMAKER 的供应能力、服务内容和项目支持范围的详细介绍。",
        },
        button: { en: "View Document", zh: "查看文档" },
      },
      {
        title: { en: "Builder Collaboration Guide", zh: "建筑商合作指南" },
        description: {
          en: "A practical guide for builders and project partners on how to work with us — from initial enquiry through to delivery.",
          zh: "写给建筑商和合作伙伴的实用手册：从初次接洽到交付验收，合作全流程说明。",
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
      zh: "聊聊您的项目\n一切从这里开始",
    },
    description: {
      en: "Whether you're a homeowner exploring options, a builder looking for a steel frame supplier, or a developer scoping a new project — we'd love to hear from you. Send us your details and we'll get back to you promptly.",
      zh: "不管您是想了解钢结构的业主，还是在找靠谱供应商的建筑商，又或者是筹划新项目的开发商——都欢迎留下信息，我们会尽快和您联系。",
    },
    locationLabel: { en: "Location", zh: "地址" },
    locationValue: { en: "Sydney, NSW, Australia", zh: "悉尼, NSW, 澳大利亚" },
    emailLabel: { en: "Email", zh: "邮箱" },
    phoneLabel: { en: "Phone", zh: "电话" },
    formName: { en: "Full Name", zh: "您的姓名" },
    formNamePlaceholder: { en: "Your name", zh: "请输入姓名" },
    formEmail: { en: "Email", zh: "邮箱" },
    formEmailPlaceholder: { en: "you@example.com", zh: "your@email.com" },
    formPhone: { en: "Phone", zh: "电话" },
    formPhonePlaceholder: { en: "04xx xxx xxx", zh: "04xx xxx xxx" },
    formRole: { en: "I am a...", zh: "我是..." },
    formRolePlaceholder: { en: "Select your role", zh: "请选择您的身份" },
    formRoleOptions: [
      { en: "Homeowner / General Enquiry", zh: "业主 / 普通咨询" },
      { en: "Builder / Contractor", zh: "建筑商 / 承建商" },
      { en: "Developer", zh: "开发商" },
      { en: "Designer / Architect", zh: "设计师 / 建筑师" },
      { en: "Consultant / Other", zh: "顾问 / 其他" },
    ],
    formLocation: { en: "Project Location", zh: "项目地点" },
    formLocationPlaceholder: { en: "Suburb, State", zh: "区域 / 城市" },
    formMessage: { en: "Message", zh: "留言" },
    formMessagePlaceholder: {
      en: "Tell us about your project or enquiry...",
      zh: "简单描述一下您的项目或想了解的内容...",
    },
    formSubmit: { en: "Send Enquiry", zh: "提交咨询" },
    formNote: {
      en: "We typically respond within 1–2 business days.",
      zh: "我们通常会在 1-2 个工作日内回复。",
    },
    thankYouTitle: { en: "Thank You", zh: "感谢您的咨询" },
    thankYouMessage: {
      en: "We've received your enquiry and will be in touch shortly.",
      zh: "我们已经收到了您的信息，会尽快与您联系。",
    },
  },

  // ─── Footer ─────────────────────────────────────────────────────
  footer: {
    description: {
      en: "Prefabricated steel structure solutions for the Australian market. We supply steel frame systems and provide project coordination support for residential and compact project applications.",
      zh: "面向澳洲市场的预制钢结构方案。提供钢框架系统供应及住宅、小型项目的全程协调支持。",
    },
    location: { en: "Sydney, NSW, Australia", zh: "悉尼, NSW, 澳大利亚" },
    groupCompany: { en: "Company", zh: "公司" },
    groupResources: { en: "Resources", zh: "资源" },
    groupConnect: { en: "Connect", zh: "联系" },
    companyLinks: {
      about: { en: "About", zh: "关于我们" },
      applications: { en: "Applications", zh: "应用场景" },
      whySteel: { en: "Why Steel", zh: "钢结构优势" },
      services: { en: "Services", zh: "服务内容" },
    },
    resourceLinks: {
      productSummary: { en: "Product Summary", zh: "产品手册" },
      capabilityStatement: { en: "Capability Statement", zh: "公司能力简介" },
      builderGuide: { en: "Builder Guide", zh: "合作指南" },
      displayConcept: { en: "Display Concept", zh: "样板展示" },
    },
    connectLinks: {
      contactUs: { en: "Contact Us", zh: "联系我们" },
      requestInfo: { en: "Request Information", zh: "咨询信息" },
      partnerWithUs: { en: "Partner With Us", zh: "洽谈合作" },
    },
    copyright: {
      en: "© 2026 DREAMAKER PTY LTD. All rights reserved.",
      zh: "© 2026 DREAMAKER PTY LTD 保留所有权利",
    },
    privacy: { en: "Privacy Policy", zh: "隐私政策" },
    terms: { en: "Terms of Use", zh: "使用条款" },
  },
} as const;

export type TranslationKey = typeof translations;
export default translations;
