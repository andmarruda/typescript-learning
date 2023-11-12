"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrayExample_1 = require("./arrayExample");
var largestGrowingSubArray_1 = require("./largestGrowingSubArray");
for (var _i = 0, examples_1 = arrayExample_1.default; _i < examples_1.length; _i++) {
    var example = examples_1[_i];
    console.log((0, largestGrowingSubArray_1.default)(example));
}
