import React, { ReactDOM, useState, useEffect } from "react";
import Calendar from "react-calendar";
import Button from "react-bootstrap/Button";
import EmployeeRow from "../components/EmployeeRow/EmployeeRow";
import { EmployeeInfo } from "../components/EmployeeDetail/EmployeeDetail";
import "./DetailView.css";
import "./SetSchedule.css";
import plus from '../plus.png'
import axios from "axios";


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

    </div>
  );
}



export default function SetSchedule() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentDay, setCurrentDay] = useState(new Date());
  // change active index when click on row
  const changeActiveIndex = (index) => {
    console.log(index);
    setActiveIndex(index);
  };

  //test
  var api = 'http://localhost:8000/tasks'
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);
  const confirmModal = e => {
    
     var date = e.target.parentNode.parentNode.className.slice(9, 11);
     
    document.querySelector('.' + e.target.parentNode.parentNode.className + ' .modal-body').style.display = 'none';

    var id = 'task' + date;

    // var day = new Date().getDate();
    // var date;
    // if (day < 10) date = '0' + day.toString();
    // else date = day.toString();

    var root = document.querySelector('#task' + date);
    var jan = document.querySelector('#jantask' + date);
    var col = document.querySelector('#coltask' + date);
    var place = document.querySelector('.' + e.target.parentNode.parentNode.className + ' .modal-place').value;
    var name = document.querySelector('.' + e.target.parentNode.parentNode.className + ' .modal-name').value;


    if (jan.classList[0] == 'black-color') {
      var c = [];
      var nameJan = document.querySelectorAll('.' + e.target.parentNode.parentNode.className + ' .janitors-box .img-title');

      function janitorForm(place, employees) {
        this.place = place;
        this.employees = employees;
      };
      function EmpForm(name, avatar) {
        this.name = name;
        this.avatar = avatar;
      };
      var flag = true;

      var placeJan = document.querySelectorAll('.' + e.target.parentNode.parentNode.className + ' .janitors-box .janitors-place');
      for (var a of placeJan) {
        var empAll = [];
        for (var b of nameJan) {
          if (b.previousSibling.title == a.innerText) {
            if (a.innerText == place && flag == true) {
              var emp1 = new EmpForm(b.innerText, 'https://picsum.photos/200');
              empAll = [...empAll, emp1]
              var emp = new EmpForm(name, 'https://picsum.photos/200');
              empAll = [...empAll, emp]
              flag = false;
            }
            else {
              var emp = new EmpForm(b.innerText, 'https://picsum.photos/200');
              empAll = [...empAll, emp]
            }
          }
        }
        var jan = new janitorForm(a.innerText, empAll);
        c = [...c, jan];
        empAll = [];
      }
      if (flag) {
        var empInput = [new EmpForm(name, 'https://picsum.photos/200')];
        var janInput = new janitorForm(place, empInput)
        c = [...c, janInput];
        var box = document.createElement('div');
        box.className = 'janitors-box';
        var placeDiv = document.createElement('div');
        placeDiv.className = 'janitors-place';
        var empDiv = document.createElement('div');
        empDiv.className = 'janitors-emp';
        box.appendChild(placeDiv);
        box.appendChild(empDiv);
        //Place
        var h6 = document.createElement('h6');
        h6.innerText = place;
        placeDiv.appendChild(h6);
        //Emp
        var p1 = document.createElement('p');
        p1.innerText = 'Nhân Viên: ';
        var divP = document.createElement('div');
        empDiv.appendChild(p1);
        empDiv.appendChild(divP);
        //divP
        var divInline = document.createElement('div');
        divInline.className = 'inline';
        var img = document.createElement('img');
        var title = document.createElement('p');
        img.src = 'https://picsum.photos/200';
        img.alt = name;
        img.title = place;
        title.className = 'img-title'
        title.innerText = name;
        divP.appendChild(divInline);
        divInline.appendChild(img);
        divInline.appendChild(title);

        root.appendChild(box);
      }
      else{
        var addInline = document.querySelector('img[title="'+place+ '"]').parentNode.parentNode;
        var divInline = document.createElement('div');
        divInline.className = 'inline';
        var img = document.createElement('img');
        var title = document.createElement('p');
        img.src = 'https://picsum.photos/200';
        img.alt = name;
        img.title = place;
        title.className = 'img-title'
        title.innerText = name;
        
        divInline.appendChild(img);
        divInline.appendChild(title);
        addInline.appendChild(divInline);
     
      }

      addDB(id, 'janitors', c);



    }
    else {
      var c = [];
      function collectorForm(name, avatar, place) {
        this.place = place;
        this.avatar = avatar;
        this.name = name;
      };
      var nameCol = document.querySelectorAll('.' + e.target.parentNode.parentNode.className + ' .collectors-box .img-title');
      var placeCol = document.querySelectorAll('.' + e.target.parentNode.parentNode.className + ' .collectors-box .collectors-place');
      for (var a of placeCol) {
        for (var b of nameCol) {
          if (b.previousSibling.title == a.innerText) {
            var col = new collectorForm(b.innerText, 'https://picsum.photos/200', a.innerText)
            c = [...c, col];
          }
        }
      }
      var colInput = new collectorForm(name, 'https://picsum.photos/200', place)
      c = [...c, colInput];
      addDB(id, 'collectors', c);

      var box = document.createElement('div');
      box.className = 'collectors-box';
      var placeDiv = document.createElement('div');
      placeDiv.className = 'collectors-place';
      var empDiv = document.createElement('div');
      empDiv.className = 'collectors-emp';
      box.appendChild(placeDiv);
      box.appendChild(empDiv);
      //Place
      var h6 = document.createElement('h6');
      h6.innerText = place;
      placeDiv.appendChild(h6);
      //Emp
      var p1 = document.createElement('p');
      p1.innerText = 'Nhân Viên: ';
      empDiv.appendChild(p1);

      var img = document.createElement('img');
      var title = document.createElement('p');
      img.src = 'https://picsum.photos/200';
      title.className = 'img-title'
      title.innerText = name;
      empDiv.appendChild(img);
      empDiv.appendChild(title);

      root.appendChild(box);

      box.style.display = 'block'
    }

  }


  const addDB = (id, field, data) => {
    fetch(api + "/" + id, {
      method: 'PATCH',
      body: JSON.stringify({
        [field]: data,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  return (
    <div className="container">
      <EmployeeTable
        activeIndex={activeIndex}
        changeActiveIndex={changeActiveIndex}
      />
      <div className="left_column">

        <div>
          <Calendar onClickDay={check} onChange={setCurrentDay} value={currentDay} />
        </div>

        {tasks.map((e) => (
          <div className={'block' + e.id}>
            <div id={e.id} className="task">
              <h2 className="h2-task">{e.day}</h2>
              {/* role */}
              <div className="role-task">
                <h7 id={'jan' + e.id} className="black-color" onClick={clickJan}>Janitor</h7>
              </div>
              <div className="role-task">
                <h7 id={'col' + e.id} onClick={clickCol}>Collector</h7>
              </div>
              {/* collectors box */}
              <div>
                {e.collectors.map((a) => (
                  <div className="collectors-box">
                    <div className="collectors-place">
                      <h6>{a.place}</h6>
                    </div>
                    <div className="collectors-emp">
                      <p>Nhân viên: </p>
                      <img src={a.avatar} alt={a.name} title={a.place} />
                      <p className="img-title">{a.name}</p>
                    </div>
                  </div>

                ))}
              </div>
              {/* janitors box */}
              <div>
                {e.janitors.map((a) => (

                  <div className="janitors-box">
                    <div className="janitors-place">
                      <h6>{a.place}</h6>
                    </div>
                    <div className="janitors-emp">
                      <p>Nhân viên: </p>
                      <div>
                        {a.employees.map((b) => (
                          <div className='inline'>
                            <img src={b.avatar} alt={b.name} title={a.place} />
                            <p className="img-title">{b.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>



                ))}
              </div>

            </div>
            <div onClick={showModal} className="add-emp">
              <img src={plus} alt=""></img>
            </div>
            <div className="modal-body">
              <label for="modal-name" className="modal-label">
                Họ và tên:
              </label>
              <input className="modal-name modal-input" type="text" placeholder="Nhập họ và tên" />


              <label for="modal-place" className="modal-label">
                Khu vực hoạt động
              </label>
              <input className="modal-place modal-input" type="text" placeholder="Nhập khu vực làm việc" />
              <button onClick={confirmModal} className="modal-confirm">
                Xác nhận
              </button>
            </div>
          </div>
        ))}




      </div>
    </div>

  );


}


const clickJan = e => {
  e.target.classList.add('black-color');
  document.querySelector('#col' + e.target.id.slice(3, 9)).classList.remove('black-color');
  var boxes1 = document.querySelectorAll('.collectors-box');
  for (var box of boxes1) {
    box.style.display = 'none'
  }
  var boxes2 = document.querySelectorAll('.janitors-box');
  for (var box of boxes2) {
    box.style.display = 'block'
  }
}

const clickCol = e => {
  e.target.classList.add('black-color');
  document.querySelector('#jan' + e.target.id.slice(3, 9)).classList.remove('black-color');
  var boxes1 = document.querySelectorAll('.collectors-box');
  for (var box of boxes1) {
    box.style.display = 'block'
  }

  var boxes2 = document.querySelectorAll('.janitors-box');
  for (var box of boxes2) {
    box.style.display = 'none'
  }
}

const check = (value, event) => {
  var hideDays = document.querySelectorAll('.task');
  var day = value.toString().slice(8, 10);
  for (var hideDay of hideDays) {
    hideDay.style.display = 'none'
  }
  var hidePlus = document.querySelectorAll('.add-emp');
  for (var hide of hidePlus) {
    hide.style.display = 'none'
  }
  var hideModals = document.querySelectorAll('.modal-body');
  for (var hide of hideModals) {
    hide.style.display = 'none'
  }
  document.querySelector('.blocktask' + day + ' .add-emp').style.display = 'block';

  document.querySelector('#task' + day).style.display = 'block';
}

const setBlock = () => {
  console.log(document.querySelector('#col'));
}

const showModal = e => {
  document.querySelector('.' + e.target.parentNode.parentNode.className + ' .modal-body').style.display = 'block';
}

