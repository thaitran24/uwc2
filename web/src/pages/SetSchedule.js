import React, { useState } from "react";
import Calendar from "react-calendar";
import EmployeeRow from "../components/EmployeeRow/EmployeeRow";
import "./DetailView.css";
import "./SetSchedule.css";

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
        <div>
          <Calendar
            onClickDay={check}
            onChange={setCurrentDay}
            value={currentDay}
          />
        </div>

        {tasks.map((e) => (
          <div id={e.id} class="task">
            <h2 class="h2-task">{e.day}</h2>
            {/* role */}
            <div class="role-task black-color">
              <h7 id="jan" onClick={clickJan}>
                Janitor
              </h7>
            </div>
            <div class="role-task">
              <h7 id="col" onClick={clickCol}>
                Collector
              </h7>
            </div>
            {/* collectors box */}
            <div>
              {e.collectors.map((a) => (
                <div class="collectors-box">
                  <div class="collectors-place">
                    <h6>{a.place}</h6>
                  </div>
                  <div class="collectors-emp">
                    <p>Nhân viên: </p>
                    <img src={a.avatar} alt={a.name} title={a.name} />
                    <p class="img-title">{a.name}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* janitors box */}
            <div>
              {e.janitors.map((a) => (
                <div class="janitors-box">
                  <div class="janitors-place">
                    <h6>{a.place}</h6>
                  </div>
                  <div class="janitors-emp">
                    <p>Nhân viên: </p>
                    <div>
                      {a.employees.map((b) => (
                        <div class="inline">
                          <img src={b.avatar} alt={b.name} title={b.name} />
                          <p class="img-title">{b.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
const tasks = [
  {
    id: "task27",
    day: "27/11/2022",
    collectors: [
      {
        name: "Anh Khoa",
        avatar: "https://picsum.photos/200",
        place: "Gom rác tuyến Lý Thường Kiệt - KTX ĐHQG",
      },
      {
        name: "Anh Khoa",
        avatar: "https://picsum.photos/200",
        place: "Gom rác tuyến Quận 8 - KTX ĐHQG",
      },
    ],
    janitors: [
      {
        place: "Gom rác ở Lý Thường Kiệt",
        employees: [
          {
            name: "Khoa Anh",
            avatar: "https://picsum.photos/200",
          },
          {
            name: "Khoa Anh",
            avatar: "https://picsum.photos/200",
          },
        ],
      },
      {
        place: "Gom rác ở KTX ĐHQG",
        employees: [
          {
            name: "Anh Khoa",
            avatar: "https://picsum.photos/200",
          },
          {
            name: "Anh Khoa",
            avatar: "https://picsum.photos/200",
          },
        ],
      },
    ],
  },
  {
    id: "task26",
    day: "26/11/2022",
    collectors: [
      {
        name: "Anh Khoa",
        avatar: "https://picsum.photos/200",
        place: "Gom rác tuyến Lý Thường Kiệt - KTX ĐHQG",
      },
      {
        name: "Gia Bảo",
        avatar: "https://picsum.photos/200",
        place: "Gom rác tuyến Quận 8 - KTX ĐHQG",
      },
    ],
    janitors: [
      {
        place: "Gom rác tuyến Lý Thường Kiệt - KTX ĐHQG",
        employees: [
          {
            name: "Quốc Việt",
            avatar: "https://picsum.photos/200",
          },
          {
            name: "Quốc Việt",
            avatar: "https://picsum.photos/200",
          },
        ],
      },
      {
        place: "Gom rác tuyến Quận 8 - KTX ĐHQG",
        employees: [
          {
            name: "Quốc Việt",
            avatar: "https://picsum.photos/200",
          },
          {
            name: "Quốc Việt",
            avatar: "https://picsum.photos/200",
          },
        ],
      },
    ],
  },
];

const clickJan = (e) => {
  e.target.style.color = "#000";
  document.querySelector("#col").style.color = "#C5B5B5";
  var boxes1 = document.querySelectorAll(".collectors-box");
  for (var box of boxes1) {
    box.style.display = "none";
  }
  var boxes2 = document.querySelectorAll(".janitors-box");
  for (box of boxes2) {
    box.style.display = "block";
  }
};

const clickCol = (e) => {
  e.target.style.color = "#000";
  document.querySelector("#jan").style.color = "#C5B5B5";
  var boxes1 = document.querySelectorAll(".collectors-box");
  for (var box of boxes1) {
    box.style.display = "block";
  }

  var boxes2 = document.querySelectorAll(".janitors-box");
  for (box of boxes2) {
    box.style.display = "none";
  }
};

const check = (value, event) => {
  var hideDays = document.querySelectorAll(".task");
  for (var hideDay of hideDays) {
    hideDay.style.display = "none";
  }
  var day = value.toString().slice(8, 10);
  document.querySelector("#task" + day).style.display = "block";
};
