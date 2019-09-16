function titleCase(str) {
  // 请把你的代码写在这里
  var arr = str.split(' ');
  console.log(arr);
  arr = arr.map(s => { 
      let a = s.toLowerCase().split('')
      console.log(a)
      a[0] = a[0].toUpperCase()
      s = a.join('')
      return s
  });
  console.log(arr);
  //需要两次join，因为使用了两次split
  return arr.join('');
}


titleCase("I'm a little tea pot");

const capitalize = ([first,...rest], lowerRest = false) =>
first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));