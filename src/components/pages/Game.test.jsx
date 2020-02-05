import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import genarateRandomTime from '../../helpers/timerHelper';
import Game from './Game';

jest.mock('../../helpers/timerHelper');

describe('GamePage', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.useFakeTimers();
  });

  test('should have start in button text', () => {
    const expectedButtonText = 'Start';
    const { getByTestId } = render(<Game />);
    const timer = getByTestId('test-timer');
    // Act
    const buttonGame = getByTestId('test-button');
    // Assert
    expect(buttonGame).toHaveTextContent(expectedButtonText);
    expect(timer.children.length).toEqual(0);
  });


  test('should render timer when game started', () => {
    // Arrange
    const { getByTestId } = render(<Game />);
    const timer = getByTestId('test-timer');
    const expectedButtonText = 'Pause';

    const expectedTime = '5';
    const mockGenerateTime = jest.fn(() => expectedTime);
    genarateRandomTime.mockImplementation(mockGenerateTime);

    const buttonGame = getByTestId('test-button');
    // Act
    fireEvent.click(buttonGame);
    // Assert
    expect(buttonGame).toHaveTextContent(expectedButtonText);
    expect(timer.children.length).toEqual(1);
    expect(timer).toHaveTextContent(expectedTime);
  });

  test('game pauses when time is off', () => {
    // Arrange
    const { getByTestId } = render(<Game />);
    const timer = getByTestId('test-timer');
    const expectedButtonText = 'Start';

    const expectedTime = '5';
    const mockGenerateTime = jest.fn(() => expectedTime);
    genarateRandomTime.mockImplementation(mockGenerateTime);

    const buttonGame = getByTestId('test-button');
    fireEvent.click(buttonGame);
    // Act
    jest.runAllTimers();
    // Assert
    expect(buttonGame).toHaveTextContent(expectedButtonText);
    expect(timer.children.length).toEqual(0);
  });
});
