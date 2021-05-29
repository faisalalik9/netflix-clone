import React, {useState, useEffect} from 'react'
import axios from './axios';
import "./Row.css";
const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isNetflixOrig}) {
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        
        async function fetchdata(){
            const request = await axios.get(`https://api.themoviedb.org/3${fetchUrl}`);
            setMovies(request.data.results);
            return request;
        }

        fetchdata();

    }, [fetchUrl]);

     {/*console.table(movies);*/}
    return (
        <div className="row">
           <h3 className="row-title">{title}</h3> 

            <div className="movies-container">

                {movies.map(movie =>{
                    return <img key={movie.id} className= {`movie-image ${isNetflixOrig && "netflix-orig"}`} src={`${baseUrl}${isNetflixOrig ?movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                })}

            </div>

        </div>
    )
}

export default Row
