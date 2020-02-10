const dragonForms = require('./dragon-forms');

module.exports = {
  tertiary: {
    items: [
      { href: '/search', label: 'Search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/about-us', label: 'About Us' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: 'https://designmanufacturing.informa.com/ehs-today', label: 'Advertise' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/environment', label: 'Environment' },
        { href: '/health', label: 'Health' },
        { href: '/safety', label: 'Safety' },
        { href: '/safety-leadership', label: 'Leadership' },
        { href: '/standards', label: 'Standards' },
        { href: '/construction', label: 'Construction' },
        { href: '/ppe', label: 'PPE' },
        { href: '/safety-technology', label: 'Safety Technology' },
        { href: '/training-and-engagement', label: 'Training' },
        { href: '/emergency-management', label: 'Emergency Management' },
        { href: '/industrial-hygiene', label: 'Industrial Hygiene' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: 'https://www.safetyleadershipconference.com/', label: 'Safety Leadership Conference' },
        { href: '/americas-safest-companies-awards', label: 'ASC Awards' },
        { href: '/news', label: 'Latest Headlines' },
        { href: '/ghs', label: 'GHS' },
        { href: '/arc-flash', label: 'Arc Flash' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/white-papers-and-case-studies', label: 'White Papers' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://manufacturing.endeavorb2b.com/ehs-today', label: 'Advertise', target: '_blank' },
        { href: 'https://designmanufacturing.informa.com/contentstream/', label: 'Content Licensing' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
