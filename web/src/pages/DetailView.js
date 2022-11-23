import React, { useEffect, useRef, useState } from 'react'
import EmployeeRow from '../components/EmployeeRow/EmployeeRow'
import EmployeeDetail from '../components/EmployeeDetail/EmployeeDetail';
import './DetailView.css'
const employees = [
  {
    id: 1,
    img: 'https://picsum.photos/200',
    name: 'John Doe',
    email: 'johnDon@123.con',
    status: 'online',
    vehicle: 'Car',
    vehicle_id: 'sdf',
    MCP: 'MCP 1',
    active: true
  },
  {
    id: 2,
    img: 'https://picsum.photos/200',
    name: 'Bob Doe',
    status: 'offline',
    vehicle: 'Car',
    vehicle_id: 'sdf',
    MCP: 'MCP 1',
    active: false
  },
  {
    id: 6,
    img: 'https://picsum.photos/200',
    name: 'john Doe',
    status: 'offline',
    vehicle: 'Car',
    vehicle_id: 'sdf',
    MCP: 'MCP 1',
    active: false
  },
  {
    id: 3,
    img: 'https://picsum.photos/200',
    name: 'Robert Doe',
    status: 'offline',
    vehicle: 'Car',
    vehicle_id: 'sdf',
    MCP: 'MCP 1',
    active: false
  },
];
const Blank = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // change active index when click on row
  const changeActiveIndex = (index) => {
    console.log(index);
    setActiveIndex(index);
  };
  return (
    <div className='container'>
      <div className='employeeRow'>
     
            <div className='row_employee'>
              <div className='row_employee__name'>
                  <h3>Name</h3>
              </div>
              <div className={`row_employee__status`}>
                  <h3>status</h3>
              </div>
              <div className='row_employee__status'>
                  <h3>vehicle</h3>
              </div>
              <div className='row_employee__status'>
                  <h3> vehicle_id</h3>
              </div>
              <div className='row_employee__status'>
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
      <div className='employeeDetail'>
        <EmployeeDetail
          name={employees[activeIndex].name}
          email={employees[activeIndex].email}
        />
      </div>
    </div>
  )
}

export default Blank