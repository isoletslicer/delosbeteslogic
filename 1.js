function calculateFine(expectedDate, returnedDate) {
    // parse string to int
    let [d1, m1, y1] = expectedDate.split(' ').map(x => parseInt(x));
    let [d2, m2, y2] = returnedDate.split(' ').map(x => parseInt(x));
    // check diff year
    if (y1 < y2) {
        return 12000;
    } else if (y1 === y2) {
        // check same year, diff month
        if (m1 < m2) {
            return (m2 - m1) * 500;
        } else if (m1 === m2) {
            // check same month, diff day
            if (d1 < d2) {
                return (d2 - d1) * 15;
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}


console.log(calculateFine("7 6 2022", "19 8 2022"));
console.log(calculateFine("15 8 2022", "22 8 2022"));
