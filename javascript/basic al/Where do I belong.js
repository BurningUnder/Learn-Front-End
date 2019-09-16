/* 
数组排序并找出元素索引
我身在何处？
先给数组排序，然后找到指定的值在数组的位置，最后返回位置对应的索引。
举例：console.log(where([1,2,3,4], 1.5) //应该返回 1。
因为1.5插入到数组[1,2,3,4]后变成[1,1.5,2,3,4]，而1.5对应的索引值就是1。

同理，console.log(where([20,3,5], 19) //应该返回 2。
因为数组会先排序为 [3,5,20]，19插入到数组[3,5,20]后变成[3,5,19,20]，而19对应的索引值就是2。

如果数组中有相同的元素怎么处理？
*/

function where(arr, num) {
    // 请把你的代码写在这里
    arr.unshift(num);
    arr.sort((a,b)=>{
        return a-b;
    });
    return arr.indexOf(num);
}

console.log(where([40, 60], 50));

console.log(where([10, 20, 30, 40, 50], 35)) //应该返回 3.
console.log(where([10, 20, 30, 40, 50], 30)) //应该返回 2.
console.log(where([40, 60], 50)) //应该返回 1.
console.log(where([3, 10, 5], 3)) //应该返回 0.
console.log(where([5, 3, 20, 3], 5)) //应该返回 2.
console.log(where([2, 20, 10], 19)) //应该返回 2.
console.log(where([2, 5, 10], 15)) //应该返回 3.