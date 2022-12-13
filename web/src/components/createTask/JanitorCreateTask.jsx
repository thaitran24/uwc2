import { Autocomplete, Button, TextField } from "@mui/material";
import React from "react";

const CreateTask = (props) => {
  const MCPlist = [
    { label: "KTX Khu A" },
    { label: "Phòng 1112" },
    { label: "Nhà hát G" },
    { label: "Bệnh viện X" },
    { label: "Quận 8" },
    { label: "Nhà hát G" },
  ];

  const Vehiclelist = [
    { label: "Toyota ID 400" },
    { label: "Toyota ID 401" },
    { label: "Toyota ID 402" },
    { label: "Toyota ID 403" },
    { label: "Toyota ID 404" },
    { label: "Toyota ID 405" },
  ];
  return (
    <div>
      <h1 className="task-title">Task Assigment</h1>
      <ul>
        <li className="task-li li-1">Date:</li>
        <li className="task-li li-2">Time:</li>
        <li className="task-li li-3">MCP: </li>
        <li className="task-li li-4">Description: </li>
      </ul>
      <TextField
        className="date"
        type="date"
        defaultValue="2022-12-11"
        sx={{
          width: 313,
          height: 30,
          position: "relative",
          left: 320,
          bottom: 175,
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="time"
        label="Start"
        type="time"
        defaultValue="07:30"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ positopm: "relative", width: 140, bottom: 105, left: 10 }}
      />
      <TextField
        id="time"
        label="Finish"
        type="time"
        defaultValue="07:30"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ positopm: "relative", width: 140, bottom: 105, left: 15 }}
      />
      <Autocomplete
        disablePortal
        className="setMCP"
        options={MCPlist}
        sx={{
          position: "relative",
          width: 313,
          left: 321,
          bottom: 90,
          padding: 0,
        }}
        renderInput={(params) => <TextField {...params} label="Select MCP" />}
      />
      <TextField
        className="description"
        label="Description"
        sx={{ position: "relative", width: 313, left: 321, bottom: 80 }}
        variant="outlined"
      />
      <Button
        variant="contained"
        color="success"
        sx={{ position: "relative", left: 110, bottom: 10 }}
      >
        CONFIRM
      </Button>
    </div>
  );
};

export default CreateTask;
