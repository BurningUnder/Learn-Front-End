/* 
猴子吃香蕉, 分割数组
（猴子吃香蕉可是掰成好几段来吃哦）
把一个数组arr按照指定的数组大小size分割成若干个数组块。
例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];
chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];
当你完成不了挑战的时候，记得开大招'Read-Search-Ask'。
这是一些对你有帮助的资源:
Array.push()
Array.slice() 注意： slice() 方法不会改变原始数组
*/

function chunk(arr, size) {
    // 请把你的代码写在这里
    let tempArr = [];
    let tag = 0;
    while (tag < arr.length) {
        tempArr.push(arr.slice(tag, size));
        tag = size;
        size *= 2;
    }

    return tempArr;
}

chunk(["a", "b", "c", "d"], 2);
console.log(chunk(["a", "b", "c", "d"], 2))