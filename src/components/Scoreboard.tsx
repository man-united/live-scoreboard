import React from 'react';
import Typography from '@mui/material/Typography';
import TeamScoreCard from './TeamScoreCard';
import Grid from '@mui/material/Unstable_Grid2';

function Scoreboard() {
  return (
    <div>
      <Typography variant="h1" color="primary" align="center">
        Scoreboard
      </Typography>

      <Grid container spacing={0} marginTop={1} marginX={1}>
        <Grid xs={6}>
          <TeamScoreCard />
        </Grid>
        <Grid xs={6}>
          <TeamScoreCard />
        </Grid>
        <Grid xs={6}>
          <TeamScoreCard />
        </Grid>
        <Grid xs={6}>
          <TeamScoreCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Scoreboard;
