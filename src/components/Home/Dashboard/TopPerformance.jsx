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

function createData(id, institution, activityScore, RevenueGenerated) {
  return { id, institution, activityScore, RevenueGenerated };
}

const rows = [
  createData(0, "ABC School", "95", "₹50,000"),
  createData(1, "XYZ College", "88", "₹45,000"),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function TopPerformance() {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Top Performing Institutions
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Institution</TableCell>
            <TableCell>Activity Score</TableCell>
            <TableCell>Revenue Generated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.institution}</TableCell>
              <TableCell>{row.activityScore}</TableCell>
              <TableCell>{row.RevenueGenerated}</TableCell>
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
