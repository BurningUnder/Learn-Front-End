

/* 创建一个计算两个参数之和的 function。
如果只有一个参数，则返回一个 function，该 function 请求一个参数然后返回求和的结果。

例如，add(2, 3) 应该返回 5，而 add(2) 应该返回一个 function。

调用这个有一个参数的返回的 function，返回求和的结果：

var sumTwoAnd = add(2);

sumTwoAnd(3) 返回 5。

如果两个参数都不是有效的数字，则返回 undefined。

Closures
Arguments object */
function add(a, b) {
    var x = a;

    function addanother(y) {
        //解决单个参数类型不符合
        //这里只能使用y,而不能用b,因为闭包只包括局部变量，不包括参数
        if(typeof(y)!=="number")
            return undefined;
        return x + y;
    }
    if(typeof(x)!=="number")
        return undefined;
    return arguments.length === 2 ? typeof(b)==="number" ?  a + b : undefined : addanother;
}

console.log(add(2, 3));
console.log(add(2)(3) )
console.log(add(2, "3"))