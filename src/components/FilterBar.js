import React from 'react'

const FilterBar = ({ onSort, onReset }) => {
  return (
    <div className='filterBar'>
        <button onClick={() => onSort(0)}>battery-id</button>
        <button onClick={() => onSort(2)}>location</button>
        <button onClick={() => onSort(1)}>capacity</button>
        <div className="connection-dropdown">
          <button>connection status id</button>
          <div className="connection-dropdown-content">
            <button onClick={() => onSort(4)}>online</button>
            <button onClick={() => onSort(5)}>pending/offline</button>
          </div>
        </div>
        <button onClick={() => onSort(3)}>state of charge</button>
        <button onClick={() => onReset()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
          </svg>
        </button>
    </div>
  )
}

export default FilterBar