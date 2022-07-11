import Navbar from './components/Navbar'
import BatteryDetails from './components/BatteryDetails'
import Sidebar from './components/Sidebar'
import Wrapper from './components/Wrapper'
import { sortBatteries } from './utility/utilities'
import LoadingSpinner from './components/LoadingSpinner'

import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [data, setData] = useState(null)
  const [copy, setCopy] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [open, setOpen] = useState(false)

   //data fetching
  useEffect (() => {
    const fetchData = () => {
      fetch('https://f2byongc84.execute-api.eu-central-1.amazonaws.com/webdev_test_fetch_batteries', {
      method: 'GET',
      })
      .then (res => {
        if (res.ok) {
          return res.json()
        }
        throw res
      })
      .then (data => {
        let copy = [...data]
        copy.map((item) => item.location === null && (item.location = 'N/A'))
        copy.map((item) => item.stateOfCharge === null && (item.stateOfCharge = 'N/A'))
        copy.map((item) => item.stateOfHealth === null && (item.stateOfHealth = 'N/A'))
        setData(copy)
        setCopy(data)
        setLoading(false)
      })
      .catch(error => (setError(error)))
    }
    fetchData()
  }, [])
  if (loading) return <LoadingSpinner />
  if (error) return 'Error!'
  

  const onSort = (filter) => {
    setData(sortBatteries(data, filter))
  }

  const onReset = () => {
    setData(copy)
  }

  function handleChange(e) {
    const copy = [...data]
    setData(copy.filter((item) => item.id.includes(e.target.value.toUpperCase())))
  }

  const onOpen = () => {
    if (open === true) {
      setOpen(false)
    } else{
      setOpen(true)
    }
  }

  return (
    <div className='body'>
      <Navbar onOpen={onOpen} />
      {open && <Sidebar data={data} onReset={onReset} onSort={onSort} handleChange={handleChange}/>} 
      <Routes>
        <Route path='/' element={<Wrapper data={data} onSort={onSort} onReset={onReset} />} />
        <Route path='/:itemId' element={<BatteryDetails data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
