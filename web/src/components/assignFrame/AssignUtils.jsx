import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Convert string in simplified extended ISO format to date
function convertDate(date) {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

export function DetailTaskBox({ children }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2vw",
        rowGap: "1rem",
        backgroundColor: "#DEEDE5"
      }}
    >
      {children}
    </Container>
  );
}

export function EmployeeInfo({ employee }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        padding: "2vw",
      }}
    >
      <Avatar
        alt={employee.name}
        src={employee.img}
        sx={{ width: 128, height: 128 }}
      />
      <Typography
        variant="h6"
        component="div"
        align="center"
        gutterBottom
        sx={{
          paddingTop: "2vh",
        }}
      >
        {employee.name}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", columnGap: 1.25 }}>
        <Typography variant="body2" align="center" gutterBottom>
          Role: {employee.role}
        </Typography>
        <Typography variant="body2" align="center" gutterBottom>
          Exp. years: {employee.exp}
        </Typography>
      </Box>
      <Typography variant="body2" align="center" gutterBottom>
        Date of birth: {convertDate(employee.dateOfBirth)}
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
        Workplace: {employee.workplace}
      </Typography>
    </Container>
  );
}
