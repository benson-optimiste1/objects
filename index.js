const person = {
    firstName: "Todd",
    age: 28
}
// print the person's name 
console.log(person.firstName)

// add one to the person's age
person.age++



person.lastName = "Albert" // Add a new property to the object
/* 
const person = {
    firstName: "Todd"
    lastName: "Albert"
    age: 29
}
*/
console.log(person.lastName)
console.log(person.age)

const c12 = [
    {firstName: "Michael", lastName: "Fisher", age: "35"},
    {firstName: "Jean", lastName: "Michel", age: "35"},
    {firstName: "Michael", lastName: "Fisher", age: "35"},
    {firstName: "Michael", lastName: "Fisher", age: "35"},
    {firstName: "Michael", lastName: "Fisher", age: "35"}
]
console.log(c12[3].age)
