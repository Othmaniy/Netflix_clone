import React,{useState,useEffect} from 'react'
import axios from '../axios';
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"
import "./Row.css"

const base_url ="https://image.tmdb.org/t/p/original/";
 function Row({title,fetchurl,islargerow}) {
    const [movies,setmovies]=useState([]);
    const [trailer, settrailer]=useState("")
    const opts = {
        height: '390',
        width: "100%",
        margin:"10px",
        playerVars: {
            autoplay: 1,
          },
    }
    useEffect(()=>{
        async function fetchdata(){
            const srequest = await axios.get(fetchurl);
            setmovies(srequest.data.results);
            // console.log(srequest.data.results);
            return srequest;
        }
        fetchdata()
    },[fetchurl])
    console.log(movies);

    const handleclick = (movie)=>{
        if(trailer){
            settrailer("")
        }
        else{
            movieTrailer(movie.title||movie.name||movie.original_name)
            .then((url)=>{
                const urlparams=new URLSearchParams(new URL(url).search);
                settrailer(urlparams.get("v"))
            })
            .catch((error)=>console.log(error))
        }

    }
  return (
    <>
    <div className='row'>
    <h1>{title}</h1>
    <div className='row_posters'>
        {movies.map((movie)=>(
            <img
            onClick={()=>handleclick(movie)}
                className={`srow_poster ${islargerow ? "row_large":""}`}
                src={`${base_url}${islargerow?movie.poster_path : movie.backdrop_path
                }`}
                alt={`${movie.name}`}
            
            />
        ))}
    </div>
    <div className='youtube'>
    {trailer &&< YouTube videoId={trailer} opts={opts} />}
    </div>
    </div>
    
  
  
    </>
  );
}
export default Row;