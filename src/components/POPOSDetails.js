// src/POPOSDetails.js

import React from 'react';
import { useParams } from 'react-router';
import data from '../cameroon-data.json';
import './POPOSDetails.css';

function POPOSDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, hours, features, geo } = data[id]

  return (
    <section className='POPOSDetail-container' aria-label="space details">
        <div>
          <img src={`${process.env.PUBLIC_URL}images1/${images[0]}`} alt={title} />
        </div>
        <h1>{ title }</h1>
        <p>{ desc }</p>
        <p>{ hours }</p>
        <p>{ features }</p>
        <p>{ geo.lat } { geo.lon }</p>
    </section>
  )
}

export default POPOSDetails