// src/Title.js
import React from "react";
import { NavLink } from 'react-router-dom';
import './Title.css';

function Title() {
    return (
        <header className="Title" aria-labelledby="title-heading">
            <div>
                <h1 id="title-heading">DISCOVER CAMEROON</h1> 
                <h3 className="Title-Subtitle">The jewel in the heart of Africa</h3>
                <nav>
                    <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/about">About</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/subscribe">Subscribe</NavLink>
                </nav>
            </div>
        </header>
    )
  }
  
  export default Title;
