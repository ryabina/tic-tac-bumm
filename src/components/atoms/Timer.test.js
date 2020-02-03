import React from 'react';
import '@testing-library/jest-dom/extend-expect';
// import Timer from './Timer';
// import genarateRandomTime from "../../helpers/timerHelper";

jest.mock('../../helpers/timerHelper');

describe('GamePage', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('should call timeout', () => {
    // // Arrange
    // const expectedTime = 5;
    // const mockGenerateTime = jest.fn(() => expectedTime);
    // genarateRandomTime.mockImplementation(mockGenerateTime);
    //
    // const mockSetTimeout = jest.fn(() =>{}, expectedTime);
    // setTimeout.mockImplementation(mockSetTimeout);
    // // Act
    //
    // // Assert
    // expect(setTimeout).toHaveBeenCalledWith(expectedTime);
  });
});
