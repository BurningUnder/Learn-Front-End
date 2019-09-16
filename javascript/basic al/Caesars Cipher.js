/* 
移位密码也就是密码中的字母会按照指定的数量来做移位。
一个常见的案例就是ROT13密码，字母会移位13个位置。由'A' ↔ 'N', 'B' ↔ 'O'，以此类推。
写一个ROT13函数，实现输入加密字符串，输出解密字符串。

所有的字母都是大写，不要转化任何非字母形式的字符(例如：空格，标点符号)，遇到这些特殊字符，跳过它们。

当你完成不了挑战的时候，记得开大招'Read-Search-Ask'。
这是一些对你有帮助的资源:
String.charCodeAt()
String.fromCharCode()
*/

/* 
    1.首先要找到字母
    2.找到字母对应的charCode
        如果出现特殊字符怎么办？
        我的第一想法是用正则判断是不是字母，只对字母进行替换
        网上的做法是直接判断ASCII码区间
    3.用fromCharCode构造对应的字母
        1->14
        2->15
        ...
       13 M->26 Z
    4.替换原本的字母
        网上的做法不用替换，直接在判断完毕后就push进新的数组，最后返回新数组
        不再做原数组上进行替换的方法可以减少替换的失误
*/

function rot13(str) { // LBH QVQ VG!
    // 请把你的代码写在这里
    //正则的替换是一次性替换,因此需要使用/g全局匹配，replace将对每一个匹配成功的字符串调用替换方法
    return str.replace(/\w/g, (s) => {
        var s_code = s.charCodeAt(0);
            if (s_code <= 77) {
                return String.fromCharCode(s_code + 13);
            } else{
                return String.fromCharCode(s_code - 13);
            }
        
    });
}
console.log('A'.charCodeAt()) //65
console.log('Z'.charCodeAt()) //90 (90+65)/2 = 77.5 
console.log(rot13("SERR PBQR PNZC")); // 你可以修改这一行来测试你的代码