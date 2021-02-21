/**
 *
 * @param obj Object whose keys has to be get
 * @param value Condition for the keys
 */
export const getSpecificKeys = (obj: object, value: string) => {
  return Object.keys(obj).filter((key: string) => obj[key] === value);
};

/**
 *
 * @param obj Object whose keys has to be filtered
 * @param value Value of the keys that has to be filtered
 */
export const filterObject = (obj: object, value: string) => {
  const filteredObj = {};
  Object.keys(obj).forEach((key: string) =>
    obj[key] === value ? Object.assign(filteredObj, { [key]: obj[key] }) : null,
  );
  return filteredObj;
};

/**
 *
 * @param arrA First array
 * @param arrB Second Array
 * @param order Check Order ? 0 for no, 1 for yes
 */
export const compareArrays = (arrA: number[], arrB: number[], order: number): boolean => {
  if (+order) return JSON.stringify(arrA) === JSON.stringify(arrB);
  return JSON.stringify(arrA.sort()) === JSON.stringify(arrB.sort());
};

/**
 *
 * @param str String which has to be checked if it is palindrome
 */
export const isPalindrome = (str: string) => str === str.split('').reverse().join('');

/**
 *
 * @param obj Object that has to be flattened
 */
export const flattenObject = (obj: object) => {
  return Object.assign(
    {},
    ...(function _flatten(o: object): any {
      return [].concat(
        ...Object.keys(o).map((k: string) => (typeof o[k] === 'object' ? _flatten(o[k]) : { [k]: o[k] })),
      );
    })(obj),
  );
};

/**
 *
 * @param col Column name of excel file
 */
export const getIndexOfExcelColumn = (col: string) =>
  col.split('').reduce((prev, next) => prev * 26 + parseInt(next, 36) - 9, 0);

/**
 *
 * @param obj Object whose keys and values has to be inverted
 */
export const invertObject = (obj: object) =>
  Object.keys(obj).reduce((res, k) => Object.assign(res, { [obj[k]]: k }), {});
