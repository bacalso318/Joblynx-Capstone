import React, { useState } from 'react'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

function getStyles(name, languages, theme) {
  return {
    fontWeight: languages.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
  }
}

const names = [
  '',
  'English',
  'Filipno',
  'Mandarin',
  'French',
  'Arabic',
  'Miriam Wagner',
  'Japanese',
  'Korean',
  'Spanish',
  'Russian',
  'Hindi'
]

const LanguageForm = ({ selectedLanguages, setSelectedLanguages }) => {
  const theme = useTheme()
  const [languages, setLanguages] = useState([])

  const handleChange = event => {
    const {
      target: { value }
    } = event
    setLanguages(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
    setSelectedLanguages(value) // Update the selected languages in the parent component
  }

  return (
    <FormControl sx={{ width: 665 }}>
      <InputLabel id='demo-multiple-chip-label'>Languages</InputLabel>
      <Select
        labelId='demo-multiple-chip-label'
        id='demo-multiple-chip'
        multiple
        value={languages}
        onChange={handleChange}
        input={<OutlinedInput id='select-multiple-chip' label='Chip' />}
        renderValue={selected => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {selected.map(value => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {names.map(name => (
          <MenuItem key={name} value={name} style={getStyles(name, languages, theme)}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default LanguageForm
