import React, {useState, useEffect} from 'react'
import axios from './axios';
import "./Banner.css"
function Banner({fetchUrl}) {
    const[movie,setMovie] = useState([]);

    useEffect(()=>{
        async function fetchdata(){
            const request = await axios.get(`https://api.themoviedb.org/3${fetchUrl}`);
            setMovie(request.data.results[Math.floor(Math.random()* request.data.results.length -1)]);
            return request;
        }
        fetchdata();
        
    },[fetchUrl]);
  

     function truncate(str, n) {
        return str?.length > n ? str.substring(0, n-1) + "..." : str;
    }

    return (
        <div>
        <header className="header" style={
            {backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize : "cover",
            backgroundPosition : "center center",
            }}>

        <div className="top-details">
           <h2 className="top-movie">{movie?.title || movie?.name || movie?.original_name}</h2> 

           <div className="buttons">
               <button>Play</button>
               <button>Resume</button>
           </div>

           <div className="desc"><p>{truncate(movie?.overview , 150)}</p></div>
        </div> 
        <div className="header-bottom" ></div>  
        </header>
        
        
        </div>
    )
}

export default Banner
