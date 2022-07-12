
const CapacityBar = ({ capacity }) => {
    const styles = {
      capacityFill: {
          width: (capacity !== 'N/A') ? `${capacity}%` : `${0}%`,
          backgroundColor: (capacity <= 10) ? "red" : (capacity > 10 && capacity <= 20) ? "gold" : 
          (capacity > 20) && "green"
        }
      }
  return (
    <div className="capacityBar-box">
      <div className="capacityBar-label">
        <h5>capacity</h5>
        {capacity !== 'N/A' ? <h5>{capacity}%</h5> : <h5>N/A</h5>}
      </div>
      <div className="capacityBar">
        <div style={styles.capacityFill} className="capacityFill"></div>
      </div>
    </div>      
  )
}

export default CapacityBar