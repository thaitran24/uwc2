import React, { useState } from "react";
import Calendar from "react-calendar";
import Button from "react-bootstrap/Button";
import EmployeeRow from "../components/EmployeeRow/EmployeeRow";
import { EmployeeInfo } from "../components/EmployeeDetail/EmployeeDetail";
import "./DetailView.css";
import "./SetMCP.css";

const mcpList = [
  { mcp_id: "HCM-Q01-001", address: "Lorem Ipsum", status: 100 },
  { mcp_id: "HCM-Q01-001", address: "Lorem Ipsum", status: 45 },
  { mcp_id: "HCM-Q01-001", address: "Lorem Ipsum", status: 40 },
  { mcp_id: "HCM-Q01-001", address: "Lorem Ipsum", status: 80 },
  { mcp_id: "HCM-Q01-001", address: "Lorem Ipsum", status: 25 },
  { mcp_id: "HCM-Q01-001", address: "Lorem Ipsum", status: 40 },
  { mcp_id: "HCM-Q01-001", address: "Lorem Ipsum", status: 34 },
  { mcp_id: "HCM-Q01-001", address: "Lorem Ipsum", status: 75 },
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

function MCPRow({ index, mcp_id, address, status }) {
  let statusColor = "red";
  if (status > 50 && status <= 75) {
    statusColor = "yellow";
  } else if (status <= 50) {
    statusColor = "green";
  }
  const statusClass = `mcp_table__content mcp_table__content--${statusColor}`;
  return (
    <tr className={statusClass}>
      <td>{index}</td>
      <td>{mcp_id}</td>
      <td>{address}</td>
      <td>{status + "%"}</td>
    </tr>
  );
}

function MCPTable() {
  return (
    <div className="mcp_table">
      <table>
        <thead>
          <tr className="mcp_table__header">
            <th>No.</th>
            <th>MCP ID</th>
            <th>Address</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mcpList.map((mcp, index) => (
            <MCPRow
              key={index}
              index={index + 1}
              mcp_id={mcp.mcp_id}
              address={mcp.address}
              status={mcp.status}
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
            Overloaded MCPs/Areas
          </span>
          <Button
            style={{
              float: "right",
            }}
          >
            Confirm
          </Button>
          <MCPTable />
        </div>
      </div>
    </div>
  );
}
