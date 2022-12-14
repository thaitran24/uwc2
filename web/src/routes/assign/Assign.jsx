import DefaultGrid from "../../components/defaultGrid/DefaultGrid";
import EmployeeOverview from "../../components/employeeOverview/EmployeeOverview";
import MCPOverview from "../../components/mcpOverview/MCPOverview";
import VehicleOverview from "../../components/vehicleOverview/VehicleOverview";
import CollectorAssign from "../../components/assignFrame/CollectorAssign";
import JanitorAssign from "../../components/assignFrame/JanitorAssign";
import { useParams } from "react-router-dom";
import employees from "../../assets/employee.json";
import {Component} from "react"

export default class Assign extends Component {
  constructor() {
    super();
    window.G_EMPLOYEE_INFO_FRAME = this;
    this.state = {id: window.G_CUR_EMPLOYEE_ID};
    const { employeeId } = window.G_CUR_EMPLOYEE_ID;
    this.employee = employees.find(
      (employee) => employee.id === window.G_CUR_EMPLOYEE_ID
    );
  }

  render() {
    return (
      <DefaultGrid
        componentsList={[
          // <EmployeeOverview />,
          this.employee.role === "Collector" ? (
            <CollectorAssign info={this.employee} />
          ) : (
            <JanitorAssign info={this.employee} />
          ),
        ]}
      />
    );
  }
  
}
