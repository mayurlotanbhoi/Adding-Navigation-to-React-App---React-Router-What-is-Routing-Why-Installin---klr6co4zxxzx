import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import {Home} from "./Home"
import {About} from "./About"
import {PageNotFound} from './PageNotFound';

export const NavBar = () => {
        return (
                <>
                
               <nav>
                <ul>
                        <li><NavLink to="/">home</NavLink></li>
                        <li><NavLink to="/about">about</NavLink></li>
                </ul>
               </nav>

               <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="*" element={<PageNotFound/>}></Route>

               </Routes>
               </>
        );
}

  

