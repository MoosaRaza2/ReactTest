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
import CustomGridComponent from "../Components/CustomGridComponent";
import PieChart from "../Components/PieChart";

const CustomGrid = () => {
  const array1 = [
    "Feature",
    "passed",
    "failed",
    "skipped",
    "pending",
    "undefined",
    "total",
  ];
  let rows = [
    {
      feature: "Manadatory field validation of addAbstract Page",
      passed: 89,
      Failed: 1,
      skipped: 10,
      pending: 0,
      Undefined: 0,
      Total: 100,
    },
    {
      feature: "Navigate to all introduction page",
      passed: 13,
      Failed: 0,
      skipped: 0,
      pending: 0,
      Undefined: 0,
      Total: 13,
    },
    {
      feature: "Manadatory field validation of login page",
      passed: 30,
      Failed: 0,
      skipped: 0,
      pending: 0,
      Undefined: 0,
      Total: 30,
    },
    {
      feature: "Manadatory field validation of Contact Page",
      passed: 100,
      Failed: 0,
      skipped: 0,
      pending: 0,
      Undefined: 0,
      Total: 100,
    },
    {
      feature: "Manadatory field validation of Profile Page",
      passed: 71,
      Failed: 1,
      skipped: 2,
      pending: 0,
      Undefined: 0,
      Total: 74,
    },
  ];

  const getTotalPassed = () => {
    let passedSum = 0;
    let failedSum = 0;
    let skippedSum = 0;
    let pendingSum = 0;
    let undefinedSum = 0;
    let totalSum = 0;

    for (let i = 0; i < rows.length; i++) {
      passedSum += rows[i].passed;
      failedSum += rows[i].Failed;
      skippedSum += rows[i].skipped;
      pendingSum += rows[i].pending;
      undefinedSum += rows[i].Undefined;
      totalSum += rows[i].Total;
    }

    const passedPercentage = (passedSum / totalSum) * 100;
    const failedPercentage = (failedSum / totalSum) * 100;
    const skippedPercentage = (skippedSum / totalSum) * 100;
    const pendingPercentage = (pendingSum / totalSum) * 100;
    const undefinedPercentage = (undefinedSum / totalSum) * 100;

    return {
      passedSum,
      failedSum,
      skippedSum,
      pendingSum,
      undefinedSum,
      totalSum,
      passedPercentage,
      failedPercentage,
      skippedPercentage,
      pendingPercentage,
      undefinedPercentage,
    };
  };
  return (
    <Grid container pt={4} justifyContent="center">
      <PieChart rows={rows} />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {array1.map((x) => {
                return (
                  <TableCell>
                    <CustomGridComponent
                      color={
                        (x === "passed" && "#90EE90") ||
                        (x === "failed" && "#FFCCCB") ||
                        (x === "skipped" && "#CBC3E3") ||
                        (x === "pending" && "#FFFFE0") ||
                        (x === "undefined" && "#FFD580") ||
                        (x === "total" && "#D3D3D3")
                      }
                      text={x}
                      props={{
                        width: "auto",
                      }}
                    />
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <>
                  <TableCell sx={{ width: "auto" }} component="th" scope="row">
                    <CustomGridComponent
                      color={"white"}
                      text={row.feature}
                      props={{
                        width: "auto",
                      }}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <CustomGridComponent
                      color={row.passed > 0 ? "#90EE90" : "white"}
                      text={row.passed}
                      props={{
                        width: "auto",
                      }}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <CustomGridComponent
                      color={row.Failed > 0 ? "#FFCCCB" : "white"}
                      text={row.Failed}
                      props={{
                        width: "auto",
                      }}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <CustomGridComponent
                      color={row.skipped > 0 ? "#CBC3E3" : "white"}
                      text={row.skipped}
                      props={{
                        width: "auto",
                      }}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <CustomGridComponent
                      color={row.pending > 0 ? "#FFFFE0" : "white"}
                      text={row.pending}
                      props={{
                        width: "auto",
                      }}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <CustomGridComponent
                      color={row.Undefined > 0 ? "#FFD580" : "white"}
                      text={row.Undefined}
                      props={{
                        width: "auto",
                      }}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <CustomGridComponent
                      color={"#D3D3D3"}
                      text={row.Total}
                      props={{
                        width: "auto",
                      }}
                    />
                  </TableCell>
                </>
              </TableRow>
            ))}
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <CustomGridComponent
                  color={"#D3D3D3"}
                  text={getTotalPassed().passedSum}
                  props={{
                    width: "auto",
                  }}
                />
              </TableCell>
              <TableCell>
                <CustomGridComponent
                  color={"#D3D3D3"}
                  text={getTotalPassed().failedSum}
                  props={{
                    width: "auto",
                  }}
                />
              </TableCell>
              <TableCell>
                <CustomGridComponent
                  color={"#D3D3D3"}
                  text={getTotalPassed().skippedSum}
                  props={{
                    width: "auto",
                  }}
                />
              </TableCell>
              <TableCell>
                <CustomGridComponent
                  color={"#D3D3D3"}
                  text={getTotalPassed().pendingSum}
                  props={{
                    width: "auto",
                  }}
                />
              </TableCell>
              <TableCell>
                <CustomGridComponent
                  color={"#D3D3D3"}
                  text={getTotalPassed().undefinedSum}
                  props={{
                    width: "auto",
                  }}
                />
              </TableCell>
              <TableCell>
                <CustomGridComponent
                  color={"#D3D3D3"}
                  text={getTotalPassed().totalSum}
                  props={{
                    width: "auto",
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <CustomGridComponent
                  color={"#D3D3D3"}
                  text={getTotalPassed().passedPercentage.toFixed(2) + `%`}
                  props={{
                    width: "auto",
                  }}
                />
              </TableCell>
              <TableCell>
                <CustomGridComponent
                  color={"#D3D3D3"}
                  text={getTotalPassed().failedPercentage.toFixed(2) + `%`}
                  props={{
                    width: "auto",
                  }}
                />
              </TableCell>
              <TableCell>
                <CustomGridComponent
                  color={"#D3D3D3"}
                  text={getTotalPassed().skippedPercentage.toFixed(2) + `%`}
                  props={{
                    width: "auto",
                  }}
                />
              </TableCell>
              <TableCell>
                <CustomGridComponent
                  color={"#D3D3D3"}
                  text={getTotalPassed().pendingPercentage.toFixed(2) + `%`}
                  props={{
                    width: "auto",
                  }}
                />
              </TableCell>
              <TableCell>
                <CustomGridComponent
                  color={"#D3D3D3"}
                  text={getTotalPassed().undefinedPercentage.toFixed(2) + `%`}
                  props={{
                    width: "auto",
                  }}
                />
              </TableCell>
              <TableCell>
                <CustomGridComponent
                  color={"#D3D3D3"}
                  text={getTotalPassed().totalSum}
                  props={{
                    width: "auto",
                  }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* 
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        sx={{
          width: "100%",
          border: "2px solid red",
        }}
      >
       
      </Grid> */}
    </Grid>
  );
};

export default CustomGrid;
