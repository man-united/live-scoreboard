import Typography from '@mui/material/Typography';
import TeamScoreCard from './TeamScoreCard';
import Grid from '@mui/material/Unstable_Grid2';

function Scoreboard() {
  return (
    <div data-testid="scoreboard">
      <Typography variant="h1" color="primary" align="center">
        Scoreboard
      </Typography>

      <Grid container spacing={0} marginTop={1} marginX={1}>
        <Grid xs={6}>
          <TeamScoreCard teamId={1} color="red" />
        </Grid>
        <Grid xs={6}>
          <TeamScoreCard teamId={2} color="blue" />
        </Grid>
        <Grid xs={6}>
          <TeamScoreCard teamId={3} color="green" />
        </Grid>
        <Grid xs={6}>
          <TeamScoreCard teamId={4} color="#fdd835" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Scoreboard;
