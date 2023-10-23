// ** MUI Imports
import Grid from '@mui/material/Grid'
import CompanyContent from 'src/views/pages/job/companies/CompanyContent'

const Companies = () => {
  return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <CompanyContent/>
        </Grid>
      </Grid>

    
  )
}

export default Companies
