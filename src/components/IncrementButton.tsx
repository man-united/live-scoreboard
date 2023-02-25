import React from 'react';
import Button from '@mui/material/Button';

function IncrementButton() {
  return (
    <Button
      variant="contained"
      color="success"
      sx={{
        borderRadius: '100%',
        height: '35px',
        width: '35px',
        padding: '0px',
        minWidth: '35px',
      }}>
      +1
    </Button>
  );
}

export default IncrementButton;
