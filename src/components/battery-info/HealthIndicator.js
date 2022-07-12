
const HealthIndicator = ({ health }) => {

  const styles = {
    healthcircle: {
      borderColor: (health <= 65 && health !== null ) ? "red" : 
      (health > 65 && health < 75) ? "orange" : 
      (health > 74 && health < 85) ? "gold" :
      (health > 84) && "green"
    }
  }

  return (
    <div className="health-circle-container">
      <div style={styles.healthcircle} className="healthcircle"></div>
      {health === 'N/A' ? <h4>N/A</h4> : <h4>{health} %</h4>}
    </div>
  )
}

export default HealthIndicator