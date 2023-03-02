import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Scoreboard from '../Scoreboard';

describe('Scoreboard component tests', () => {
  beforeEach(() => {
    render(<Scoreboard />);
  });

  test('Scoreboard component renders', () => {
    const scoreboardElement = screen.getByTestId('scoreboard');
    expect(scoreboardElement).toBeInTheDocument();
  });

  test('Scoreboard component renders default title', () => {
    const scoreboardElement = screen.getByTestId('scoreboard');
    expect(scoreboardElement).toHaveTextContent('Scoreboard');
  });

  test('Scoreboard component renders 4 TeamScoreCards components', () => {
    const teamScoreCards = screen.getAllByTestId('team-scorecard');
    expect(teamScoreCards).toHaveLength(4);
  });
});

export {};
