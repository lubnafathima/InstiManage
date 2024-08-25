import { Box, Container } from "@mui/material";
import InstitutionTable from "../../../components/Home/Institution/InstitutionTable";

const Institution = () => {
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
          <InstitutionTable />
        </Container>
      </Box>
    </>
  );
};

export default Institution;
