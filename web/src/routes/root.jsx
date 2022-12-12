import { Outlet } from "react-router-dom";
import BasicSpeedDial from "../components/speedDial/BasicSpeedDial";
import Topbar from "../components/topbar/Topbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/system/Container";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Inter, Arial, sans-serif",
    },
  },
});

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <Topbar />
      <Container
        maxWidth="xl"
        sx={{
          paddingTop: "2vh",
        }}
      >
        <Outlet />
      </Container>
      <BasicSpeedDial />
    </ThemeProvider>
  );
}
