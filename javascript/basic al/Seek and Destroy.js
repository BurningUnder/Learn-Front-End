/* 
实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。

当你完成不了挑战的时候，记得开大招'Read-Search-Ask'。

这是一些对你有帮助的资源:

Arguments object
Array.filter()
*/

function destroyer(arr) {
    // 请把你的代码写在这里
    var args = [...arguments];
    var tarr = args.shift();
    
    return tarr.filter((num) => {
        for (argss of args) {
            if (num === argss)
                return false;     
        }
        return true;
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);