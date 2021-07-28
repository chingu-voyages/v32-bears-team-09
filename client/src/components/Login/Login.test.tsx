import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login'

test('Renders login with spotify button', () => {
  render(<Login />);
  const linkElement = screen.getByText(/Login with spotify/i);
  expect(linkElement).toBeInTheDocument();
});
