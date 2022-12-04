import React from "react";
import "./EmployeeRow.css";
const EmployeeRow = (probs) => {
  return (
    <div
      className={`row_employee  ${probs.active ? "active" : ""}`}
      onClick={probs.changeActiveIndex}
    >
      <div className="row_employee__name">
        <img src={probs.img} alt="employee" />
        <h3>{probs.name}</h3>
      </div>
      <div
        className={`row_employee__status ${
          probs.status === "online" ? "online" : "offline"
        } `}
      >
        <h3>{probs.status}</h3>
      </div>

      <div className="row_employee__status">
        <h3>{probs.vehicle}</h3>
      </div>
      <div className="row_employee__status">
        <h3>{probs.vehicle_id}</h3>
      </div>
      <div className="row_employee__status">
        <h3>{probs.MCP}</h3>
      </div>
    </div>
  );
};

export default EmployeeRow;
