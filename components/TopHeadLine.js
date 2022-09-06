import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Autoplay } from 'swiper';
import { Box, Stack, Typography } from '@mui/material';
import 'swiper/css';
import Title from 'react-vanilla-tilt'
import HeadlineCard from '../components/HeadlineCard';
import Loader from '../components/Loader';

const TopHeadLine = ({topHeadline,language}) => {
  return (
    <Box>
        <Typography fontFamily='serif' pt='40px' pb='20px' pl='5px' fontWeight='900' fontSize='30px' color='rgba(255,255,255,0.7)'>Top Headlines</Typography>
        {topHeadline.articles ? <Swiper
        effect={"coverflow"}
        spaceBetween={20}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        {
          topHeadline.articles?.map((topLine, i) => {
            return(
              <SwiperSlide key={i} virtualIndex={i}>
              <Title 
                  options={{
                    max: 25,     // max tilt rotation (degrees)
                    speed: 400,    // Speed of the enter/exit transition
                 }} 
                style={{
                    }}>
                <Stack borderRadius='8px' className='w-auto h-auto px-5 py-5 my-5 boxex '>
                  {topHeadline.articles ? <HeadlineCard topLine={topLine} i={i} language={language}/>:<Loader/>}
                </Stack>
            </Title>
            </SwiperSlide>
          )})
        }
      </Swiper>: <Loader/> }
      </Box>
  )
}

export default TopHeadLine