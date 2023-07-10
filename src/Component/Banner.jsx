import React,{useState,useEffect} from 'react'
import axios from "../axios"
import request from '../request';
import "./Banner.css"



 function Banner() {
    const[mov,setmov]=useState([]);
    useEffect(()=>{
        async function fetchdata(){
            const requestb = await axios.get(request.fetchNetflixOriginals)
            setmov(requestb?.data.results[Math.floor(Math.random()*requestb.data.results.length)]);
            return requestb;

        }
        fetchdata()
    },[])
    console.log(mov);
    function trunc(str,n){
       return str?.length > n ? str.substr(0,n-1)+"  .....":str;
    }
  return (
    <>
        <div className='banner' style={{
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${mov?.backdrop_path}")`,
            backgroundSize:"cover",
            backgroundPosition:"center",
        }}>
           
            <div className='contents'>
                <h1 className='title'>
                    {mov.name||mov.original_name}
                </h1>
                <div className='buttons'>
                    <button className='b1'>play</button>
                    <button className='b2'>My List</button>
                </div>
                <div className='description'>
                    <h1 className='ban_des'>{trunc (mov.overview,150)}</h1>
                </div>
                
            </div>
            <div className='fadebutton'></div>
        </div>
        
    </>
  )
}
export default Banner;