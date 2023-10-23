const navigation = () => [
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
        path: '/job/Find a Job'
      },
      {
        title: 'Companies',
        path: '/job/Companies'
      }
    ]
  }
]

export default navigation
