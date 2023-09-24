import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Scoreboard from '../Scoreboard';

describe('Scoreboard component', () => {
  beforeEach(() => {
    render(<Scoreboard />);
  });

  it('should render', () => {
    const scoreboardElement = screen.getByTestId('scoreboard');
    expect(scoreboardElement).toBeInTheDocument();
  });

  it('should render default title', () => {
    const scoreboardElement = screen.getByTestId('scoreboard');
    expect(scoreboardElement).toHaveTextContent('Scoreboard');
  });

  it('should render 4 TeamScoreCard components', () => {
    const teamScoreCards = screen.getAllByTestId('team-scorecard');
    expect(teamScoreCards).toHaveLength(4);
  });
});

export {};
