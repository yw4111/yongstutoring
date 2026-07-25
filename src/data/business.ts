// Yong's Tutoring — brand and identity. All facts here are as supplied.
// Domain is assumed for now; confirm before going live.
export const business = {
  name: "Yong's Tutoring",
  legalName: "Yong's Tutoring",
  tagline: 'Online tutoring in maths, science and economics',
  descriptionShort:
    "Yong's Tutoring provides online one to one tutoring in maths, further maths, economics, biology, chemistry and physics at GCSE and A-level, across all exam boards, plus Oxbridge, Imperial and medical school interview preparation.",
  url: 'https://yongstutoring.com',
  phoneDisplay: '07846 663339',
  phoneHref: '+447846663339',
  whatsappHref: 'https://wa.me/447846663339',
  email: 'yonggw3307@gmail.com',
  delivery: 'Online',
  areaServed: ['Worldwide'],
  areaServedDisplay: 'online, anywhere in the world',
  customers: ['Students', 'Parents', 'International students'],
  rates: {
    gcse: 40,
    alevel: 45,
    interview: 50,
    currency: 'GBP',
    currencySymbol: '£',
  },
  priceRange: '££',
  examBoards: 'all exam boards',
  // Contact form endpoint. Submissions email the address above once a free
  // Formspree form is created at formspree.io and its ID pasted here.
  // TODO: replace YOUR_FORM_ID with the real Formspree form ID.
  formEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  // Analytics: paste the Cloudflare Web Analytics beacon token here to switch on
  // the traffic dashboard. Leave empty to disable (no script loads).
  cloudflareAnalyticsToken: '',
  // Google Search Console verification token (the content of the
  // google-site-verification meta tag). Leave empty to disable.
  googleSiteVerification: '',
  // Not published yet. Placeholders for the owner to supply: testimonials and
  // social/professional profiles (sameAs). Nothing invented.
  sameAs: [] as string[],
} as const;
