import { useState } from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const actions = [
  { icon: <HomeIcon />, name: "Home" },
  {
    icon: <ChatBubbleIcon />,
    name: "Chat",
  },
];

export default function HomeButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        height: 320,
        // position: "fixed",
        bottom: "10px",
        right: "10px",
        transform: "translateZ(0px)",
        flexGrow: 1,
      }}
    >
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="Actions"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
