import React from 'react'

const Team = () => {
  return (
    <>
    <div className="team">
  <h2>Team</h2>
  <p>Our talents</p>

  <div className="team-grid">
    {Array(8).fill().map((_, i) => (
      <div className="card" key={i}>
        <div className="avatar">
        </div>
        <p>Sam</p>
        <span>CEO</span>
      </div>
    ))}
  </div>
</div>
      
    </>
  )
}

export default Team
