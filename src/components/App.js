import React from "react";
import '../styles/App.css';
import { BrowserRouter,useLocation } from "react-router-dom";
import {NavBar} from "./NavBar";
import {LocationDisplay} from "./LocationDisplay";


  function  App() {


        return(
            
            <div id="main">
               {/* Do not remove the main div */}
            
               <BrowserRouter>
               <LocationDisplay/>
               <NavBar/>
            </BrowserRouter>
            </div>
            
        )
    
}


export default App;
