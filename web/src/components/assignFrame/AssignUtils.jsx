import { useState, Component } from "react";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import mcpList from "../../assets/mcp.json";

export function MCPMultipleSelect({ fieldWidth }) {
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
    <FormControl sx={{ width: fieldWidth }}>
      <InputLabel>MCP</InputLabel>
      <Select
        multiple
        value={mcps}
        label="MCP"
        onChange={handleChangeMCPs}
        renderValue={(selected) => selected.map((x) => x.address).join(", ")}
      >
        {mcpList.map((mcp) => (
          <MenuItem
            key={mcp.locationInfo.lat + mcp.locationInfo.long}
            value={mcp}
          >
            <Checkbox
              checked={mcps.findIndex((item) => item.id === mcp.id) >= 0}
            />
            <ListItemText primary={mcp.address} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

// Convert string in simplified extended ISO format to date
function convertDate(date) {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

export function EmployeeInfo({ employee }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        padding: "2vw",
      }}
    >
      <Avatar
        alt={employee.name}
        src={employee.img}
        sx={{ width: 128, height: 128 }}
      />
      <Typography
        variant="h6"
        component="div"
        align="center"
        gutterBottom
        sx={{
          paddingTop: "2vh",
        }}
      >
        {employee.name}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", columnGap: 1.25 }}>
        <Typography variant="body2" align="center" gutterBottom>
          Role: {employee.role}
        </Typography>
        <Typography variant="body2" align="center" gutterBottom>
          Exp. years: {employee.exp}
        </Typography>
      </Box>
      <Typography variant="body2" align="center" gutterBottom>
        Date of birth: {convertDate(employee.dateOfBirth)}
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
        Workplace: {employee.workplace}
      </Typography>
    </Container>
  );
}
