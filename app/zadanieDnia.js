//Twój kod


function indexCheck(index) {
    return index > 0
}


let newArr = process.argv.filter(indexCheck);


// console.log(newArr);

function sort(element, index) {
    setTimeout(() => {
        console.log(element)
    },Number(element)*1000)
}


newArr.forEach(sort)