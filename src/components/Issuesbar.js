
const Issuesbar = ({ recentIssues }) => {

  return (
    <div className="issue-bar">
      <h3>Issues ({ recentIssues?.length })</h3>
      <div className="issues-content">
        {recentIssues?.map((issue, index) => issue === 1 ? <div key={index}>deep discharge</div> : 
        issue === 2 ? <div>overheating</div> : issue === 3 ? <div>unknown anomaly</div> :
        issue === 4 && <div>missing data</div> ) }
      </div>
    </div>
  )
}

export default Issuesbar