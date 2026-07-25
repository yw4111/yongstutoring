import type { Faq } from './faqs';

export interface Subject {
  slug: string;
  /** Full name, e.g. "A-level Economics tutoring" */
  name: string;
  /** Short label for cards and nav */
  shortName: string;
  level: 'GCSE' | 'A-level';
  subject: 'Maths' | 'Economics' | 'Biology' | 'Chemistry';
  /** Hourly rate in pounds */
  rate: number;
  /** One line for the overview grid */
  summary: string;
  /** 40 to 60 word direct answer that opens the page */
  directAnswer: string;
  /** Topics covered, used as a list and for schema */
  covered: string[];
  /** Longer detail paragraphs */
  detail: string[];
  /** Tutor slugs who teach this subject */
  tutorSlugs: string[];
  faqs: Faq[];
}

export const subjects: Subject[] = [
  {
    slug: 'a-level-maths',
    name: 'A-level Maths tutoring',
    shortName: 'A-level Maths',
    level: 'A-level',
    subject: 'Maths',
    rate: 45,
    summary: 'One to one A-level maths tutoring online, across all exam boards.',
    directAnswer:
      "Yong's Tutoring offers online one to one A-level maths tutoring for £45 an hour, across all exam boards. Lessons cover pure maths, statistics and mechanics, and are built around the topics and past papers you need to work on most.",
    covered: [
      'Pure maths: algebra, functions and proof',
      'Calculus: differentiation and integration',
      'Trigonometry and sequences',
      'Statistics: distributions and hypothesis testing',
      'Mechanics: kinematics and forces',
      'Past paper and exam technique practice',
    ],
    detail: [
      'A-level maths steps up sharply from GCSE, and most students find one or two areas that hold the rest back. Lessons focus on those first, then build out to the full specification with plenty of past paper work.',
      'Teaching is one to one and online, so sessions fit around school and can be booked when you need them. We teach across all exam boards, so the work matches the papers you sit.',
    ],
    tutorSlugs: ['yong', 'ryan'],
    faqs: [
      {
        question: 'How much is A-level maths tutoring?',
        answer:
          'A-level maths tutoring is £45 an hour, one to one and online.',
      },
      {
        question: 'Which exam boards do you cover for A-level maths?',
        answer:
          'All of them. Lessons are matched to the exam board and papers you are sitting.',
      },
    ],
  },
  {
    slug: 'a-level-economics',
    name: 'A-level Economics tutoring',
    shortName: 'A-level Economics',
    level: 'A-level',
    subject: 'Economics',
    rate: 45,
    summary: 'One to one A-level economics tutoring online, across all exam boards.',
    directAnswer:
      "Yong's Tutoring offers online one to one A-level economics tutoring for £45 an hour, across all exam boards. Lessons cover microeconomics and macroeconomics, essay technique and data response, built around the areas and papers you need most.",
    covered: [
      'Microeconomics: markets, demand and supply',
      'Market failure and government intervention',
      'Macroeconomics: growth, inflation and unemployment',
      'Fiscal and monetary policy',
      'The global economy and trade',
      'Essay and data response technique',
    ],
    detail: [
      'A-level economics rewards clear analysis and strong exam technique as much as knowledge. Lessons build the theory, then work on applying it in essays and data response questions the way examiners want.',
      'Teaching is one to one and online across all exam boards, so the work matches your specification and past papers. As an Economics, Finance and Data Science student, I teach the subject from a genuine working knowledge of it.',
    ],
    tutorSlugs: ['yong'],
    faqs: [
      {
        question: 'How much is A-level economics tutoring?',
        answer:
          'A-level economics tutoring is £45 an hour, one to one and online.',
      },
      {
        question: 'Do you help with essay and data response technique?',
        answer:
          'Yes. Lessons cover exam technique for both essays and data response, not just the theory.',
      },
    ],
  },
  {
    slug: 'gcse-maths',
    name: 'GCSE Maths tutoring',
    shortName: 'GCSE Maths',
    level: 'GCSE',
    subject: 'Maths',
    rate: 40,
    summary: 'One to one GCSE maths tutoring online, foundation and higher, all exam boards.',
    directAnswer:
      "Yong's Tutoring offers online one to one GCSE maths tutoring for £40 an hour, across all exam boards and both foundation and higher tiers. Lessons cover the full syllabus and focus on the topics and grades you are working towards.",
    covered: [
      'Number and ratio',
      'Algebra and equations',
      'Geometry and measures',
      'Probability and statistics',
      'Foundation and higher tier',
      'Past paper and exam technique practice',
    ],
    detail: [
      'GCSE maths covers a lot of ground, and confidence often comes down to filling a few specific gaps. Lessons find those gaps, work through them, then build up with past paper practice.',
      'Teaching is one to one and online across all exam boards, for both foundation and higher tier, so the work matches the paper you sit and the grade you are aiming for.',
    ],
    tutorSlugs: ['yong', 'ryan'],
    faqs: [
      {
        question: 'How much is GCSE maths tutoring?',
        answer:
          'GCSE maths tutoring is £40 an hour, one to one and online.',
      },
      {
        question: 'Do you cover foundation and higher tier?',
        answer:
          'Yes. Lessons cover both foundation and higher tier across all exam boards.',
      },
    ],
  },
  {
    slug: 'gcse-economics',
    name: 'GCSE Economics tutoring',
    shortName: 'GCSE Economics',
    level: 'GCSE',
    subject: 'Economics',
    rate: 40,
    summary: 'One to one GCSE economics tutoring online, across all exam boards.',
    directAnswer:
      "Yong's Tutoring offers online one to one GCSE economics tutoring for £40 an hour, across all exam boards. Lessons cover how markets work and the wider economy, and build the knowledge and exam technique to answer the paper well.",
    covered: [
      'How markets work: demand and supply',
      'Prices and competition',
      'The role of government',
      'The wider economy',
      'Money and financial markets',
      'Exam technique and past papers',
    ],
    detail: [
      'GCSE economics introduces the ideas that A-level builds on, so getting the foundations clear pays off twice. Lessons make the core concepts stick and practise applying them in the exam.',
      'Teaching is one to one and online across all exam boards, so the work matches your specification and past papers.',
    ],
    tutorSlugs: ['yong'],
    faqs: [
      {
        question: 'How much is GCSE economics tutoring?',
        answer:
          'GCSE economics tutoring is £40 an hour, one to one and online.',
      },
      {
        question: 'Which exam boards do you cover?',
        answer:
          'All exam boards. Lessons are matched to your specification and past papers.',
      },
    ],
  },
  {
    slug: 'a-level-biology',
    name: 'A-level Biology tutoring',
    shortName: 'A-level Biology',
    level: 'A-level',
    subject: 'Biology',
    rate: 45,
    summary: 'One to one A-level biology tutoring online, across all exam boards.',
    directAnswer:
      "Yong's Tutoring offers online one to one A-level biology tutoring for £45 an hour, across all exam boards. Lessons cover the full specification with a focus on the topics, required practicals and exam technique that carry the marks.",
    covered: [
      'Cells, biological molecules and enzymes',
      'Exchange, transport and the immune system',
      'Genetics, evolution and ecosystems',
      'Energy transfers and control systems',
      'Required practicals and data questions',
      'Past paper and exam technique practice',
    ],
    detail: [
      'A-level biology is a large course where marks are won on precise definitions, application to unfamiliar contexts and clear extended answers. Lessons build the content, then practise applying it the way examiners want.',
      'Teaching is one to one and online across all exam boards, matched to your specification and past papers. Taught by a Cambridge medicine student who took biology to A*.',
    ],
    tutorSlugs: ['ryan'],
    faqs: [
      {
        question: 'How much is A-level biology tutoring?',
        answer:
          'A-level biology tutoring is £45 an hour, one to one and online.',
      },
      {
        question: 'Do you cover the required practicals?',
        answer:
          'Yes. Lessons cover the required practicals and the data and application questions that come from them.',
      },
    ],
  },
  {
    slug: 'a-level-chemistry',
    name: 'A-level Chemistry tutoring',
    shortName: 'A-level Chemistry',
    level: 'A-level',
    subject: 'Chemistry',
    rate: 45,
    summary: 'One to one A-level chemistry tutoring online, across all exam boards.',
    directAnswer:
      "Yong's Tutoring offers online one to one A-level chemistry tutoring for £45 an hour, across all exam boards. Lessons cover physical, inorganic and organic chemistry, with a focus on calculations, mechanisms and exam technique.",
    covered: [
      'Atomic structure, bonding and energetics',
      'Physical chemistry and calculations',
      'Inorganic chemistry and periodicity',
      'Organic chemistry and mechanisms',
      'Required practicals and analysis',
      'Past paper and exam technique practice',
    ],
    detail: [
      'A-level chemistry rewards a secure grasp of a few core ideas that appear everywhere: moles and calculations, bonding, energetics and mechanisms. Lessons make those solid, then apply them across the specification.',
      'Teaching is one to one and online across all exam boards, matched to your specification and past papers. Taught by a Cambridge medicine student who took chemistry to A*.',
    ],
    tutorSlugs: ['ryan'],
    faqs: [
      {
        question: 'How much is A-level chemistry tutoring?',
        answer:
          'A-level chemistry tutoring is £45 an hour, one to one and online.',
      },
      {
        question: 'Do you help with organic mechanisms and calculations?',
        answer:
          'Yes. Lessons focus on the areas students find hardest, including organic mechanisms and moles calculations.',
      },
    ],
  },
  {
    slug: 'gcse-biology',
    name: 'GCSE Biology tutoring',
    shortName: 'GCSE Biology',
    level: 'GCSE',
    subject: 'Biology',
    rate: 40,
    summary: 'One to one GCSE biology tutoring online, all exam boards, combined and triple science.',
    directAnswer:
      "Yong's Tutoring offers online one to one GCSE biology tutoring for £40 an hour, across all exam boards, for both combined and triple science. Lessons cover the full syllabus and focus on the topics and grades you are working towards.",
    covered: [
      'Cell biology and organisation',
      'Infection, response and bioenergetics',
      'Homeostasis and response',
      'Inheritance, variation and evolution',
      'Ecology',
      'Required practicals and exam technique',
    ],
    detail: [
      'GCSE biology is content heavy, and confident recall plus clear application is what lifts grades. Lessons make the key ideas stick and practise the longer answer and data questions.',
      'Teaching is one to one and online across all exam boards, for combined and triple science, matched to the paper you sit.',
    ],
    tutorSlugs: ['ryan'],
    faqs: [
      {
        question: 'How much is GCSE biology tutoring?',
        answer:
          'GCSE biology tutoring is £40 an hour, one to one and online.',
      },
      {
        question: 'Do you cover combined and triple science?',
        answer:
          'Yes. Lessons cover both combined science and triple (separate) biology across all exam boards.',
      },
    ],
  },
  {
    slug: 'gcse-chemistry',
    name: 'GCSE Chemistry tutoring',
    shortName: 'GCSE Chemistry',
    level: 'GCSE',
    subject: 'Chemistry',
    rate: 40,
    summary: 'One to one GCSE chemistry tutoring online, all exam boards, combined and triple science.',
    directAnswer:
      "Yong's Tutoring offers online one to one GCSE chemistry tutoring for £40 an hour, across all exam boards, for both combined and triple science. Lessons cover the full syllabus and focus on the topics and grades you are working towards.",
    covered: [
      'Atomic structure and the periodic table',
      'Bonding, structure and the properties of matter',
      'Quantitative chemistry and calculations',
      'Chemical changes and energy changes',
      'Rate of reaction and organic chemistry',
      'Required practicals and exam technique',
    ],
    detail: [
      'GCSE chemistry mixes ideas with calculations, and students often lose marks on the quantitative parts. Lessons make the calculations routine and keep the theory clear and applied.',
      'Teaching is one to one and online across all exam boards, for combined and triple science, matched to the paper you sit.',
    ],
    tutorSlugs: ['ryan'],
    faqs: [
      {
        question: 'How much is GCSE chemistry tutoring?',
        answer:
          'GCSE chemistry tutoring is £40 an hour, one to one and online.',
      },
      {
        question: 'Do you help with the calculations?',
        answer:
          'Yes. Lessons give plenty of practice on the quantitative chemistry that students find hardest.',
      },
    ],
  },
];

export const getSubject = (slug: string) => subjects.find((s) => s.slug === slug);
