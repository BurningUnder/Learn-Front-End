/* 
我们会传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。
重点
最小的数字并非总在最前面。
如果你被难住了，记得使用 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。
这是一些对你有帮助的资源:
Math.max()
Math.min()
上面两个函数的参数不是数组，想将数组元素迭代为函数参数因此要用展开语法
Array.reduce()
*/

function sumAll(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let tempArr = new Array(max - min + 1).fill(min).map((value,index) => value+index);
    return tempArr.reduce((previousValue, currentValue) => previousValue+currentValue);
}

sumAll([1, 4]);