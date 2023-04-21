import { render, screen } from '@testing-library/react';
import App7 from './App';

test('renders learn react link', () => {
  render(<App7 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
