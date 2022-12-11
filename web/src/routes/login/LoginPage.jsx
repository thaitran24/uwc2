import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Person from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Wave from "../../assets/wave.svg";
import Logo from "../../assets/logo-white.svg";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Inter, Arial, sans-serif",
    },
  },
});

export default function LoginPage() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          background: "#093545",
          position: "fixed",
          color: "white",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            padding: "5vh",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={Logo}
              alt="logo"
              style={{
                width: "128px",
              }}
            />
          </Box>

          <Typography
            variant="h3"
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
              justifyContent: "center",
            }}
          >
            <Person sx={{ color: "white", mr: 1, my: 0.5 }} />
            <TextField
              id="input-account"
              label="Account"
              variant="standard"
              sx={{ width: "256px" }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            <KeyIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
            <TextField
              id="input-password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              sx={{ width: "256px" }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
            />
          </Box>
          <Box
            fixed
            sx={{
              padding: "2vh",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <FormControlLabel control={<Checkbox />} label="Remember me" />
            <Button variant="text">Reset password</Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "2vh",
              paddingTop: 0,
            }}
          >
            <Button
              variant="contained"
              size="large"
              style={{
                color: "white",
                backgroundColor: "#20DF7F",
                width: "20vw",
              }}
            >
              Login
            </Button>
          </Box>
        </Container>
        <img
          src={Wave}
          alt="wave"
          style={{ position: "absolute", bottom: 0 }}
        />
      </div>
    </ThemeProvider>
  );
}
