import { Typography ,Stack} from '@mui/material'
import React from 'react'
import ReactLanguageSelect from 'react-languages-select';
import 'react-languages-select/css/react-languages-select.css'


const Header = ({ language, setLanguage}) => {

    const onSelectLanguage = (language)=>{
        setLanguage(language)
    }


  return (
    <Stack flexDirection='row' className='items-center justify-between bg-stone-800' >
        <Typography justifyItems='center' fontWeight='900' fontSize={25} color='#64e1a0' fontFamily='serif' sx={{pl:{xs:'20px',sm:'50px'}}}>Today_News
        </Typography>
        <Stack flexDirection='row' sx={{pr:{xs:'10px',sm:'20px'}}}>
            <Stack height='auto' alignItems='center' justifyContent='center'>{/* <Select placeholder='India' options={options} value={country} onChange={changeHandler} /> */}
                <Typography justifyItems='center' mb='3px' alignItems='center' fontWeight='900' fontSize={20} color='#64b1a0' fontFamily='serif'>India</Typography>
            </Stack>
            <Stack height='auto' alignItems='center' justifyContent='center'>
                <ReactLanguageSelect defaultLanguage='en' className="menu-languages" value={language} alignOptions="left" placeholder='English' onSelect={onSelectLanguage} />
            </Stack>
        </Stack>
    </Stack>
  )
}

export default React.memo(Header)

