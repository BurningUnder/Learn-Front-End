/* 给一个正整数num，返回小于或等于num的斐波纳契奇数之和。

斐波纳契数列中的前几个数字是 1、1、2、3、5 和 8，随后的每一个数字都是前两个数字之和。

例如，sumFibs(4)//应该返回 5，因为斐波纳契数列中所有小于4的奇数是 1、1、3。

提示：此题不能用递归来实现斐波纳契数列。因为当num较大时，内存会溢出，推荐用数组来实现。

参考文档：博客园，Issue

如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

Remainder */
function sumFibs(num) {
    var tempArr = [1, 1];
    var sum = 0;
    do{
        let addup = tempArr[0]+tempArr[1];
        tempArr.push(addup);
        let shif = tempArr.shift();
        if(shif>num)
            break;
        if(shif%2!==0)
            sum+=shif;
    }while(true);
    return sum;
}

console.log(sumFibs(4));
console.log(sumFibs(1)) //应该返回一个数字。
console.log(sumFibs(1000)) //应该返回 1785。
console.log(sumFibs(4000000)) //应该返回 4613732。
console.log(sumFibs(4)) //应该返回 5。
console.log(sumFibs(75024)) //应该返回 60696。
console.log(sumFibs(75025)) //应该返回 135721。