import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import axios from "axios";

// TODO: please change this Url
const baseUrl = "http://localhost:8000";

const columns = [
  { id: "vehicle_id", label: "ID" },
  { id: "type", label: "Type" },
  { id: "consumption", label: "Consumption", align: "right" },
];

export default function MCPOverview() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [vehicleList, setVehicleList] = useState([]);

  // Get data from backend
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/vehicle/`, {
        timeout: 1000,
      })
      .then((res) => {
        setVehicleList(res.data);
      });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        overflow: "hidden",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{ fontWeight: 700, paddingTop: "8px", paddingLeft: "12px" }}
      >
        Vehicles
      </Typography>
      <TableContainer sx={{ height: "28vh" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicleList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover key={row.vehicle_id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id + row.vehicle_id}
                          align={column.align}
                        >
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={vehicleList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelDisplayedRows={({ from, to }) => `${from}–${to}`}
      />
    </Paper>
  );
}
