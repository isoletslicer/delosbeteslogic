function findElement(len, arr) {
    len = Number(len);
    arr = arr.split(" ").map(Number);

    // check length
    if (len !== arr.length) {
        return "NO";
    }

    let leftSum = 0;
    let rightSum = arr.reduce((a, b) => a + b, 0);
    for (let i = 0; i < len; i++) {
        rightSum -= arr[i];
        if (leftSum === rightSum) {
            return 'YES';
        }
        leftSum += arr[i];
    }
    return 'NO';
}
console.log(findElement(5, '1 5 7 2 4'));
console.log(findElement(4, '1 3 4 9'));

console.log(findElement(5, '1 1 4 1 1'));
console.log(findElement(4, '2 0 0 0'));
console.log(findElement(4, '0 0 2 0'));
