"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (array) {
    var result = [];
    var temp = [];
    for (var i = 0, j = i + 1; i < array.length; i++, j++) {
        if (typeof array[j] === 'undefined' || array[j] <= array[i]) {
            temp.length >= result.length ? result = __spreadArray([], temp, true) : null;
            temp = [];
            continue;
        }
        temp.indexOf(array[i]) === -1 ? temp.push(array[i]) : null;
        temp.push(array[j]);
    }
    return result;
});
