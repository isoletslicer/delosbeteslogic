function sourCandy(input) {
    let [students, candies, first] = input.split(' ').map(x => parseInt(x));
    return (first + candies - 2) % students + 1;
}
console.log(sourCandy("352926151 380324688 94730870"));
console.log(sourCandy("5 3 1"));