import React from 'react'
import { AppBar, styled, Toolbar, Avatar, Typography, InputBase, Badge, Box, Menu, MenuItem } from '@mui/material'
import WebStoriesIcon from '@mui/icons-material/WebStories';
import { Mail, NotificationAdd } from '@mui/icons-material';
import { useState } from 'react';
import FitbitIcon from '@mui/icons-material/Fitbit';

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
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky' color='success'>
      <StyledToolbar>
        <Avatar p={2} >
          <FitbitIcon />
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
          <Avatar src="https://images.pexels.com/photos/4205480/pexels-photo-4205480.jpeg?auto=compress&cs=tinysrgb&w=400"
            sx={{ width: 30, height: 30 }}
            onClick={e => setOpen(true)} />
        </Icons>
        <UserBox>
          <Avatar src="https://images.pexels.com/photos/4205480/pexels-photo-4205480.jpeg?auto=compress&cs=tinysrgb&w=400"
            sx={{ width: 30, height: 30 }}
            onClick={e => setOpen(true)} />
          <Typography variant='span'>John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar

