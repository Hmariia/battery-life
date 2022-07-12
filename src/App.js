import Navbar from './components/layout/Navbar'
import BatteryDetails from './components/battery-info/BatteryDetails'
import Sidebar from './components/layout/Sidebar'
import Wrapper from './components/all-batteries/Wrapper'
import { sortBatteries } from './utility/utilities'
import LoadingSpinner from './components/global/LoadingSpinner'

import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [data, setData] = useState(null)
  const [copy, setCopy] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false)

  //data fetching
  useEffect(() => {
    const fetchData = () => {
      fetch('https://f2byongc84.execute-api.eu-central-1.amazonaws.com/webdev_test_fetch_batteries', {
        method: 'GET',
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw error
        .then(
          setError(res.message),
          setLoading(false)
        )
      })
      .then(data => {
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

  function handleChange(e) {
    setData(copy.filter((item) => item.id.includes(e.target.value.toUpperCase())))
  }

  if (loading) return <LoadingSpinner />
  else if (error) return 'Error!'
  return (
    <div className='body'>
      <Navbar onOpen={() => setOpen(!open)} />
      {open && <Sidebar data={data} onReset={() => setData(copy)} onSort={onSort} 
      handleChange={handleChange} onOpen={() => setOpen(!open)} />}
      <Routes>
        <Route path='/' element={<Wrapper data={data} onSort={onSort} onReset={() => setData(copy)} />} />
        <Route path='/:itemId' element={<BatteryDetails data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
