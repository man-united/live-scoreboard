import { observer } from 'mobx-react';

import { Box, Card, CardContent, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import EditableText from './EditableText';
import IncrementButton from './IncrementButton';
import store from '../stores/store';

interface TeamScoreCardProps {
  teamId: number;
  color: string;
}

function TeamScoreCard({ teamId, color }: TeamScoreCardProps) {
  const points = store.teamScores[teamId];
  return (
    <Card
      sx={{ margin: 1, maxWidth: '50vw', height: '40vh', border: `2px solid black` }}
      variant="outlined"
      data-testid="team-scorecard">
      <CardContent>
        <EditableText text={`Team ${teamId}`} variant="h5" />
      </CardContent>
      <Grid container spacing={0} marginTop={1} marginX={1}>
        <Grid xs={2}>
          <IncrementButton text="+1" incrementValue={1} color="success" teamId={teamId} />
          <IncrementButton text="-1" incrementValue={-1} color="error" teamId={teamId} />
        </Grid>
        <Grid xs={10} container alignItems="center" justifyContent="center">
          <Typography variant="h1" sx={{ fontSize: '150px', color: `${color}` }}>
            {points}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default observer(TeamScoreCard);
