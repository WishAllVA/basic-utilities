import {
  filterObject,
  getSpecificKeys,
  compareArrays,
  isPalindrome,
  flattenObject,
  getIndexOfExcelColumn,
  invertObject,
} from '../index';
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

test('Check palindrome', () => {
  expect(isPalindrome('Hello')).toBe(false);
  expect(isPalindrome('AWSWSDDSWSWA')).toBe(true);
});

test('Flatten Object', () => {
  const testObject: object = { a: 'Hello', b: { c: 'Bye' } };
  const flattenedObj = flattenObject(testObject);
  expect(JSON.stringify(flattenedObj)).toBe(JSON.stringify({ a: 'Hello', c: 'Bye' }));
});

test('Get column index', () => {
  expect(getIndexOfExcelColumn('AZ')).toBe(52);
  expect(getIndexOfExcelColumn('AAA')).toBe(703);
});

test('Invert Object', () => {
  const testObject: object = { a: 'Hello', c: 'Bye' };
  const invertedObj = { Hello: 'a', Bye: 'c' };
  expect(JSON.stringify(invertObject(testObject))).toBe(JSON.stringify(invertedObj));
});
