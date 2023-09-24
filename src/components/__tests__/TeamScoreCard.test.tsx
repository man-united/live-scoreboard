import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TeamScoreCard from '../TeamScoreCard';

describe('TeamScoreCard component', () => {
  beforeEach(() => {
    render(<TeamScoreCard teamId={1} />);
  });

  it('should render', () => {
    const teamScoreCard = screen.getByTestId('team-scorecard');
    expect(teamScoreCard).toBeInTheDocument;
  });

  it('should increment points when the +1 button is clicked', () => {
    const pointsElement = screen.getByText(/Points:/i);
    const incrementButton = screen.getByText('+1');

    if (!pointsElement.textContent) {
      throw new Error('Points element not found');
    }

    const initialPoints = parseInt(
      pointsElement.textContent.split(':')[1].trim(),
      10
    );

    fireEvent.click(incrementButton);

    const updatedPoints = parseInt(
      pointsElement.textContent.split(':')[1].trim(),
      10
    );

    expect(updatedPoints).toBe(initialPoints + 1);
  });
});

export {};
