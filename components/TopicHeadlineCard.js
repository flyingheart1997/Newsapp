import React, { useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material';
import Loader from '../components/Loader';
import Models from './Models';

const TopicHeadlineCard = ({ topic, i, language }) => {

  const [opens, setOpens] = useState(false);
  const [titles, setTitles] = useState('')

  return (

    <Box borderRadius='8px' className='w-auto h-auto px-5 py-5 my-5 boxex '>
      <Box onClick={() => { setTitles(topic.title); setOpens(true) }} sx={{ width: { xs: '300px', sm: '600px' }, height: '320px' }} alignContent='space-between' alignItems='center'>
      <Typography position='absolute' right='20px' top='-20px' fontWeight='900' textAlign='center' justifyContent='center' alignItems='center' fontSize='100px' color='rgba(255,255,255,0.1)'>{i}</Typography>
        <Typography className='overflow-hidden text text-ellipsis line-clamp-2' fontFamily='serif' fontWeight='600' fontSize='26px' sx={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)' }}>{topic?.title}</Typography>
        <Stack direction='row' gap={2} justifyContent='space-between'>
          <Box width='600%' sx={{ display: { xs: 'none', sm: 'block' } }} alignItems='center' justifyContent='center' justifyItems='center' mt={2} >
            {topic.media ? <img className='imgs' src={topic.media} alt='' /> : <Loader />}
          </Box>
          <Box mt={2} height='190px' overflow='scroll'>
            <Typography className='overflow-hidden text line-clamp-none text-ellipsis' color='rgba(255,255,255,0.6)'>{topic.summary}</Typography>
            <Button onClick={() => { setTitles(topic.title); setOpens(true) }} className='pt-2'>Read More</Button>
          </Box>
        </Stack>
        {opens && <Models open={opens} title={titles} language={language} />}
        <Box bottom='20px' position='absolute' textTransform='transition:0.5s'>
          <Typography color='rgba(255,255,255,0.4)' className='overflow-hidden line-clamp-1 text-ellipsis' fontFamily='serif' fontWeight='500' fontSize='14px' ><span className='text-xl text-gray-400'>{topic?.topic}</span> | {topic?.published_date}</Typography>
        </Box>
      </Box>
    </Box>

  );
}

export default TopicHeadlineCard;
