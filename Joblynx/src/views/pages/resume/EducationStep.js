import React, { Fragment, useState } from 'react'
import { TextField, Checkbox, FormControlLabel, FormControl, Grid } from '@mui/material'

const EducationForm = () => {
  const [institute, setInstitute] = useState('')
  const [course, setCourse] = useState('')
  const [completed, setCompleted] = useState(true)

  const handleInstituteChange = event => {
    setInstitute(event.target.value)
  }

  const handleCourseChange = event => {
    setCourse(event.target.value)
  }

  const handleCompletedChange = event => {
    setCompleted(event.target.checked)
  }

  return (
    <Fragment>
      <FormControl fullWidth style={{ display: 'flex', flexWrap: 'wrap' }}>
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
            sx={{ ml: '1.2em', mt: '-2.9px', width: '97%' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={<Checkbox id='completed' checked={completed[0]} onChange={handleCompletedChange} />}
            label='Qualification complete'
            sx={{ mt: '1.6em' }}
          />
        </Grid>
      </FormControl>
    </Fragment>
  )
}

export default EducationForm
