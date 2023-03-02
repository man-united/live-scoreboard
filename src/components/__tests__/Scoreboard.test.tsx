import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Scoreboard from '../Scoreboard';

describe('Renders Scoreboard component correctly', () => {
  beforeEach(() => {
    render(<Scoreboard />);
  });

  test('Renders the Scoreboard component', () => {
    const ScoreboardElement = screen.getByTestId('scoreboard');
    expect(ScoreboardElement).toBeInTheDocument();
  });

  test('Renders the Scoreboard component title', () => {
    const ScoreboardElement = screen.getByTestId('scoreboard');
    expect(ScoreboardElement).toHaveTextContent('Scoreboard');
  });
});

export {};
