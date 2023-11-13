import React, { useState } from 'react'
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { Divider, Typography } from '@mui/material'

const ChipArrayInput = ({ chips, setChips }) => {
  const [inputValue, setInputValue] = useState('')

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  const handleAddChip = () => {
    if (inputValue.trim() !== '' && !chips.includes(inputValue)) {
      setChips([...chips, { label: inputValue, color: getRandomColor() }])
      setInputValue('')
    }
  }

  const handleDeleteChip = chipToDelete => {
    setChips(chips => chips.filter(chip => chip.label !== chipToDelete.label))
  }

  return (
    <Box>
      <TextField
        fullWidth
        label='Add Skills'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleAddChip()
          }
        }}
        sx={{ width: '41.6em' }}
      />

      {chips.length > 0 && <Typography>Added Skills</Typography>}
      {chips.length > 0 && <Divider sx={{ my: 1, width: '81.1%' }} />}
      {chips.length ? null : <Typography>No skills have been added</Typography>}
      <Stack direction='row' spacing={1} mb={1} sx={{ flexWrap: 'wrap', width: '81%', marginTop: '8px' }}>
        {chips.map(chip => (
          <Chip
            key={chip.label}
            label={chip.label}
            onDelete={() => handleDeleteChip(chip)}
            style={{ backgroundColor: chip.color, color: 'white', margin: '4px' }}
          />
        ))}
      </Stack>
    </Box>
  )
}

export default ChipArrayInput
