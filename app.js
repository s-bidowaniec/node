const fs = require('fs')
// data
const genders = ['M', 'F']
const maleNames = ['Liam', 'Noah','Oliver','Elijah','James','William','Benjamin','Lucas']
const femaleNames = ['Olivia','Emma','Charlotte','Amelia','Ava','Sophia','Isabella','Mia']
const lastNames = ['Baltimore', 'Biffle', 'Biffle', 'Canine', 'Chia', 'Christianson', 'Courtland', 'Crownover', 'Daughenbaugh', 'Dimick', 'Dollar', 'Easterlin', 'Easterlin', 'Felch']
const people = []
//helpers
const randChoice = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)]
}
const getAge = () => {
    return Math.floor(Math.random()*58)+18
}
// people generator
for (let i = 0; i < 20; i++){
    const gender = randChoice(genders)
    let name
    switch (gender) {
        case 'M':
            name = randChoice(maleNames)
        case 'F':
            name = randChoice(femaleNames)
    }
    const lastName = randChoice(lastNames)
    const age = getAge()
    people.push({gender, name, lastName, age})
}
// save to file
const data = JSON.stringify(people)
fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});