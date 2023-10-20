// var s = {
// 	name: "David Rayy",
// 	sclass: "VI",
// 	rollno: 12,
// };

// res = [];

// for (let i in s) {
// 	res.push(s[i]);
// }

// console.log(res);

// const student = {
// 	name: "John",
// 	age: 20,
// 	marks: {
// 		science: 70,
// 		math: 75,
// 	},
// };

// console.log(student["marks"]["math"]);

// using object lateral
// let person = {
// 	name: "Sam",
// };

// let person1 = person;
// console.log(person1.name);

// person1.age = 21;

// console.log(person1);

// // constructor function
// function Person() {
// 	(this.name = "John"), (this.age = 23);
// }

// let pers1 = new Person();

// pers1.name = "rujith";

// console.log(Person);

///////////////////////////////////////////////////////////////////////

// var s = {
// 	name: "David Rayy",
// 	sclass: "VI",
// 	rollno: 12,
// };

// delete s.rollno;

// console.log(s);

// to find length of an objectt

// let len = 0;

// for (let i in s) {
// 	len += 1;
// }

// console.log(len);

///////////////////////////////////////////////////////
// var library = [
// 	{
// 		author: "Bill Gates",
// 		title: "The Road Ahead",
// 		readingStatus: true,
// 	},
// 	{
// 		author: "Steve Jobs",
// 		title: "Walter Isaacson",
// 		readingStatus: true,
// 	},
// 	{
// 		author: "Suzanne Collins",
// 		title: "Mockingjay: The Final Book of The Hunger Games",
// 		readingStatus: false,
// 	},
// ];

// for (let i in library) {
// 	console.log(library[i]);
// 	for (let j in i) {
// 		console.log(i[j]);
// 	}
// }

//////////////////////////////////////

/////////////////////////////////////////////////// factorial of a number //////////////////////////////

var library = {
	title: "The Road Ahead",
	author: "Bill Gates",
	libraryID: 1254,
};

for (let i in library) {
	console.log(library[i]);
}
