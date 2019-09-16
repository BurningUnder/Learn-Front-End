/* 
比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。
换言之，返回两个数组的差异。
如果你被难住了，记得使用 Read-Search-Ask尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

Comparison Operators
Array.slice()
Array.filter()
Array.indexOf()
Array.concat()
*/

function diff(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    return newArr.concat(arr1.filter( (val) => arr2.indexOf(val) === -1))
    .concat(arr2.filter((val) => arr1.indexOf(val) === -1));
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));