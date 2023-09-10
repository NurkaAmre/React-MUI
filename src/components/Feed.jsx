import React from 'react'
import { Box } from '@mui/material'
import Post from './Post'
const Feed = () => {
  return (
    <div>
      <Box flex={4} p={2}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Box>
    </div>
  )
}

export default Feed
