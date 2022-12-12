import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Cloud from "../../assets/cloud.svg";

export default function WeatherInfo() {
  return (
    <Paper
      maxWidth="xl"
      sx={{
        overflow: "hidden",
        borderRadius: "15px",
      }}
      component={Paper}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "84vh",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{ textAlign: "center", fontWeight: 700 }}
        >
          06:00 AM
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ textAlign: "center", fontWeight: 700 }}
        >
          Good&nbsp;Morning
        </Typography>
        <img
          src={Cloud}
          alt="cloud"
          style={{
            width: "100px",
          }}
        />
        <Typography
          variant="h3"
          component="div"
          sx={{ textAlign: "center", fontWeight: 700 }}
        >
          20&deg;C
        </Typography>
        <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
          Cloudy
        </Typography>
      </Container>
    </Paper>
  );
}
