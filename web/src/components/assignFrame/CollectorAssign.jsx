import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { useState } from "react";
import vehicleList from "../../assets/vehicle.json";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { EmployeeInfo, MCPMultipleSelect } from "./AssignUtils";

// TODO: Replace with real data
const collectorTask = [
  {
    id: 0,
    date: "2022-12-11",
    vehicle: "Vehicle 1",
    route: "Route 1",
  },
  {
    id: 1,
    date: "2022-12-11",
    vehicle: "Vehicle 2",
    route: "Route 2",
  },
  {
    id: 2,
    date: "2022-12-11",
    vehicle: "Vehicle 3",
    route: "Route 3",
  },
  {
    id: 3,
    date: "2022-12-11",
    vehicle: "Vehicle 4",
    route: "Route 4",
  },
  {
    id: 4,
    date: "2022-12-11",
    vehicle: "Vehicle 5",
    route: "Route 5",
  },
];

function CollectorTaskList(props) {
  return (
    <Container>
      <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
        Task List
      </Typography>
      <Container sx={{ height: "25vh", overflow: "auto" }}>
        {collectorTask.map((task) => {
          return (
            <Box
              sx={{
                paddingTop: "1vh",
                backgroundColor: "#DEEDE5",
                borderRadius: "10px",
              }}
              key={task.id}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                {task.date}
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                {task.vehicle}
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                {task.route}
              </Typography>
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Box>
          );
        })}
      </Container>
    </Container>
  );
}

function CollectorAssignBox(props) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "1rem",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{ textAlign: "center", paddingTop: "4vh" }}
      >
        Task Assignment
      </Typography>
      <Box sx={{ display: "flex" }}>
        <TextField
          label="Date"
          type="date"
          defaultValue="2022-12-11"
          InputLabelProps={{
            shrink: true,
          }}
          margin="dense"
        />
        <TextField
          label="Start"
          type="time"
          defaultValue="07:30"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300,
          }}
          margin="dense"
        />
        <TextField
          label="Finish"
          type="time"
          defaultValue="07:30"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300,
          }}
          margin="dense"
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Autocomplete
          disablePortal
          options={vehicleList.map((obj) => obj.id + " " + obj.type)}
          renderInput={(params) => <TextField {...params} label="Vehicle" />}
          sx={{
            width: "50%",
          }}
        />
        <MCPMultipleSelect fieldWidth={"50%"} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button variant="contained" color="info">
          Set&nbsp;routes
        </Button>
        <Button variant="contained" color="success">
          Confirm
        </Button>
        <Button variant="contained" color="error">
          Cancel
        </Button>
      </Box>
    </Container>
  );
}

export default function CollectorAssign({ info }) {
  return (
    <Paper
      sx={{
        overflow: "hidden",
        borderRadius: "15px",
        height: "100%",
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={12} md={4}>
          <EmployeeInfo employee={info} />
        </Grid>
        <Grid item xs={12} md={8}>
          <CollectorAssignBox />
        </Grid>
        <Grid item xs={12}>
          <CollectorTaskList task={info} />
        </Grid>
      </Grid>
    </Paper>
  );
}
