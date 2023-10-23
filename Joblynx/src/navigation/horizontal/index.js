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
    path: '/job',
    action: 'read',
    subject: 'job-page',
    title: 'Job',
    icon: 'mdi:folder-outline',
    children: [
      {
        title: 'Find a Job',
        path: '/job/find_job'
      },
      {
        title: 'Companies',
        path: '/job/companies'
      }
    ]
  },
  {
    path: '/User',
    action: 'read',
    subject: 'User-page',
    title: 'User',
    icon: 'mdi:person-outline',
    children: [
      {
        title: 'Add Resume',
        path: '/User/AddResume'
      },
      {
        title: 'Application Tracker',
        path: '/User/Apptrack'
      }
      
    ]
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
