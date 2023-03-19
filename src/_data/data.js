const axios = require('axios');
module.exports = async function() //whatever this results in will be exported
{

    let movieData = {
        actionMovie: [],
        adventureMovie: [],
        comedyMovie: []
    }

    try{
        const actionMovie = await axios.get(' https://api.themoviedb.org/3/discover/movie?api_key=6b833c4c7c8f05d91cf489269b4c685c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate');
        for(let i=0;i<actionMovie.data.results.length;i++)
        {
            let tempMovieObj = {
                title: actionMovie.data.results[i].title,
                poster_path: actionMovie.data.results[i].poster_path
            }
            movieData.actionMovie.push(tempMovieObj);
        }
        
        
        const adventureMovie = await axios.get(' https://api.themoviedb.org/3/discover/movie?api_key=6b833c4c7c8f05d91cf489269b4c685c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12&with_watch_monetization_types=flatrate');
        for(let i=0;i<adventureMovie.data.results.length;i++)
        {
            let tempMovieObj = {
                title: adventureMovie.data.results[i].title,
                poster_path: adventureMovie.data.results[i].poster_path
            }
            movieData.adventureMovie.push(tempMovieObj);
        }
        
        
        const comedyMovie = await axios.get(' https://api.themoviedb.org/3/discover/movie?api_key=6b833c4c7c8f05d91cf489269b4c685c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate');
        for(let i=0;i<comedyMovie.data.results.length;i++)
        {
            let tempMovieObj = {
                title: comedyMovie.data.results[i].title,
                poster_path: comedyMovie.data.results[i].poster_path
            }
            movieData.comedyMovie.push(tempMovieObj);
        }
        console.log(movieData);
        
        
        
        return movieData;
    }
    catch(error)
    {
        console.log(error);
    }
}



// {
//     "memes": [
//         {"url": "https://i.imgflip.com/30b1gx.jpg"},
//         {"url": "https://i.imgflip.com/1g8my4.jpg"},
//         {"url": "https://i.imgflip.com/1ur9b0.jpg"},
//         {"url": "https://i.imgflip.com/261o3j.jpg"}
//     ]
// }