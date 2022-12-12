import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Container from "@mui/system/Container";
import Box from "@mui/material/Box";
import Cloud from "../../assets/cloud.svg";

export default function WeatherInfo() {
  return (
    <Container
      fixed
      sx={{
        height: "38vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E4FCF6",
        borderRadius: "30px",
      }}
      component={Paper}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{ p: 1, textAlign: "center", fontWeight: 700 }}
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
        variant="h2"
        component="div"
        sx={{ p: 1, textAlign: "center", fontWeight: 700 }}
      >
        20&deg;C
      </Typography>
      <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
        Cloudy
      </Typography>
    </Container>
  );
}
