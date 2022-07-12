
const IssuesBar = ({ recentIssues }) => {

  return (
    <div className="issues-content">
      {recentIssues?.map((issue, index) => issue === 1 ? <div key={index}>Deep discharge</div> : 
      issue === 2 ? <div key={index}>Overheating</div> : issue === 3 ? <div key={index}>Unknown anomaly</div> :
      issue === 4 && <div key={index}>Missing data</div> ) }
    </div>
  )
}

export default IssuesBar