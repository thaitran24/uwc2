import DefaultGrid from "../../components/defaultGrid/DefaultGrid";
import EmployeeOverview from "../../components/employeeOverview/EmployeeOverview";
import MCPOverview from "../../components/mcpOverview/MCPOverview";
import VehicleOverview from "../../components/vehicleOverview/VehicleOverview";
import CollectorAssign from "../../components/assignFrame/CollectorAssign";
import JanitorAssign from "../../components/assignFrame/JanitorAssign";
import { useParams } from "react-router-dom";
import employees from "../../assets/employee.json";

export default function Assign() {
  const { employeeId } = useParams();
  const employee = employees.find(
    (employee) => employee.id === parseInt(employeeId)
  );
  return (
    <DefaultGrid
      componentsList={[
        <EmployeeOverview />,
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
