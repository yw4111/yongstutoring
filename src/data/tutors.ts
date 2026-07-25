export interface Tutor {
  slug: string;
  name: string;
  /** Whether this tutor leads the service. The first lead is used for author schema. */
  lead?: boolean;
  role: string;
  /** Subject slugs this tutor teaches, linking to the subjects list. */
  subjects: string[];
  /** Short bio shown on the site. */
  bio: string[];
  /** Short factual highlights for the profile. */
  highlights?: string[];
  /** Social / professional profiles, used for schema sameAs. */
  sameAs?: { label: string; href: string }[];
  /** Credentials, kept factual. */
  credentials: {
    university?: string;
    course?: string;
    alevels?: string;
    experienceYears?: number;
  };
  /** Photo placeholder until a real one is supplied. */
  photo?: string;
}

// Adding a tutor is a new entry here; the tutors pages, cards and per-tutor
// schema all scale from this list.
export const tutors: Tutor[] = [
  {
    slug: 'yong',
    name: 'Yong Wang',
    lead: true,
    role: 'Founder & tutor',
    subjects: ['a-level-maths', 'a-level-economics', 'gcse-maths', 'gcse-economics', 'oxbridge-economics-interview'],
    bio: [
      'Yong Wang is an Economics, Finance and Data Science student at Imperial College London. He tutors maths and economics at GCSE and A-level, and offers Oxbridge and Imperial interview preparation for economics related subjects.',
      'He achieved A*AAA at A-level and has two years of tutoring experience. He teaches across all exam boards and works one to one online, so lessons fit around each student’s schedule.',
    ],
    highlights: [
      'Economics, Finance and Data Science, Imperial College London',
      'A*AAA at A-level',
      'Two years of tutoring experience',
      'Maths and economics, plus Oxbridge and Imperial economics interview prep',
    ],
    credentials: {
      university: 'Imperial College London',
      course: 'Economics, Finance and Data Science',
      alevels: 'A*AAA',
      experienceYears: 2,
    },
  },
  {
    slug: 'ryan',
    name: 'Ryan Varikat',
    role: 'Science & maths tutor',
    subjects: [
      'a-level-biology',
      'a-level-chemistry',
      'a-level-maths',
      'gcse-biology',
      'gcse-chemistry',
      'gcse-maths',
      'medicine-interview',
    ],
    bio: [
      'Ryan Varikat is a first year Medicine student at the University of Cambridge. He tutors maths, biology and chemistry, the three subjects he took at A-level, where he achieved A*A*A*, and offers medical school interview preparation.',
      'He scored in the top decile of the UCAT and held offers from Imperial and other medical schools, so he can support students who are preparing for medicine applications and interviews.',
    ],
    highlights: [
      'First year Medicine student, University of Cambridge',
      'A*A*A* in Maths, Biology and Chemistry',
      'Top decile in the UCAT',
      'Offers from Imperial and other medical schools',
    ],
    credentials: {
      university: 'University of Cambridge',
      course: 'Medicine',
      alevels: 'A*A*A* in Maths, Biology and Chemistry',
    },
  },
  {
    slug: 'yiming',
    name: 'Yiming Guo',
    role: 'Science & maths tutor',
    subjects: [
      'a-level-further-maths',
      'a-level-maths',
      'a-level-physics',
      'a-level-chemistry',
      'gcse-maths',
      'gcse-physics',
      'gcse-chemistry',
    ],
    bio: [
      'Yiming Guo is an Electrical and Electronic Engineering student at Imperial College London. He tutors chemistry, physics, maths and further maths at GCSE and A-level.',
      'He achieved four A*s at A-level, teaches across all exam boards and works one to one online. He also runs Yimtegral, a large educational maths TikTok, so he is used to explaining tricky ideas clearly.',
    ],
    highlights: [
      'Electrical and Electronic Engineering, Imperial College London',
      'A* in Maths, Further Maths, Physics and Chemistry at A-level',
      'Runs the educational maths TikTok, Yimtegral',
    ],
    sameAs: [{ label: 'TikTok: @yimtegral', href: 'https://www.tiktok.com/@yimtegral' }],
    credentials: {
      university: 'Imperial College London',
      course: 'Electrical and Electronic Engineering',
      alevels: 'A* in Maths, Further Maths, Physics and Chemistry',
    },
  },
];

export const leadTutor = tutors.find((t) => t.lead) ?? tutors[0];
export const getTutor = (slug: string) => tutors.find((t) => t.slug === slug);
