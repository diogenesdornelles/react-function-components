import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('<App />', () => {
  it('should has an input', () => {
    render(<App />);
    const input = screen.findByTestId('input');
    expect(input);
  });
});
