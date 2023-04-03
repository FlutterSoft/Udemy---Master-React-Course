async function getMovieTitles(substr) {
    const url = `https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=${substr}`
    try {
        const response = await fetch(url)
        const data = await response.json()
        const sortedTitles = data.data.map(movie => movie.Title).sort( (a,b) => a.localeCompare(b))
        console.log(sortedTitles)
        return sortedTitles
    }
    catch (error){
        console.error(error)
    }
}

getMovieTitles('a')