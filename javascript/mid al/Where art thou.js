/* 
写一个 function，它遍历一个对象数组（第一个参数）并
返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。
如果返回的数组中包含 source 对象的属性-值对，
那么此对象的每一个属性-值对都必须存在于 collection 的对象中。

例如，如果第一个参数是 [{ first: "Romeo", last: "Montague" }, 
                    { first: "Mercutio", last: null }, 
                    { first: "Tybalt", last: "Capulet" }]，
第二个参数是 { last: "Capulet" }，那么你必须从数组（第一个参数）返回其中的第三个对象，
因为它包含了作为第二个参数传递的属性-值对。

如果你被难住了，记得使用 Read-Search-Ask编写你自己的代码。

这是一些对你有帮助的资源:

Global Object
Object.hasOwnProperty()
Object.keys() */

function where(collection, source) {
    var arr = [];
    // What's in a name?
    var keyName = Object.keys(source);
    //keys得到的是source对象里的所有可枚举属性组成的数组
    var value = Object.values(source);
    //values得到source对象里所有可枚举属性值的数组
    console.log(keyName, value);

    arr = collection.filter((obj) => {
        for (const key of keyName) {
            //console.log(key,keyName.indexOf(key));
            if (!obj.hasOwnProperty(key))
                return false;
            let indexOfkey = keyName.indexOf(key);
            if (obj[key] !== value[indexOfkey])
                return false;
        }
        return true;
    });
    return arr;
}



console.log(where([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
}));


console.log(where([{
    "a": 1,
    "b": 2
}, {
    "a": 1
}, {
    "a": 1,
    "b": 2,
    "c": 2
}], {
    "a": 1,
    "b": 2
}));