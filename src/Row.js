import React, {useState, useEffect} from 'react';
import axios from './axios'
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    
    useEffect(()=>{
        async function fetchData() {

            const request = await axios.get(fetchUrl);     
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
            .then(url => {
                // https://www.youtube.com/watch?v=XtMthy8Qkqu
                const urlParams = new URLSearchParams(new URL(url).search);
                //v=code
                setTrailerUrl(urlParams.get("v"));
                console.log(movie?.name)
            })
            .catch((error) => console.log(error)); 


        }
    }
    
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay:1,
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {/* several row__posters */}

                {movies.map(movie => (
                    <img
                    onClick={() => handleClick(movie)}
                    key={movie.id}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} 
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row;
