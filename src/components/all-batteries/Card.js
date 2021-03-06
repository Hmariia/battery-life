import CapacityBar from '../global/CapacityBar'
import BatteryIcon from '../global/BatteryIcon'
import { Link } from "react-router-dom"

const Card = ({ item }) => {
  return (
    <Link to={`/${item.id}`} className='card'>
      <div className='card-top'>
        <BatteryIcon connectionStatus={item.connectionStatusId} stateOfCharge={item.stateOfCharge} />
        <div>
          <h3 id='battery-id-title'>{item.id}</h3>
          <h5>{item.location}</h5>
        </div>
      </div>
      <CapacityBar capacity={item.capacity} />
    </Link>
  )
}

export default Card