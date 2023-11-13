// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports

import UserProfileHeader from 'src/views/pages/profile/UserProfileHeader'
// ** Demo Components Imports

const Profile = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(7)} !important` }}>
        <Typography variant='h5'>Profile</Typography>
      </Grid>
      <Grid item xs={12}>
        <UserProfileHeader />
      </Grid>
    </Grid>
  )
}

export default Profile
