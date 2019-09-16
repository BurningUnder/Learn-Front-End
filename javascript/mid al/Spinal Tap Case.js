/* 将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。

如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

RegExp
String.replace() */
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var regs_1 =  /[\s_]/g;
    var regs_2 = /([a-z])([A-Z])/g;
    return str.replace(regs_1, '-').replace(regs_2,(match,p1,p2)=>{
        return p1 + '-' + p2;
    }).toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap")); //应该返回 "this-is-spinal-tap"。
console.log(spinalCase("thisIsSpinalTap")); //应该返回 "this-is-spinal-tap"。
console.log(spinalCase("The_Andy_Griffith_Show")); //应该返回 "the-andy-griffith-show"。
console.log(spinalCase("Teletubbies say Eh-oh")); //应该返回 "teletubbies-say-eh-oh"。