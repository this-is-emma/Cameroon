// src/Title.js
import React from "react";
import { NavLink } from 'react-router-dom';
import './Title.css';

function Title() {
    return (
        <div className="Title">
            <header>
                <h1>DISCOVER CAMEROON</h1> 
                <div className="Title-Subtitle">
                    <h3>The jewel in the heart of Africa</h3>
                </div>
                <div>
                    <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/about">About</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/subscribe">Subscribe</NavLink>
                </div>
            </header>
        </div>
    )
  }
  
  export default Title
