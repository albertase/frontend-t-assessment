import React from 'react';
import { render, screen } from '@testing-library/react';
import WeekNavigation from './WeekNavigation';

describe('WeekNavigation component', () => {
  it('renders without crashing', () => {
    render(<WeekNavigation />);
  });

  it('displays the correct month and year', () => {
    render(<WeekNavigation />);
    const monthYearElement = screen.getByText('January 2023');
    expect(monthYearElement).toBeInTheDocument();
  });

  it('displays the correct day cards and their dates', () => {
    render(<WeekNavigation />);
    expect(screen.getByText('Wed')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    
  });

});
