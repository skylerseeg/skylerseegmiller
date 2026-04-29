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
        href: "https://x.com/SkylerSeeg",
        description: "Builder notes, market commentary, half-formed ideas.",
        handle: "@SkylerSeeg",
      },
      {
        platform: "YouTube",
        href: "https://youtube.com/@skylerseegmiller",
        description: "Music, long-form thinking, build logs.",
        handle: "/@skylerseegmiller",
      },
      {
        platform: "Instagram",
        href: "https://instagram.com/SkylerSeeg",
        description: "Studio, family, training, life.",
        handle: "@SkylerSeeg",
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
