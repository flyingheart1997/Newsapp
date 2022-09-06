import Select from 'react-select'
import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import { fetchData, sourceOptions } from '../utilities/fetchData';
import TopicHeadlineCard from './TopicHeadlineCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Autoplay } from 'swiper';
import 'swiper/css';
import Title from 'react-vanilla-tilt'
import Loader from '../components/Loader';

const options = [
  { value: 'news', label: 'News' },
  { value: 'world', label: 'World' },
  { value: 'politics', label: 'Politics' },
  { value: 'business', label: 'Business' },
  { value: 'economics', label: 'Economics' },
  { value: 'tech', label: 'Technology' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'science', label: 'Science' },
  { value: 'sport', label: 'Sport' },
  { value: 'travel', label: 'Travel' },
  { value: 'finance', label: 'Finance' },
  { value: 'music', label: 'Music' },
  { value: 'beauty', label: 'Beauty' },
  { value: 'food', label: 'Food' }
]

const TopicHeadLine = ({language}) => {

  const [selectedOption, setSelectedOption] = useState(options[0]);
    const [topicHeadline, setTopicHeadline] = useState([])
    useEffect(()=>{
        const fetchDatas = async ()=> {
          const topicHeadlineData = await fetchData(`https://newscatcher.p.rapidapi.com/v1/latest_headlines?topic=${selectedOption&&selectedOption.value}&lang=${language}&country=IN&media=True`, sourceOptions)
          setTopicHeadline(topicHeadlineData)
  
        }
        fetchDatas()
    },[language,selectedOption])

  return (
    <Box justifyContent='space-between' alignItems='center' pt='40px' pb='40px'>
      <Stack className='xs:flex-col, sm:flex-row xs:gap-5 sm:gap-8'>
        <Typography fontFamily='serif' fontWeight='900' fontSize='30px' color='rgba(255,255,255,0.7)'>{selectedOption && selectedOption.label}  Headlines</Typography>
        <Select
          value={options?.value}
          defaultValue={options[0]}
          onChange={setSelectedOption}
          options={options}
          width='200px'
          className='input'
        />
      </Stack>
      <Box sx={{ pt: { xs: '70px', sm: '20px' } }}>
        {topicHeadline.articles ? <Swiper
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
            topicHeadline.articles?.map((topic, i) => {
              return (
                <SwiperSlide key={i}>
                  <Title
                    options={{
                      max: 25,     
                      speed: 400,    
                    }}
                    style={{
                    }}>
                      <TopicHeadlineCard topic={topic} i={i} language={language} />
                  </Title>
                </SwiperSlide>
              )
            })
          }
        </Swiper> : <Loader />}
      </Box>
    </Box>
  )
}

export default TopicHeadLine
