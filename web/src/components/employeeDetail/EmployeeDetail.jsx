import React from "react";
import Avatar from "@mui/material/Avatar";

const EmployeeDetail = (props) => {
  return (
    <div>
      <Avatar
        sx={{
          position: "relative",
          width: 174,
          height: 170,
          top: 20,
          left: 20,
        }}
        alt="Employee"
        src={props.employee.img}
      />
      <div>
        <div className="info">
          <h3>{props.employee.name}</h3>
          <p>Role: {props.employee.role}</p>
          <p>Exp: {props.employee.exp} Years</p>
          <p>Date of birth: {props.employee.dateOfBirth}</p>
          <p>Workplace: {props.employee.workplace}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
