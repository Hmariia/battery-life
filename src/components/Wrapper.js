import CardList from "./CardList"
import Chart from "./Chart"
import FilterBar from "./FilterBar"

const Wrapper = ({ data, onSort, onReset }) => {
  return (
    <div>
      <Chart data={data} />
      <FilterBar onSort={onSort} onReset={onReset} />
      <CardList data={data}/>
    </div>
  )
}

export default Wrapper