/* 对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套。

如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

Array.isArray() */

//然而实际上js提供了一个直接的方法
/* 
flat()方法方法会按照一个可指定的深度递归遍历数组，
并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
还有一种替代
使用reduce,concat和递归
*/
function steamroller(arr) {
    // I'm a steamroller, baby
    var tempArr = [];
    do {
        //取出第一个元素
        var temp = arr.shift();
        if (Array.isArray(temp)) {
            //如果元素为数组，则递归
            //concat方法不会改变原数组
            tempArr = tempArr.concat(steamroller(temp));
        } else {
            //元素不是数组则push进tempArr
            //如果数组是空数组，shift返回undefined，要排除这一情况
            if (temp !== undefined)
                tempArr.push(temp);
        }
        //shift会改变数组长度，当长度为0时说明循环结束，每一元素都被检验过
    } while (arr.length > 0)
    return tempArr;
}

function flattenDeep(arr1) {
    return arr1.reduce((acc, val) =>
        Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []//初始值，[]空数组
        );
}

console.log(steamroller([
    [
        ["a"]
    ],
    [
        ["b"]
    ]
])) //应该返回 ["a", "b"]。
console.log(steamroller([1, [2],
    [3, [
        [4]
    ]]
])) //应该返回 [1, 2, 3, 4]。
console.log(steamroller([1, [],
    [3, [
        [4]
    ]]
])) //应该返回 [1, 3, 4]。
console.log(steamroller([1, {},
    [3, [
        [4]
    ]]
])) //应该返回 [1, {}, 3, 4]。