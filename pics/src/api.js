import axios from 'axios'

console.log(process.env)

const searchImages = async (term) => {
    console.log(term)
    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: process.env.REACT_APP_ClientID
            },
            params: {
                query: term
            }
        })
        return response.data.results
    }
    catch(e){
        console.error(e)
    }

}

export default searchImages