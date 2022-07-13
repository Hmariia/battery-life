import { useState } from "react"

const PaginationBar = ({ updatePages }) => {
  const pageNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [index, setIndex] = useState([0, 5])

  return (
    <div className="pagination-box">
      {index[0] > 0 && <button id="previous" onClick={() => setIndex([index[0]-4, index[1]-4])}>
      </button>}

      {pageNumber.map((page) => page > index[0] && page < index[1] && 
      <button id={page} key={page} onClick={() => updatePages(page)}>{page}</button>)}
      
      {index[0] < 8 && <button id="next" onClick={() => setIndex([index[0]+4, index[1]+4])}>
      </button>}
    </div>
  )
}

export default PaginationBar