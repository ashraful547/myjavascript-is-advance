





const students = [
    {id: 21, name: 'omor sunny'},
    {id: 32, name: 'mannaaaaa'},
    {id: 41, name: 'Moyori khan'},
    {id: 71, name: ' Deepjol khan'},
    {id: 81, name: 'omor khan'},
];
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);
