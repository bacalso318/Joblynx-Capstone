import React, { useState } from 'react'
import { Grid, CardContent, FormGroup, Container, Checkbox, FormControlLabel, Typography, Slider } from '@mui/material'

const JobFilters = () => {
  const [from_salary, setFrom_Salary] = useState('')
  const [to_salary, setTo_Salary] = useState('')
  const [fullTime, setFullTime] = useState(false)
  const [partTime, setPartTime] = useState(false)
  const [internship, setInternship] = useState(false)
  const [remote, setRemote] = useState(false)
  const [contract, setContract] = useState(false)

  const [selectedCheckbox, setSelectedCheckbox] = useState('')

  // Handle search and filter changes
  const handleSearch = () => {
    // Implement your search and filter logic here
    // Update jobListings based on search criteria
  }
  const handleCheckboxChange = (event, checkboxName) => {
    if (selectedCheckbox === checkboxName) {
      // If the same checkbox is clicked again, deselect it
      setSelectedCheckbox('')
    } else {
      // Otherwise, select the new checkbox and deselect the previously selected one
      setSelectedCheckbox(checkboxName)
    }
  }

  return (
    <div>
      {/* Main Content */}
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CardContent>
              <Grid item xs={12} sm={6} md={6}>
                <Typography variant='h6' fontWeight={'bold'}>
                  Job Status
                </Typography>
                <FormGroup sx={{}}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedCheckbox === 'fullTime'}
                        onChange={event => handleCheckboxChange(event, 'fullTime')}
                      />
                    }
                    label='Full Time'
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <FormGroup sx={{}}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedCheckbox === 'partTime'}
                        onChange={event => handleCheckboxChange(event, 'partTime')}
                      />
                    }
                    label='Part Time'
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <FormGroup sx={{}}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedCheckbox === 'internship'}
                        onChange={event => handleCheckboxChange(event, 'internship')}
                      />
                    }
                    label='Internship'
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <FormGroup sx={{}}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedCheckbox === 'remote'}
                        onChange={event => handleCheckboxChange(event, 'remote')}
                      />
                    }
                    label='Remote'
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12} sm={6} md={2} display={'inline-flex'}>
                <FormGroup sx={{}}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedCheckbox === 'contract'}
                        onChange={event => handleCheckboxChange(event, 'contract')}
                      />
                    }
                    label='Contract'
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12} sm={6} md={10} sx={{ width: '200px', mt: '2em' }}>
                <Typography variant='h6' fontWeight={'bold'}>
                  Salary
                </Typography>
                <Typography>From: {from_salary > 0 && <span>${from_salary}</span>}</Typography>
                <Slider
                  value={from_salary}
                  onChange={(_, newValue) => setFrom_Salary(newValue)}
                  valueLabelDisplay='auto'
                  valueLabelFormat={value => `$${value}`}
                  min={100}
                  max={5000}
                  step={100}
                  sx={{ width: '13rem' }}
                />
                <Typography>To: {to_salary > 0 && <span>${to_salary}</span>}</Typography>
                <Slider
                  value={to_salary}
                  onChange={(_, newValue) => setTo_Salary(newValue)}
                  valueLabelDisplay='auto'
                  valueLabelFormat={value => `$${value}`}
                  min={100}
                  max={5000}
                  step={100}
                  sx={{ width: '13rem' }}
                />
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default JobFilters
