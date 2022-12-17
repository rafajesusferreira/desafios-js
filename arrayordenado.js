let arr = [5, 1, 2, 4, 7, 9];
let arrVazio = [];

arr.forEach((item) => {
    if (item % 2 == 0) {
        arrVazio.unshift(item)
    } else {
        arrVazio.push(item)
    }
})

console.log(arrVazio);
