/* 检查一个值是否是基本布尔类型，并返回 true 或 false。

基本布尔类型即 true 和 false。

如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

Boolean Objects */
function boo(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    if(typeof(bool)==="boolean")
    return true;
    return false;
}

console.log(boo(null));
console.log(boo(false)) //应该返回 true。
console.log(boo([1, 2, 3])) //应该返回 false。
console.log(boo([].slice) )//应该返回 false。
console.log(boo({ "a": 1 })) //应该返回 false。
console.log(boo(1)) //应该返回 false。
console.log(boo(NaN)) //应该返回 false。
console.log(boo("a")) //应该返回 false。
console.log(boo("true")) //应该返回 false。
console.log(boo("false")) //应该返回 false