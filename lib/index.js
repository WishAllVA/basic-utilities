"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invertObject = exports.getIndexOfExcelColumn = exports.flattenObject = exports.isPalindrome = exports.compareArrays = exports.filterObject = exports.getSpecificKeys = void 0;
/**
 *
 * @param obj Object whose keys has to be get
 * @param value Condition for the keys
 */
var getSpecificKeys = function (obj, value) {
    return Object.keys(obj).filter(function (key) { return obj[key] === value; });
};
exports.getSpecificKeys = getSpecificKeys;
/**
 *
 * @param obj Object whose keys has to be filtered
 * @param value Value of the keys that has to be filtered
 */
var filterObject = function (obj, value) {
    var filteredObj = {};
    Object.keys(obj).forEach(function (key) {
        var _a;
        return obj[key] === value ? Object.assign(filteredObj, (_a = {}, _a[key] = obj[key], _a)) : null;
    });
    return filteredObj;
};
exports.filterObject = filterObject;
/**
 *
 * @param arrA First array
 * @param arrB Second Array
 * @param order Check Order ? 0 for no, 1 for yes
 */
var compareArrays = function (arrA, arrB, order) {
    if (+order)
        return JSON.stringify(arrA) === JSON.stringify(arrB);
    return JSON.stringify(arrA.sort()) === JSON.stringify(arrB.sort());
};
exports.compareArrays = compareArrays;
/**
 *
 * @param str String which has to be checked if it is palindrome
 */
var isPalindrome = function (str) { return str === str.split('').reverse().join(''); };
exports.isPalindrome = isPalindrome;
/**
 *
 * @param obj Object that has to be flattened
 */
var flattenObject = function (obj) {
    return Object.assign.apply(Object, __spreadArrays([{}], (function _flatten(o) {
        return [].concat.apply([], Object.keys(o).map(function (k) {
            var _a;
            return (typeof o[k] === 'object' ? _flatten(o[k]) : (_a = {}, _a[k] = o[k], _a));
        }));
    })(obj)));
};
exports.flattenObject = flattenObject;
/**
 *
 * @param col Column name of excel file
 */
var getIndexOfExcelColumn = function (col) {
    return col.split('').reduce(function (prev, next) { return prev * 26 + parseInt(next, 36) - 9; }, 0);
};
exports.getIndexOfExcelColumn = getIndexOfExcelColumn;
/**
 *
 * @param obj Object whose keys and values has to be inverted
 */
var invertObject = function (obj) {
    return Object.keys(obj).reduce(function (res, k) {
        var _a;
        return Object.assign(res, (_a = {}, _a[obj[k]] = k, _a));
    }, {});
};
exports.invertObject = invertObject;
