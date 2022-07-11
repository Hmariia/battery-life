import { Link } from "react-router-dom"

const ItemList = ({ data, filter }) => { 
  return (
    <div className="id-list">
      {data.map((item, index) => 
      (filter === 1 ? <Link to={`/${item.id}`} key={index}>{item.capacity}</Link> :
      filter === 2 ? <Link to={`/${item.id}`} key={index}>{item.location}</Link> :
      filter === 3 ?<Link to={`/${item.id}`} key={index}>{item.stateOfCharge}</Link> :
      <Link to={`/${item.id}`} key={index}>{item.id}</Link>))
      }
    </div>
  )
}

export default ItemList