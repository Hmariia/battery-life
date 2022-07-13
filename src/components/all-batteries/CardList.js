import Card from "./Card"

const CardList = ({ data, pages }) => {
  return (
    <div id="card-list" className="card-container">
        {data.slice(pages.from, pages.to).map((item, index) => <Card key={index} item={item}/>)}
    </div>
  )
}

export default CardList