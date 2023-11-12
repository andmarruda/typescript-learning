This is quitly simple, i`m using 10 arrays example to test it, but the idea is,
from left to right, you see if the next number is bigger, if it's true, then continues, 
if not you stop and move it from the next position, and you created subarray, that be replaced
if next subaarray created has a larger number of elements, for examples:

const array = [10, 9, 2, 5, 3, 7, 101, 18];

biggest growing subarray that we can create is an array with 3 elements, [3, 7, 101]

There are all the 10 examples, let`t start it.

    [4, 2, 8, 1, 7, 5]
    [10, 5, 2, 8, 12, 7, 3]
    [1, 3, 5, 7, 9, 11]
    [6, 2, 9, 4, 7, 1, 8, 3, 5]
    [15, 20, 10, 5, 25, 30]
    [3, 6, 1, 8, 2, 10, 4]
    [7, 2, 9, 5, 10, 8, 12]
    [11, 13, 9, 8, 15, 20, 18]
    [2, 4, 6, 8, 10, 12]
    [5, 3, 7, 2, 8, 1, 9, 4, 6]
