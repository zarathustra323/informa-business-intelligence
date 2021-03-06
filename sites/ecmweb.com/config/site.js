const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df007b605aa565ec343fc00',
  },
  homePageSections: [
    { alias: 'design', name: 'Design' },
    { alias: 'maintenance-repair-operations', name: 'Maintenance, Repair & Operations' },
    { alias: 'construction', name: 'Construction' },
  ],
  logos: {
    navbar: {
      src: 'https://img.ecmweb.com/files/base/ebm/ecmweb/image/static/ecmweb-logo.png?h=30',
      srcset: [
        'https://img.ecmweb.com/files/base/ebm/ecmweb/image/static/ecmweb-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.ecmweb.com/files/base/ebm/ecmweb/image/static/ecmweb-logo.png?h=45',
      srcset: [
        'https://img.ecmweb.com/files/base/ebm/ecmweb/image/static/ecmweb-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/ElectricalConstructionMaintenanceMagazine', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/ecmweb', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/2685562', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/ecmwebtv', target: '_blank' },
  ],
  gam: { accountId: process.env.GAM_ACCCOUNT_ID || '3834', basePath: 'ecm.home' },
  gtm: {
    containerId: 'GTM-MMN8GXJ',
  },
  gcse: {
    id: '003355913687346718228:tfjgkg4hzyf',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSubscribe'),
};
