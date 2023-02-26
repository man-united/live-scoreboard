import React from 'react';
import Button from '@mui/material/Button';
import { ColorType } from '../types';

interface Props {
  color?: ColorType;
  text: string;
  incrementValue: number;
}

function IncrementButton(props: Props) {
  const color = props.color || 'primary';

  return (
    <Button
      variant="contained"
      color={color}
      sx={{
        borderRadius: '100%',
        height: '35px',
        width: '35px',
        padding: '0px',
        minWidth: '35px',
      }}>
      {props.text}
    </Button>
  );
}

export default IncrementButton;
