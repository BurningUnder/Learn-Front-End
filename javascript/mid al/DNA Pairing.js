/* DNA 链缺少配对的碱基。依据每一个碱基，为其找到配对的碱基，然后将结果作为第二个数组返回。

Base pairs（碱基对） 是一对 AT 和 CG，为给定的字母匹配缺失的碱基。

在每一个数组中将给定的字母作为第一个碱基返回。

例如，对于输入的 GCG，相应地返回 [["G", "C"], ["C","G"],["G", "C"]]

字母和与之配对的字母在一个数组内，然后所有数组再被组织起来封装进一个数组。

如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

Array.splice()
String.split() */
function pair(str) {
    var tempArr = [];
    //得到单字符数组
    tempArr = str.split('').map((val) => {
        if (val === 'C')
            return ['C', 'G'];

        if (val === "G")
            return ['G', 'C'];
        if (val === 'A')
            return ['A', 'T'];
        if (val === 'T')
            return ['T', 'A'];
    });

    return tempArr;
}

/* function pair(str) {
    var obj = {
        'A': 'T',
        'T': 'A',
        'G': 'C',
        'C': 'G'
    };

    return str.split('').map(e => [e, obj[e]]);
} */

console.log(pair("GCG"));