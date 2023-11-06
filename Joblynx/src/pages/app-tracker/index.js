// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Demo Components Imports
import TableFilter from 'src/views/pages/app-tracker/TableFilter'

const DataGrid = () => {
  return (
    <Grid container spacing={6}>
      <PageHeader
        title={
          <Typography variant='h5'>
            <Link href='https://mui.com/x/react-data-grid/' target='_blank'>
              Application Tracker
            </Link>
          </Typography>
        
        }
      />
      <Grid item xs={12}>
        <TableFilter />
      </Grid>
      
    </Grid>
  )
}

export default DataGrid
