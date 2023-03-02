import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IncrementButton from './IncrementButton';

function TeamScoreCard() {
  return (
    <Card
      sx={{ margin: 1, maxWidth: '50vw', height: '40vh' }}
      variant="outlined"
      data-testid="team-scorecard">
      <CardContent>Team name</CardContent>
      <IncrementButton text="+1" incrementValue={1} color="success" />
      <IncrementButton text="-1" incrementValue={-1} color="error" />
    </Card>
  );
}

export default TeamScoreCard;
