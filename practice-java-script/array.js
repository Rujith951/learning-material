////////////////////////Aray quesions////////////////////////

/////////////////// finding is array or not
// function Ac(s) {
// 	if (toString.call(s) == "[object Array]") console.log("yes");
// 	else console.log("no");
// }
// Ac([1, 2, 3]);

//////////////////////////////////

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr2 = [9, 10, 11, 12, 13, 14, 15];
// let arr3 = ["apple", "banana", "orange", "grapes"];

// console.log(arr.entries());
//////////////////////////////////////////////////////////

/// filter ---> returns new array

// function evenF(ele) {
// 	if (ele % 2 == 0) return true;
// 	return false;
// }

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var newarray = arr.filter(evenF);

// console.log("filter", newarray);
////////////////////////////////////////////////////////
// function evenM(ele) {
// 	if (ele % 2 == 0) return true;
// 	return false;
// }
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newarr = arr.map(evenM);
// console.log("map", newarr);
///////////////////////////////////////////////////////

// function evenFE(ele) {
// 	console.log(ele + 1);
// }

// var arr = [1, 2, 3, 4, 5];

// arr.forEach(evenFE);
////////////////////////////////////////////////////

// function ne(A, n = 0) {
// 	let res = [];
// 	if (n <= 0) {
// 		// res.push(A[0]);
// 		console.log(A[0]);
// 	}
// 	for (let i = 0; i <= n - 1; i++) {
// 		res.push(A[i]);
// 	}
// 	if (n > 0) {
// 		return res;
// 	}
// }

// let res = ne([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
// console.log(res);
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// function FE(s, n) {
// 	if (n == null) {
// 		console.log(s[0]);
// 	} else if (n <= 0) {
// 		console.log([]);
// 	} else {
// 		let res = [];
// 		for (let i = 0; i <= n - 1; i++) {
// 			res.push(s[i]);
// 		}
// 		console.log(res);
// 	}
// }

// FE([1, 2, 3, 4, 5, 6, 7, 8]);

///////////////////////////////////////////////////////

// function LE(s, n) {
// 	if (n == null) {
// 		console.log(s[s.length - 1]);
// 	} else if (n <= 0) {
// 		console.log([]);
// 	} else {
// 		let res = [];
// 		for (let i = 0; i <= n - 1; i++) {
// 			res.push(s.slice(n - 1));
// 		}
// 		console.log(res[0]);
// 	}
// }

// LE([1, 2, 3, 4, 5, 6, 7, 8]);

//////////////////////////////////////////////////////////

// function ES(l) {
// 	// console.log(l.join(","));
// 	let res = "";
// 	for (let i = 0; i <= l.length - 1; i++) {
// 		res += l[i] + ",";
// 	}
// 	console.log(res);
// }
// ES(["rujith", "ramu", "rupesh", "lakshman"]);

/////////////////////////////////////////////////////////////
/////////////////////// FREQUENCY OF ARRAY ELEMENTS //////////////////////

/////---> using for loop

// let arr = [1, 2, 3, 2, 3, 4, 5, 5, 6, 1, 1, 4, 5, , 11, 7, 8, 8];

// let count = {};

// for (let i = 0; i <= arr.length - 1; i++) {
// 	if (count[arr[i]]) {
// 		count[arr[i]] += 1;
// 	} else {
// 		count[arr[i]] = 1;
// 	}
// }

// console.log(count);

/////----> using filter method / by using filter we want to pass argument to know how many times it occurs in array

// let arr = [1, 2, 3, 2, 3, 4, 5, 5, 6, 1, 1, 4, 5, , 11, 7, 8, 8];

// function count(arr, element) {
// 	return arr.filter(ele => ele === element).length;
// return arr.filter(ele => {
// 	return ele == element;
// });
// }

// console.log(count(arr, 1));
// let res = count(arr, 1);
// console.log(res.length);

// console.log(count(arr, 1).length);

//////------>using reduce method

// let arr = [1, 2, 3, 2, 3, 4, 5, 5, 6, 1, 1, 4, 5, , 11, 7, 8, 8];

// function count(arr, n) {
// 	// return are.reduce((acc, currele) => {
// 	// 	return currele == n ? acc + 1 : acc;
// 	// }, 0);

// 	return arr.reduce((ele, arrayele) => (arrayele == n ? ele + 1 : ele), 0);
// }

// console.log(arr, 1);

//////----> using for-of-loop
/////////////////////////////////////////////////////////////////////////
// let arr = [1, 2, 3, 2, 3, 4, 5, 5, 6, 1, 1, 4, 5, , 11, 7, 8, 8];

// let count = {};

// for (let i of arr) {
// 	if (count[i]) count[i] += 1;
// 	else count[i] = 1;
// }

// console.log(count);
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// to swap characters of string
//

// function swapp(s) {
// 	let res = "";

// 	for (let i of s) {
// 		if (i == i.toUpperCase()) res += i.toLowerCase();
// 		else res += i.toUpperCase();
// 	}
// 	console.log(res);
// }
// swapp("The Quick Brown Fox");

///////////////////////////////////////////want to print elements in nested arrays/////

// var a = [
// 	[1, 2, 1, 24],
// 	[8, 11, 9, 4],
// 	[7, 0, 7, 27],
// 	[7, 4, 28, 14],
// 	[3, 10, 26, 7],
// ];

// for (let i of a.flat()) {/////////////------------> flat() method used to get new array  from its subarrays
// 	console.log(i);
// }

// for (let i in a) {
// 	for (let j in a[i]) {
// 		console.log(a[i][j]);
// 	}
// }

/////////////////////////////////////////

// let arr = [0, 1, 2, 3, 4];

// let sum = 0;
// let i = arr.length;

// while (i--) {
// 	sum += Math.pow(arr[i], 2);
// }

// console.log(sum);

///////////////////////////////////////sum of all ele in array

// let arr = [1, 2, 3, 4, 5];
// let res = 0;
// for (let i = 0; i <= arr.length - 1; i++) {
// 	res += arr[i];
// }
// console.log(res);

///////////////////////////////////////// removing dulicate ele from arr

//--->> filter(), set(), reduce(), indexOf(), forEach(),

//normal method---->

// var arr = [1, 2, 3, 1, 4, 5, 3, 2, 4, 5, 6, 7, 8, 9, 2];
// var newarr = [];
// for (let i = 0; i <= arr.length - 1; i++) {
// 	if (arr[i] in newarr) {
// 		continue;
// 	} else {
// 		newarr.push(arr[i]);
// 	}
// }
// console.log(newarr);

//---------> filter()

// let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

// function original(arr) {
// 	return arr.filter((itm, ind) => arr.indexOf(itm) === ind);
// }
// console.log(original(arr));
//           in above indexOf() accepts only first occurence of items index

// --------> set()

// let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

// function dupliR(arr) {
// 	return [...new Set(arr)];
// }

// console.log(dupliR(arr));

//-------> forEach()

// let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

// function noDupli(arr) {
// 	let unique = [];
// 	return arr.forEach(itm => {
// 		if (!unique.includes(itm)) {
// 			unique.push(itm);
// 		}
// 	});
// 	return unique;
// }
// console.log(noDupli(arr));

//------------------> reduce()
// function noDube(arr) {
// 	let unique = arr.reduce((acc, curr) => {
// 		if (!acc.includes(curr)) {
// 			acc.push(curr);
// 		}
// 		return acc;
// 	}, []);
// 	return unique;
// }

// console.log(noDube(arr));

////////////////////////////////////// leap year

// function leap(n1, n2) {
// 	let leap_years = [];
// 	for (let i = n1; i <= n2; i++) {
// 		if (i % 4 == 0 || i % 400 == 0) {
// 			leap_years.push(i);
// 		}
// 	}
// 	return leap_years;
// }

// console.log(leap(2002, 2200));

///////////////////////////////////////////shuffeling an array

// function shuffel(arr) {
// 	for (let i = arr.length - 1; i > 0; i--) {
// 		let j = Math.floor(Math.random() * (i + 1));

// 		let temp = arr[i];
// 		arr[i] = arr[j];
// 		arr[j] = temp;
// 	}
// 	return arr;
// }

// console.log(shuffel([1, 2, 3, 4, 5]));

/////////////////////////////////// find pair of elements in an erray which match specified value

// function pair(arr, n) {
// 	for (let i of arr) {
// 		for (let j in arr) {
// 			if (i + arr[j] == n) {
// 				console.log("first loop", arr.indexOf(i), "second loop", j);
// 			}
// 		}
// 	}
// }

// console.log(pair([10, 20, 40, 50, 60], 50))

/////////////////////////// duplicate

// let arr = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];
// let newarr = [];

// for (let i of arr) {
// 	if (newarr.indexOf(i) === -1) {  //////////////---> useing for loop
// 		newarr.push(i);
// 	}
// }
// console.log(newarr);

//------------------> filter() to remove duplicate

// let arr = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];
// let res = arr.filter((itm, ind) => arr.indexOf(itm) === ind);

// console.log(res);

// let arrrr = [1, 2, 3, 4, 5, 6, 1, 1, 2];
// console.log(arrrr.indexOf(3));

//------------------------------> Set()

// let arr = [1, 2, 3, 4, 5, 6, 1, 1, 2];
// console.log([...new Set(arr)]);

//---------------------------------> forEach()

// let arr = [1, 2, 3, 4, 5, 6, 1, 1, 2];

// arr.forEach(itm => {
// 	if (!newarr.includes(itm)) {
// 		newarr.push(itm);
// 	}
// });
// console.log(newarr);

//---reduce()

// let res = arr.reduce((acc, curr) => {
// 	if (!acc.includes(curr)) {
// 		acc.push(curr);
// 	}
// 	return acc;
// }, []);

// console.log(res);

////////////////////////////// flattend an nested array

// var student1 = {
// 	name: "Manish",
// 	company: "Gfg",
// };

// var student2 = student1;

// student1.name = "Rakesh";

// console.log("student 1 name is", student1.name);
// console.log("student 2 name is ", student2.name);

// ////////////////////////////////////////////////

// var student1 = {
// 	name: "Manish",
// 	company: "Gfg",
// };

// var student2 = { ...student1 };

// student1.name = "Rakesh";

// console.log("student 1 name is", student1.name);
// console.log("student 2 name is ", student2.name);

//////////////////////// normal forloop

// function steamrollArray(array) {
// 	var flatArray = [];

// 	flatten(array);

// 	function flatten(array) {
// 		for (var i = 0; i < array.length; i++) {
// 			if (Array.isArray(array[i])) {
// 				flatten(array[i]);
// 			} else {
// 				flatArray.push(array[i]);
// 			}
// 		}
// 	}

// 	return flatArray;
// }
// console.log(steamrollArray([1, [2], [3, [[4]]]]));

///////////////////////-------------------////////////////////

// let arr = [1, [2, 3], 4, [5, 6, 7]];

// function flatten(arr) {
// 	let res = [];
// 	for (let i of arr) {
// 		if (Array.isArray(i)) {
// 			flatten(i);
// 		} else {
// 			res.push(i);
// 		}
// 	}
// 	console.log(res);
// }

// flatten(arr);

///////////////////////////////////////

// let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

// let newarr = [];

// for (let i of arr) {
// 	if (i in newarr) {
// 		continue;
// 	} else {
// 		newarr.push(i);
// 	}
// }

// console.log(newarr);

////////////////////////////////// factorial //////////////////////

// let num = 3;

// let fac = 1;

// for (let i = 1; i <= num; i++) {
// 	fac *= i;
// }

// console.log(fac);

///////////////////////////////// prime number ////////////////////

// let num = 4;

// let isprime = true;

// if (num === 1) {
// 	console.log("1 is either prime or not");
// } else if (num > 0) {
// 	for (let i = 2; i <= num - 1; i++) {
// 		if (num % i == 0) {
// 			isprime = false;
// 			break;
// 		}
// 	}
// }

// if (isprime) {
// 	console.log("is prime");
// } else {
// 	console.log("not prime");
// }

////////////////////////////////////////////////////////////////////////////

// let arr = [1, "rujith", true, { name: "rujith", nickname: "ramu" }];

// for (let i of arr) {
// 	if (typeof i === "object") {
// 		for (let j in i) {
// 			console.log(i[j]);
// 		}
// 	} else {
// 		console.log(i);
// 	}
// }

///////////////////// to find arrays elements index

// const arr = ["apple", "banana", "cherry", "orange"];
// N = "cherry";

// for (let i in arr) {
// 	if (arr[i] == N) {
// 		console.log(i);
// 	}
// }

////////////////////////////////////// first n number of elements

// const arr = [1, 2, 3, 4, 5, 6];
// const n = 3;

// console.log(arr.slice(0, n));

// let newarr = [];
// for (let i = 0; i <= n - 1; i++) {
// 	newarr.push(arr[i]);
// }
// console.log(newarr);

// let res = arr.splice(3);
// console.log(arr);

///////////////////creating object from two arrays

// const Array1 = [1, 2, 3, 4, 5];
// const Array2 = ["ram", "shyam", "sita", "gita", "rujith", "ramu"];

////--------> for loop
// const obj = {};
// for (let i in Array1) {
// 	for (let j in Array2) {
// 		if (i == j) {
// 			obj[Array1[i]] = Array2[j];
// 		}
// 	}
// }

// console.log(obj);

////--------> for-each()

/////////////////////////////////////////////////////////////// fill an array

// let myArray = new Array(10);
// console.log(myArray);

// for (let i = 0; i <= myArray.length - 1; i++) {
// 	myArray[i] = "rujiht";
// }

// console.log(myArray);

//////////////////////////////////////////////// array in another array of objects

// input = [
// 	[
// 		[100, 100, 100],
// 		[100, 100, 98, 50],
// 		[100, 100, 100, 20],
// 	],
// 	[
// 		[100, 100, 100, 99],
// 		[100, 100, 100, 100],
// 	],
// ];

// const res2 = [];
// for (let i of input) {
// 	for (let j of i) {
// 		let res1 = [];
// 		let obj = {};
// 		let total = 0;
// 		for (let k in j) {
// 			total += k;
// 			obj[total] = total;
// 		}
// 		res1.push(total);
// 		total = 0;
// 	}
// 	res2.push(res1);
// }

// console.log(res2);

////////////////////////////////////////////////////////////////////////////////////
//----------> array containg multiple objects and accessing properties <----------//
///////////////////////////////////////////////////////////////////////////////////

// const arr = [
// 	{
// 		name: "saritha",
// 		subject: "Maths",
// 	},
// 	{
// 		name: "ahim",
// 		subject: "science",
// 	},
// 	{
// 		name: "sneha",
// 		subject: "Social",
// 	},
// ];

//--------------------------> for in loop
// for (let i of arr) {
// 	for (let j in i) {
// 		console.log(i[j]);
// 	}
// }

//----------------------------------------->forEach()
// arr.forEach((ele, ind, arr) => {
// 	for (let i in ele) {
// 		console.log(i);
// 	}
// });

//------------------------------------------------->Object.keys()

// for (let i in Object.keys(arr)) {
// 	console.log("i", i);
// 	for (let key in arr[i]) {
// 		console.log("key", key);
// 	}
// }

//------------------------------------------>object.values()

// for (let val of Object.values(arr)) {
// 	console.log("val", val);
// 	for (let v in val) {
// 		console.log(val[v]);
// 	}
// }

/////////////////////////////////////////////////////////////////////////////////////////--------------------> distinct vlues from an array of objects <-------------------//

// let arr = [
// 	{ name: "Ram", age: 17 },
// 	{ name: "Shyam", age: 17 },
// 	{ name: "Mohan", age: 30 },
// ];

// let res = [];
// for (let i of arr) {
// 	if (!res.includes(i.age)) {
// 		res.push(i.age);
// 	}
// }
// console.log(res);

/////////////////////////////////////////////////////////////////////////////////////////----------------------->Removing duplicate ele from array <------------------------//

// let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

//---------------> my own

// const res = [];

// for (let i of arr) {
// 	if (res.includes(i)) {
// 		continue;
// 	} else {
// 		res.push(i);
// 	}
// }
// console.log(res);

//----------------> filter()-----**

// var res = arr.filter((itm, ind) => {
// 	return arr.indexOf(itm) === ind;
// });

// console.log(res);

//-----------------------> set()

// let res = []
// for (let i of arr) {

// }

/////////////////////////////////

// let test = 1;

// do {
// 	console.log(test);
// 	test++;
// } while (test <= 5);

////////////////////////////////////////////////////////////////////////////

// let arr = [1, 3, 4, 6, 9, 7, 2, 5];

// arr.sort((a, b) => {
// 	return a - b;
// });
// console.log(arr);

//////////////////////////////////////////////////////////////////////////
//////////////////////////-----------> reverseing an array or string

// let arr = ["rujith", "ramu", "rupesh", "lakshman", "amma", "daddy"];

// console.log(arr.length);

// let res = [];

// for (let i = 1; i <= arr.length; i++) {
// 	res.push(arr[arr.length - i]);
// }

// console.log(res);

///////////////////////////////////////////////////////////////////////
//////////////////

//----------array rotating n tims-----------//

// let arr = [1, 2, 3, 4, 5];

// let n = 6;

// for (let i = 1; i <= n; i++) {
// 	let ls = arr.pop();
// 	arr.unshift(ls);
// }

// console.log(arr);

//----------------array revesing n times----------------//

// let arr = [1, 2, 3, 4, 5];

// let narr = [];

// for (let i = arr.length - 1; i >= 0; i--) {
// 	narr.push(arr[i]);
// }
// console.log(narr);

////////////////////////////////////////////////////////////////////////////// flatting array

// let arr = [1, 2, 3, [4, 5, [6, 7, [8]]]];
// let arr = [1, 2, [3]];

// function flatten(arr) {
// 	let narr = [];
// 	for (let i of arr) {
// 		if (typeof i === "number") {
// 			narr.push(i);
// 		} else {
// 			const r = flatten(i);
// 			narr = [...narr, ...r];
// 		}
// 	}
// 	return narr;
// }
// console.log(flatten(arr));

////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////--------------------practing-------------------///////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

//------------second largest
// let arr = [18, 111, 17, 19, 3, 6, 7, 16, 9, 10, 4, 15, 2, 5];
// let fl = -Infinity;
// let sl = -Infinity;

// for (let i of arr) {
// 	if (i > fl) {
// 		sl = fl;
// 		fl = i;
// 	}
// 	if (i < fl && i > sl) sl = i;
// }

// console.log(sl);

//------------> find an element in ana array

// const isEleP = (arr, e) => e in arr;
// console.log(isEleP(arr, 5));

////////////////---------->removing duplicates

// let arr = [1, 2, 4, 6, 8, 5, 2, 2, 1, 9, 6];

// function Rdupli(arr) {
// 	let narr = [];
// 	for (let i of arr) {
// 		if (i in narr) {
// 			continue;
// 		} else {
// 			narr.push(i);
// 		}
// 	}
// 	return narr;
// }

// console.log(Rdupli(arr));

//////////////////////////////////////////////////////////////////////////////////

// function desToBin(num) {
// 	let bN = [];
// 	// let res = "";
// 	while (num !== 0) {
// 		let r = num % 2;
// 		bN.push(r);
// 		num = Math.floor(num / 2);
// 	}

// 	// for (let i = bN.length - 1; i >= 0; i--) {
// 	// 	res += String(bN[i]);
// 	// }

// 	// return res;
// 	return bN.reverse().join("");
// }

// console.log(desToBin(16));
////////////////////////////////////////////////////
///=----------------------array flattening

// let arr = [1, 2, [5, 6, [7, 8]]];

// function flatten(arr) {
// 	let narr = [];
// 	for (let i of arr) {
// 		if (i instanceof Array) {
// 			narr = [...narr, ...flatten(i)];
// 		} else {
// 			narr.push(i);
// 		}
// 	}
// 	return narr;
// }

// console.log(flatten(arr));
////////////////////////////////////////////////////////////////////////-----------------object destucturing
// const person = {
// 	name: "rujith",
// 	age: 22,
// 	address: {
// 		street: "123567890",
// 	},
// 	hobbies: ["eating"],
// };

// function getAllKeys(obj) {
// 	let res = [];
// 	for (let key in obj) {
// 		if (obj[key] instanceof Object && !Array.isArray(obj[key])) {
// 			let rr = getAllKeys(obj[key]);
// 			res = [...res, key, ...rr];
// 		} else {
// 			res = [...res, key];
// 		}
// 	}
// 	return res;
// }

// console.log(getAllKeys(person));

// let obj = {
// 	car: "lambrgini",
// 	features: {
// 		speed: "180k/hr",
// 		avgSpeed: "150k/hr",
// 		model: 280,
// 	},
// 	country: "spain",
// 	address: {
// 		village: "achuthapuram",
// 		mandal: "nizampatnam",
// 	},
// 	ratting: ["super"],
// };

// function objD(obj) {
// 	let res = [];
// 	for (let key in obj) {
// 		if (obj[key] instanceof Object && !Array.isArray(obj[key])) {
// 			let r = objD(obj[key]);
// 			res = [...res, key, ...r];
// 		} else {
// 			res = [...res, key];
// 		}
// 	}
// 	return res;
// }

// console.log(objD(obj));

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// second smallest number////////////////////////////

// let arr = [2, 5, 3, 1, 4, 7, 8, 9, 10];

// let fs = Infinity;
// let ss = Infinity;

// for (let i of arr) {
// 	if (i < fs) {
// 		ss = fs;
// 		fs = i;
// 	} else if (i > fs && i < ss) ss = i;
// }

// console.log(ss);

/// ---------------operation on sl

// let arr = [5, 6, 3, 4];

// fl = -Infinity;
// sl = -Infinity;

// for (let i of arr) {
// 	if (i > fl) {
// 		sl = fl;
// 		fl = i;
// 	} else if (i < fl && i > sl) sl = i;
// }

// console.log(sl);

///------------------- operations on sm

// let arr = [5, 6, 3, 4];

// let fs = Infinity;
// let ss = Infinity;

// for (let i of arr) {
// 	if (i < fs) {
// 		ss = fs;
// 		fs = i;
// 	} else if (i > fs && i < ss) ss = i;
// }

// console.log(ss);
//////////////////////////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---------------duplicte removing
// let arr = [2, 3, 4, 5, 1, 7, 6, 8, 10, 15, 2, 6, 3, 8, 1, 9, 10];

// let res = [];

// for (let i of arr) {
// 	if (i in res) {
// 		continue;
// 	} else {
// 		res.push(i);
// 	}
// }

// let res = arr.filter((i, ind) => {
// 	return arr.indexOf(i) === ind;
// });

// console.log(res);

///---------------->array flattning

// let arr = [1, 2, [5, 6, [7, 8]]];

// function flattenA(arr) {
// 	let res = [];
// 	for (let i of arr) {
// 		if (i instanceof Array) {
// 			let r = flattenA(i);
// 			res = [...res, ...r];
// 		} else {
// 			res.push(i);
// 		}
// 	}
// 	return res;
// }

// console.log(flattenA(arr));

///--------------------------object destucturing

// const person = {
// 	name: "rujith",
// 	age: 22,
// 	address: {
// 		street: "123567890",
// 	},
// 	hobbies: ["eating"],
// };

// function objDes(obj) {
// 	let res = [];
// 	for (let i in obj) {
// 		if (obj[i] instanceof Object && !Array.isArray(obj[i])) {
// 			let r = objDes(obj[i]);
// 			res = [...res, i, ...r];
// 		} else {
// 			res = [...res, i];
// 		}
// 	}
// 	return res;
// }

// console.log(objDes(person));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////--------------->prime number

// let num = 13;
// let isprime = true;

// if (num === 1) console.log("1 is either prime or composite number");
// else if (num > 1) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			isprime = false;
// 			break;
// 		}
// 	}
// }

// if (isprime) {
// 	console.log("is prime");
// } else {
// 	console.log("not prime");
// }
///////////////       ///////////////        /////////////       ////////////
//////////////////////// object destructuring ///////////////////////////////

// const person = {
// 	name: "rujith",
// 	age: 22,
// 	address: {
// 		street: "123567890",
// 	},
// 	hobbies: ["eating"],
// };

// function desturc(obj) {
// 	let res = [];
// 	for (let key in obj) {
// 		if (obj[key] instanceof Object && !Array.isArray(obj[key])) {
// 			let r = desturc(obj[key]);
// 			res = [...res, key, ...r];
// 		} else {
// 			res = [...res, key];
// 		}
// 	}
// 	return res;
// }

// console.log(desturc(person));

/////////---------------flatting an array

let arr = [1, 2, 3, [4, 5, [6, 7, [8]]]];

function flatten(arr) {
	let narr = [];
	for (let i of arr) {
		// if (typeof i === "number") {
		// 	narr = [...narr, i];
		// }
		if (i instanceof Number) {
			narr = [...narr, i];
		} else {
			let res = flatten(i);
			narr = [...narr, ...res];
		}
	}
	return narr;
}

console.log(flatten(arr));
