// Import necessary React and Material-UI components
import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Icon } from '@iconify/react'

// Define a styled component for the profile picture
const ProfilePicture = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  borderRadius: theme.shape.borderRadius,
  border: `5px solid ${theme.palette.common.white}`,
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4)
  }
}))

// Create the UserProfileHeader component
const UserProfileHeader = () => {
  // Placeholder for data (replace with your data fetching logic)
  const [data, setData] = useState({
    coverImg: '/images/profile-banner.png', // Replace with actual cover image path
    profileImg: '/images/avatars/1.png', // Replace with actual profile image path
    fullName: 'John Doe', // Replace with actual full name
    designation: 'Software Engineer', // Replace with actual designation
    location: 'City, Country', // Replace with actual location
    joiningDate: 'January 1, 2022' // Replace with actual joining date
  })

  // useEffect to fetch user profile data when the component mounts
  useEffect(() => {
    // Your data fetching logic here
    // Example: fetch('/api/user/profile').then(response => response.json()).then(data => setData(data));
  }, [])

  // Destructure data for easier usage
  const { coverImg, profileImg, fullName, designation, location, joiningDate } = data

  return (
    <Card>
      {/* CardMedia for the cover image */}
      <CardMedia
        component='img'
        alt='profile-header'
        image={coverImg}
        sx={{
          height: { xs: 150, md: 250 }
        }}
      />
      {/* CardContent for the main content */}
      <Box
        sx={{
          pt: 0,
          mt: -8,
          mb: 3,
          mr: 5,
          ml: 5,
          display: 'flex',
          alignItems: 'flex-end',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          justifyContent: { xs: 'center', md: 'flex-start' }
        }}
      >
        {/* ProfilePicture for the user's profile picture */}
        <ProfilePicture src={profileImg} alt='profile-picture' />

        {/* Box for user details and actions */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            ml: { xs: 0, md: 6 },
            alignItems: 'flex-end',
            flexWrap: ['wrap', 'nowrap'],
            justifyContent: ['center', 'space-between']
          }}
        >
          {/* Box for user information */}
          <Box
            sx={{
              mb: [6, 0],
              display: 'flex',
              flexDirection: 'column',
              alignItems: ['center', 'flex-start']
            }}
          >
            {/* User's full name */}
            <Typography variant='h5' sx={{ mb: 4, fontSize: '1.375rem' }}>
              {fullName}
            </Typography>
            {/* User details */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: ['center', 'flex-start']
              }}
            >
              <Box
                sx={{
                  mr: 4,
                  display: 'flex',
                  alignItems: 'center',
                  '& svg': { mr: 1, color: 'text.secondary' }
                }}
              >
                <Icon icon='bi:briefcase' fontSize={20} />
                <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>{designation}</Typography>
              </Box>
              <Box
                sx={{
                  mr: 4,
                  display: 'flex',
                  alignItems: 'center',
                  '& svg': { mr: 1, color: 'text.secondary' }
                }}
              >
                <Icon icon='mdi:map-marker-outline' fontSize={20} />
                <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>{location}</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  '& svg': { mr: 1, color: 'text.secondary' }
                }}
              >
                <Icon icon='mdi:calendar-blank-outline' fontSize={20} />
                <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>Joined {joiningDate}</Typography>
              </Box>
            </Box>
          </Box>
          {/* Button for a user action */}
          <Button variant='contained' startIcon={<Icon icon='mdi:account-check-outline' fontSize={20} />}>
            Connected
          </Button>
        </Box>
      </Box>
    </Card>
  )
}

export default UserProfileHeader
