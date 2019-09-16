/* 求小于等于给定数值的质数之和。

只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除。

给定的数不一定是质数。

如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

For Loops
Array.push() */
function sumPrimes(num) {
    function is_Prime(num_s) {
        //2和3为质数
        if (num_s === 2 | num_s === 3)
            return true;
        //质数分布的规律：大于等于5的质数一定和6的倍数相邻
        if (num_s % 6 !== 1 && num_s % 6 !== 5)
            return false;
        //除了2以外的偶数不是质数
        if (num_s % 2 === 0)
            return false;
        else { //已知偶数*偶数=偶数，所以在num_s为奇数的情况下只需要从奇数判断即可
            for (let i = 3; i <= Math.sqrt(num_s); i = i + 2) {
                if (num_s % i === 0)
                    return false;
            }
            return true;
        }
    }
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (is_Prime(i)) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumPrimes(10)) //应该返回一个数字。
console.log(sumPrimes(10)) //应该返回 17。
console.log(sumPrimes(977)) //应该返回 73156

function sumPrimes(num) {
    var p = [];
    for (var i = 2; i <= num; i++) {
        var flag = true;
        for (var j = 2; j < Math.sqrt(i); j++) { //此处j<sqrt(i)即可
            if (i % j === 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            p.push(i);
        }
    }
    return p.reduce(function (sum, cur) {
        return sum + cur;
    });
}