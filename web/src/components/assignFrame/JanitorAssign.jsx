import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { DetailTaskBox, EmployeeInfo, MCPMultipleSelect } from "./AssignUtils";

function JanitorTaskList(props) {
  return (
    <Container>
      <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
        Task List
      </Typography>
      <DetailTaskBox>
        <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
          Task List
        </Typography>
      </DetailTaskBox>
    </Container>
  );
}

function JanitorAssignBox(props) {
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
      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
      </Box>
      <MCPMultipleSelect />
      <Button variant="contained" color="success">
        Confirm
      </Button>
    </Container>
  );
}

export default function JanitorAssign({ info }) {
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
          <JanitorAssignBox />
        </Grid>
        <Grid item xs={12}>
          <JanitorTaskList />
        </Grid>
      </Grid>
    </Paper>
  );
}
