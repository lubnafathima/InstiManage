import { Box, Container, Grid, Paper } from "@mui/material";
import Widges from "../../../components/Home/Dashboard/Widges";
import RecentActivities from "../../../components/Home/Dashboard/RecentActivities";
import TopPerformance from "../../../components/Home/Dashboard/TopPerformance";
import Notification from "../../../components/Home/Dashboard/Notification";
import QuickAccess from "../../../components/Home/Dashboard/QuickAccess";

const Dashboard = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Widges />
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <RecentActivities />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <TopPerformance />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Notification />
              </Paper>
            </Grid>
            <QuickAccess />
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
