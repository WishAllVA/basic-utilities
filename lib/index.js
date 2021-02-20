"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareArrays = exports.filterObject = exports.getSpecificKeys = void 0;
/**
 *
 * @param obj Object whose keys has to be get
 * @param value Condition for the keys
 */
function getSpecificKeys(obj, value) {
    return Object.keys(obj).filter(function (key) { return obj[key] === value; });
}
exports.getSpecificKeys = getSpecificKeys;
/**
 *
 * @param obj Object whose keys has to be filtered
 * @param value Value of the keys that has to be filtered
 */
function filterObject(obj, value) {
    var filteredObj = {};
    Object.keys(obj).forEach(function (key) {
        var _a;
        return obj[key] === value ? Object.assign(filteredObj, (_a = {}, _a[key] = obj[key], _a)) : null;
    });
    return filteredObj;
}
exports.filterObject = filterObject;
/**
 *
 * @param arrA First array
 * @param arrB Second Array
 * @param order Check Order ? 0 for no, 1 for yes
 */
function compareArrays(arrA, arrB, order) {
    if (+order)
        return JSON.stringify(arrA) === JSON.stringify(arrB);
    return JSON.stringify(arrA.sort()) === JSON.stringify(arrB.sort());
}
exports.compareArrays = compareArrays;
