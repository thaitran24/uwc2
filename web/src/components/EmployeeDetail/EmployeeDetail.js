import React from 'react'

const EmployeeDetail = (probs) => {
  return (
    <div>
        <h1>{probs.name}</h1>
        <p>{probs.email}</p>

        <div>Calender</div>
    </div>
  )
}

export default EmployeeDetail