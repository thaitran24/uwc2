import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Wave from "../../assets/wave.svg";
import Logo from "../../assets/logo-white.svg";

export default function LoginPage() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "#093545",
        position: "fixed",
        color: "white",
      }}
    >
      <Box
        sx={{
          width: 300,
          height: 300,
          margin: "0 auto",
        }}
      >
        <div style={{
          display: "flex",
          justifyContent: "center",
        }}>

        <img src={Logo} alt="logo" style={{
          width: "128px",
          stroke: "white",
        }}/>
            </div>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            color: "white",
            textAlign: "center",
          }}
        >
          Login
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            position: "relative",
            zIndex: 1,
            maxWidth: "300px",
            margin: "0 auto",
          }}
        >
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Account" variant="standard" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <KeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <FormControlLabel control={<Switch />} label="Remember me" />
          <Button variant="text">Forgot password</Button>
        </Box>
        <Button
          variant="contained"
          size="large"
          style={{ color: "white", backgroundColor: "#20DF7F" }}
        >
          Login
        </Button>
      </Box>
      <img src={Wave} alt="wave" style={{ position: "absolute", bottom: 0 }} />
    </div>
  );
}
