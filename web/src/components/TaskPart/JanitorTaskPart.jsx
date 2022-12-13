import React from 'react'
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskPart = props => {
  return (
    <div className="task-part">
    <p>{props.date}</p>
    <p>{props.time}</p>

    <p>MCP: {props.mcp}</p>
    <p>{props.task}</p>
    <IconButton aria-label="delete">
      <DeleteIcon
        sx={{ position: "relative", left: 250, bottom: 70 }}
      />
    </IconButton>
  </div>
  )
}


export default TaskPart