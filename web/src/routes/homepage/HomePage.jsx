import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import EmployeeOverview from "../../components/employeeOverview/EmployeeOverview";
import MCPOverview from "../../components/mcpOverview/MCPOverview";
import VehicleOverview from "../../components/vehicleOverview/VehicleOverview.jsx";
import WeatherInfo from "../../components/weatherInfo/WeatherInfo";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <WeatherInfo />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <MCPOverview />
              </Grid>
              <Grid item xs={12} md={6}>
                <VehicleOverview />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <EmployeeOverview />
        </Grid>
      </Grid>
    </Box>
  );
}
