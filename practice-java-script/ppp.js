///-----------------------> Hoisting
// console.log(test);
// console.log(x);
// var x = 8;

// let test = function test() {
// 	console.log("hi this is rujith");
// };

///---------------------------------------------> Scope Chain

// function a() {
// 	function c() {
// 		console.log(x);
// 	}
// 	c();
// }

// let x = 6;
// a();

///------------------------------------------------let,const

// let a = 10;
// console.log(a);
// var b = 100;

///------------------------------Block Scope

// let x = 101;
// {
// 	var a = 10;
// 	let b = 100;
// 	const c = 1000;
// }

// console.log(a);
// console.log(b);
// console.log(c);

///----------------------------------Closures

// function x() {
// 	var a = 10;
// 	function y() {
// 		console.log(a);
// 	}
// 	y();
// }

// x();

//-----------closures with setTimeout()

// function x() {
// 	// var i = 10;
// 	for (var i = 1; i <= 5; i++) {
// 		function close(i) {
// 			setTimeout(() => {
// 				console.log(i);
// 			}, i * 1000);
// 		}

// 		close(i);
// 	}
// 	console.log("rujith");
// }

// x();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//--------------> Prayogam

// callback functions example

function add(a, b) {
	console.log(a + b);
}

function pro(a, b) {
	console.log(a * b);
}

function calc(v1, v2, oper) {
	oper(v1, v2);
}

calc(5, 4, add);
