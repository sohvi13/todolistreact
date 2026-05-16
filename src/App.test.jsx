import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';
import '@testing-library/jest-dom/vitest';

test('renders App component', () => {
  render(<App />);
  const text = screen.getByText(/Name:/i);
  expect(text).toBeInTheDocument();
});

test('input changes update state', () => {
  render(<App />);

  const firstname = screen.getByPlaceholderText('First name');
  fireEvent.change(firstname, { target: { value: 'John' } });

  const lastname = screen.getByPlaceholderText('Last name');
  fireEvent.change(lastname, { target: { value: 'Doe' } });

  const email = screen.getByPlaceholderText('Email');
  fireEvent.change(email, { target: { value: 'john@mail.com' } });

  expect(screen.getByText('Name: John Doe Email: john@mail.com')).toBeInTheDocument();
});