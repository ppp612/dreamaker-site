export type Locale = "en" | "zh";

const translations = {
  // ─── Header / Nav ───────────────────────────────────────────────
  nav: {
    about: { en: "About", zh: "关于我们" },
    services: { en: "Services", zh: "服务领域" },
    approach: { en: "Our Approach", zh: "合作方式" },
    capabilities: { en: "Capabilities", zh: "整合能力" },
    contact: { en: "Contact", zh: "联系我们" },
    getInTouch: { en: "Get in Touch", zh: "开始对话" },
  },

  // ─── Hero ───────────────────────────────────────────────────────
  hero: {
    headline: {
      en: "Strategic Project Support",
      zh: "策略性项目支持",
    },
    headlineAccent: {
      en: "with Integrated Capabilities",
      zh: "整合能力 驱动落地",
    },
    description: {
      en: "We help clients navigate complex projects through consulting, coordination, and practical solution design — backed by real steel structure and supply capability.",
      zh: "通过咨询、协调和务实方案设计，帮助客户理清项目路径——以真实的钢结构与供应能力为支撑。",
    },
    ctaPrimary: { en: "Explore Our Services", zh: "了解服务内容" },
    ctaSecondary: { en: "Discuss Your Project", zh: "聊聊您的项目" },
  },

  // ─── Bento Identity (Who We Are + What We Do merged) ────────────
  bento: {
    companyIntro: {
      en: "DREAMAKER PTY LTD is a service-led project support company based in Australia — combining consulting and coordination with integrated steel structure, material, and supply capability. We bridge the gap between vision and delivery.",
      zh: "DREAMAKER PTY LTD 是一家立足澳洲的服务型项目支持公司——将咨询与协调同钢结构、材料和供应能力深度整合，弥合愿景与执行之间的距离。",
    },
    quote: {
      en: "We start with understanding.",
      zh: "一切始于理解。",
    },
    statServiceLed: { en: "Service-Led", zh: "服务驱动" },
    statServiceSub: { en: "Consulting at the core", zh: "以咨询为核心" },
    statAuBased: { en: "AU Based", zh: "立足澳洲" },
    statAuSub: { en: "Local insight, global thinking", zh: "本地洞察 全球视野" },
    services: [
      {
        title: { en: "Project Consulting", zh: "项目咨询" },
        description: {
          en: "Strategic guidance to clarify direction and establish a practical foundation.",
          zh: "从方向梳理到方案评估，建立清晰的决策框架。",
        },
      },
      {
        title: { en: "Coordination Support", zh: "协调支持" },
        description: {
          en: "Managing stakeholders, timelines, and workstreams to keep projects on track.",
          zh: "管理多方协同和工作流，确保项目有序推进。",
        },
      },
      {
        title: { en: "Resource Integration", zh: "资源整合" },
        description: {
          en: "Connecting the right people, materials, and capabilities at the right time.",
          zh: "在合适的节点对接合适的人才、材料和能力。",
        },
      },
    ],
  },

  // ─── Statement ──────────────────────────────────────────────────
  statement: {
    text: {
      en: "Service-led thinking, backed by real steel structure and supply capability.",
      zh: "以服务思维引领，以真实的钢结构与供应能力为支撑。",
    },
    attribution: { en: "DREAMAKER PTY LTD", zh: "DREAMAKER PTY LTD" },
    cta: { en: "Learn how we work", zh: "了解我们的方式" },
  },

  // ─── Steel Capability ─────────────────────────────────────────
  steelCapability: {
    label: { en: "Integrated Strength", zh: "整合实力" },
    title: {
      en: "Consulting Backed by\nReal Supply Capability",
      zh: "咨询服务的背后\n是真实的供应能力",
    },
    description: {
      en: "We don't just advise — we bring tangible steel structure expertise, material knowledge, and supply chain capability into every engagement. This is what makes our consulting grounded, practical, and deliverable.",
      zh: "我们不仅仅是建议——每一次合作都融入了真实的钢结构专业知识、材料理解和供应链能力。这正是我们的咨询之所以务实、可落地的根本所在。",
    },
    points: [
      {
        number: "01",
        title: { en: "Steel Frame Systems", zh: "钢框架体系" },
        description: {
          en: "Deep understanding of light and heavy steel frame systems — from specification to sourcing to project integration.",
          zh: "对轻钢和重钢框架体系的深入理解——从规格选型到采购对接再到项目整合。",
        },
      },
      {
        number: "02",
        title: { en: "Material & Supply Networks", zh: "材料与供应网络" },
        description: {
          en: "Established relationships with steel suppliers, manufacturers, and logistics partners across key markets.",
          zh: "在核心市场建立的钢材供应商、制造商和物流伙伴关系网络。",
        },
      },
      {
        number: "03",
        title: { en: "Manufacturing-Backed Insight", zh: "制造端洞察" },
        description: {
          en: "Real production knowledge that shapes recommendations — not theoretical, but grounded in how things actually get built.",
          zh: "来自真实生产环节的知识——不是理论推演，而是基于实际建造经验的判断。",
        },
      },
      {
        number: "04",
        title: { en: "Integrated Project Delivery", zh: "整合项目交付" },
        description: {
          en: "The ability to connect consulting insight directly to material supply and structural solutions — closing the gap between strategy and execution.",
          zh: "将咨询洞察与材料供应和结构方案直接打通——弥合策略与执行之间的断层。",
        },
      },
    ],
  },

  // ─── How We Support Projects ────────────────────────────────────
  howWeSupport: {
    label: { en: "Our Approach", zh: "合作方式" },
    title: {
      en: "How We Help Projects\nMove Forward",
      zh: "我们如何帮助项目\n从模糊走向清晰",
    },
    description: {
      en: "A structured yet flexible approach — from understanding to coordinated delivery.",
      zh: "结构化而灵活的方法论——从理解出发，走向协调交付。",
    },
    steps: [
      {
        number: "01",
        title: { en: "Understand the Need", zh: "理解需求" },
        description: {
          en: "We listen carefully to understand your goals, constraints, and the context behind the project.",
          zh: "倾听目标、了解约束、洞察项目背后的真实语境。",
        },
      },
      {
        number: "02",
        title: { en: "Identify the Gap", zh: "识别差距" },
        description: {
          en: "We assess what's missing — strategic clarity, resource connections, coordination capacity, or practical knowledge.",
          zh: "评估缺口所在——策略清晰度、资源连接、协调能力，还是实操经验。",
        },
      },
      {
        number: "03",
        title: { en: "Connect Resources", zh: "连接资源" },
        description: {
          en: "We bring together the right resources, relationships, and capabilities to fill the gaps.",
          zh: "汇聚合适的资源、关系和能力，填补空白。",
        },
      },
      {
        number: "04",
        title: { en: "Deliver a Pathway", zh: "制定路径" },
        description: {
          en: "We build a structured, actionable plan and provide ongoing coordination as the project progresses.",
          zh: "制定结构化、可执行的计划，持续提供协调与支持。",
        },
      },
    ],
  },

  // ─── Bento Capabilities (Service Areas + Integrated Support) ────
  capabilities: {
    headline: {
      en: "Material & Supply Support as Part of the Solution",
      zh: "材料与供应支持 作为整体方案的一部分",
    },
    description: {
      en: "When projects require it, we integrate selected material sourcing, supply chain coordination, and manufacturing-backed support. Not a separate product line — a natural extension of our approach.",
      zh: "当项目需要时，我们将精选的材料采购、供应链协调和制造端支持融入服务中。这不是独立的产品线，而是方案导向的自然延伸。",
    },
    areas: [
      {
        title: { en: "Early-Stage Guidance", zh: "早期指导" },
        description: {
          en: "Shaping ideas into viable frameworks before major commitments.",
          zh: "在重大投入之前，将想法转化为可行的框架。",
        },
      },
      {
        title: { en: "Stakeholder Coordination", zh: "多方协调" },
        description: {
          en: "Aligning expectations and timelines across multiple parties.",
          zh: "统一各方预期和时间节奏。",
        },
      },
      {
        title: { en: "Solution Structuring", zh: "方案结构化" },
        description: {
          en: "Turning complex requirements into clear, actionable structures.",
          zh: "将复杂需求转化为清晰可执行的方案。",
        },
      },
      {
        title: { en: "Supply & Material Pathways", zh: "供应与材料路径" },
        description: {
          en: "Structuring supply pathways that match project goals and constraints.",
          zh: "构建与目标和约束匹配的供应通路。",
        },
      },
      {
        title: { en: "Market-Oriented Support", zh: "市场导向" },
        description: {
          en: "Strategic context to align projects with real demand.",
          zh: "提供策略视角，确保与真实需求对齐。",
        },
      },
      {
        title: { en: "Emerging Opportunities", zh: "新兴机会" },
        description: {
          en: "Tailored support for clients exploring new sectors or markets.",
          zh: "为首次进入新领域的客户提供定制化支持。",
        },
      },
    ],
  },

  // ─── Audience ───────────────────────────────────────────────────
  audience: {
    label: { en: "Who We Work With", zh: "合作对象" },
    items: [
      {
        title: { en: "Project Owners", zh: "项目业主" },
        description: {
          en: "Strategic support, coordination, and practical guidance to move your vision forward.",
          zh: "策略支持、项目协调和务实指导，推动您的愿景落地。",
        },
      },
      {
        title: { en: "Developers & Partners", zh: "开发商与合作伙伴" },
        description: {
          en: "Consulting support and resource integration to strengthen delivery capability.",
          zh: "咨询支持与资源整合，增强交付能力。",
        },
      },
      {
        title: { en: "Consultants & Advisors", zh: "顾问与咨询师" },
        description: {
          en: "A practical support partner to complement advisory work with execution capability.",
          zh: "务实的支持伙伴，以执行能力补充咨询工作。",
        },
      },
      {
        title: { en: "Exploring Opportunities", zh: "探索新机会" },
        description: {
          en: "Structured guidance for those at the earliest stages of project thinking.",
          zh: "为处于最初探索阶段的客户提供体系化引导。",
        },
      },
    ],
  },

  // ─── Contact ────────────────────────────────────────────────────
  contact: {
    title: {
      en: "Start a Conversation",
      zh: "开始一次对话",
    },
    description: {
      en: "Whether you have a defined project or are still exploring possibilities, we'd love to hear from you.",
      zh: "无论您已有明确的项目计划，还是仍在探索可能性，我们都期待与您交流。",
    },
    locationValue: { en: "Sydney, NSW, Australia", zh: "澳大利亚 新南威尔士州 悉尼" },
    formName: { en: "Full Name", zh: "姓名" },
    formNamePlaceholder: { en: "Your name", zh: "请输入您的姓名" },
    formEmail: { en: "Email", zh: "邮箱" },
    formEmailPlaceholder: { en: "your@email.com", zh: "your@email.com" },
    formPhone: { en: "Phone", zh: "电话" },
    formPhonePlaceholder: { en: "+61 ...", zh: "+61 ..." },
    formRole: { en: "Company / Role", zh: "公司 / 角色" },
    formRolePlaceholder: { en: "Select your role", zh: "请选择您的角色" },
    formRoleOptions: [
      { value: "project_owner", en: "Project Owner", zh: "项目业主" },
      { value: "developer", en: "Developer / Partner", zh: "开发商 / 合作伙伴" },
      { value: "consultant", en: "Consultant / Advisor", zh: "顾问 / 咨询师" },
      { value: "exploring", en: "Exploring Opportunities", zh: "探索阶段" },
      { value: "other", en: "Other", zh: "其他" },
    ],
    formStage: { en: "Project Stage", zh: "项目阶段" },
    formStagePlaceholder: { en: "Select project stage", zh: "请选择项目阶段" },
    formStageOptions: [
      { value: "early", en: "Early Planning / Exploration", zh: "早期规划 / 探索" },
      { value: "active", en: "Active Development", zh: "推进中" },
      { value: "review", en: "Review / Reassessment", zh: "复盘 / 重新评估" },
      { value: "not_sure", en: "Not Sure Yet", zh: "尚未确定" },
    ],
    formMessage: { en: "Message", zh: "留言" },
    formMessagePlaceholder: {
      en: "Tell us about your project or what you're looking for...",
      zh: "请描述您的项目情况或需求...",
    },
    formSubmit: { en: "Send Enquiry", zh: "发送咨询" },
    formSubmitting: { en: "Submitting...", zh: "提交中..." },
    formError: {
      en: "Something went wrong. Please try again or email us directly.",
      zh: "提交失败，请稍后重试或直接发送邮件联系我们。",
    },
    formNote: {
      en: "We typically respond within 1–2 business days.",
      zh: "我们通常会在 1-2 个工作日内回复。",
    },
    thankYouTitle: { en: "Thank You", zh: "感谢您的咨询" },
    thankYouMessage: {
      en: "We've received your enquiry and will be in touch soon.",
      zh: "我们已收到您的信息，会尽快与您取得联系。",
    },
  },

  // ─── Footer ─────────────────────────────────────────────────────
  footer: {
    description: {
      en: "Consulting, coordination, and integrated project support — helping clients move from vision to structured delivery.",
      zh: "咨询、协调与整合项目支持——帮助客户从愿景走向有序交付。",
    },
    location: { en: "Sydney, NSW, Australia", zh: "澳大利亚 新南威尔士州 悉尼" },
    groupCompany: { en: "Company", zh: "公司" },
    companyLinks: {
      about: { en: "About Us", zh: "关于我们" },
      services: { en: "Services", zh: "服务领域" },
      approach: { en: "Our Approach", zh: "合作方式" },
    },
    groupServices: { en: "Services", zh: "服务" },
    serviceLinks: {
      consulting: { en: "Project Consulting", zh: "项目咨询" },
      coordination: { en: "Coordination Support", zh: "协调支持" },
      integration: { en: "Resource Integration", zh: "资源整合" },
      supply: { en: "Supply Chain Support", zh: "供应链支持" },
    },
    groupConnect: { en: "Connect", zh: "联系" },
    connectLinks: {
      contactUs: { en: "Contact Us", zh: "联系我们" },
      startConversation: { en: "Start a Conversation", zh: "开始对话" },
      partnerWithUs: { en: "Partner With Us", zh: "成为合作伙伴" },
    },
    copyright: {
      en: "© 2026 DREAMAKER PTY LTD. All rights reserved.",
      zh: "© 2026 DREAMAKER PTY LTD 版权所有",
    },
    privacy: { en: "Privacy Policy", zh: "隐私政策" },
    terms: { en: "Terms of Service", zh: "服务条款" },
  },
} as const;

export default translations;
