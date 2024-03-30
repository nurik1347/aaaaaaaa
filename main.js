let array = [2, 4, 9, 10, 45, 67, 8, 90]
let array1 = []
console.log(array);
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        array1.push(array[i]);
    }
}
console.log(array1);



