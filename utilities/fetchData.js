
export const sourceOptions ={
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
  }
};


export const topHeadlineoptions = {
	method: 'GET',
	headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'google-news.p.rapidapi.com'
	}
};

const astroOptions = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}
