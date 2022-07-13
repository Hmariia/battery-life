import CardList from "./CardList"
import Chart from "./Chart"
import FilterBar from '../layout/FilterBar'
import PaginationBar from "../layout/PaginationBar"
import { useState } from "react"

const Wrapper = ({ data, onSort, onReset }) => {
  const [pages, setPages] = useState({from: 0, to: 20})

  const updatePages = (page) => {
    if (page === 1) setPages({from: 0, to: 20})
    else if(page === 2) setPages({from: 20, to: 40}) 
    else if(page === 3) setPages({from: 40, to: 60}) 
    else if(page === 4) setPages({from: 60, to: 80})
    else if(page === 5) setPages({from: 80, to: 100})
    else if(page === 6) setPages({from: 100, to: 120})
    else if(page === 7) setPages({from: 120, to: 140})
    else if(page === 8) setPages({from: 140, to: 160})
    else if(page === 9) setPages({from: 160, to: 180})
    else if(page === 10) setPages({from: 180, to: 200})
  }

  return (
    <div>
      <Chart data={data} />
      <FilterBar onSort={onSort} onReset={onReset} />
      <CardList data={data} pages={pages} />
      <PaginationBar updatePages={updatePages} />
    </div>
  )
}

export default Wrapper