import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddEmployeeDialog from "../Components/AddEmployeeDialog";
const Home = () => {
  const [employees, setEmployees] = React.useState([]);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [editOpenDialog, setEditOpenDialog] = React.useState(false);
  const [editData, setEditData] = React.useState({});

  const addEmployee = (data) => {
    setEmployees([...employees, { ...data, id: Math.random() * 10 }]);
    setOpenDialog(false);
  };

  const editEmployee = (data) => {
    setEmployees(
      employees.map((x, index) => {
        if (data.id === x.id) {
          return {
            ...x,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            salary: data.salary,
            date: data.date,
          };
        } else {
          return x;
        }
      })
    );
    setEditOpenDialog(false);
  };

  const deleteEmployee = (index) => {
    setEmployees(
      employees.filter((obj, roundIndex) => {
        return roundIndex !== index;
      })
    );
  };
  return (
    <Grid container p={3}>
      <Grid item>
        <Button
          variant="contained"
          sx={{ marginRight: "15px" }}
          onClick={() => setOpenDialog(true)}
        >
          Add Employee
        </Button>
      </Grid>
      <Grid container pt={4}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#1976d2" }}>
                <TableCell
                  sx={{ fontWeight: "500px", fontSize: "18px", color: "white" }}
                >
                  No
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "500px", fontSize: "18px", color: "white" }}
                >
                  First Name
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "500px", fontSize: "18px", color: "white" }}
                >
                  Last Name
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "500px", fontSize: "18px", color: "white" }}
                >
                  Email
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "500px", fontSize: "18px", color: "white" }}
                >
                  Salary
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "500px", fontSize: "18px", color: "white" }}
                >
                  Date
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "500px", fontSize: "18px", color: "white" }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((row, index) => (
                <TableRow
                  key={row?.srno}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row?.firstName}
                  </TableCell>
                  <TableCell align="left">{row?.lastName}</TableCell>
                  <TableCell align="left">{row?.email}</TableCell>
                  <TableCell align="left">$ {row?.salary}</TableCell>
                  <TableCell align="left">{row?.date}</TableCell>
                  <TableCell align="left">
                    <Button
                      variant="outlined"
                      sx={{ marginRight: "10px" }}
                      onClick={() => {
                        setEditOpenDialog(true);
                        setEditData({
                          id: row.id,
                          firstName: row.firstName,
                          lastName: row.lastName,
                          email: row.email,
                          salary: row.salary,
                          date: row.date,
                        });
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => deleteEmployee(index)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {openDialog && (
        <AddEmployeeDialog
          open={openDialog}
          handleClose={() => setOpenDialog(false)}
          addEmployeeData={(data) => addEmployee(data)}
        />
      )}
      {editOpenDialog && (
        <AddEmployeeDialog
          open={editOpenDialog}
          handleClose={() => setEditOpenDialog(false)}
          addEmployeeData={(data) => editEmployee(data)}
          initial={editData}
        />
      )}
    </Grid>
  );
};

export default Home;
