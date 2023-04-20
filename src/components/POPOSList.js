import POPOSSpace from "./POPOSSpace";
import data from '../cameroon-data.json'
import './POPOSList.css';

function POPOSList() {

    const spaces = data.map(( { title, address, images, hours }, i) => {
        return (
          <POPOSSpace
            id={i}
            key={title}
            name={title} 
            address={address}
            image={images[0]}
            hours={hours}
          />
        )
      })
  
    return (
      <article className="POPOSList" aria-label="List of spaces">
        { spaces }
      </article>
    )
  }
  
export default POPOSList