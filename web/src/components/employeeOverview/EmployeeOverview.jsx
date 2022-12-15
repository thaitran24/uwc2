import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { convertISODate } from "../utils/DateUtils";
import axios from "axios";

// TODO: please change this Url
const baseUrl = "http://localhost:8000";

const columns = [
  { id: "emp_id", label: "ID" },
  { id: "name", label: "Name", align: "right" },
  {
    id: "gender",
    label: "Gender",
    align: "center",
  },
  {
    id: "birthday",
    label: "Birthday",
    align: "right",
    type: "date",
  },
  {
    id: "role",
    label: "Role",
    align: "center",
  },
  {
    id: "working_area",
    label: "Area",
    align: "right",
  },
];

export default function EmployeeOverview(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [employeeList, setEmployeeList] = useState([]);

  // Get data from backend
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/employee/`, {
        timeout: 1000,
      })
      .then((res) => {
        setEmployeeList(res.data);
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
        borderRadius: "15px",
      }}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{ fontWeight: 700, paddingTop: "8px", paddingLeft: "12px" }}
      >
        Employee
      </Typography>
      <TableContainer sx={{ height: "30vh" }}>
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
            {employeeList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    key={row.emp_id}
                    // onClick={
                    //   () => {
                    //     props.func(row.emp_id, null)
                    //   }
                    // }
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id + row.emp_id}
                          align={column.align}
                        >
                          {column.type === "date"
                            ? convertISODate(value)
                            : value}
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
        count={employeeList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelDisplayedRows={({ from, to }) => `${from}–${to}`}
      />
    </Paper>
  );
}
