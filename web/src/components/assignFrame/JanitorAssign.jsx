import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { EmployeeInfo, MCPMultipleSelect } from "./AssignUtils";

// TODO: Replace with real data
const janitorTask = [
  {
    id: 0,
    date: "2022-12-11",
    MCP: "MCP 1",
  },
  {
    id: 1,
    date: "2022-12-11",
    MCP: "MCP 2",
  },
  {
    id: 2,
    date: "2022-12-11",
    MCP: "MCP 3",
  },
  {
    id: 3,
    date: "2022-12-11",
    MCP: "MCP 4",
  },
  {
    id: 4,
    date: "2022-12-11",
    MCP: "MCP 5",
  },
];

function JanitorTaskContentBox({ task }) {
  return (
    <Box
      sx={{
        marginBottom: "1vh",
        backgroundColor: "#4FE0B6",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          width: "95%",
          overflow: "auto",
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
          {task.date}
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
          {task.MCP}
        </Typography>
      </Stack>
      <Box sx={{ textAlign: "right", paddingRight: "1vw" }}>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

function JanitorTaskList(props) {
  return (
    <Container>
      <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
        Task List
      </Typography>
      <Container sx={{ height: "25vh", overflow: "auto" }}>
        <Grid container spacing={2}>
          {janitorTask.map((task) => (
            <Grid item xs={12} md={6} key={task.id}>
              <JanitorTaskContentBox task={task} />
            </Grid>
          ))}
        </Grid>
      </Container>
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
