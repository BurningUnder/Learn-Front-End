/* 将给定的数字转换成罗马数字。

所有返回的 罗马数字 都应该是大写形式。

如果你被难住了，记得使用 Read-Search-Ask尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

Roman Numerals
Array.splice()  
    splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,
    并以数组形式返回被修改的内容。
    此方法会改变原数组。
Array.indexOf()
Array.join()

1   5   10  50  100 500 1000
I   V   X   L   C   D   M
 */

//我没想出特别好的解法，网上抄了一个
function convert(num) {
    var numArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    var romArr = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    var romStr = "";
    if (num > 0) { //只适用于正数
        var index = numArr.length; //从最高位开始
        while (index >= 0) { //如果还没到个位以后
            if (num >= numArr[index]) {
                num -= numArr[index];
                romStr += romArr[index];
            } else {
                index--;
            }
        }
    }
    return romStr;
}



convert(36);