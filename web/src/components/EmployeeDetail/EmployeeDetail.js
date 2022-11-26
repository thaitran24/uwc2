import React, { useState } from "react";
import Calendar from "react-calendar";
import UpcomingShift from "../UpcomingShift/UpcomingShift";
import "react-calendar/dist/Calendar.css";

export function EmployeeInfo({
  name,
  email,
  role,
  exp,
  dateOfBirth,
  workspace,
}) {
  return (
    <div className="employeeInfo">
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
      <p>Exp: {exp}</p>
      <p>Date of birth: {dateOfBirth}</p>
      <p>WorkSpace: {workspace}</p>
    </div>
  );
}

const EmployeeDetail = (probs) => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <EmployeeInfo
        name={probs.name}
        email={probs.email}
        role={probs.role}
        exp={probs.exp}
        dateOfBirth={probs.dateOfBirth}
        workspace={probs.workspace}
      />
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
      <div>
        <h3>Upcoming shift</h3>
        <UpcomingShift />
      </div>
    </div>
  );
};

export default EmployeeDetail;
