import React, { Fragment, useState } from 'react'
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  Typography
} from '@mui/material'

const EducationForm = ({ educationData, setEducationData }) => {
  const { institute, course, completed, startD, endYear, completionYear } = educationData

  const handleInstituteChange = event => {
    setEducationData({ ...educationData, institute: event.target.value })
  }

  const handleCourseChange = event => {
    setEducationData({ ...educationData, course: event.target.value })
  }

  const handleCompletedChange = event => {
    setEducationData({ ...educationData, completed: event.target.checked })
  }

  const handleMonthChange = event => {
    setEducationData({ ...educationData, startD: event.target.value })
  }

  const handleYearChange = event => {
    setEducationData({ ...educationData, endYear: event.target.value })
  }

  const onCompletionYearChange = event => {
    setEducationData({ ...educationData, completionYear: event.target.value })
  }

  return (
    <Fragment>
      <FormControl fullWidth style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id='institute'
              label='Institution'
              value={institute}
              onChange={handleInstituteChange}
              autoComplete='off'
              variant='outlined'
              fullWidth
              sx={{ ml: '1.2em', mt: '1.25em', width: '97%' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='course'
              label='Course or qualification'
              value={course}
              onChange={handleCourseChange}
              autoComplete='off'
              variant='outlined'
              fullWidth
              sx={{ ml: '1.2em', mt: '1.3em', width: '97%' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox id='completed' checked={completed} onChange={handleCompletedChange} />}
              label='Graduated'
              sx={{ mt: '3em', ml: '1em' }}
            />
          </Grid>
          {!completed && (
            <Grid item xs={12} sm={6}>
              <Typography sx={{ position: 'relative', right: '31.9em' }}>
                Expected Finish <span style={{ color: '#B6B6B4' }}>(optional)</span>
              </Typography>
              <InputLabel id='month' sx={{ left: '11.2em', top: '7.8em' }}>
                Month
              </InputLabel>
              <Select
                id='month'
                value={startD}
                label='Month'
                onChange={handleMonthChange}
                sx={{ right: '32em', top: '1em' }}
              >
                <MenuItem value={1}>January</MenuItem>
                <MenuItem value={2}>February</MenuItem>
                <MenuItem value={3}>March</MenuItem>
                <MenuItem value={4}>April</MenuItem>
                <MenuItem value={5}>May</MenuItem>
                <MenuItem value={6}>June</MenuItem>
                <MenuItem value={7}>July</MenuItem>
                <MenuItem value={8}>August</MenuItem>
                <MenuItem value={9}>September</MenuItem>
                <MenuItem value={10}>October</MenuItem>
                <MenuItem value={11}>November</MenuItem>
                <MenuItem value={12}>December</MenuItem>
              </Select>
            </Grid>
          )}
          {!completed && (
            <Grid item xs={12} sm={6}>
              <InputLabel id='year' sx={{ left: '21em', top: '7.8em' }}>
                Year
              </InputLabel>
              <Select
                id='year'
                value={endYear}
                label='Year'
                onChange={handleYearChange}
                sx={{ bottom: '3.6em', left: '21em' }}
              >
                {/* Year options */}
                {Array.from({ length: 30 }, (_, index) => (
                  <MenuItem key={index} value={2030 - index}>
                    {2030 - index}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          )}
          {completed && (
            <Grid item xs={12} sm={6}>
              <Typography sx={{ position: 'relative', right: '31.9em' }}>
                Finished <span style={{ color: '#B6B6B4' }}>optional)</span>
              </Typography>
              <InputLabel id='completionYear' sx={{ left: '11.2em', mt: '7.8em' }}>
                Completion Year
              </InputLabel>
              <Select
                label='Completion Year'
                id='completionYear'
                value={completionYear}
                onChange={onCompletionYearChange}
                sx={{ width: '30%', top: '1em', right: '32em' }}
              >
                {/* Add completion year options */}
                {Array.from({ length: 30 }, (_, index) => (
                  <MenuItem key={index} value={2030 - index}>
                    {2030 - index}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          )}
        </Grid>
      </FormControl>
    </Fragment>
  )
}

export default EducationForm
