import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

export default function DefaultGrid({ componentsList }) {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              {componentsList[0]}
            </Grid>
            <Grid item xs={12} md={6}>
              {componentsList[1]}
            </Grid>
            <Grid item xs={12} md={6}>
              {componentsList[2]}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          {componentsList[3]}
        </Grid>
      </Grid>
    </Box>
  );
}
