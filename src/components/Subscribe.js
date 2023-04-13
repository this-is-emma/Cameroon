import React from 'react';
import './Subscribe.css';

function Subscribe() {
  return (
    <div className='subscribe'>
        <h1>Register for our newsletter!</h1>
        <form className='subscribe-form'>
            <label htmlFor="username">Username</label>
            <input type="text" className="username"/>
            <label htmlFor='email'>Email</label>
            <input type="email" className="email"/>
            <label htmlFor='checkbox'>Would you like to opt in to receive our newsletter ? (To opt in, check the box below)</label>
            <input type="checkbox" className="checkbox"/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default Subscribe