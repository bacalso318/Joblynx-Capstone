// ** MUI Imports
import Grid from '@mui/material/Grid'
import FindJobContent from 'src/views/pages/job/find_job/FindJobContent'



const FindJob = () => {
  return (
  <Grid container spacing={6}>
    <Grid item xs={12}>
      <FindJobContent/>
    </Grid>
  </Grid>
  )
}

export default FindJob
