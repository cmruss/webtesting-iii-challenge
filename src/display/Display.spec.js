// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

it('Display renders', () => {
    const dashboard = render(<Display/>);
    console.log(dashboard.getByAltText);
  });

  it('renders locked and closed data', () => {
    const { getByTestId } = render(<Display/>)
    getByTestId('locked')
    getByTestId('closed')
})