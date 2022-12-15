import DefaultGrid from "../../components/defaultGrid/DefaultGrid";
import EmployeeOverview from "../../components/employeeOverview/EmployeeOverview";
import MCPOverview from "../../components/mcpOverview/MCPOverview";
import VehicleOverview from "../../components/vehicleOverview/VehicleOverview";
import CollectorAssign from "../../components/assignFrame/CollectorAssign";
import JanitorAssign from "../../components/assignFrame/JanitorAssign";
import employees from "../../assets/employee.json";
import { Component } from "react"
import { useState } from "react";

export default function Assign(props) {
  const [employee, setEmployee] = useState(employees[0]);

  const changeId = (event, id) => {
    console.log(id);
    setEmployee(employees[id]);
  };


  return (
    <DefaultGrid
      componentsList={[
        <EmployeeOverview
          func={changeId}
        />,
        <MCPOverview />,
        <VehicleOverview />,
        employee.role === "Collector" ? (
          <CollectorAssign info={employee} />
        ) : (
          <JanitorAssign info={employee} />
        ),
      ]}
    />
  );


}
