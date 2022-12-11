import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AddCircle from "@mui/icons-material/AddCircle";
import Typography from "@mui/material/Typography";

export default function Chat() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box
          sx={{
            bgcolor: "#E4FCF6",
            height: "85vh",
            borderRadius: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AddCircle sx={{ fontSize: 128 }} />
          <Typography variant="h4" sx={{ color: "black" }}>
            Start a conversation
          </Typography>
        </Box>
      </Container>
    </>
  );
}
