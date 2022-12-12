import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import rows from "../../assets/employee.json";

export default function EmployeeOverview() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper>
      <h2>Employee Overview</h2>
    <TableContainer
      component={Paper}
      sx={{ display: "flex", alignContent: "center" }}
    >
      <Table sx={{ minWidth: "25vw", maxWidth: "50vw" }} aria-label="simple table">
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
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.vehicle.type}</TableCell>
              <TableCell align="right">{row.vehicle.ID}</TableCell>
              <TableCell align="right">{row.mcp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     <TablePagination
     rowsPerPageOptions={[5,10, 25, 100]}
     component="div"
     count={rows.length}
     rowsPerPage={rowsPerPage}
     page={page}
     onPageChange={handleChangePage}
     onRowsPerPageChange={handleChangeRowsPerPage}
     />
     </Paper>
  );
}
