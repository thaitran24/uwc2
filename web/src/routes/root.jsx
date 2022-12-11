import { Outlet } from "react-router-dom";
import BasicSpeedDial from "../components/speedDial/BasicSpeedDial";
import Topbar from "../components/topbar/Topbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
      <div id="detail" style={{
        paddingBottom: '24px',
      }}>
        <Outlet />
      </div>
      <BasicSpeedDial />
    </ThemeProvider>
  );
}
