import React,{useState,useEffect} from 'react'
import Header from './Header';
import { sourceOptions, fetchData,topHeadlineoptions } from '../utilities/fetchData';

const Layout = ({children}) => {
  const [language, setLanguage] = useState('en')
  const [channelSource, setChannelSource] = useState([])
  const [topHeadline, setTopHeadline] = useState([])
  

  useEffect(()=>{
      const fetchDatas = async ()=> {
        const sourceData = await fetchData(`https://newscatcher.p.rapidapi.com/v1/sources?lang=${language}`, sourceOptions)
        setChannelSource(sourceData)
        const topHeadlineData = await fetchData(`https://google-news.p.rapidapi.com/v1/top_headlines?lang=${language}&country=IN`, topHeadlineoptions)
        setTopHeadline(topHeadlineData)
      }
      fetchDatas()
    
  },[language])


  return (
    <div>
      <Header setLanguage={setLanguage} language={language}/>
      <div>
        {React.cloneElement(children, { language, channelSource, topHeadline, })}
      </div>
    </div>
  )
}

export default Layout



