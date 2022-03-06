import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..';

afterEach(cleanup);

describe('Gallery component', () => {
    //renders About test

    // First Test
  it('renders', () => {
    render(<Gallery />);
  });

  it('matches snapshot DOM node structure', () => {
    // render About
    const { asFragment } = render(<Gallery />);
    expect(asFragment()).toMatchSnapshot();
  });

  })