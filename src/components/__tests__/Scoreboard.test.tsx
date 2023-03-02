import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Scoreboard from '../Scoreboard';

describe('Renders Scoreboard component correctly', () => {
  beforeEach(() => {
    render(<Scoreboard />);
  });

  test('Renders the Scoreboard component', () => {
    const scoreboardElement = screen.getByTestId('scoreboard');
    expect(scoreboardElement).toBeInTheDocument();
  });

  test('Renders the Scoreboard component title', () => {
    const scoreboardElement = screen.getByTestId('scoreboard');
    expect(scoreboardElement).toHaveTextContent('Scoreboard');
  });

  test('Renders 4 TeamScoreCards', () => {
    const teamScoreCards = screen.getAllByTestId('team-scorecard');
    expect(teamScoreCards).toHaveLength(4);
  });
});

export {};
