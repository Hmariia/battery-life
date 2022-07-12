import Card from "./Card"

const CardList = ({ data }) => {
  return (
    <div id="card-list" className="card-container">
        {data.map((item, index) => <Card key={index} item={item}/>)}
    </div>
  )
}

export default CardList