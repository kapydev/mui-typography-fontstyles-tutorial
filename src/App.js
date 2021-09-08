import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


function App() {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: "100vh", color: "white", backgroundColor: "#1E1E1E" }}>
      <Grid item style={{ borderStyle: "dashed", width: 200, height: 100 }}>
        <Typography align="center" color="secondary" variant="h6">
          <Box fontFamily="monospace" fontWeight="bold" fontSize={12} color="pink">
            😍Lorem Ipsum😍
          </Box>
        </Typography>
      </Grid>
    </Grid >
  );
}

export default App;
