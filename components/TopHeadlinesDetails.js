import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Loader from './Loader';

const TopHeadlinesDetails = ({ topData,i }) => {
    return (
        <Box  overflow='scroll' sx={{ width: { xs: '300px', sm: '600px' }, height: '520px' }} alignContent='space-between' alignItems='center' p='10px' className='bg-slate-700'  borderRadius='8px'>
            <Typography position='absolute' right='20px' top='-20px' fontWeight='900' textAlign='center' justifyContent='center' alignItems='center' fontSize='100px' color='rgba(255,255,255,0.1)'>{i}</Typography>
            <Typography className='overflow-hidden text-ellipsis line-clamp-none' fontFamily='serif' fontWeight='600' fontSize='30px' lineHeight='35px' sx={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)' }}>{topData?.title}</Typography>
            <Box alignItems='center' mt={3} >
                {topData.media ? <img src={topData.media} alt='' /> : <Loader/>}
            </Box>
            <Box mt={2} px='10px' overflow='scroll'>
                <Typography className='overflow-hidden line-clamp-none text-ellipsis' color='rgba(255,255,255,0.8)'>{topData.summary}</Typography>
            </Box>
            <Box textAlign='end' right='30px' mt='-5px'>
                <Button href={topData.link} sx={{"&:hover":{bgcolor:'rgba(255,255,255,0.1)',color:'#ddd'}}}>Read More</Button>
            </Box>
            <Typography color='rgba(255,255,255,0.6)' className='overflow-hidden line-clamp-1 text-ellipsis' fontFamily='serif' fontWeight='500' fontSize='14px' ><span className='text-xl text-gray-200'>{topData?.topic}</span> | {topData?.published_date}</Typography>
        </Box>
    );
}

export default TopHeadlinesDetails;
