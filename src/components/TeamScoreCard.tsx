import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { minHeight } from '@mui/system';

function TeamScoreCard() {
  return (
    <Card
      sx={{ margin: 1, maxWidth: '50vw', height: '40vh' }}
      variant="outlined">
      <CardContent>Team name</CardContent>
    </Card>
  );
}

export default TeamScoreCard;
