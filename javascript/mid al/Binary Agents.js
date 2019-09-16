/* 传入二进制字符串，翻译成英语句子并返回。

二进制字符串是以空格分隔的。

如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

String.charCodeAt()
String.fromCharCode() */
function binaryAgent(str) {
    var tempArr = str.split(' ');
    tempArr = tempArr.map((val)=>{
        //非常重要的一点，数组里是字符串，而且是二进制的字符串要用Number.parseInt()方法
        //先转换为fromCharCode可读取的十进制(范围介于0到65535)
        //对于 Number 对象，toString() 方法以指定的基数返回该对象的字符串表示。
       return String.fromCharCode(parseInt(val,2));
    });
    return tempArr.join('');
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))