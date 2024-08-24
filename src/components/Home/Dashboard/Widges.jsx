import { Grid, Paper, Typography, Link } from "@mui/material";

const widgeData = [
  {
    id: 1,
    title: "Active Institutions",
    data: "15",
    content: "Institutions currently active on the platform.",
    link_text: "View More",
    link_url: "",
  },
  {
    id: 2,
    title: "New Institutions",
    data: "2",
    content: "New Institutions added in the last 30 days.",
    link_text: "View More",
    link_url: "",
  },
  {
    id: 3,
    title: "Server Status",
    data: "Online",
    content: "Current status of the server.",
    link_text: "View More",
    link_url: "",
  },
  {
    id: 4,
    title: "Support Tickets",
    data: "5",
    content: "Number of open support tickets that need attention.",
    link_text: "View More",
    link_url: "",
  },
  // {
  //   id: 5,
  //   title: "API Calls",
  //   data: "1,250",
  //   content: "API requests processed in the past 24 hours.",
  //   link_text: "View More",
  //   link_url: "",
  // },
  // {
  //   id: 6,
  //   title: "System Uptime",
  //   data: "99.98%",
  //   content: "The percentage of time the platform has been operational without outages.",
  //   link_text: "View More",
  //   link_url: "",
  // },
];

const Widges = () => {
  return (
    <>
      {widgeData.map((widge) => (
        <Grid key={widge.id} item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "2rem",
              height: 240,
            }}
          >
            <div>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                {widge.title}
              </Typography>
              <Typography component="p" variant="h4">
                {widge.data}
              </Typography>
              <Typography color="text.secondary" sx={{ flex: 1 }}>
                on 15 March, 2019
              </Typography>
            </div>
            <div>
              <Link color="primary" href="#">
                {widge.link_text}
              </Link>
            </div>
          </Paper>
        </Grid>
      ))}
    </>
  );
};

export default Widges;
