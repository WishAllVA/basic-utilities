import { filterObject, getSpecificKeys, compareArrays } from '../index';
test('Filter Object', () => {
  const unfilteredObject: object = { a: 'Hello', b: 'Bye' };
  const value: string = 'Bye';
  const filteredObj = filterObject(unfilteredObject, value);
  expect(filteredObj).toHaveProperty('b');
  expect(filteredObj).not.toHaveProperty('a');
});

test('Get Specific keys', () => {
  const testObject: object = { a: 'Hello', b: 'Bye' };
  const value: string = 'Bye';
  const keys = getSpecificKeys(testObject, value);
  expect(keys).toHaveLength(1);
});

test('Compare Arrays', () => {
  expect(compareArrays([1, 2, 3], [1, 2, 3], 1)).toBe(true);
  expect(compareArrays([1, 2, 3], [2, 1, 3], 0)).toBe(true);
  expect(compareArrays([1, 2, 3], [2, 1, 3], 1)).toBe(false);
});
