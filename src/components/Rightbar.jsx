import React from 'react'
import { Box, ImageList, Typography, ImageListItem } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';




const Rightbar = () => {
  return (
    <Box flex={1} pr={3} sx={{ display: { xs: 'none', sm: 'block' } }}>
      {/* <Box position='fixed' width={100}> */}
      <Typography variant='h6' fontWeight={300} mt={3}>Online Friends
      </Typography>
      <AvatarGroup max={5}>
        <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=400" />
        <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Avatar alt="https://images.pexels.com/photos/3220360/pexels-photo-3220360.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
      <Typography variant='h6' fontWeight={300} mt={2} mb={2}>
        Gallery
      </Typography>
      <ImageList cols={3} rowHeight={100} gap={5}>
        <ImageListItem >
          <img
            src='https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=600'
            srcSet=''
            alt=''
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem >
          <img
            src='https://images.pexels.com/photos/10608366/pexels-photo-10608366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            srcSet=''
            alt=''
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem >
          <img
            src='https://images.pexels.com/photos/10107538/pexels-photo-10107538.jpeg?auto=compress&cs=tinysrgb&w=600'
            srcSet=''
            alt=''
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem >
          <img
            src='https://images.pexels.com/photos/5761061/pexels-photo-5761061.jpeg?auto=compress&cs=tinysrgb&w=600'
            srcSet=''
            alt=''
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem >
          <img
            src='https://images.pexels.com/photos/915160/pexels-photo-915160.jpeg?auto=compress&cs=tinysrgb&w=600'
            srcSet=''
            alt=''
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem >
          <img
            src='https://images.pexels.com/photos/3373738/pexels-photo-3373738.jpeg?auto=compress&cs=tinysrgb&w=600'
            srcSet=''
            alt=''
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>
      <Typography variant='h6' fontWeight={300} mt={2} mb={2}>
        Conversations
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/7987092/pexels-photo-7987092.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Aisha Ali
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3758104/pexels-photo-3758104.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Nur Kerey
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      {/* </Box> */}
    </Box>

  )
}

export default Rightbar
