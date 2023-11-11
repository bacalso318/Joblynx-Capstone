// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const SelectControlledUncontrolled = () => {
  // ** State
  const [value, setValue] = useState('')

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <div className='demo-space-x'>
      <FormControl>
        <InputLabel id='Gender-select-label'>Gender</InputLabel>
        <Select
          value={value}
          label='Gender'
          id='Gender-select'
          onChange={handleChange}
          labelId='gender-select-label'
        >
          
          <MenuItem value={10}>Male</MenuItem>
          <MenuItem value={20}>Female</MenuItem>
          <MenuItem value={30}>Other</MenuItem>
        </Select>
      </FormControl>
     
    </div>
  )
}

export default SelectControlledUncontrolled
