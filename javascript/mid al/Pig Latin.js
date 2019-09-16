/* 把指定的字符串翻译成 pig latin。

Pig Latin 把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"。

如果单词以元音开始，你只需要在词尾添加 "way" 就可以了。

如果你被难住了，记得使用 Read-Search-Ask尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

Array.indexOf()
Array.push()
Array.join()
String.substr()
String.split() */
function translate(str) {

    var temp = [];
    var answer;
    temp = str.split(''); //将str分解为单个字符存入数组
    var i = 0;
    while (temp[i] != 'a' && temp[i] != 'o' && temp[i] != 'i' 
    && temp[i] != 'e' && temp[i] != 'u') {
        i++; //如果不是元音i++，如果是元音推出循环
    }

    answer = str.substr(i); //将str不是元音的部分提出
    answer += str.substr(0, i); //将str的元音部分加在answer之后

    if (i == 0) {
        answer += "way"; //首字母为元音加 way
    } else {
        answer += "ay"; //不是加 ay
    }
    return answer;

}

console.log(translate("consonant"));