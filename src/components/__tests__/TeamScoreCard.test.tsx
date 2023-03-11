import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import TeamScoreCard from '../TeamScoreCard';

describe('TeamScoreCard component', () => {
  beforeEach(() => {
    render(<TeamScoreCard />);
  });

  it('should render', () => {
    const teamScoreCard = screen.getByTestId('team-scorecard');
    expect(teamScoreCard).toBeInTheDocument;
  });
});

export {};
