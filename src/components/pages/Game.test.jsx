import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import generateRandomTime from '../../helpers/timerHelper';
import Game from './Game';

jest.mock('../../helpers/timerHelper');

describe('GamePage', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.useFakeTimers();
  });

  test('should have start in button text and add players button', () => {
    // Arrange
    const expectedButtonText = 'Start';
    const expectedAddPlayersText = 'Add players';

    // Act
    const { getByTestId } = render(<Game />);
    const timer = getByTestId('test-timer');
    const addPlayersButton = getByTestId('test-add-players-button');
    const buttonGame = getByTestId('test-button');

    // Assert
    expect(buttonGame).toHaveTextContent(expectedButtonText);
    expect(timer.children.length).toEqual(0);
    expect(addPlayersButton).toHaveTextContent(expectedAddPlayersText);
  });

  test('should change open modal state when adding players', () => {
    // Arrange
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(init => [init, setState]);

    const { getByTestId } = render(<Game />);
    const buttonAddPlayers = getByTestId('test-add-players-button');

    // Act
    fireEvent.click(buttonAddPlayers);
    // Assert
    expect(setState).toBeCalledWith(true);
  });

  test('should render timer when game started', () => {
    // Arrange
    const { getByTestId } = render(<Game />);
    const timer = getByTestId('test-timer');
    const expectedButtonText = 'Pause';

    const expectedTime = '5';
    const mockGenerateTime = jest.fn(() => expectedTime);
    generateRandomTime.mockImplementation(mockGenerateTime);

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
    generateRandomTime.mockImplementation(mockGenerateTime);

    const buttonGame = getByTestId('test-button');
    fireEvent.click(buttonGame);
    // Act
    jest.runAllTimers();
    // Assert
    expect(buttonGame).toHaveTextContent(expectedButtonText);
    expect(timer.children.length).toEqual(0);
  });
});
