import React from 'react'
import { Box } from '@mui/material'

const Rightbar = () => {
  return (
    <div>
      <Box bgcolor={'pink'} flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>Rightbar</Box>
    </div>
  )
}

export default Rightbar
