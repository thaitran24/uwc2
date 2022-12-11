import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import employee from "../../assets/employee.json";

export default function EmployeeOverview() {
  return (
    <TableContainer
      component={Paper}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Table sx={{ minWidth: 200, maxWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Vehicle Type</TableCell>
            <TableCell align="right">Vehicle ID</TableCell>
            <TableCell align="right">MCP Area/List</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employee.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.vehicle}</TableCell>
              <TableCell align="right">{row.vehicle_id}</TableCell>
              <TableCell align="right">{row.MCP}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
