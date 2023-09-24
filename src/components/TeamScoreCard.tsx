import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import IncrementButton from './IncrementButton';

import { observer } from 'mobx-react';
import store from '../stores/store';

interface TeamScoreCardProps {
  teamId: number;
}

function TeamScoreCard({ teamId }: TeamScoreCardProps) {
  const points = store.teamScores[teamId];
  return (
    <Card
      sx={{ margin: 1, maxWidth: '50vw', height: '40vh' }}
      variant="outlined"
      data-testid="team-scorecard">
      <CardContent>Team name</CardContent>
      <Grid container spacing={0} marginTop={1} marginX={1}>
        <Grid xs={2} border={1}>
          <IncrementButton
            text="+1"
            incrementValue={1}
            color="success"
            teamId={teamId}
          />
          <IncrementButton
            text="-1"
            incrementValue={-1}
            color="error"
            teamId={teamId}
          />
        </Grid>
        <Grid xs={10} border={1}>
          Points: {points}
        </Grid>
      </Grid>
    </Card>
  );
}

export default observer(TeamScoreCard);
