const numbers = [3, 2, 5, 6, 5, 8];
// const output = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);



function square (element){
    return element * element;
}
numbers.map(function(element, index, array){
    console.log(element, index, array);
})

// console.log(output);