import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Logo from "../../assets/logo-black.svg";
import Logout from "@mui/icons-material/Logout";
import Forum from "@mui/icons-material/Forum";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Link as RouterLink } from "react-router-dom";

export default function Topbar() {
  return (
    <Box sx={{ flexGrow: 1, height: "64px" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#e5e5e5", color: "black", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            LinkComponent={RouterLink}
            to="/"
          >
            <img src={Logo} alt="logo" style={{ width: "56px" }} />
          </IconButton>

          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            UWC 2.0
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              p: 2,
              alignItems: "center",
            }}
          >
            <Avatar src="https://picsum.photos/200" />
            <Stack spacing={0.2} sx={{ paddingLeft: "10px" }}>
              <Typography fontWeight={700}>Michael Scott</Typography>
              <Typography variant="body2" color="text.secondary">
                Back Officer
              </Typography>
            </Stack>
          </Box>
          <Button color="inherit" LinkComponent={RouterLink} to="/assign">
            <AssignmentIndIcon />
          </Button>
          <Button color="inherit" LinkComponent={RouterLink} to="/chat">
            <Forum />
          </Button>
          <Button color="inherit" LinkComponent={RouterLink} to="/login">
            <Logout />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
