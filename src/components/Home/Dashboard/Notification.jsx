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

function createData(id, task, dueData, status) {
  return { id, task, dueData, status };
}

const rows = [
  createData(
    0,
    "Review pending institution registrations",
    "2024-08-22",
    "Pending"
  ),
  createData(
    1,
    "Check system performance reports",
    "2024-08-21",
    "In Progress"
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Notification() {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Notification
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.task}</TableCell>
              <TableCell>{row.dueData}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more
      </Link>
    </React.Fragment>
  );
}
