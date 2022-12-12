import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import EmployeeOverview from "../../components/employeeOverview/EmployeeOverview";
import MCPOverview from "../../components/mcpOverview/MCPOverview";
import VehicleOverview from "../../components/vehicleOverview/VehicleOverview";
import WeatherInfo from "../../components/weatherInfo/WeatherInfo";
import Box from "@mui/material/Box";

export default function HomePage() {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <EmployeeOverview />
            </Grid>
            <Grid item xs={12} md={6}>
              <MCPOverview />
            </Grid>
            <Grid item xs={12} md={6}>
              <VehicleOverview />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <WeatherInfo />
        </Grid>
      </Grid>
    </Box>
  );
}
