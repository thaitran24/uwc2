import React, { useState } from 'react'
import Calendar from 'react-calendar'
import UpcomingShift from '../UpcomingShift/UpcomingShift';
import 'react-calendar/dist/Calendar.css';

const EmployeeDetail = (probs) => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className='employeeInfo'>
        <h3>{probs.name}</h3>
        <p>Email: {probs.email}</p>
        <p>Role: {probs.role}</p>
        <p>Exp: {probs.exp}</p>
        <p>Date of birth: {probs.dateOfBirth}</p>
        <p>WorkSpace: {probs.workspace}</p>
      </div>
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
      <div>
        <h3>Upcoming shift</h3>
        <UpcomingShift />
      </div>
    </div>
  )
}

export default EmployeeDetail