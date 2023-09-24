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
          <TeamScoreCard teamId={1} />
        </Grid>
        <Grid xs={6}>
          <TeamScoreCard teamId={2} />
        </Grid>
        <Grid xs={6}>
          <TeamScoreCard teamId={3} />
        </Grid>
        <Grid xs={6}>
          <TeamScoreCard teamId={4} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Scoreboard;
