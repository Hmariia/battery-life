
export const sortBatteries = (data, filter) => { 
  const copy = [...data]
  if (filter === 0){
    return copy.sort((a, b) => a.id.localeCompare(b.id))
  } else if (filter === 1) {
    return copy.sort((a,b) => a.capacity - b.capacity)
  } else if (filter === 2) {
    return copy.sort((a, b) => a.location.localeCompare(b.location))
  } else if (filter === 3) {
    return copy.sort((a, b) => (a.stateOfCharge.toString()).localeCompare((b.stateOfCharge.toString()), 'en', { numeric: 'true' }))    
  } else if (filter === 4) {
    return copy.sort((a,b) => a.connectionStatusId - b.connectionStatusId)
  } else if (filter === 5) {
    copy.sort((a,b) => a.connectionStatusId - b.connectionStatusId)
    return copy.reverse()
  }
}


