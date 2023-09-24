import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ColorType } from '../types';
import store from '../stores/store';

interface Props {
  color?: ColorType;
  text: string;
  incrementValue: number;
  teamId: number;
}

const handleClick = (teamId: number, incrementValue: number) => {
  store.incrementScore(teamId, incrementValue);
};

function IncrementButton(props: Props) {
  const { color = 'primary', teamId, incrementValue } = props;

  return (
    <Box sx={{ margin: 4 }}>
      <Button
        variant="contained"
        color={color}
        onClick={() => handleClick(teamId, incrementValue)}
        sx={{
          borderRadius: '100%',
          height: '35px',
          width: '35px',
          padding: '0px',
          minWidth: '35px',
        }}>
        {props.text}
      </Button>
    </Box>
  );
}

export default IncrementButton;
