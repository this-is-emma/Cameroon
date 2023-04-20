import React from 'react'
import './About.css'

function About() {
  return (
    <article className="about" aria-labelledby='about-heading'>
      <section> 
        <h1 id="about-heading">About Cameroon</h1>
        <p>Also called "Africa in miniature" due to it diversity both in ethnicity and 
          geography, Cameroon is a sub-saharian country with a population of over 25 million.
          Located along the Atlantic Ocean, it shares its borders with the Central African Republic, 
          Chad, Equatorial Guinea, Gabon, and Nigeria.
        </p>
      </section>
    </article>
  )
}

export default About