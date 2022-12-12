import Container from "@mui/material/Container";
import AddCircle from "@mui/icons-material/AddCircle";
import Typography from "@mui/material/Typography";

export default function Chat() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        bgcolor: "#E4FCF6",
        borderRadius: "30px",
        height: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AddCircle sx={{ fontSize: 128 }} />
      <Typography variant="h4" sx={{ color: "black", textAlign: "center" }}>
        Start <br /> a <br /> conversation
      </Typography>
    </Container>
  );
}
