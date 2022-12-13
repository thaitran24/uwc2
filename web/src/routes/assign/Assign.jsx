import "./Assign.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { useParams } from "react-router-dom";

import JanitorTaskPart from "../../components/TaskPart/JanitorTaskPart";
import CollectorTaskPart from "../../components/TaskPart/CollectorTaskPart";
import EmployeeDetail from "../../components/employeeDetail/EmployeeDetail";
import JanitorCreateTask from "../../components/createTask/JanitorCreateTask";
import CollectorCreateTask from "../../components/createTask/CollectorCreateTask";

import employees from "../../assets/employee.json";

export default function Assign() {
  const { employeeId } = useParams();
  const employee = employees.find((employee) => employee.id == employeeId);

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}></Grid>

        <Grid item xs={12} md={6}>
          <div className="task">
            <Grid container spacing={1}>
              <Grid item xs={12} md={2}>
                <EmployeeDetail employee={employee} />
              </Grid>
              <Grid item xs={12} md={4}>
                <CollectorCreateTask />
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <div className="task-list">
                <h3>Task List</h3>
                <JanitorTaskPart />
                <JanitorTaskPart />
                <JanitorTaskPart />
              </div>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
