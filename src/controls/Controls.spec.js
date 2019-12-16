// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Controls from './Controls';

it('Controls renders', () => {
    const dashboard = render(<Controls/>);
    console.log(dashboard.getByAltText);
  });

  it('Control buttons', () => {
    const { getAllByText } = render(<Controls/>)
    const gate = getAllByText(/gate/i);
})