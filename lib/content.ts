export type SocialPlatform = "X" | "YouTube" | "Instagram" | "Facebook";

export type SocialCard = {
  platform: SocialPlatform;
  href: string;
  description: string;
  handle: string;
};

export type AboutParagraph = {
  text: string;
  muted?: boolean;
  italic?: boolean;
};

export type FieldBridgeImage = {
  src: string;
  alt: string;
};

export type FieldBridgeFeature = {
  id: string;
  title: string;
  description: string;
  desktopImages: FieldBridgeImage[];
  mobileImages?: FieldBridgeImage[];
};

export type Section =
  | {
      id: "hero";
      kind: "hero";
      eyebrow: string;
      nameFirst: string;
      nameLast: string;
      sub: string;
      subAccent: string;
    }
  | {
      id: "fieldbridge";
      kind: "fieldbridge";
      eyebrow: string;
      features: FieldBridgeFeature[];
    }
  | {
      id: "building";
      kind: "building";
      eyebrow: string;
      index: string;
      headline: string;
      body: string;
      tags: string[];
    }
  | {
      id: "connect";
      kind: "connect";
      eyebrow: string;
      index: string;
      headline: string;
      headlineEmphasis: string;
      cards: SocialCard[];
    }
  | {
      id: "about";
      kind: "about";
      eyebrow: string;
      index: string;
      paragraphs: AboutParagraph[];
    };

export type SectionId = Section["id"];

export const SECTIONS: Section[] = [
  {
    id: "hero",
    kind: "hero",
    eyebrow: "BUILDER · OPERATOR · CREATOR",
    nameFirst: "Skyler",
    nameLast: "Seegmiller",
    sub: "I build software for the construction industry, train hard, make music, and chase clarity. Currently shipping {accent} — a Vista-native SaaS for heavy civil contractors.",
    subAccent: "FieldBridge",
  },
  {
    id: "fieldbridge",
    kind: "fieldbridge",
    eyebrow: "INSIDE FIELDBRIDGE",
    features: [
      {
        id: "dashboard",
        title: "Dashboard",
        description:
          "A single operational view stitched live from Vista — active jobs, hours, bids, and the metrics that actually move a heavy civil business.",
        desktopImages: [
          {
            src: "/fieldbridge/fieldbridge_dashboard.png",
            alt: "FieldBridge dashboard overview pulling live data from Vista",
          },
        ],
      },
      {
        id: "bid-intelligence",
        title: "Bid Intelligence",
        description:
          "Win-rate, margin, and historical bid context surfaced before the next number gets sent. Estimators stop guessing what the market will bear.",
        desktopImages: [
          {
            src: "/fieldbridge/bid_intelligence.png",
            alt: "Bid Intelligence overview — win-rate and margin trends",
          },
          {
            src: "/fieldbridge/bid_intelligence_01.png",
            alt: "Bid Intelligence — historical bid performance",
          },
          {
            src: "/fieldbridge/bid_intelligence_02.png",
            alt: "Bid Intelligence — margin analysis by job type",
          },
        ],
      },
      {
        id: "jobs",
        title: "Jobs",
        description:
          "Every active job at a glance — schedule, cost-to-complete, crew, and Vista status. The view PMs actually want, without opening Vista.",
        desktopImages: [
          {
            src: "/fieldbridge/jobs.png",
            alt: "Jobs list — all active jobs with status",
          },
          {
            src: "/fieldbridge/jobs_02.png",
            alt: "Jobs — detail view with cost and schedule",
          },
          {
            src: "/fieldbridge/jobs_03.png",
            alt: "Jobs — alternate breakdown view",
          },
        ],
      },
      {
        id: "insight-studio",
        title: "Insight Studio",
        description:
          "Build dashboards over Vista data with natural language — no SQL, no BI seat, no waiting on IT. On the phone for the field, on the desktop for the office.",
        desktopImages: [
          {
            src: "/fieldbridge/insight_studio.png",
            alt: "Insight Studio — desktop dashboard builder",
          },
        ],
        mobileImages: [
          {
            src: "/fieldbridge/insight_studio_01.png",
            alt: "Insight Studio mobile — chart view",
          },
          {
            src: "/fieldbridge/insight_studio_02.png",
            alt: "Insight Studio mobile — natural language query",
          },
          {
            src: "/fieldbridge/insight_studio_03.png",
            alt: "Insight Studio mobile — data drill-down",
          },
          {
            src: "/fieldbridge/insight_studio_04.png",
            alt: "Insight Studio mobile — saved dashboards",
          },
        ],
      },
      {
        id: "time-cards",
        title: "Time Cards",
        description:
          "Field-grade time entry that posts cleanly into Vista. No clipboard re-entry on Monday morning, no payroll cleanup on Friday afternoon.",
        desktopImages: [
          {
            src: "/fieldbridge/time_cards.png",
            alt: "Time Cards — crew time entry view",
          },
          {
            src: "/fieldbridge/time_cards_01.png",
            alt: "Time Cards — daily summary view",
          },
        ],
      },
    ],
  },
  {
    id: "building",
    kind: "building",
    eyebrow: "WHAT I'M BUILDING",
    index: "01 / Building",
    headline: "FieldBridge.",
    body: "Vista ERP–native software for heavy civil contractors. AI, automation, and field-grade tooling — bridging back-office data with the people who actually build things. Solving real operational pain at Van Con first, then scaling to the rest of the industry.",
    tags: ["Trimble Vista", "Python", "React", "RAG", "Heavy Civil"],
  },
  {
    id: "connect",
    kind: "connect",
    eyebrow: "FIND ME",
    index: "02 / Connect",
    headline: "Find me",
    headlineEmphasis: "anywhere.",
    cards: [
      {
        platform: "X",
        href: "https://x.com/skylerseegmiller",
        description: "Builder notes, market commentary, half-formed ideas.",
        handle: "@skylerseegmiller",
      },
      {
        platform: "YouTube",
        href: "https://youtube.com/@skylerseegmiller",
        description: "Music, long-form thinking, build logs.",
        handle: "/@skylerseegmiller",
      },
      {
        platform: "Instagram",
        href: "https://instagram.com/skylerseegmiller",
        description: "Studio, family, training, life.",
        handle: "@skylerseegmiller",
      },
      {
        platform: "Facebook",
        href: "https://facebook.com/skylerseegmiller",
        description: "Long-time friends and family.",
        handle: "/skylerseegmiller",
      },
    ],
  },
  {
    id: "about",
    kind: "about",
    eyebrow: "THE FULL PICTURE",
    index: "03 / About",
    paragraphs: [
      {
        text: "I build, train, write, and pray. Software is my craft, music is my native language, and discipline is the operating system under all of it.",
      },
      {
        text: "Father. Builder. Singer. A man trying to use influence the way it ought to be used — to build, not to harm.",
        muted: true,
        italic: true,
      },
    ],
  },
];

export function getSection<T extends SectionId>(
  id: T
): Extract<Section, { id: T }> {
  const section = SECTIONS.find((s) => s.id === id);
  if (!section) {
    throw new Error(`Section "${id}" not found in SECTIONS`);
  }
  return section as Extract<Section, { id: T }>;
}
