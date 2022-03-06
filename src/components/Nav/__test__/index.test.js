import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    //renders About test

    // First Test
  it('renders', () => {
    render(<Nav />);
  });

  it('matches snapshot DOM node structure', () => {
    // render About
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });

  });
  describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        render(<Nav />)
    expect(screen.getByLabelText('camera')).toHaveTextContent('📸');
    });
  }) ;

  describe('links are visible', () => {
    it('inserts text into the links', () => {
      render(<Nav />);
      expect(screen.getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(screen.getByTestId('about')).toHaveTextContent('About me');
    });
  })