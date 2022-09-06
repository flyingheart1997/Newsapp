import { Box, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Title from 'react-vanilla-tilt'
import Models from './Models';

const ChannelCard = ({source,language}) => {
  const [openModels,setOpenModels]=useState(false)
  const [title,setTitle]=useState('')
  
  return (
    <Stack borderRadius='8px' className='items-center justify-center w-auto h-16 p-5 text-center box '>
      <Title
        options={{
          max: 25,     // max tilt rotation (degrees)
          speed: 400,    // Speed of the enter/exit transition
        }}
        style={{
        }}>
        <Box onClick={() => { setOpenModels(true); setTitle(source) }} className='cursor-pointer'>
          <Typography className='text' color='rgba(255,255,255,0.8)' fontFamily='serif' fontWeight='600' fontSize='20px' >{source}</Typography>
          {openModels && <Models open={openModels} language={language} sources={title} />}
        </Box>
      </Title>
    </Stack>
  );
}

export default ChannelCard;
