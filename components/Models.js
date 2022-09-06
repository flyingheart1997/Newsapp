
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import React, { useEffect, useState } from 'react'
import { fetchData, sourceOptions, topHeadlineoptions } from '../utilities/fetchData';
import { Box, Button, Stack,} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Title from 'react-vanilla-tilt'
import Loader from './Loader';
import TopHeadlinesDetails from './TopHeadlinesDetails';
import { Autoplay } from 'swiper';
import HeadlineCard from './HeadlineCard';

const Models = ({open,title,language,sources}) => {
  const [openModel, setOpenModel] = useState(open)
  const [topHeadlines, setTopHeadlines] = useState([])
  const [sourceDetails, setSourceDetails] = useState([])

  const closeModel = ()=>{
    setTimeout(() => {
      setOpenModel(false)
    }, 1000);
  }
    useEffect(() => {
        if (title){
            const fetchDatas = async () => {
                const topHeadlineData = await fetchData(`https://newscatcher.p.rapidapi.com/v1/search_free?q=${title}&lang=${language}&page_size=100&media=True`, sourceOptions)
                setTopHeadlines(topHeadlineData)
            }
            fetchDatas()
        }
    }, [language,title])
    
    useEffect(() => {
        if (sources){
            const fetchSourceDatas = async () => {
                const topSourceData = await fetchData(`https://google-news.p.rapidapi.com/v1/source_search?source=${sources}&lang=${language}&country=IN`, topHeadlineoptions)
                setSourceDetails(topSourceData)
            }
            fetchSourceDatas()
        }
    }, [language,sources])

  return (
      <Modal open={openModel} onClose={closeModel} center
          classNames={{
              overlay: 'customOverlay',
              modal: 'customModal',
          }}> 
         {title && <Box >
              {topHeadlines.articles ? <Swiper
                  effect={"coverflow"}
                  spaceBetween={20}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Autoplay]}
              >
                  {
                      topHeadlines.articles?.map((topData, i) => {
                          return (
                              <SwiperSlide key={i} >
                                  <Title
                                      options={{
                                          max: 25,     // max tilt rotation (degrees)
                                          speed: 400,    // Speed of the enter/exit transition
                                      }}
                                      style={{
                                      }}>
                                      {topHeadlines ? <TopHeadlinesDetails topData={topData} i={i}/> : <Loader/>}
                                  </Title>
                              </SwiperSlide>
                          )
                      })
                  }
              </Swiper> : <Loader />}
          </Box>}
          {sources&& <Box >
              {sourceDetails.articles ? <Swiper
                  effect={"coverflow"}
                  spaceBetween={20}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Autoplay]}
              >
                  {
                    sourceDetails.articles?.map((sourceData, i) => {
                          return (
                              <SwiperSlide key={i}>
                                  <Title
                                      options={{
                                          max: 25,     // max tilt rotation (degrees)
                                          speed: 400,    // Speed of the enter/exit transition
                                      }}
                                      style={{
                                      }}>
                                      <Stack borderRadius='8px' className='w-auto h-auto px-5 py-5 my-5 boxex '>
                                        {sourceDetails ? <HeadlineCard topLine={sourceData} i={i} language={language}/> : <Loader/>}
                                      </Stack>
                                  </Title>
                              </SwiperSlide>
                          )
                      })
                  }
              </Swiper> : <Loader />}
          </Box>}
      </Modal> 
    
  );
}

export default Models;
