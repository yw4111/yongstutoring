// Yong's Tutoring — brand and identity. All facts here are as supplied.
// Domain is assumed for now; confirm before going live.
export const business = {
  name: "Yong's Tutoring",
  legalName: "Yong's Tutoring",
  tagline: 'Online tutoring in maths, science and economics',
  descriptionShort:
    "Yong's Tutoring provides online one to one tutoring in maths, economics, biology and chemistry at GCSE and A-level, across all exam boards.",
  url: 'https://yongstutoring.co.uk', // TODO: confirm final domain
  phoneDisplay: '07846 663339',
  phoneHref: '+447846663339',
  whatsappHref: 'https://wa.me/447846663339',
  email: 'yonggw3307@gmail.com',
  delivery: 'Online',
  areaServed: ['United Kingdom'],
  areaServedDisplay: 'online, across the UK',
  customers: ['Students', 'Parents'],
  rates: {
    gcse: 40,
    alevel: 45,
    currency: 'GBP',
    currencySymbol: '£',
  },
  priceRange: '££',
  examBoards: 'all exam boards',
  // Not published yet. Placeholders for the owner to supply: testimonials and
  // social/professional profiles (sameAs). Nothing invented.
  sameAs: [] as string[],
} as const;
