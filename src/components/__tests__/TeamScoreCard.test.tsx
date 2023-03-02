import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import TeamScoreCard from '../TeamScoreCard';

describe('TeamScoreCard component tests', () => {
  beforeEach(() => {
    render(<TeamScoreCard />);
  });

  test('TeamScoreCard component renders', () => {
    const teamScoreCard = screen.getByTestId('team-scorecard');
    expect(teamScoreCard).toBeInTheDocument;
  });
});

export {};
