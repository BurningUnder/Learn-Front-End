/* 写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。

换句话说，所有数组中的所有值都应该以原始顺序被包含在内，但是在最终的数组中不包含重复值。

非重复的数字应该以它们原始的顺序排序，但最终的数组不应该以数字顺序排序。

请参照下面验证判断中的例子。

如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

Arguments object
Array.reduce() */
function unite(arr1, arr2, arr3) {
    const args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));;
    const reducer = (accumulator, currentValue) => {
        var tempArr = [];
        for (const currValue of currentValue) {
            if (accumulator.indexOf(currValue) === -1)
                tempArr.push(currValue);
        }
        return accumulator.concat(tempArr);
    };
    return args.reduce(reducer);
}

console.log(unite([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//应该返回 [1, 3, 2, 5, 4]。
// console.log(unite([1, 3, 2], [1, [5]], [2, [4]])) //应该返回 [1, 3, 2, [5], [4]]。
// console.log(unite([1, 2, 3], [5, 2, 1])) //应该返回 [1, 2, 3, 5]。
// console.log(unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])) //应该返回 [1, 2, 3, 5, 4, 6, 7, 8]。


//使用filter更好
function unite(arr1, arr2, arr3) {
    var args = Array.from(arguments);
    var arr = args.reduce(function (prev, cur, index, array) {
        return prev.concat(cur);
    });
    return arr.filter(function (item, index, array) {
        //这里虽然涉及对index的判断操作，但不用担心会index出错混乱
        //因为filter方法返回的是符合条件的数组元素，不是在原数组上进行操作
        return arr.indexOf(item) === index;
    });
}