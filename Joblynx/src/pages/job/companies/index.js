// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CompanyContent from 'src/views/pages/job/companies/CompanyContent'
import { Container } from '@mui/material'

const Companies = () => {
  return (
    <Container>
      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(8)} !important` }}>
          <Typography variant='h6'>List of Companies</Typography>
        </Grid>
        <Grid item xs={12}>
          <CompanyContent />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Companies
