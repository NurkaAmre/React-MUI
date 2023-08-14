import React from 'react'
import { AppBar, styled, Toolbar, Avatar, Typography, InputBase, Badge, Box } from '@mui/material'
import WebStoriesIcon from '@mui/icons-material/WebStories';
import { Mail, NotificationAdd } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled('div')(({ theme }) => ({
  background: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}))

const Icons = styled('div')(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))

const Navbar = () => {
  return (
    <AppBar position='sticky' color='warning'>
      <StyledToolbar>
        <Avatar p={2}>
          <Typography
            variant='h6'
            sx={{ display: { xs: 'none', sm: 'block' } }}>
            O.K
          </Typography>
          <WebStoriesIcon
            sx={{ display: { xs: 'block', sm: 'none' } }} />
        </Avatar>
        <Search><InputBase placeholder='search' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color='error'>
            <NotificationAdd />
          </Badge>
          <Avatar src="https://images.pexels.com/photos/4205480/pexels-photo-4205480.jpeg?auto=compress&cs=tinysrgb&w=400" sx={{ width: 30, height: 30 }} />
        </Icons>
        <UserBox>
          <Avatar src="https://images.pexels.com/photos/4205480/pexels-photo-4205480.jpeg?auto=compress&cs=tinysrgb&w=400" sx={{ width: 30, height: 30 }} />
          <Typography variant='span'>John</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar

