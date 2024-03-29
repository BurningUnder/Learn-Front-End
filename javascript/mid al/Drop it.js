/* 队友该卖就卖，千万别舍不得。

当你的队伍被敌人包围时，你选择拯救谁、抛弃谁非常重要，如果选择错误就会造成团灭。
如果是AD或AP，优先拯救。
因为AD和AP是队伍输出的核心。
其次应该拯救打野。
因为打野死了对面就可以无所顾虑地打龙。
最后才是辅助或上单。
因为辅助和上单都是肉，死了也不会对团队造成毁灭性影响，该卖就卖。
但真实中的团战远比这要复杂，你的队伍很可能会被敌人分割成2个或3个部分。
当你救了一个重要的人时，很可能其他队友也会因此获救。

举个例子：

辅助和AD经常是在一起的，打野和中单在一起，上单经常一个人。

你救了AD，辅助也经常因此获救。

让我们来丢弃数组(arr)的元素，从左边开始，直到回调函数return true就停止。

第二个参数，func，是一个函数。
用来测试数组的第一个元素，如果返回fasle，就从数组中抛出该元素(注意：此时数组已被改变)，
继续测试数组的第一个元素，如果返回fasle，继续抛出，直到返回true。

最后返回数组的剩余部分，如果没有剩余，就返回一个空数组。

如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程。编写你自己的代码。

这是一些对你有帮助的资源:

Arguments object
Array.shift()
Array.slice() */

function drop(arr, func) {
    // Drop them elements.
    do {
        var temp = arr.shift();
        if (func(temp)) {
            arr.unshift(temp);
            break;
        }
    } while (true);
    return arr.length === 0 ? [] : arr;
}

console.log(drop([1, 2, 3], function (n) {
    return n < 3;
}));