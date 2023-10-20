// const seriesSum = num => {
// 	let N = 0;
// 	for (let i = 1; i <= num; i++) {
// 		N += i;
// 	}
// 	return N;
// };

// const res = seriesSum(1);
// console.log(res);

///////////////////////////////////////////value equal to index

// let arr = [21, 22, 2, 24, 4, 25];

// const valueEqualstoindex = arr => {
// 	let n = [];
// 	for (let i = 0; i <= arr.length; i++) {
// 		if (i === arr[i]) n.push(arr[i]);
// 	}
// 	return n;
// };

// let res = valueEqualstoindex(arr);
// console.log(res);

////////////////////////////////////////////////////////sum of array elements

// let arr = [1, 2, 3, 4, 5, 6, 7];

// const sumOfarrayele = ar => {
// 	let sum = 0;
// 	for (let i = 0; i <= ar.length; i++) {
// 		console.log(i, ar[i]);
// 		sum += i;
// 	}
// 	console.log(sum);
// };

// sumOfarrayele(arr);
///////////////////////////////////////////////////////// alternamt element of an array
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const alternateArr = ar => {
// 	let n = [];
// 	for (let i = 0; i < ar.length; i++) {
// 		if (i % 2 == 0) {
// 			n.push(ar[i]);
// 		}
// 	}
// 	console.log(n);
// };
// alternateArr(arr);

///////////////////////////////////////////////////////////with out loop have to print input=10 output=>1,2,3,,5,6,7,8,9,10

// var input = 10;

// const printN = num => {
// 	if (num > 0) {              ////////////////////*******************///////////////
// 		printN(num - 1);
// 		console.log(num);
// 	}
// };
// printN(10);
/////////////////////////////////////////////////in array whether all are plindrome return 1 else return 0

///////////////////////////////////////////////////////// I->3 o-> 333222111

// var myinterval = null;
// var counter = 0;

// function startCounter() {
// 	function count() {
// 		counter++;
// 		console.log(counter);

// 		if (counter === 7) {
// 			clearInterval(myinterval);
// 			myinterval = null;
// 		}
// 	}
// 	if (!myinterval) {
// 		myinterval = setInterval(count, 1000);
// 	}
// }
// startCounter();

////////////////////////////////////////

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let res = arr.filter(e => e % 2 == 0);
// console.log(res);

// console.log(a);

let a = 10;
console.log(a);

var b = 100;
