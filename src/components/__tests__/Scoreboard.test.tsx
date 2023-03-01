import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Scoreboard from '../Scoreboard';

test('Renders the Scoreboard component', () => {
  render(<Scoreboard />);
  const ScoreboardElement = screen.getByTestId('scoreboard');
  expect(ScoreboardElement).toBeInTheDocument();
});

test('Scoreboard component displays correct starting title', () => {
  render(<Scoreboard />);
  const ScoreboardElement = screen.getByTestId('scoreboard');
  expect(ScoreboardElement).toHaveTextContent('Scoreboard');
});

export {};
