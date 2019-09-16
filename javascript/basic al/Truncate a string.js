/* 
如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。

切记，插入到字符串尾部的三个点号也会计入字符串的长度。

但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。
*/
function truncate(str, num) {
    // 请把你的代码写在这里
    if(num>=str.length){
        return str;
    }
    let plength = 3;
    if(num <= 3){
        plength = 0;
    }
    
    return str.slice(0,num-plength).concat('...');
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
console.log(truncate("A-tisket a-tasket A green and yellow basket", 11))