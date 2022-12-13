import DeleteIcon from "@mui/icons-material/Delete";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { createContext, useContext, useState } from "react";
import mcpList from "../../assets/mcp.json";
import { DetailTaskBox, EmployeeInfo } from "./AssignUtils";

const MCPJanitorContext = createContext([]);

function MCPMultipleSelect() {
  const mcpState = useContext(MCPJanitorContext);
  return (
    <FormControl>
      <InputLabel>MCP</InputLabel>
      <Select
        multiple
        value={mcpState[0]}
        label="MCP"
        onChange={mcpState[1]}
        renderValue={(selected) => selected.map((x) => x.address).join(", ")}
      >
        {mcpList.map((mcp) => (
          <MenuItem
            key={mcp.locationInfo.lat + mcp.locationInfo.long}
            value={mcp}
          >
            <Checkbox
              checked={mcpState[0].findIndex((item) => item.id === mcp.id) >= 0}
            />
            <ListItemText primary={mcp.address} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

function JanitorTaskList(props) {
  return (
    <Container>
      <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
        Task List
      </Typography>
      <DetailTaskBox>
        <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
          Task List
        </Typography>
      </DetailTaskBox>
    </Container>
  )
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
      <Typography variant="h5" gutterBottom sx={{ textAlign: "center", paddingTop: "4vh" }}>
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
      <TextField label="Description" multiline rows={1} variant="outlined" />
      <Button variant="contained" color="success">
        Confirm
      </Button>
    </Container>
  );
}

export default function JanitorAssign({ info }) {
  const [mcps, setMCPs] = useState([]);
  const handleChangeMCPs = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);

    let duplicateRemoved = [];

    value.forEach((item) => {
      if (duplicateRemoved.findIndex((o) => o.id === item.id) >= 0) {
        duplicateRemoved = duplicateRemoved.filter((x) => x.id === item.id);
      } else {
        duplicateRemoved.push(item);
      }
    });

    setMCPs(duplicateRemoved);
  };
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
          <MCPJanitorContext.Provider value={[mcps, handleChangeMCPs]}>
            <JanitorAssignBox />
          </MCPJanitorContext.Provider>
        </Grid>
        <Grid item xs={12}>
          <JanitorTaskList />
        </Grid>
      </Grid>
    </Paper>
  );
}
