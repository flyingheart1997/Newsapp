import { Box, Button, Link, Typography } from '@mui/material';
import React, { useState } from 'react'
import Models from './Models';

const HeadlineCard = ({topLine, i,language}) => {
  // const current = new Date();
  // const date = `${current.getFullYear()}-0${current.getMonth()+1}-${current.getDate()}`;
  // console.log(date);
  // const d = '2022-06-29T11:05:42'
  // console.log(d.slice(0,10));
  // console.log((d.slice(0,10))==date);

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('')
  
  return (
      <Box onClick={()=>{setTitle(topLine.title); setOpen(true)}} sx={{width:{xs:'300px',sm:'400px'},height:'160px'}} alignContent='space-between' alignItems='center'>
        <Box>
        <Typography position='absolute' right='15px' mt={-5} fontWeight='900' textAlign='center' justifyContent='center' alignItems='center' fontSize='100px' color='rgba(255,255,255,0.1)'>{i}</Typography>
          <Typography className='overflow-hidden text text-ellipsis line-clamp-2' fontFamily='serif' fontWeight='600' fontSize='24px' sx={{cursor:'pointer', color:'rgba(255,255,255,0.7)'}}>{topLine?.title}</Typography>
          {open && <Models open={open} title={title} language={language}/>}
        </Box>
        <Box pt={1} textAlign='center' alignItems='center' justifyContent='center'><Button onClick={()=>{setTitle(topLine.title); setOpen(true)}}>Read More</Button></Box>
        <Box mt={1.5} position='absolute' textTransform='transition:0.5s'>
          <Typography color='rgba(255,255,255,0.4)'  className='overflow-hidden line-clamp-1 text-ellipsis' alignItems='flex-start' fontFamily='serif' fontWeight='500' fontSize='14px' ><span className='text-xl text-gray-400'>{topLine?.source.title}</span> | {topLine?.published}</Typography>
        </Box>
      </Box>
  )
}

export default HeadlineCard

