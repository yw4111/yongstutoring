// Study resources / blog, bylined Yong. These are draft study guides written to
// give the site "how to" and "what is" content for answer engines. They are
// generic best-practice advice, not claims about specific results. The owner
// should review, edit or replace them before going live.
export interface Post {
  slug: string;
  title: string;
  date: string; // ISO
  author: string;
  readMins: number;
  excerpt: string;
  body: string[];
}

export const posts: Post[] = [
  {
    slug: 'how-to-revise-for-a-level-maths',
    title: 'How to revise for A-level maths',
    date: '2026-06-01',
    author: 'Yong',
    readMins: 3,
    excerpt:
      'A simple, effective way to revise A-level maths: master the method, then drill past papers under timed conditions.',
    body: [
      'A-level maths rewards doing over reading. You can watch a topic explained perfectly and still lose marks in the exam, because the exam tests whether you can produce the method yourself, under time pressure. So the goal of revision is not to feel familiar with a topic, it is to be able to do questions on it without help.',
      'Start by fixing the one or two topics that hold the rest back. For most students that is algebra and calculus. If your algebra is shaky, everything downstream is slower and more error prone, so it is worth going back to basics there first.',
      'Then work in a loop: learn the method, do a few questions with your notes open, then do questions with the notes closed. Only when you can do them closed have you actually learned it.',
      'Finally, do full past papers under timed conditions and mark them honestly with the mark scheme. The mark scheme tells you exactly where the marks are, which is often not where students think they are. Past papers are the single most useful revision resource, so leave time to do plenty of them.',
    ],
  },
  {
    slug: 'gcse-vs-a-level-economics',
    title: 'GCSE vs A-level economics: what changes',
    date: '2026-05-15',
    author: 'Yong',
    readMins: 3,
    excerpt:
      'A-level economics asks for analysis and evaluation, not just knowledge. Here is what steps up from GCSE and how to prepare.',
    body: [
      'GCSE economics is mostly about knowing the ideas: what demand and supply are, how markets work, what the government does. A-level keeps all of that but adds two things that carry most of the marks: analysis and evaluation.',
      'Analysis means explaining a chain of cause and effect clearly, step by step, often supported by a diagram. Evaluation means weighing it up: how big is the effect, does it depend on other factors, what is the counter argument. Strong students are not the ones who know the most, they are the ones who apply what they know and judge it well.',
      'The other change is exam technique. A-level economics is marked with levels based command words. Learning what "analyse", "evaluate" and "to what extent" actually ask for is worth a lot of marks on its own.',
      'If you are moving from GCSE to A-level, the best preparation is to get comfortable writing short analytical paragraphs and practising data response questions, rather than only revising content.',
    ],
  },
  {
    slug: 'how-online-tutoring-works',
    title: 'How online tutoring works, and why it can beat in person',
    date: '2026-05-01',
    author: 'Yong',
    readMins: 2,
    excerpt:
      'Online one to one tutoring is flexible and effective. Here is how a lesson runs and why many students progress faster.',
    body: [
      'Online tutoring gets a lot done in an hour. Lessons run over video with a shared whiteboard, so we can work through problems together in real time, just as we would side by side, and you can see every step written out.',
      'The practical advantages add up. There is no travel, so lessons fit around school and can be booked at times that suit you. Everything is saved, so you can go back over the worked solutions and notes after the lesson. And you get access to a wider choice of tutors, since you are not limited to who lives nearby.',
      'For maths and economics in particular, working through problems on a shared screen with instant feedback is exactly what helps, which is why many students progress at least as fast online as they would in person.',
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
