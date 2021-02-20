/**
 *
 * @param obj Object whose keys has to be get
 * @param value Condition for the keys
 */
export function getSpecificKeys(obj: object, value: string) {
  return Object.keys(obj).filter((key: string) => obj[key] === value);
}

/**
 *
 * @param obj Object whose keys has to be filtered
 * @param value Value of the keys that has to be filtered
 */
export function filterObject(obj: object, value: string) {
  const filteredObj = {};
  Object.keys(obj).forEach((key: string) =>
    obj[key] === value ? Object.assign(filteredObj, { [key]: obj[key] }) : null,
  );
  return filteredObj;
}

/**
 *
 * @param arrA First array
 * @param arrB Second Array
 * @param order Check Order ? 0 for no, 1 for yes
 */
export function compareArrays(arrA: number[], arrB: number[], order: number) {
  if (+order) return JSON.stringify(arrA) === JSON.stringify(arrB);
  return JSON.stringify(arrA.sort()) === JSON.stringify(arrB.sort());
}
