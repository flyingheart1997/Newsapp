import { Box, Stack } from '@mui/material'
import React from 'react'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import {InfinitySpin} from 'react-loader-spinner'

const Loader = () => {
  return (
    <ScrollMenu  direction='row' justifyContent='center' alignItems='center' width='100%' >
        {
          [...new Array(300)].map((_,i) => (
            <Box className='mx-5 cursor-grabbing' mt='20px' key={i} borderRadius='8px' height='100px' width='200px' bgcolor='rgba(255,255,255,0.05) ' alignContent='center' alignItems='center' justifyContent='center'>
              <InfinitySpin color='#fff' size={25} />
            </Box>
          ))}
        {/* <InfinitySpin color='#00BFFF' /> */}
    </ScrollMenu>
  )
}

export default Loader