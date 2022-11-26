import React, { useState } from "react";
import Calendar from "react-calendar";
import Button from "react-bootstrap/Button";
import EmployeeRow from "../components/EmployeeRow/EmployeeRow";
import { EmployeeInfo } from "../components/EmployeeDetail/EmployeeDetail";
import "./DetailView.css";
import "./SetVehicle.css";

const vehicleList = [
  { vehicleName: "ABCDEF", vehicleId: 1, consumptionLv: 3 },
  { vehicleName: "ABCDEF", vehicleId: 2, consumptionLv: 2 },
  { vehicleName: "ABCDEF", vehicleId: 3, consumptionLv: 1 },
  { vehicleName: "ABCDEF", vehicleId: 4, consumptionLv: 4 },
  { vehicleName: "ABCDEF", vehicleId: 5, consumptionLv: 5 },
];

const employees = [
  {
    id: 1,
    img: "https://picsum.photos/200",
    name: "John Doe",
    email: "johnDon@123.con",
    status: "online",
    vehicle: "Car",
    vehicle_id: "sdf",
    MCP: "MCP 1",
    active: true,
  },
  {
    id: 2,
    img: "https://picsum.photos/200",
    name: "Bob Doe",
    status: "offline",
    vehicle: "Car",
    vehicle_id: "sdf",
    MCP: "MCP 1",
    active: false,
  },
  {
    id: 6,
    img: "https://picsum.photos/200",
    name: "john Doe",
    status: "offline",
    vehicle: "Car",
    vehicle_id: "sdf",
    MCP: "MCP 1",
    active: false,
  },
  {
    id: 3,
    img: "https://picsum.photos/200",
    name: "Robert Doe",
    status: "offline",
    vehicle: "Car",
    vehicle_id: "sdf",
    MCP: "MCP 1",
    active: false,
  },
];

function EmployeeTable({ activeIndex, changeActiveIndex }) {
  return (
    <div className="employeeRow">
      <div className="row_employee">
        <div className="row_employee__name">
          <h3>Name</h3>
        </div>
        <div className="row_employee__status">
          <h3>status</h3>
        </div>
        <div className="row_employee__status">
          <h3>vehicle</h3>
        </div>
        <div className="row_employee__status">
          <h3> vehicle_id</h3>
        </div>
        <div className="row_employee__status">
          <h3> MCP</h3>
        </div>
      </div>
      <div>
        {employees.map((employee, index) => (
          <EmployeeRow
            key={index}
            img={employee.img}
            name={employee.name}
            status={employee.status}
            vehicle={employee.vehicle}
            vehicle_id={employee.vehicle_id}
            MCP={employee.MCP}
            active={activeIndex === index}
            changeActiveIndex={() => changeActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

function VehicleRow({ vehicleName, vehicleId, consumptionLv }) {
  return (
    <tr className="vehicle_table__content">
      <td>{vehicleName}</td>
      <td>{vehicleId}</td>
      <td>{consumptionLv}</td>
    </tr>
  );
}

function VehicleTable() {
  return (
    <div className="vehicle_table">
      <table>
        <colgroup>
          <col style={{ width: "50%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "50%" }} />
        </colgroup>
        <thead>
          <tr className="vehicle_table__header">
            <th>Name</th>
            <th>VehicleID</th>
            <th>Consumption Level</th>
          </tr>
        </thead>
        <tbody>
          {vehicleList.map((vehicle, index) => (
            <VehicleRow
              key={index}
              vehicleName={vehicle.vehicleName}
              vehicleId={vehicle.vehicleId}
              consumptionLv={vehicle.consumptionLv}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SetVehicle() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentDay, setCurrentDay] = useState(new Date());
  // change active index when click on row
  const changeActiveIndex = (index) => {
    console.log(index);
    setActiveIndex(index);
  };
  return (
    <div className="container">
      <EmployeeTable
        activeIndex={activeIndex}
        changeActiveIndex={changeActiveIndex}
      />
      <div className="left_column">
        <EmployeeInfo
          name={employees[activeIndex].name}
          email={employees[activeIndex].email}
        />
        <div>
          <Calendar onChange={setCurrentDay} value={currentDay} />
        </div>
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <span
            style={{
              textAlign: "center",
              verticalAlign: "middle",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Available Vehicle
          </span>
          <Button
            style={{
              float: "right",
            }}
          >
            Assign
          </Button>
          <VehicleTable />
        </div>
      </div>
    </div>
  );
}
