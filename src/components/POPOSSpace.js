import './POPOSSpace.css';
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
  const { name, image, address, id } = props
  return (
    <div className="space">
      <Link to={`/details/${id}`}>
      <h1>{props.name}</h1>
      </Link>
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}/images1/${props.image}`} 
        width="400" 
        height="300" 
        alt="Hello" />
      </Link>
      <div>{props.address}</div>
      <p>{props.hours}</p>
    </div>
  )
}

export default POPOSSpace