import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import PlayersList from './PlayersList';

describe('PlayersList', () => {
  test('should render players', () => {
    // Arrange
    const expectedPlayersList = [
        {
          name: 'Nikolya',
          points: 0,
        },
        {
          name: 'Kamila',
          points: 1,
        },
      ];
      expectedPlayersList.map(player => console.log(player.name, player.points));
    // Act
    const { getByTestId } = render(<PlayersList playersList={expectedPlayersList} />);
    const playersList = getByTestId('test-players-list');
    const player = getByTestId('test-player');
    // Assert
    expect(playersList).toBeInTheDocument();
    expect(playersList.children.length).toBe(2);
    expect(player).toBeDefined();
  });
});
