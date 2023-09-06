import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('renders Navbar without errors', () => {
    render(<Navbar />);
  });

  

  test('displays navigation buttons', () => {
    render(<Navbar />);
    const settingsButton = screen.getByAltText('settings-button');
    const notificationsButton = screen.getByAltText('notifications-button');
    
    expect(settingsButton).toBeInTheDocument();
    expect(notificationsButton).toBeInTheDocument();
  });

  test('displays the profile image', () => {
    render(<Navbar />);
    const profileImage = screen.getByAltText('profile-img');
    
    expect(profileImage).toBeInTheDocument();
  });
});
