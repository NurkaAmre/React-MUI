import React from 'react'
import { Box } from '@mui/material'

const Sidebar = () => {
  return (
    <div>
      <Box bgcolor={'skyblue'} flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>Sidebar</Box>
    </div>
  )
}

export default Sidebar
