import React, { useState } from 'react'
import {
  Grid,
  Typography,
  Button,
  CardContent,
  Container,
  Box,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material'

const FindJobContent = () => {
  const [jobType, setJobType] = useState('')
  const [location, setLocation] = useState('')
  const [experience, setExperience] = useState('')
  const [jobListings, setJobListings] = useState([
    // Your job listings data goes here
  ])

  // Handle search and filter changes
  const handleSearch = () => {
    // Implement your search and filter logic here
    // Update jobListings based on search criteria
  }
  return (
    <div>
      {/* Main Content */}
      <Container>
        <Grid container spacing={2}>
          {/* Find a Job Section */}
          <Grid item xs={12}>
            <Box>
              <Paper elevation={2} sx={{ width: '100%' }}>
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
                  <Grid item xs={12} sm={6} md={4}>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={handleSearch}
                      sx={{
                        display: 'inline-flex',
                        ml: '72em'
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
            <Box>
              <Typography variant='h6' sx={{ mb: 1 }}>
                Filter Options
                <Typography variant='h5' sx={{ display: 'inline', ml: '9.5em' }}>
                  Recommended Jobs
                </Typography>
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

export default FindJobContent
