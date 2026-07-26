import { business } from '../data/business';
import { subjects } from '../data/subjects';
import { tutors, leadTutor } from '../data/tutors';
import { testimonials } from '../data/testimonials';
import { posts } from '../data/posts';
import type { Subject } from '../data/subjects';
import type { Tutor } from '../data/tutors';
import type { Post } from '../data/posts';
import type { Faq } from '../data/faqs';

const SITE = business.url;

// Build date, used as a freshness (dateModified) signal on every page.
export const BUILD_DATE = new Date().toISOString().slice(0, 10);

const areaServed = business.areaServed.map((name) => ({
  '@type': 'AdministrativeArea',
  name,
}));

const tutorId = (slug: string) => `${SITE}/#tutor-${slug}`;

/** The tutoring business as an EducationalOrganization (online, no address). */
export function organizationSchema() {
  const node: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'Organization'],
    '@id': `${SITE}/#business`,
    name: business.name,
    description: business.descriptionShort,
    url: SITE,
    email: business.email,
    telephone: business.phoneHref,
    priceRange: business.priceRange,
    areaServed,
    knowsAbout: ['Maths', 'Further Maths', 'Economics', 'Biology', 'Chemistry', 'Physics', 'GCSE tutoring', 'A-level tutoring', 'Online tutoring'],
    founder: { '@id': tutorId(leadTutor.slug) },
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'GCSE tutoring',
        price: business.rates.gcse,
        priceCurrency: business.rates.currency,
      },
      {
        '@type': 'Offer',
        name: 'A-level tutoring',
        price: business.rates.alevel,
        priceCurrency: business.rates.currency,
      },
      {
        '@type': 'Offer',
        name: 'Interview preparation',
        price: business.rates.interview,
        priceCurrency: business.rates.currency,
      },
    ],
    employee: tutors.map((t) => ({ '@id': tutorId(t.slug) })),
  };
  if (business.sameAs.length) node.sameAs = [...business.sameAs];
  // Real testimonials only. When supplied, a Review is added with no fabricated
  // rating (and no AggregateRating unless real ratings exist).
  if (testimonials.length) {
    node.review = testimonials.map((t) => ({
      '@type': 'Review',
      reviewBody: t.quote,
      author: { '@type': 'Person', name: t.author },
      itemReviewed: { '@id': `${SITE}/#business` },
    }));
  }
  return node;
}

/** Each tutor as a Person entity, for author and E-E-A-T signals. */
export function tutorPersonSchema(tutor: Tutor) {
  const node: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': tutorId(tutor.slug),
    name: tutor.name,
    jobTitle: tutor.role,
    description: tutor.bio.join(' '),
    url: `${SITE}/about`,
    mainEntityOfPage: `${SITE}/about`,
    worksFor: { '@id': `${SITE}/#business` },
    knowsAbout: tutor.subjects
      .map((slug) => subjects.find((s) => s.slug === slug)?.name)
      .filter(Boolean),
  };
  if (tutor.credentials.university) {
    // Current student, so affiliation (not alumniOf).
    node.affiliation = {
      '@type': 'CollegeOrUniversity',
      name: tutor.credentials.university,
    };
  }
  if (tutor.sameAs?.length) {
    node.sameAs = tutor.sameAs.map((s) => s.href);
  }
  return node;
}

/** A priced tutoring service per subject. */
export function subjectServiceSchema(subject: Subject) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE}/subjects/${subject.slug}/#service`,
    name: subject.name,
    serviceType: 'Tutoring',
    description: subject.directAnswer,
    url: `${SITE}/subjects/${subject.slug}`,
    provider: { '@id': `${SITE}/#business` },
    areaServed,
    offers: {
      '@type': 'Offer',
      price: subject.rate,
      priceCurrency: business.rates.currency,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: subject.rate,
        priceCurrency: business.rates.currency,
        unitText: 'hour',
        referenceQuantity: {
          '@type': 'QuantitativeValue',
          value: 1,
          unitCode: 'HUR',
        },
      },
    },
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    name: business.name,
    url: SITE,
    publisher: { '@id': `${SITE}/#business` },
    inLanguage: 'en-GB',
  };
}

/** A WebPage node carrying a dateModified freshness signal, injected per page. */
export function webPageSchema(path: string, name: string, description: string) {
  const url = new URL(path, SITE).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': `${SITE}/#website` },
    about: { '@id': `${SITE}/#business` },
    author: { '@id': tutorId(leadTutor.slug) },
    publisher: { '@id': `${SITE}/#business` },
    inLanguage: 'en-GB',
    dateModified: BUILD_DATE,
  };
}

/** ItemList of all subjects, for the subjects overview page. */
export function subjectsItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${business.name} subjects`,
    itemListElement: subjects.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.name,
      url: `${SITE}/subjects/${s.slug}`,
    })),
  };
}

/** A resource/blog post as BlogPosting, authored by the lead tutor. */
export function blogPostingSchema(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${SITE}/resources/${post.slug}/#post`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@id': tutorId(leadTutor.slug) },
    publisher: { '@id': `${SITE}/#business` },
    mainEntityOfPage: `${SITE}/resources/${post.slug}`,
  };
}

export function blogItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${business.name} resources`,
    itemListElement: posts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: `${SITE}/resources/${p.slug}`,
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

/** A QAPage view of the same Q&A content, for answer-engine comprehension. */
export function qaPageSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      answerCount: 1,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}
