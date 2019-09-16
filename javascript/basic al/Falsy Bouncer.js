/* 
过滤数组假值

（真假美猴王）

删除数组中的所有假值。

在JavaScript中，假值有false、null、0、""、undefined 和 NaN。

当你完成不了挑战的时候，记得开大招'Read-Search-Ask'。

这是一些对你有帮助的资源:

Boolean Objects
Array.filter()
*/

function bouncer(arr) {
    // 请把你的代码写在这里
    return arr.filter(s => {
        return Boolean(s) & true;
    });
}

bouncer([7, "ate", "", false, 9]);
console.log(bouncer([7, "ate", "", false, 9]))

/* 
Boolean对象是一个布尔值的对象包装器
new Boolean([value])
如果第一个参数不是布尔值，则会将其转换为布尔值。如果省略该参数，或者
其值为 0、-0、null、false、NaN、undefined、或者空字符串（""），则生成的 Boolean 对象的值为 false。
如果传入的参数是 DOM 对象  document.all，也会生成值为 false 的 Boolean 对象。
任何其他的值，包括值为 "false" 的字符串和任何对象，都会创建一个值为 true 的 Boolean 对象。

注意不要将基本类型中的布尔值 true 和 false 与值为 true 和 false 的 Boolean 对象弄混了。
*/