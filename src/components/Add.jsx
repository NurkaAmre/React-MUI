import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip onClick={e => setOpen(true)} title="Delete" sx={{ position: 'fixed', bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
        <Fab color="success" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor='background.default' p={3} borderRadius={5} >
          <Typography variant="h6" component="h2" sx={{ textAlign: 'center', mb: 2, color: 'text.primary' }}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar src="https://images.pexels.com/photos/4069289/pexels-photo-4069289.jpeg?auto=compress&cs=tinysrgb&w=400" sx={{ width: 30, height: 30 }} />
            <Typography variant='body1' component='p' fontWeight={500} sx={{ ml: 1, color: 'text.primary' }}>
              Amre Nurka
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            multiline
            rows={3}
            id="standard-multiline-static"
            placeholder="What's on your mind?"
            variant='standard'
          />
          <Stack direction='row' gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color='warning' />
            <ImageIcon color='success' />
            <VideoCameraFrontIcon color='secondary' />
            <PersonAddIcon color='error' />
          </Stack>
          <ButtonGroup variant="contained" fullWidth aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}><DateRangeIcon /></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const UserBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`

export default Add
