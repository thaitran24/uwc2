import { useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import HomeIcon from "@mui/icons-material/Home";
import Forum from "@mui/icons-material/Forum";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const makeLink = (to, children) => (
  <Link
    component={RouterLink}
    to={to}
    sx={{
      color: "inherit",
      textDecoration: "none",
      alignItems: "center",
      display: "flex",
    }}
  >
    {children}
  </Link>
);

const actions = [
  { icon: <HomeIcon />, name: "Home", path: "/" },
  {
    icon: <Forum />,
    name: "Chat",
    path: "/chat",
  },
];

export default function BasicSpeedDial() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <SpeedDial
        ariaLabel="Actions"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={makeLink(action.path, action.icon)}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          ></SpeedDialAction>
        ))}
      </SpeedDial>
    </Box>
  );
}
