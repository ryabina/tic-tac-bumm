import React from 'react';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import { render } from 'react-testing-library';

import Game from './Game';

describe('GamePage', () => {

  test('should have start in button text', () => {
    const expectedButtonText = 'Start Game';
    const { getByTestId } = render(<Game />);
    // Act
    const buttonGame = getByTestId('test-button');
    // Act
    // Assert
    expect(buttonGame).toHaveTextContent(expectedButtonText);

  });


  test('should render timer when game started', () => {


  });
});
