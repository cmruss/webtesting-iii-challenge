// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';

it('Dashboard renders', () => {
    const dashboard = render(<Dashboard/>);
    console.log(dashboard.getByAltText);
  });

it('renders Controls', () => {
    const { getAllByText } = render(<Dashboard/>)
    const gate = getAllByText(/gate/i);
})

it('renders Display', () => {
    const { getByTestId } = render(<Dashboard/>)
    getByTestId('locked')
    getByTestId('closed')
})


it('updates Display state by button', () => {
    const { getByTestId } = render(<Dashboard/>)
    //gate is open & has green-led class
    expect(getByTestId('closed').textContent).toBe('Open')
    expect(getByTestId('closed').className).toBe('led green-led')
     //close gate updates
    fireEvent.click(getByTestId('close-button'))
    expect(getByTestId('closed').textContent).toBe('Closed')
    //closed has red-led class
    expect(getByTestId('closed').className).toBe('led red-led')
    // gate is unlocked and has green-led class
    expect(getByTestId('locked').textContent).toBe('Unlocked')
    expect(getByTestId('locked').className).toBe('led green-led')
    //lock gate locks
    fireEvent.click(getByTestId('lock-button'))
    expect(getByTestId('locked').textContent).toBe('Locked')
    //locked has red-led class
    expect(getByTestId('locked').className).toBe('led red-led')
    //gate does not open when locked
    fireEvent.click(getByTestId('close-button'))
    expect(getByTestId('closed').textContent).toBe('Closed')
    //lock gate unlocks
    fireEvent.click(getByTestId('lock-button'))
    expect(getByTestId('locked').textContent).toBe('Unlocked')
    //open gate opens
    expect(getByTestId('closed').textContent).toBe('Closed')
    fireEvent.click(getByTestId('close-button'))
    expect(getByTestId('closed').textContent).toBe('Open')
    //lock does not lock when open
    fireEvent.click(getByTestId('lock-button'))
    expect(getByTestId('locked').textContent).toBe('Unlocked')
    //both have green-led class
    expect(getByTestId('locked').className).toBe('led green-led')
    expect(getByTestId('closed').className).toBe('led green-led')
})

