import React, { useState } from "react";
import EmployeeRow from "../components/EmployeeRow/EmployeeRow";
import "./DetailView.css";

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

function Overview() {
  // display 5 rows by default
  const [data, setData] = useState(employees.slice(0, 5));
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    if (page < 1) {
      page = 1;
    }
    setPage(page);
    setData(employees.slice((page - 1) * 5, page * 5));
  };

  return (
    <div className="container">
      <div className="employeeRow">
        <div className="row_employee">
          <div className="row_employee__name">
            <h3>Name</h3>
          </div>
          <div className={`row_employee__status`}>
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
          {data.map((employee, index) => (
            <EmployeeRow
              key={index}
              img={employee.img}
              name={employee.name}
              status={employee.status}
              vehicle={employee.vehicle}
              vehicle_id={employee.vehicle_id}
              MCP={employee.MCP}
            />
          ))}
        </div>
        {/* change page */}
        <div className="pagination">
          <button
            onClick={() => {
              handlePageChange(page - 1);
            }}
          >
            LEFT
          </button>
          <button
            onClick={() => {
              handlePageChange(page + 1);
            }}
          >
            RIGHT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Overview;
