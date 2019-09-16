function reverseString(str) {
    // 请把你的代码写在这里
    str.split('').reverse();
    return str;//split方法不改变原始字符串
  }
  
console.log(reverseString("hello"));
console.log('hello'.split('').reverse().join(''))
  