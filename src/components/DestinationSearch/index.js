// Write your code here
import './index.css'

const DestinationSearch = props => {
  const {details} = props
  const {name, imgUrl} = details
  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationSearch
