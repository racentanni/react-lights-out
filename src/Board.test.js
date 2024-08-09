import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cell from './Cell';
import Board from './Board';

// Test rendering a cell
test('renders a cell properly', () => {
  const { asFragment } = render(<Cell isLit={true} />);
  expect(asFragment()).toMatchSnapshot();
});

// Test rendering the starter board
test('renders the starter board', () => {
  const { asFragment } = render(<Board nrows={3} ncols={3} chanceLightStartsOn={0.5} />);
  expect(asFragment()).toMatchSnapshot();
});

// Test handling cell-clicking
test('handles cell-clicking', () => {
  const { getByTestId } = render(<Board nrows={3} ncols={3} chanceLightStartsOn={1} />);
  const cell = getByTestId('0-0');
  fireEvent.click(cell);
  expect(cell).not.toHaveClass('Cell-lit');
});

// Test checking for a win
test('shows "You won!" message', () => {
  const { getByText } = render(<Board nrows={3} ncols={3} chanceLightStartsOn={0} />);
  expect(getByText('You Win!')).toBeInTheDocument();
});