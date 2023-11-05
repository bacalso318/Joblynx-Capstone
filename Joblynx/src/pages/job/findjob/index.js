import React, { useState } from 'react'
import {
  Grid,
  Typography,
  Button,
  Card,
  CardHeader,
  CardContent,
  FormGroup,
  Slider,
  Container,
  Box,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel
} from '@mui/material'
import FindJobContent from 'src/views/pages/job/find_job/FindJobContent'
import { right } from '@popperjs/core'

const FindJob = () => {
  const [jobType, setJobType] = useState('')
  const [location, setLocation] = useState('')
  const [experience, setExperience] = useState('')
  const [salary, setSalary] = useState('')
  const [fullTime, setFullTime] = useState(false)
  const [partTime, setPartTime] = useState(false)
  const [internship, setInternship] = useState(false)
  const [remote, setRemote] = useState(false)
  const [contract, setContract] = useState(false)
  const [jobListings, setJobListings] = useState([
    // Your job listings data goes here
  ])
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
      {/* Navigation Bar */}
      {/* ... (Same as before) */}

      {/* Main Content */}
      <Container>
        <FindJobContent />
        <Grid container spacing={2}>
          {/* Find a Job Section */}
          <Grid item xs={12}>
            <Box mt={3}>
              <Paper elevation={3}>
                <CardContent>
                  <Grid container spacing={2} mb={2}>
                    <Grid item xs={12} sm={6} md={4}>
                      <TextField
                        label='Job Type'
                        variant='outlined'
                        fullWidth
                        value={jobType}
                        onChange={e => setJobType(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <TextField
                        label='Location'
                        variant='outlined'
                        fullWidth
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <FormControl variant='outlined' fullWidth>
                        <InputLabel>Experience Level</InputLabel>
                        <Select
                          value={experience}
                          onChange={e => setExperience(e.target.value)}
                          label='Experience Level'
                        >
                          <MenuItem value='entry'>Entry Level</MenuItem>
                          <MenuItem value='mid'>Mid Level</MenuItem>
                          <MenuItem value='senior'>Senior Level</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={6} md={2} display={'inline-flex'}>
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
                  <Grid item xs={12} sm={6} md={2} display={'inline-flex'}>
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
                  <Grid item xs={12} sm={6} md={2} display={'inline-flex'}>
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
                  <Grid item xs={12} sm={6} md={2} display={'inline-flex'}>
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

                  <Grid item xs={12} sm={6} md={10} sx={{ width: '200px' }}>
                    <Typography>Salary</Typography>
                    <Slider
                      value={salary}
                      onChange={(_, newValue) => setSalary(newValue)}
                      valueLabelDisplay='auto'
                      valueLabelFormat={value => `$${value}`}
                      min={100}
                      max={5000}
                      step={100}
                      sx={{ width: '20rem' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={handleSearch}
                      sx={{
                        display: 'inline-flex'
                      }}
                    >
                      Search
                    </Button>
                  </Grid>
                </CardContent>
              </Paper>
            </Box>
          </Grid>

          {/* Job Listings Section */}
          <Grid item xs={12}>
            <Box mt={3}>
              <Typography variant='h4' sx={{ mb: 2 }}>
                Featured Job Listings
              </Typography>
              {jobListings.map((job, index) => (
                <Paper key={index} elevation={3}>
                  <CardContent>
                    <Typography variant='h6'>{job.title}</Typography>
                    <Typography>{job.company}</Typography>
                    <Typography>Location: {job.location}</Typography>
                    <Button variant='contained' color='primary'>
                      Apply
                    </Button>
                  </CardContent>
                </Paper>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default FindJob
