import { sum } from './sum';
jest.mock('./utils');
import { addOne } from './utils';
addOne.mockImplementation((num) => num + 2);

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(5);
});
