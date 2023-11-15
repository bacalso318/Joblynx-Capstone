import React, { useState } from 'react'
import {
  Grid,
  CardContent,
  FormGroup,
  Container,
  Checkbox,
  FormControlLabel,
  Typography,
  Slider,
  Select,
  MenuItem
} from '@mui/material'

const JobFilters = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState('')
  const [salaryType, setSalaryType] = useState('Select')
  const [hourlyRange, setHourlyRange] = useState([50, 1000])
  const [monthlyRange, setMonthlyRange] = useState([9000, 150000])
  const [annuallyRange, setAnnuallyRange] = useState([150000, 1000000])

  const handleCheckboxChange = (event, checkboxName) => {
    if (selectedCheckbox === checkboxName) {
      setSelectedCheckbox('')
    } else {
      setSelectedCheckbox(checkboxName)
    }
  }

  const handleSalaryTypeChange = event => {
    setSalaryType(event.target.value)
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
                  Job Type
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
                <Typography variant='h6' fontWeight='bold'>
                  Salary Type
                </Typography>
                <Select value={salaryType} onChange={handleSalaryTypeChange}>
                  <MenuItem value='Select' disabled sx={{ display: 'none' }}>
                    Select
                  </MenuItem>
                  <MenuItem value='hourly'>Hourly</MenuItem>
                  <MenuItem value='monthly'>Monthly</MenuItem>
                  <MenuItem value='annually'>Annually</MenuItem>
                </Select>
                {salaryType === 'hourly' && (
                  <>
                    <Typography sx={{ position: 'fixed' }}>
                      Paying: {hourlyRange[0] > 0 && <span>${hourlyRange[0]}</span>}{' '}
                      {hourlyRange[1] > 0 && (
                        <span style={{ display: 'block' }}>
                          To: ${hourlyRange[1]}
                          {hourlyRange[1] === 1000 && <span>+</span>}
                          <Typography variant='h7' fontWeight={'bold'} display={'block'} mt={'1px'}>
                            Salary Range
                          </Typography>
                        </span>
                      )}
                    </Typography>
                    <Slider
                      value={hourlyRange}
                      onChange={(_, newValue) => setHourlyRange(newValue)}
                      valueLabelDisplay='auto'
                      valueLabelFormat={value => `$${value}`}
                      min={50}
                      max={1000}
                      step={50}
                      disableSwap
                      sx={{ mt: '5em' }}
                    />
                  </>
                )}
                {salaryType === 'monthly' && (
                  <>
                    <Typography sx={{ position: 'fixed' }}>
                      Paying: {monthlyRange[0] > 0 && <span>${monthlyRange[0]}</span>}{' '}
                      {monthlyRange[1] > 0 && (
                        <span style={{ display: 'block' }}>
                          To: ${monthlyRange[1]}
                          {monthlyRange[1] === 150000 && <span>+</span>}
                          <Typography variant='h7' fontWeight={'bold'} display={'block'} mt={'1px'}>
                            Salary Range
                          </Typography>
                        </span>
                      )}
                    </Typography>
                    <Slider
                      value={monthlyRange}
                      onChange={(_, newValue) => setMonthlyRange(newValue)}
                      valueLabelDisplay='auto'
                      valueLabelFormat={value => `$${value}`}
                      min={9000}
                      max={150000}
                      step={1000}
                      disableSwap
                      sx={{ mt: '5em' }}
                    />
                  </>
                )}
                {salaryType === 'annually' && (
                  <>
                    <Typography sx={{ position: 'fixed' }}>
                      Paying: {annuallyRange[0] > 0 && <span>${annuallyRange[0]}</span>}{' '}
                      {annuallyRange[1] > 0 && (
                        <span style={{ display: 'block' }}>
                          To: ${annuallyRange[1]}
                          {annuallyRange[1] === 1000000 && <span>+</span>}
                          <Typography variant='h7' fontWeight={'bold'} display={'block'} mt={'1px'}>
                            Salary Range
                          </Typography>
                        </span>
                      )}
                    </Typography>
                    <Slider
                      value={annuallyRange}
                      onChange={(_, newValue) => setAnnuallyRange(newValue)}
                      valueLabelDisplay='auto'
                      valueLabelFormat={value => `$${value}`}
                      min={150000}
                      max={1000000}
                      step={50000}
                      disableSwap
                      sx={{ mt: '5em' }}
                    />
                  </>
                )}
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default JobFilters
