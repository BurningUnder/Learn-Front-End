/* 将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。

如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

RegExp
HTML Entities */

function convert(str) {
    var regObj = {
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      '"':"&quot;",
      "'":"&apos;"
    };
    var reg = /[&<>"']/g;
  
    var arr = str.match(reg);
    console.log(arr)
    // 原来这里用的是for..in..循环，但写法略有不同，获取的是index值，
    if(arr){
      for(var i of arr){
        str = str.replace(i,regObj[i]);
      }
    }
    return str;
  }
  
  console.log(convert("Dolce & Gabbana"));
  