import './Assign.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Assign() {
  const MCPlist = [
    { label: 'KTX Khu A' },
    { label: 'Phòng 1112' },
    { label: 'Nhà hát G' },
    { label: 'Bệnh viện X' },
    { label: 'Quận 8' },
    { label: 'Nhà hát G' },
  ];
  return (
    <div>
       <div id="first-column" className='col-half'>
      </div>

      <div id="second-column" className='col-half'>
        <div id="task">
        <Avatar 
          sx={{
            position: 'relative', 
            width: 174, 
            height: 170, 
            top: 20,
            left: 20
          }} 
          alt="Employee" 
          src="https://picsum.photos/200" />
          
          <h1 className="task-title">Task Assigment</h1>
          <ul>
            <li className='task-li li-1'>Date:</li>
            <li className='task-li li-2'>MCP: </li>
            <li className='task-li li-3'>Description: </li>
          </ul>
        <TextField
          id="date"
          type="date"
          defaultValue="2022-12-11"
          sx={{ width: 313,height: 30, position: "relative", left: 320, bottom: 175}}
          InputLabelProps={{
          shrink: true,
          }}
        />
        <Autocomplete
          disablePortal
          id="setMCP"
          options={MCPlist}
          sx={{position: "relative", width: 313, left: 321, bottom: 138, padding: 0}}
          renderInput={(params) => <TextField {...params} label="Select MCP" />}
        />
        <TextField 
          id="description" 
          label="Description" 
          sx={{position: "relative", width: 313, left: 321, bottom: 125}}
          variant="outlined" />
        <Button variant="contained" color="success"
          sx={{position: "relative", left: 110, bottom: 50}}>
          CONFIRM
        </Button>
        <div id='task-list'>
          <h3>Task List</h3>
          <div className="task-part">
            <p>11/12/2022</p>
            <p>MCP: KTX Khu A</p>
            <p>Gom rác ở KTX Khu A</p>
            
            <DeleteIcon 
              sx={{position: "relative", left: 300, bottom: 50}}/>
          </div>
          <div className="task-part">
            <p>11/12/2022</p>
            <p>MCP: KTX Khu A</p>
            <p>Gom rác ở KTX Khu A</p>
            
            <DeleteIcon 
              sx={{position: "relative", left: 300, bottom: 50}}/>
          </div>
          <div className="task-part">
            <p>11/12/2022</p>
            <p>MCP: KTX Khu A</p>
            <p>Gom rác ở KTX Khu A</p>
            
            <DeleteIcon 
              sx={{position: "relative", left: 300, bottom: 50}}/>
          </div>
          <div className="task-part">
            <p>11/12/2022</p>
            <p>MCP: KTX Khu A</p>
            <p>Gom rác ở KTX Khu A</p>
            
            <DeleteIcon 
              sx={{position: "relative", left: 300, bottom: 50}}/>
          </div>
          
        </div>
        
    

        </div>
      </div> 
    </div>
  );
}
