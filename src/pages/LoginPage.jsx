import { Box, Typography, Button, TextField, Divider } from "@mui/material";

function LoginPage() {
  return (
    <Box
      component="main"
      height="100vh"
      display="flex"
      justifyContent="space-around"
    >
      <Box
        component="section"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="20px"
        flex={1}
        sx={{ display: { xs: "none", lg: "flex" } }}
      >
        <Typography variant="h2" color="#4D8ED3" fontWeight="900">
          FakeBuck
        </Typography>
        <Typography variant="subtitle1">
          Connect with friends and the world
        </Typography>
      </Box>
      <Box
        component="section"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="20px"
        sx={{ flex: 1 }}
      >
        <Box
          component="form"
          display="flex"
          flexDirection="column"
          width={380}
          gap="12px"
          padding="16px"
          backgroundColor="white"
          borderRadius={2}
        >
          <TextField
            type="text"
            variant="outlined"
            size="small"
            label="Email or Phone Number"
          />
          <TextField
            type="text"
            variant="outlined"
            size="small"
            label="Password"
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
          <Button type="button" variant="text" color="primary">
            Forgot Password?
          </Button>
          <Divider />
          <Button type="button" variant="contained" color="success">
            Create New Account
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginPage;
