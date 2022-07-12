import React from 'react'

const BatteryIcon = ({connectionStatus, stateOfCharge}) => {
  const styles = {
    item: {
      display: (connectionStatus !== 1) && "none"
    },
    body: {
      background: 
      (connectionStatus !== 1) && 
      ((stateOfCharge === null ) ? "#F5F5F5" :
      (stateOfCharge <= 10 ) ? `linear-gradient(to right, red ${stateOfCharge}%, #F5F5F5 ${stateOfCharge}% 100%` :
      (stateOfCharge <= 20 && stateOfCharge > 10 ) ? `linear-gradient(to right, gold ${stateOfCharge}%, #F5F5F5 ${stateOfCharge}% 100%` :
      (stateOfCharge > 20 ) && `linear-gradient(to right, green ${stateOfCharge}%, #F5F5F5 ${stateOfCharge}% 100%`)
    }
  }

  return (
    <div className='nav-battery-container'>
      <div className='nav-battery'>
        <div style={styles.body} className='nav-battery-body'>
          <div style={styles.item}></div>
          <div style={styles.item}></div>
          <div style={styles.item}></div>
          <div style={styles.item}></div>
          <div style={styles.item}></div>
        </div>
        <div className='nav-battery-top'></div>
      </div>
      {stateOfCharge != 'N/A' ? <h4>{stateOfCharge}%</h4> : <h4>N/A</h4>}
    </div>
  )
}

export default BatteryIcon

