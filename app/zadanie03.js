//Twój kod



// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// });


// let sum = Number(process.argv[2]) + Number(process.argv[3]);
//
//
// console.log(sum);



// DODATKOWE


function indexCheck(index) {
    return index > 0
}


let newArr = process.argv.filter(indexCheck);


console.log(newArr);

console.log(newArr.reduce((a, b) => {
    return Number(a)+ Number(b)
}));