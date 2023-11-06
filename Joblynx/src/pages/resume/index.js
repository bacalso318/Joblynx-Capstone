// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Demo Components Imports
import FormValidationBasic from 'src/views/pages/resume/FormValidationBasic'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const FormValidation = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6} className='match-height'>
        <PageHeader
          title={
            <Typography variant='h5'>
              <Link href='https://github.com/react-hook-form/react-hook-form' target='_blank'>
               Resume Form
              </Link>
            </Typography>
          }
        />
        <Grid item xs={12}>
          <FormValidationBasic />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormValidation
