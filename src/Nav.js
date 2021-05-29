import React, { useState, useEffect } from 'react'
import "./Nav.css";
function Nav() {
    const[state,setState] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 80){
                setState(true);
            }
            else{
                setState(false);
            }
        });

        return ()=>{
            window.removeEventListener("scroll", null);
        }
        
     
        
    },[]);

    

    return (
        <div>
            <nav className={`navbar ${state && "set-bg"}`}> 
                <img className="logo" src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=8"></img>
                <img className="side-logo" src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"></img>
            </nav>
        </div>
    )
}

export default Nav
