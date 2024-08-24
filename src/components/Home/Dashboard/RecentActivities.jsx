import * as React from "react";
import {
  Link,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

function createData(id, activity, institution, date, status) {
  return { id, activity, institution, date, status };
}

const rows = [
  createData(
    0,
    "New Institution Registered",
    "ABC School",
    "2024-08-20",
    "Pending"
  ),
  createData(1, "Payment Received", "XYZ College", "2024-08-18", "Completed"),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function RecentActivities() {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Recent Activities
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Activity</TableCell>
            <TableCell>Institution</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.activity}</TableCell>
              <TableCell>{row.institution}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more activities
      </Link>
    </React.Fragment>
  );
}
