import EmployeeOverview from "../../components/employeeOverview/EmployeeOverview";
import MCPOverview from "../../components/mcpOverview/MCPOverview";
import VehicleOverview from "../../components/vehicleOverview/VehicleOverview";
import WeatherInfo from "../../components/weatherInfo/WeatherInfo";
import DefaultGrid from "../../components/defaultGrid/DefaultGrid";
import Assign from "../../routes/assign/Assign";
export default function HomePage() {
  return (
    <DefaultGrid
      componentsList={[
        <EmployeeOverview />,
        <MCPOverview />,
        <VehicleOverview />,
        <Assign />,
      ]}
    />
  );
}
