import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { InputAdornment, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DateRangeIcon from "@mui/icons-material/DateRange";
const AddEmployeeDialog = ({ open, handleClose, addEmployeeData, initial }) => {
  const [employees, setEmployees] = React.useState({});
  const [emailError, setEmailError] = React.useState(false);
  const [salaryError, setSalaryError] = React.useState(false);
  React.useEffect(() => {
    if (!initial) return;
    setEmployees(initial);
  }, [initial]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="rounds-dialog"
        maxWidth={"sm"}
        fullWidth
      >
        <DialogTitle>Add Employee Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="fname"
            placeholder="First Name"
            type="text"
            fullWidth
            value={employees.firstName}
            variant="standard"
            sx={{ marginTop: "10px" }}
            onChange={(e) =>
              setEmployees({ ...employees, firstName: e.target.value })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <IconButton>
                    <PersonIcon color="primary" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="lname"
            placeholder="Last Name"
            type="text"
            fullWidth
            value={employees.lastName}
            variant="standard"
            sx={{ marginTop: "10px" }}
            onChange={(e) =>
              setEmployees({ ...employees, lastName: e.target.value })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <IconButton>
                    <PersonIcon color="primary" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            error={emailError}
            helperText={emailError && "email must contain @"}
            placeholder="Enter Email"
            type="email"
            value={employees.email}
            fullWidth
            variant="standard"
            sx={{ marginTop: "10px" }}
            onChange={(e) => {
              if (!e.target.value.includes("@")) {
                setEmailError(true);
                setEmployees({ ...employees, email: e.target.value });
              } else {
                setEmailError(false);
                setEmployees({ ...employees, email: e.target.value });
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <IconButton>
                    <EmailIcon color="primary" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="salary"
            placeholder="Salary"
            error={salaryError}
            value={employees.salary}
            helperText={salaryError && "enter salary in range"}
            type="Number"
            fullWidth
            variant="standard"
            sx={{ marginTop: "10px" }}
            onChange={(e) => {
              if (e.target.value < 0 || e.target.value > 150000) {
                setSalaryError(true);
                setEmployees({ ...employees, salary: e.target.value });
              } else {
                setSalaryError(false);
                setEmployees({ ...employees, salary: e.target.value });
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <IconButton>
                    <AttachMoneyIcon color="primary" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="date"
            fullWidth
            value={employees.date}
            variant="standard"
            sx={{ marginTop: "10px" }}
            onChange={(e) =>
              setEmployees({ ...employees, date: e.target.value })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <IconButton>
                    <DateRangeIcon color="primary" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => addEmployeeData(employees)}
            disabled={
              emailError ||
              salaryError ||
              !employees.firstName ||
              !employees.lastName ||
              !employees.email ||
              !employees.salary ||
              !employees.date
            }
          >
            {initial ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddEmployeeDialog;
