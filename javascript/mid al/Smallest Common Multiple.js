/* 找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。

范围是两个数字构成的数组，两个数字不一定按数字顺序排序。

例如对 1 和 3 —— 找出能被 1 和 3 和它们之间所有数字整除的最小公倍数。
若整数b除以非零整数a，商为整数，且余数为零， 
我们就说b能被a整除（或说a能整除b），b为被除数，a为除数，即a|b（“|”是整除符号），读作“a整除b”或“b能被a整除”。
如果你被卡住了，记得开大招 Read-Search-Ask 。尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

Smallest Common Multiple */
function smallestCommons(arr) {
    arr.sort((a, b) => a - b);
    var num = arr[0];
    for (let i = num+1; i <= arr[1]; i++) {
        num*=i/gcd(num,i);
    }
    return num;
}

function gcd(m, n) {
    if (m % n === 0)
        return n;
    return gcd(n, m % n);
}


console.log(smallestCommons([1, 5])) //应该返回 60。
console.log(smallestCommons([5, 1])) //应该返回 60。
console.log(smallestCommons([1, 13])) //应该返回 360360。