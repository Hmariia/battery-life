import HealthIndicator from './HealthIndicator'
import CapacityBar from '../global/CapacityBar'
import BatteryIcon from '../global/BatteryIcon'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Issuesbar from './IssuesBar'


const BatteryDetails = ({ data }) => {
  const params = useParams()
  const [battery, setBattery] = useState([])

  useEffect(() => {
    data.map ((item) => item.id === params.itemId && setBattery(item))
  })

  return (
    <div className='details-container'>
      <h2 id='details-battery-id'>{battery.id}</h2>
      <div className='wrapper'>
        <div className='issue-bar'>
          <h4>Issues ({ battery.recentIssues?.length })</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
              <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
            </svg>
          { battery.recentIssues?.length === 0 ? <h5>Issues not found</h5>
          : <h5><Issuesbar recentIssues={battery.recentIssues} /></h5>}
        </div>
        <div>
          <h4>Location</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
              <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
            </svg>
          <h5>{battery.location}</h5>
        </div>
        <div>
          <h4>Voltage</h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
          </svg>
          <h5>{battery.voltage}</h5>
        </div>
        <div>
          <h4>Last connection time</h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
          </svg>
          <h5>{battery.lastConnectionTime}</h5>
        </div>
        <div>
          <h4>State of charge</h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
          </svg>
          <div><BatteryIcon connectionStatus={battery.connectionStatusId} stateOfCharge={battery.stateOfCharge} /></div>
        </div>
        <div>
          <h4>Capacity</h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
          </svg>
          <div><CapacityBar capacity={battery.capacity} /></div>
        </div>
        <div>
          <h4>State of health</h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
          </svg>
          <div><HealthIndicator health={battery.stateOfHealth} /></div>
        </div>
        <div>
          <h4>Connection status</h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
          </svg>
          {battery.connectionStatus === 1 ? <h5>online</h5> :
          battery.connectionStatus === 2 ? <h5>pending</h5> :
          <h5>offline</h5>}
        </div>
      </div>
    </div>
  )
}

export default BatteryDetails