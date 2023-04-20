import './POPOSSpace.css';
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
  const { name, image, address, id } = props
  return (
    <section className="space" aria-labelledby={`space-name-${id}`}>
      <Link to={`/details/${id}`}>
      <h1 id={`space-name-${id}`}>{props.name}</h1>
      </Link>
      <Link to={`/details/${id}`}>
        <figure>
          <img src={`${process.env.PUBLIC_URL}/images1/${props.image}`}
            width="400" 
            height="300" 
            alt={`Image of ${name}`}
          />
        </figure> 
      </Link>
      <address>{props.address}</address>
      <p>{props.hours}</p>
    </section>
  )
}

export default POPOSSpace