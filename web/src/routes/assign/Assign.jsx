import "./Assign.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

export default function Assign() {
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
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div id="first-column" className="col-half"></div>

      <div id="second-column" className="col-half">
        <div className="task">
          <Avatar
            sx={{
              position: "relative",
              width: 174,
              height: 170,
              top: 20,
              left: 20,
            }}
            alt="Employee"
            src="https://picsum.photos/200"
          />
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
            renderInput={(params) => (
              <TextField {...params} label="Select MCP" />
            )}
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
          <div className="info">
            <h3>Joe James</h3>
            <p>Role: Janitor</p>
            <p>Exp: 5 Years</p>
            <p>Date of birth: 1/1/1990</p>
            <p>Workplace: Q.Bình Thạnh</p>
          </div>
          <div className="task-list">
            <h3>Task List</h3>
            <div className="task-part">
              <p>11/12/2022</p>
              <p>7:30-10:00</p>

              <p>MCP: KTX Khu A</p>
              <p>Gom rác ở KTX Khu A</p>
              <IconButton aria-label="delete">
                <DeleteIcon
                  sx={{ position: "relative", left: 250, bottom: 70 }}
                />
              </IconButton>
            </div>
            <div className="task-part">
              <p>11/12/2022</p>
              <p>7:30-10:00</p>

              <p>MCP: KTX Khu A</p>
              <p>Gom rác ở KTX Khu A</p>
              <IconButton aria-label="delete">
                <DeleteIcon
                  sx={{ position: "relative", left: 250, bottom: 70 }}
                />
              </IconButton>
            </div>
            <div className="task-part">
              <p>11/12/2022</p>
              <p>7:30-10:00</p>
              <p>MCP: KTX Khu A</p>
              <p>Gom rác ở KTX Khu A</p>
              <IconButton aria-label="delete">
                <DeleteIcon
                  sx={{ position: "relative", left: 250, bottom: 70 }}
                />
              </IconButton>
            </div>
            <div className="task-part">
              <p>11/12/2022</p>
              <p>7:30-10:00</p>
              <p>MCP: KTX Khu A</p>
              <p>Gom rác ở KTX Khu A</p>
              <IconButton aria-label="delete">
                <DeleteIcon
                  sx={{ position: "relative", left: 250, bottom: 70 }}
                />
              </IconButton>
            </div>
          </div>
        </div>
        {/* For collector */}
        <div className="task">
          <Avatar
            sx={{
              position: "relative",
              width: 174,
              height: 170,
              top: 20,
              left: 20,
            }}
            alt="Employee"
            src="https://picsum.photos/200"
          />
          <h1 className="task-title">Task Assigment</h1>
          <ul>
            <li className="task-li li-1">Date:</li>
            <li className="task-li li-2">Time:</li>
            <li className="task-li li-collector-1">Vehicle: </li>
            <li className="task-li li-collector-2">Set route:</li>
            <li className="task-li li-collector-3">Description: </li>
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
              bottom: 200,
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
            sx={{ positopm: "relative", width: 140, bottom: 120, left: 10 }}
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
            sx={{ positopm: "relative", width: 140, bottom: 120, left: 15 }}
          />
          <Autocomplete
            disablePortal
            className="setVehicle"
            options={Vehiclelist}
            sx={{
              position: "relative",
              width: 313,
              left: 321,
              bottom: 100,
              padding: 0,
            }}
            renderInput={(params) => (
              <TextField {...params} label="Select Vehicle" />
            )}
          />
          <Button
            variant="outlined"
            color="success"
            sx={{ postion: "relative", width: 313, left: 321, bottom: 90 }}
            onClick={handleOpen}
          >
            Select Route
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ textAlign: "center" }}
              >
                Route
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                CAll API
                <Button
                  variant="contained"
                  color="success"
                  sx={{ position: "absolute", bottom: 25, left: 200 }}
                >
                  Accept
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ position: "absolute", bottom: 25, right: 200 }}
                >
                  Reject
                </Button>
              </Typography>
            </Box>
          </Modal>
          <TextField
            className="description"
            label="Description"
            sx={{ position: "relative", width: 313, left: 10, bottom: 40 }}
            variant="outlined"
          />
          <Button
            variant="contained"
            color="success"
            sx={{ position: "relative", left: 430, bottom: 20 }}
          >
            CONFIRM
          </Button>
          <div className="info">
            <h3>Joe James</h3>
            <p>Role: Collector</p>
            <p>Exp: 5 Years</p>
            <p>Date of birth: 1/1/1990</p>
            <p>Workplace: Q.Bình Thạnh</p>
          </div>
          <div className="task-list">
            <h3>Task List</h3>
            <div className="task-part">
              <p>11/12/2022</p>
              <p>7:30-10:00</p>
              <p>Vehicle: Toyota ID 400</p>
              <p>Route: Sư Vạn Hạnh - Lý Thường Kiệt</p>
              <IconButton aria-label="delete">
                <DeleteIcon
                  sx={{ position: "relative", left: 250, bottom: 70 }}
                />
              </IconButton>
            </div>
            <div className="task-part">
              <p>11/12/2022</p>
              <p>7:30-10:00</p>
              <p>Vehicle: Toyota ID 400</p>
              <p>Route: Sư Vạn Hạnh - Lý Thường Kiệt</p>
              <IconButton aria-label="delete">
                <DeleteIcon
                  sx={{ position: "relative", left: 250, bottom: 70 }}
                />
              </IconButton>
            </div>
            <div className="task-part">
              <p>11/12/2022</p>
              <p>7:30-10:00</p>
              <p>Vehicle: Toyota ID 400</p>
              <p>Route: Sư Vạn Hạnh - Lý Thường Kiệt</p>
              <IconButton aria-label="delete">
                <DeleteIcon
                  sx={{ position: "relative", left: 250, bottom: 70 }}
                />
              </IconButton>
            </div>
            <div className="task-part">
              <p>11/12/2022</p>
              <p>7:30-10:00</p>

              <p>Vehicle: Toyota ID 400</p>
              <p>Route: Sư Vạn Hạnh - Lý Thường Kiệt</p>
              <IconButton aria-label="delete">
                <DeleteIcon
                  sx={{ position: "relative", left: 250, bottom: 70 }}
                />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
