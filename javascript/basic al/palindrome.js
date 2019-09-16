function palindrome(str) {
    // 请把你的代码写在这里
   //得到不带标点符号的小写字符串,replace不会改变原始字符串
   /*
    偷懒就要小心了，因为\W匹配非单词字符，而_下划线属于单词字符，因此需要另外补上
   */
    var newstr = str.replace(/[\W_]/g,'').toLowerCase();
    console.log(newstr === newstr.split('').reverse().join(''))
    return newstr === newstr.split('').reverse().join('');
  }
  
  
  
palindrome("eye");
palindrome("eye") //应该返回一个布尔值
palindrome("eye") //应该返回 true.
palindrome("race car") //应该返回 true.
palindrome("not a palindrome") //应该返回 false.
palindrome("A man, a plan, a canal. Panama") //应该返回 true.
palindrome("never odd or even") //应该返回 true.
palindrome("nope") //应该返回 false.
palindrome("almostomla") //应该返回 false.
palindrome("My age is 0, 0 si ega ym.") //应该返回 true.
palindrome("1 eye for of 1 eye.") //应该返回 false.
palindrome("0_0 (: /-\ :) 0-0") //应该返回 true.