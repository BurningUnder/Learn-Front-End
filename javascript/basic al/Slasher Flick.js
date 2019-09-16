/* 截断数组

返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始。

当你完成不了挑战的时候，记得开大招'Read-Search-Ask'。

这是一些对你有帮助的资源:

Array.slice()
Array.splice() 注意：这种方法会改变原始数组。如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。
 */
function slasher(arr, howMany) {
    // 请把你的代码写在这里
    arr.splice(0, howMany)
    return arr;
}

slasher([1, 2, 3], 2);