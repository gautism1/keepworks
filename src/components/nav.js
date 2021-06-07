import React from "react";
import '../style/home.css';

function Nav()
{   
    function changeThemeToDarkmode()
    {
      document.body.classList.toggle('dark-theme');  
    }
   
    return (
        <div className="header">       
           <div className="darkMode" >
               <button className="darkMode  dark-theme || light-theme "  onClick={changeThemeToDarkmode}>Change Theme</button>
            </div>
          
        </div>
    )
}

export  default  Nav;