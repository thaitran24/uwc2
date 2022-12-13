import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { EmployeeInfo } from "./AssignUtils";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const mcpList = [
  { label: "KTX Khu A" },
  { label: "Phòng 1112" },
  { label: "Nhà hát G" },
  { label: "Bệnh viện X" },
  { label: "Quận 8" },
  { label: "Nhà hát G" },
];

const vehicleList = [
  { label: "Toyota ID 400" },
  { label: "Toyota ID 401" },
  { label: "Toyota ID 402" },
  { label: "Toyota ID 403" },
  { label: "Toyota ID 404" },
  { label: "Toyota ID 405" },
];

function CollectorTaskList({ date, time, vehicle, route }) {
  return (
    <Container>
      <p>{date}</p>
      <p>{time}</p>

      <p>Vehicle: {vehicle}</p>
      <p>{route}</p>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Container>
  );
}

function CollectorAssignBox({ onOpen, onClose }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
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
      <Autocomplete
        disablePortal
        options={vehicleList}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Vehicle"
            InputLabelProps={{
              shrink: true,
            }}
            margin="dense"
            sx={{ width: "24vw" }}
          />
        )}
      />
    </Container>
  );
}

export default function CollectorAssign({ info }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          <CollectorAssignBox onOpen={handleOpen} onClose={handleClose} />
        </Grid>
        <Grid item xs={12}>
          <CollectorTaskList />
        </Grid>
      </Grid>
    </Paper>
  );
}
