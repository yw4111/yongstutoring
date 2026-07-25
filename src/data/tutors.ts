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
    name: 'Yong',
    lead: true,
    role: 'Founder & tutor',
    subjects: ['a-level-maths', 'a-level-economics', 'gcse-maths', 'gcse-economics'],
    bio: [
      'I am an Economics, Finance and Data Science student at Imperial College London, and I tutor maths and economics at GCSE and A-level.',
      'I have tutored for two years and achieved A*AAA at A-level. I teach across all exam boards and work one to one online, so lessons fit around your schedule.',
    ],
    highlights: [
      'Economics, Finance and Data Science, Imperial College London',
      'A*AAA at A-level',
      'Two years of tutoring experience',
      'Maths and economics, GCSE and A-level',
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
    ],
    bio: [
      'I am a first year Medicine student at the University of Cambridge, and I tutor maths, biology and chemistry, the three subjects I took at A-level, where I achieved A*A*A*.',
      'I scored in the top decile of the UCAT and held offers from Imperial and other medical schools, so alongside subject tutoring I can help students who are preparing for medicine applications.',
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
];

export const leadTutor = tutors.find((t) => t.lead) ?? tutors[0];
export const getTutor = (slug: string) => tutors.find((t) => t.slug === slug);
