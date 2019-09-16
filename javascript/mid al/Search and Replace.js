/* 使用给定的参数对句子执行一次查找和替换，然后返回新句子。

第一个参数是将要对其执行查找和替换的句子。
第二个参数是将被替换掉的单词（替换前的单词）。
第三个参数用于替换第二个参数（替换后的单词）。

注意：替换时保持原单词的大小写。例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。

如果你被难住了，记得使用 Read-Search-Ask尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

Array.splice()
String.replace()
Array.join() */
function myReplace(str, before, after) {

    var upCase = (before.split('')[0].match(/[A-Z]/) !== null);
    console.log(upCase);

    function replacer(match) {
        return match.toUpperCase();
    }
    if (upCase) {
        var re_after = after.replace(/[a-z]/, replacer);
        console.log(re_after);
        return str.replace(before, re_after);
    }

    return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));