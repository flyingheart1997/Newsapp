// import styles from '../styles/Home.module.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Autoplay } from 'swiper';
import { Box, Stack, Typography } from '@mui/material';
import 'swiper/css';
import ChannelCard from '../components/ChannelCard';
import Title from 'react-vanilla-tilt'
import Loader from '../components/Loader';
import TopHeadLine from '../components/TopHeadLine';
import TopicHeadLine from '../components/TopicHeadLine';
import Astrology from '../components/Astrology';


const Home = ({language, channelSource, topHeadline}) => {
  return (
    <Box className='h-screen px-4' overflow='scroll'>
      <Box>
        {channelSource.length ? <Swiper
          effect={"coverflow"}
          spaceBetween={20}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {
            channelSource?.map((source, i) => {
              return (
                <SwiperSlide key={i} virtualIndex={i}>
                  <Title
                    options={{
                      max: 25,     // max tilt rotation (degrees)
                      speed: 400,    // Speed of the enter/exit transition
                    }}
                    style={{
                    }}>
                    <Stack borderRadius='8px' className='items-center justify-center w-auto h-auto px-5 my-5 text-center boxex' >
                      {channelSource ? <ChannelCard source={source} language={language}/> : '------'}
                    </Stack>
                  </Title>
                </SwiperSlide>
              )
            })
          }
        </Swiper> : <Loader />}
      </Box>
      <Box><TopHeadLine topHeadline={topHeadline} language={language} /></Box>
      <Box><TopicHeadLine language={language} /></Box>
      <Box><Astrology language={language} /></Box>
    </Box>
  )
}

export default Home
