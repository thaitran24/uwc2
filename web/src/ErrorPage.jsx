import { useRouteError } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Inter, Arial, sans-serif",
    },
  },
});

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Typography variant="h2" align="center" gutterBottom>
          Oops!
        </Typography>
        <Typography variant="h5" align="center" gutterBottom paragraph>
          Something went wrong.
        </Typography>
        <Typography variant="subtitle2" align="center" gutterBottom paragraph>
          {error.statusText || error.message}
        </Typography>
      </Container>
    </ThemeProvider>
  );
}
