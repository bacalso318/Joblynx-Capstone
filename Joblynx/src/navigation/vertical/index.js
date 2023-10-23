const navigation = () => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'mdi:home-outline'
    },
    {
      title: 'Second Page',
      path: '/second-page',
      icon: 'mdi:email-outline'
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'mdi:shield-outline'
    },
    {
      sectionTitle: 'Jobs and Pages'
    },
    {
      title: 'Job',
      icon: 'mdi:work-outline',
      children: [
        {
          title: 'Find a Jobs',
          path: '/job/findjob'
        },
        {
          title: 'Companies',
          path: '/job/companies'
        },
      ]
    },
    {
      sectionTitle: 'User Job'
    },
    {
      path: '/Resume',
      action: 'read',
      subject: 'resume-page',
      title: 'Add Resume',
      icon: 'mdi:paper-outline'
    },
    {
      path: '/apptrack',
      action: 'read',
      subject: 'apptrack-page',
      title: 'Application Tracker',
      icon: 'mdi:paper-outline'
    },
    {
      sectionTitle: 'Misc'
    },
    {
      path: '/about',
      action: 'read',
      subject: 'about-page',
      title: 'About Us',
      icon: 'mdi:about-outline'
    },
    {
      path: '/Contact Us',
      action: 'read',
      subject: 'Contact-page',
      title: 'Contact Us',
      icon: 'mdi:phone-outline'
    },
    
  ]
}

export default navigation
