import Navbar from './components/layout/Navbar'
import BatteryDetails from './components/battery-info/BatteryDetails'
import Sidebar from './components/layout/Sidebar'
import Wrapper from './components/all-batteries/Wrapper'
import { sortBatteries } from './utility/utilities'
import LoadingSpinner from './components/global/LoadingSpinner'
import Footer from './components/layout/Footer'

import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [data, setData] = useState(null)
  const [copy, setCopy] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [open, setOpen] = useState(false)

  //data fetching
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(
          'https://f2byongc84.execute-api.eu-central-1.amazonaws.com/webdev_test_fetch_batteries',
        );
        const json = await res.json();
        let temp = [...json]
        temp.map((item) => item.location === null && (item.location = 'N/A'))
        temp.map((item) => item.stateOfCharge === null && (item.stateOfCharge = 'N/A'))
        temp.map((item) => item.stateOfHealth === null && (item.stateOfHealth = 'N/A'))
        setData(json);
        setCopy(json);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [setData]);

  
  if (error) return 'Error!'
  if (loading) return <LoadingSpinner />


  const onSort = (filter) => {
    setData(sortBatteries(data, filter))
  }

  function handleChange(e) {
    setData(copy.filter((item) => item.id.includes(e.target.value.toUpperCase())))
  }

  return (
    <div className='body'>
      <Navbar onOpen={() => setOpen(!open)} />
      {open && <Sidebar data={data} onReset={() => setData(copy)} onSort={onSort} 
      handleChange={handleChange} onOpen={() => setOpen(!open)} />}
      <Routes>
        <Route path='/' element={<Wrapper data={data} onSort={onSort} onReset={() => setData(copy)} />} />
        <Route path='/:itemId' element={<BatteryDetails data={data} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
