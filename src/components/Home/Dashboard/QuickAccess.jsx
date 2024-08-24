import * as React from "react";
import { Grid, Paper, Typography, Link, Box } from "@mui/material";
import {
  AccountBalance as AccountBalanceIcon,
  Visibility as VisibilityIcon,
  Support as SupportIcon,
} from "@mui/icons-material";

const LinksData = [
  {
    id: 1,
    icon: <AccountBalanceIcon fontSize="large" />,
    link_text: "Add New Institution",
    link_url: "",
  },
  {
    id: 2,
    icon: <VisibilityIcon fontSize="large" />,
    link_text: "View All Institutions",
    link_url: "",
  },
  {
    id: 3,
    icon: <SupportIcon fontSize="large" />,
    link_text: "View Support Tickets",
    link_url: "",
  },
];

export default function QuickAccess() {
  return (
    <React.Fragment>
      {LinksData.map((widge) => (
        <Grid key={widge.id} item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              mb: 4,
            }}
          >
            <Link
              color="primary"
              href={widge.link_url}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: ".5rem",
                textDecoration: "none",
                height: 150,
                transition: "background-color 0.3s ease, color 0.3s ease",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white",
                  "& .MuiTypography-root": {
                    color: "white",
                    transition: "color 0.3s ease",
                  },
                  "& .MuiBox-root": {
                    bgcolor: "white",
                    color: "primary.main",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                  },
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "primary.main",
                  color: "white",
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  transition: "background-color 0.3s ease, color 0.3s ease",
                }}
              >
                {widge.icon}
              </Box>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
                sx={{
                  transition: "color 0.3s ease",
                }}
              >
                {widge.link_text}
              </Typography>
            </Link>
          </Paper>
        </Grid>
      ))}
    </React.Fragment>
  );
}
