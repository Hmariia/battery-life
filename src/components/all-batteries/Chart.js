import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
  const dataSet = []
  const sortedDates = []
  const sortedStateOfCharge = []
  
  //push to const sortedDates all the stateOfCharge values without null values
  data.map((item) => item.stateOfCharge !== 'N/A' && sortedStateOfCharge.push(item.stateOfCharge))

  /*push to const sortedStateOfCharge all the lastConnectionTime values without null values
  lastConnectionTime does not have null values but has to be compared only in pair with stateOfCharge*/
  data.map((item) => item.stateOfCharge !== 'N/A' && sortedDates.push(item.lastConnectionTime))

  //sort arrays from smallest to biggest values
  sortedDates.sort((a, b) => a?.localeCompare(b, 'en', { numeric: 'true' }))
  sortedStateOfCharge.sort(function(a, b) { return a - b })
  
  //rederse array to shop from highest % to smallest
  sortedStateOfCharge.reverse()

  //push data to one array
  sortedDates.map((item, index) => dataSet.push({t: sortedDates[index], y: sortedStateOfCharge[index]}))

  const details = {
    labels: sortedDates,
    datasets: [
      {
        label: "State-of-Charge (%)/ timestamp (h:m:s)",
        data: dataSet,
        fill: true,
        backgroundColor: "rgba(173,216,230,0.2)",
        borderColor: "rgba(173,216,230,1)"
      }
    ]
  }

  const options = {
    scales: {
      xAxes: [{
        type: 'time',
      }]
    },
    responsive: true
  }
 
  
  return (
    <div className='chart-container'>
      <div className='chart'>
      <Line data={details} options={options} />
      </div>
    </div>
  )
}
export default Chart