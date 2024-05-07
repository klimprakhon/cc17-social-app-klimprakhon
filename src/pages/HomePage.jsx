import { Box, Grid } from "@mui/material";
import AppBar from "../components/TopBar";
import Feed from "../components/Feed";

function HomePage() {
  return (
    <Box flexGrow={1}>
      <AppBar />
      <Grid
        container
        sx={{ textAlign: "center", height: "calc(100vh - 64px)" }}
      >
        <Grid
          item
          md={3}
          sx={{
            backgroundColor: "wheat",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          L
        </Grid>
        <Grid item sm={12} md={6}>
          <Feed />
        </Grid>
        <Grid
          item
          md={3}
          sx={{
            backgroundColor: "wheat",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          R
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
