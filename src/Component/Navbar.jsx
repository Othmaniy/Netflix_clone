import React, {useState,useEffect} from 'react'
import "./Navbar.css"

function Navbar() {
    const[show,handleshow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleshow(true);
            }
            else{
                handleshow(false)
            }

        });
        return () => {
            window.removeEventListener("scroll", () => {
              if (window.scrollY > 100 ) {
                handleshow(true);
              } else {
                handleshow(false);
              }
            });
          };
    },[]);
  return (
    <>
    <div className={`nav ${show ? 'nav_black':""}`}>
        {/* <h1>abebe beso bela</h1> */}
        <img 
        className='logo'
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt='netflixlogo' />
        <img 
        className='avatar'
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt='netflixlogo' />

    </div>
    
    
    </>
  )
}
export default  Navbar;