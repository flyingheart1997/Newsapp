
export const sourceOptions ={
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b4702eee24msh4c7400ad4e5a58ap14ac3ejsnaceb186ebbfc',
    'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
  }
};


export const topHeadlineoptions = {
	method: 'GET',
	headers: {
    'X-RapidAPI-Key': '1e6b68b72fmshec8e4a41fa8d411p15d006jsn5ac6462cc5b4',
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

// b4702eee24msh4c7400ad4e5a58ap14ac3ejsnaceb186ebbfc

// 1e6b68b72fmshec8e4a41fa8d411p15d006jsn5ac6462cc5b4

// 82fa293e29msh0987e91fcfa21afp168f01jsn83833a0067bb