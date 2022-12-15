import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom"; // TODO: remove this import
import Wave from "../../assets/wave.svg";
import Logo from "../../assets/logo-green.svg";

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
          backgroundColor: "#E5E5E5",
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
              color: "#224957",
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
            <TextField
              id="input-account"
              label="Account"
              variant="outlined"
              sx={{ width: "256px" }}
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
            <TextField
              id="input-password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              sx={{ width: "256px" }}
            />
          </Box>
          <Box
            sx={{
              padding: "2vh",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
              sx={{ color: "#093545" }}
            />
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
                color: "#224957",
                backgroundColor: "#20DF7F",
                width: "20vw",
              }}
              component={RouterLink}
              to="/"
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
