
const Issuesbar = ({ recentIssues }) => {

  return (
    <div className="issue-bar">
      <h3>Issues ({ recentIssues?.length })</h3>
      <div className="issues-content">
        {recentIssues?.map((issue, index) => issue === 1 ? <div key={index}>deep discharge</div> : 
        issue === 2 ? <div key={index}>overheating</div> : issue === 3 ? <div key={index}>unknown anomaly</div> :
        issue === 4 && <div key={index}>missing data</div> ) }
      </div>
    </div>
  )
}

export default Issuesbar
