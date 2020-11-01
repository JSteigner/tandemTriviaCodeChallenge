/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.jsx';
import AppContainer from './AppContainer.jsx';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
});

describe('AppContainer', () => {
  test('renders AppContainer component', () => {
    render(<AppContainer />);
  });
});

describe('AppContainer', () => {
  test('test if header exists in AppContainer', () => {
    render(<AppContainer />);

    expect(screen.getByText('Tandem Trivia Training')).toBeInTheDocument();
  });
});

describe('AppContainer', () => {
  test('test if submit button exists in AppContainer', () => {
    render(<AppContainer />);

    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});
