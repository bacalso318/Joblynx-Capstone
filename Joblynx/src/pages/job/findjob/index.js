// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import FindJobContent from 'src/views/pages/job/find_job/FindJobContent'
import JobFilters from 'src/views/pages/job/find_job/JobFilters'
import { Container } from '@mui/material'

const FindJob = () => {
  return (
    <Container>
      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(8)} !important` }}>
          <Typography variant='h6'>Find A Job</Typography>
        </Grid>
        <Grid item xs={12}>
          <FindJobContent />
        </Grid>
      </Grid>
      <Grid container spacing={4} columns={16}>
        <Grid item xs={5}>
          <Grid sx={{ alignItems: 'stretch' }}>
            <JobFilters />
          </Grid>
        </Grid>
        <Grid item xs={11}>
          <Card sx={{ alignItems: 'stretch', width: '98%' }}>
            <Typography>Stretchable Card </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default FindJob
