// ** React Imports
import { Fragment, forwardRef, useState } from 'react'

// ** MUI Imports

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import MenuItem from '@mui/material/MenuItem'
import StepLabel from '@mui/material/StepLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'
import RadioGroup from '@mui/material/RadioGroup'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import StepperCustomDot from './StepperCustomDot'
import ProfileAcc from './ProfileAcc'

// ** Third Party Imports
import toast from 'react-hot-toast'

// ** Styled Component
import StepperWrapper from 'src/@core/styles/mui/stepper'

// ** Third Party Imports
import DatePicker from 'react-datepicker'
import SelectControlledUncontrolled from './Gender'

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})
const StartandEnd = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Start & End Date' autoComplete='off' />
})
const steps = [
  {
    title: 'Personal Info',
    subtitle: 'Setup Information'
  },
  {
    title: 'Employment History',
    subtitle: 'Show your relevant experience'
  },
  {
    title: 'Background',
    subtitle: 'Show your background experience'
  },
  {
    title: 'Social Links',
    subtitle: 'Add Social Links'
  }
]
const StepperAlternativeLabel = () => {
  // ** States
  const [email, setEmail] = useState('')
  const [date, setDate] = useState(null)
  const [city, setCity] = useState('')
  const [phone, setPhoneNumber] = useState('')
  const [postal, setPostal] = useState('')
  const [google, setGoogle] = useState('')
  const [country, setCountry] = useState('')
  const [address, setAddress] = useState('')
  const [twitter, setTwitter] = useState('')
  const [username, setUsername] = useState('')
  const [lastName, setLastName] = useState('')
  const [facebook, setFacebook] = useState('')
  const [linkedIn, setLinkedIn] = useState('')
  const [firstName, setFirstName] = useState('')
  const [activeStep, setActiveStep] = useState(0)
  const [nationality, setNationality] = useState('')
  const [education, setEducation] = useState('')
  const [skills, setSkills] = useState('')
  const [profile, setProfile] = useState('')

  // Handle Stepper
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
    if (activeStep === steps.length - 1) {
      toast.success('Form Submitted')
    }
  }

  const handleReset = () => {
    setEmail('')
    setGoogle('')
    setCountry('')
    setTwitter('')
    setUsername('')
    setLastName('')
    setFacebook('')
    setLinkedIn('')
    setFirstName('')
    setCity('')
    setPostal('')
    setActiveStep(0)
    setPhoneNumber('')
    setAddress('')
    setNationality('')
    setEducation('')
    setSkills('')
    setProfile('')
  }

  const getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <Fragment key={step}>
            <Grid item xs={12}> 
            
              <ProfileAcc
              fullWidth
              value={profile}
              onChange={e => setProfile(e.target.value)} 
              />
            </Grid>
            <Grid item xs={12} sm={5} sx={{ marginTop: 'em'}}>
              <TextField
                fullWidth
                label='First Name'
                placeholder='Leonard'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={5} sx={{ marginTop: 'em', marginRight: 'em' }}>
              <TextField
                fullWidth
                label='Last Name'
                placeholder='Carter'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={5}>
              <TextField fullWidth label='Address' value={address} onChange={e => setAddress(e.target.value)} />
            </Grid>
            

            <Grid item xs={12} sm={5}>
              <TextField
                fullWidth
                label='City'
                placeholder='Cagayan De Oro City'
                value={city}
                onChange={e => setCity(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={2.5}>
              <TextField
                fullWidth
                label='Postal Code'
                placeholder='9000'
                value={postal}
                onChange={e => setPostal(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2.5}>
              <TextField
                fullWidth
                label='Nationality'
                placeholder='Filipino'
                value={nationality}
                onChange={e => setNationality(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={2.5}>
              <FormControl fullWidth>
                <InputLabel id='stepper-alternative-personal-select-label'>Country</InputLabel>
                <Select
                  label='Country'
                  value={country}
                  id='stepper-alternative-personal-select'
                  onChange={e => setCountry(e.target.value)}
                  labelId='stepper-alternative-personal-select-label'
                >
                  <MenuItem value='Philippines'>Philippines</MenuItem>
                  <MenuItem value='UK'>UK</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Australia'>Australia</MenuItem>
                  <MenuItem value='Germany'>Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={2.5}>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                id='form-layouts-tabs-date'
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                onChange={date => setDate(date)}
              />
            </Grid>
            <Grid item xs={8} sm={5}>
              <TextField
                fullWidth
                label='Phone Number'
                placeholder='+63'
                value={phone}
                onChange={e => setPhoneNumber(e.target.value)}
              />
            </Grid>

            <Grid item xs={8} sm={5}>
              <TextField
                fullWidth
                label='Email'
                placeholder='abc123@gmail.com'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
 
            <Grid item xs={12} sm={4} sx={{ marginBottom: '0.5em'}}> 
              <SelectControlledUncontrolled
              />
              </Grid>
          </Fragment>
        )
      case 1:
        return (
          <Fragment>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Job Title'
                value={username}
                placeholder='carterLeonard'
                onChange={e => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type='email'
                label='Employer'
                value={email}
                placeholder='carterleonard@gmail.com'
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={2}>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                id='form-layouts-tabs-date'
                placeholderText='MM-DD-YYYY'
                customInput={<StartandEnd />}
                onChange={date => setDate(date)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='City'
                placeholder='Cagayan De Oro City'
                value={city}
                onChange={e => setCity(e.target.value)}
              />
            </Grid>
          </Fragment>
        )
      case 2:
        return (
          <Fragment key={step}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Education'
                placeholder=''
                value={education}
                onChange={e => setEducation(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Skills'
                placeholder=''
                value={skills}
                onChange={e => setSkills(e.target.value)}
              />
            </Grid>
          </Fragment>
        )
      case 3:
        return (
          <Fragment key={step}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Twitter'
                value={twitter}
                onChange={e => setTwitter(e.target.value)}
                placeholder='https://twitter.com/carterLeonard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Facebook'
                value={facebook}
                onChange={e => setFacebook(e.target.value)}
                placeholder='https://facebook.com/carterLeonard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Google+'
                value={google}
                onChange={e => setGoogle(e.target.value)}
                placeholder='https://plus.google.com/carterLeonard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='LinkedIn'
                value={linkedIn}
                onChange={e => setLinkedIn(e.target.value)}
                placeholder='https://linkedin.com/carterLeonard'
              />
            </Grid>
          </Fragment>
        )
      default:
        return 'Unknown Step'
    }
  }

  const renderContent = () => {
    if (activeStep === steps.length) {
      return (
        <Fragment>
          <Typography>All steps are completed!</Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
            <Button size='large' variant='contained' onClick={handleReset}>
              Reset
            </Button>
          </Box>
        </Fragment>
      )
    } else {
      return (
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                {steps[activeStep].title}
              </Typography>
              <Typography variant='caption' component='p'>
                {steps[activeStep].subtitle}
              </Typography>
            </Grid>
            {getStepContent(activeStep)}
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                size='large'
                variant='outlined'
                color='secondary'
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button size='large' variant='contained' onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </form>
      )
    }
  }

  return (
    <Fragment>
      <StepperWrapper>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step, index) => {
            return (
              <Step key={index}>
                <StepLabel StepIconComponent={StepperCustomDot}>
                  <div className='step-label'>
                    <div>
                      <Typography className='step-title'>{step.title}</Typography>
                      <Typography className='step-subtitle'>{step.subtitle}</Typography>
                    </div>
                  </div>
                </StepLabel>
              </Step>
            )
          })}
        </Stepper>
      </StepperWrapper>
      <Card sx={{ mt: 5 }}>
        <CardContent>{renderContent()}</CardContent>
      </Card>
    </Fragment>
  )
}

export default StepperAlternativeLabel
