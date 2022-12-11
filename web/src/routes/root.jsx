import { Outlet } from "react-router-dom";
import BasicSpeedDial from "../components/speedDial/BasicSpeedDial";
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
      <div id="detail">
        <Outlet />
      </div>
      <BasicSpeedDial />
    </ThemeProvider>
  );
}
