/**
 *
 * @param obj Object whose keys has to be get
 * @param value Condition for the keys
 */
export declare const getSpecificKeys: (obj: object, value: string) => string[];
/**
 *
 * @param obj Object whose keys has to be filtered
 * @param value Value of the keys that has to be filtered
 */
export declare const filterObject: (obj: object, value: string) => {};
/**
 *
 * @param arrA First array
 * @param arrB Second Array
 * @param order Check Order ? 0 for no, 1 for yes
 */
export declare const compareArrays: (arrA: number[], arrB: number[], order: number) => boolean;
/**
 *
 * @param str String which has to be checked if it is palindrome
 */
export declare const isPalindrome: (str: string) => boolean;
/**
 *
 * @param obj Object that has to be flattened
 */
export declare const flattenObject: (obj: object) => any;
/**
 *
 * @param col Column name of excel file
 */
export declare const getIndexOfExcelColumn: (col: string) => number;
/**
 *
 * @param obj Object whose keys and values has to be inverted
 */
export declare const invertObject: (obj: object) => {};
