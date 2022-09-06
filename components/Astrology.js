import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import { fetchData, sourceOptions } from '../utilities/fetchData';

const signs = [
    { value: 'aquarius', label: 'Aquarius' },
    { value: 'aries', label: 'Aries' },
    { value: 'taurus', label: 'Taurus' },
    { value: 'gemini', label: 'Gemini' },
    { value: 'cancer', label: 'Cancer' },
    { value: 'leo', label: 'Leo' },
    { value: 'virgo', label: 'Virgo' },
    { value: 'libra', label: 'Libra' },
    { value: 'scorpio', label: 'Scorpio' },
    { value: 'sagittarius', label: 'Sagittarius' },
    { value: 'capricorn', label: 'Capricorn' },
    { value: 'pisces', label: 'Pisces' },
  ]

  const days = [
    { value: 'today', label: 'Today' },
    { value: 'yesterday', label: 'Yesterday' },
    { value: 'tomorrow', label: 'Tomorrow' },
  ]
  
const Astrology = ({}) => {
    const [sign, setSign] = useState(signs[0]);
    const [day, setDay] = useState(days[0]);
    const [astroData, setAstroData] = useState([])
console.log(day);
console.log(sign);
    useEffect(()=>{
        const fetchAstroDatas = async ()=> {
        //   const topastroData = await fetchData(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign.value}&day=${day.value}`, sourceOptions)
          const topastroData = await fetchData('https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aquarius&day=today', sourceOptions)
          setAstroData(topastroData)
  
        }
        fetchAstroDatas()
    },[sign,day])
    console.log(astroData);
  return (
    <Box justifyContent='space-between' alignItems='center' pb='40px'>
        <Typography fontFamily='serif' fontWeight='900' fontSize='30px' color='rgba(255,255,255,0.7)'>{`Today's`} {}  Astrology</Typography>
        <Stack className='xs:flex-col, sm:flex-row xs:gap-5 sm:gap-8 p-5'>
            <Box>
                <Select
                value={signs?.value}
                defaultValue={signs[0]}
                onChange={setSign}
                options={signs}
                width='200px'
                className='input'
                />
            </Box>
            <Box>
                <Select
                    value={days?.value}
                    defaultValue={days[0]}
                    onChange={setDay}
                    options={days}
                    width='200px'
                    className='input'
                    />
            </Box>
        </Stack>
        <Box>
            
        </Box>
    </Box>
  );
}

export default Astrology;
