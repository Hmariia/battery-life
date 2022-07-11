import ItemList from "./ItemList"
import { useState } from 'react'

const Sidebar = ({ data, onSort, onReset, handleChange }) => {
    const [filter, setFilter] = useState(0)
  return (
    <div className="sidebar">
        <input type="id" name="batteryId" placeholder="Search" onChange={handleChange}></input>
        <div className="sortbox-buttons">
            <button className="reset-button" onClick={() => onReset()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                </svg>
            </button>
            <button className="sort-button" onClick={() => onSort(filter)}>abc...</button>
        </div>
        <div className="dropdown">
            <button className="dropbtn">Display by ...</button>
            <div className="dropdown-content">
                <button onClick={() => setFilter(0)}>Battery ID</button>
                <button onClick={() => setFilter(1)}>Capacity</button>
                <button onClick={() => setFilter(2)}>Location</button>
                <button onClick={() => setFilter(3)}>StateOfCharge</button>
            </div>
        </div>
        <ItemList data={data} filter={filter} />
    </div>
  )
}

export default Sidebar