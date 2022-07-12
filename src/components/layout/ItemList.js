import { Link } from "react-router-dom"

const ItemList = ({ data, filter, onOpen }) => { 
  return (
    <div className="id-list">
      {data.map((item, index) => 
      <Link onClick={onOpen} to={`/${item.id}`} id='battery-id' key={index}>{item.id}</Link>)}
    </div>
  )
}

export default ItemList