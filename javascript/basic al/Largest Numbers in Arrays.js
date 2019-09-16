function largestOfFour(arr) {
    // 请把你的代码写在这里
    let tag = 0;
    var answer = [];
    for(const a of arr){
        tag = a[0]
        for (const num of a) {
            if(num>tag){
                tag = num
            }
        }
        answer.push(tag)
    }
    return answer;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);
console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]))