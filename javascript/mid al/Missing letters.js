/* 从传递进来的字母序列中找到缺失的字母并返回它。

如果所有字母都在序列中，返回 undefined。

如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

String.charCodeAt()
String.fromCharCode() */
function fearNotLetter(str) {
    var tempArr = str.split('');
    var code_0 = str.charCodeAt(0);
    for (const c of tempArr) {
        if(c===String.fromCharCode(code_0))
            code_0++;
        else
            return String.fromCharCode(code_0);
    }
    return undefined;
}

console.log(fearNotLetter("abce"));