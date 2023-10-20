// var today = new Date();

// var hou = today.getHours();
// var min = today.getMinutes();
// var sec = today.getSeconds();

// var prepand = hou >= 12 ? "PM" : "AM";
// hou = hou >= 12 ? hou - 12 : hou;

// if (hou === 0 && prepand === "PM") {
// 	if (min === 0 && sec === 0) {
// 		hou = 12;
// 		prepand = "Noon";
// 	} else {
// 		hou = 12;
// 		prepand = "PM";
// 	}

// 	if (hou === 0 && prepand === "AM") {
// 		if (min === 0 && sec === 0) {
// 			hou = 12;
// 			prepand = "midNight";
// 		} else {
// 			hou = 12;
// 			prepand = "AM";
// 		}
// 	}
// }
// console.log("Current Time : " + hou + prepand + " : " + min + " : " + sec);
///////////////////////////////////////////////////////////////////////////////////////////////
// var date = new Date();
// console.log(date);

// var month = date.getMonth() + 1;
// var day = date.getDate();
// var year = date.getFullYear();

// console.log(day + "/" + month + "/" + year);
/////////////////////////////////////////////////////////////////////////reverse string

// let str = "ramu";

// const Rstr = s => {
// 	let rs = "";
// 	for (let i = 1; i <= str.length; i++) {
// 		rs += str[str.length - i];
// 	}
// 	console.log(rs);
// };
// Rstr(str);

//////////////////////////////////////////////////////leapyear

// const leapyear = num => {
// 	if (num % 4 == 0) {
// 		console.log("is leapyear");
// 	} else {
// 		console.log("not ");
// 	}
// };

// leapyear(1900);

//////////////////////////////////////////////////////////////to find januay 1st sunday

// for (let year = 2014; year <= 2050; year++) {
// 	let d = new Date(year, 0, 1);
// 	if (d.getDay() === 0) {
// 		console.log(year);
// 	}
// }

////////////////////////////////////////////////////////////// if number > 13

// var number = 30;

// if (number > 13) {
// 	let res = (number - 13) * 2;
// 	console.log(res);
// }
///////////////////////////////////////////////////////////////two numbers sum if two numbers = triple their
// const funct = (a, b) => {
// 	if (a != b) return a + b;
// 	else return (a + b) * 3;
// };

// var res = funct(4, 4);
// console.log(res);
///////////////////////////////////////////////////////////////////according to 19

// const funct = a => {
// 	if (a > 19) return a - 19;
// 	else return (a - 19) * 3;
// };
// var res = funct(30);
// console.log(res);
///////////////////////////////////////////////////////// one Positive another negative
// function check(a, b) {
// 	if (a >= 0) console.log("is P");
// 	else console.log("is N");
// 	if (b >= 0) console.log("is P");
// 	else console.log("is N");
// }

// check(-3, 1);
//   ------------------ or ----------------  //
// function check(a, b) {
// 	a >= 0 ? console.log("a is positive") : console.log("a is negative");
// 	b >= 0 ? console.log("b is positive") : console.log("b is negative");
// }

// check(5, -1);
////////////////////////////////////////////////////////////////////////////////////// string

// function str(s) {
// 	let st = [];
// 	if ((s[0] == "p") & (s[1] == "y")) st.push(s);
// 	else st.push("py" + s);
// 	console.log(st);
// }

// str("rujith");

///////////////////////////////////////////////////////////////////////////////////// FL of string

// function fl(s) {
// 	if (s.length == 1) return s;
// 	let mid = s.substring(1, s.length - 1);
// 	return s[s.length - 1] + mid + s[0];
// }
// var res = fl("rujithramu");
// console.log(res);

/////////////////////////////////////////////////////////////// string from exsisted string

// function FtFB(s) {
// 	let f = s[0];
// 	console.log(f + s + f);
// }
// FtFB("rujith");
////////////////////////////////////////////////// string starts with java

// function java(s) {
// 	if (s.length < 4) return false;
// 	if (s.substring(0, 4) === "java") return true;
// 	else return false;
// }
// var res = java("j");
// console.log(res);

/////////////////////////////////////////////////// multiples of 3 or 7

// function num(n) {
// 	if (n % 3 == 0) console.log("is d by 3");
// 	if (n % 7 == 0) console.log("is d by 7");
// }
// num(54);

////////////////////////////////////////////////////////////////

// function between(n1, n2) {
// 	if ((n1 >= 50 && n1 <= 99) || (n2 >= 50 && n2 <= 99)) return true;
// 	return false;
// }
// var res = between(40, 21);
// console.log(res);
///////////////////////////////////////////////////////////// gratest from three digits

// function gratest(x, y, z) {
// 	let G = 0;
// 	if ((x > y) & (x > z)) G = x;
// 	if ((y > x) & (y > z)) G = y;
// 	if ((z > x) & (z > y)) G = z;

// 	console.log(G);
// }

// gratest(9, 4, 7);

////////////////////////////////////////////////////////////////////////// nearest

// function nearest(n1, n2) {
// 	let d1 = 100 - n1;
// 	let d2 = 100 - n2;

// 	if (d1 < d2) console.log(n1);
// 	else console.log(n2);
// }
// nearest(50, 70);
//////////////////////////////////////////// 40-60

// function largest(n1, n2) {
// 	if (n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60) {
// 		if (n1 > n2) console.log(`${n1} is greater`);
// 		else console.log(`${n2} is greater`);
// 	} else {
// 		if (n1 < 40 || n2 < 40) console.log(`${(n1, n2)} below range`);
// 		else {
// 			n1 > 60 || n2 > 60;
// 			console.log(`${(n1, n2)} are out of range`);
// 		}
// 	}
// }

// largest(80, 60);

//////////////////////////////////////////////////////////////////// specified charachter  in 2 and  4 position and between 2 -4  positions

// function position(s, sc) {
// 	if ((s[2] && s[4]) == sc) {
// 		return true;
// 	} else return false;
// }

// var res = position("rujith", "j");
// console.log(res);

// function position(s, sc) {
// 	let e = 0;
// 	for (let i = 0; i < s.length; i++) {
// 		if (s.charAt(i) == sc && (i >= 1) & (i <= 3)) {
// 			e = 1;
// 			break;
// 		}
// 	}
// 	if (e == 1) {
// 		return true;
// 	}
// 	return false;
// }

// var res = position("rujith", "j");
// console.log(res);

///////////////////////////////////////////////////////////

// function checkLdS(x, y, z) {
// 	if (x > 0 && y > 0 && z > 0) {
// 		return x % 10 == y % 10 && y % 10 == z % 10 && z % 10 == x % 10;
// 	} else return false;
// }

// var res = checkLdS(11, 21, -31);
// console.log(res);

// var num = 26;
// var re = num % 10;
// console.log(re);

////////////////////////////////////////////////////////////////F three cha L --- Len = 3 Upp

// function FthC(s) {
// 	let h = s.substring(3, s.length);
// 	if (s.length <= 3) return s.toUpperCase();
// 	else s.length > 3;
// 	return s.substring(0, 3).toUpperCase() + h;
// }
// var res = FthC("rujith");
// console.log(res);

//////////////////////////////// Sting ///////////////////////////////////
/////////////////////////////////////////////////////////////////////reverse string

// function reverseS(s) {
// 	let res = s.split("");
// 	let re = res.reverse().join("");
// 	console.log(re);
// }
// reverseS("rujith");

// function rever(s) {
// 	let res = "";
// 	for (let i = 1; i <= s.length; i++) {
// 		res += s[s.length - i];
// 	}
// 	console.log(res);
// }
// rever("rujith");
/////////////////////////////////////////////////////////////first lettr of  each word capital in str

// function chap(s) {
// let remain = s.substring(1, s.length);
// 	let res = s[0].toUpperCase();
// 	console.log(res + remain);
// }
// chap('hi how are you man');
////////////////////////////////////////////////each wour in the string capital

// function chap(s) {
// 	let res = s.split(" ");
// 	for (let i = 0; i < res.length; i++) {
// 		res[i] = res[i][0].toUpperCase() + res[i].substring(1);
// 	}
// 	console.log(res.join(" "));
// }
// chap("rujith is bad boy");

//////////////////////////////////////////////////////////string into order alphabetically

// function order(s) {
// 	let res = s.split("").sort().join("");
// 	console.log(res);
// }

// order("rujith");

////////////////////////////////////////////////////// vowels in string

// var str = "aeiouaeiou";

// function Findvowels(str) {
// 	let count = 0;
// 	let vowels = "aeiou";

// 	for (i of str) {
// 		for (j of vowels) {
// 			if (i == j) {
// 				count += 1;
// 			}
// 		}
// 	}
// 	console.log(count);
// }
// Findvowels(str);

////////////////////////////////////////////////////////////////equal no of p and t in a string

// var str = "ppprujithmwmmtt";

// function check(s) {
// 	let p = 0;
// 	let t = 0;
// 	for (i of s) {
// 		if (i == "p") p += 1;
// 		if (i == "t") t += 1;
// 	}

// 	if (p === t) {
// 		console.log("same");
// 	} else console.log("not same");
// }

// check(str);

//////////////////////////////////////////////////////////////two number divide and into formatted string

// var num1 = 21112;
// var num2 = 5;

// var rc = Math.round(num1 / num2).toString();
// console.log(rc.split(""));

////////////////////////////////////////////////////////////specified number of copies of a string

// var str = "rujith";

// function copyS(s, n) {
// 	let res = "";
// 	for (let i = 0; i <= n - 1; i++) {
// 		res += " " + str;
// 	}
// 	console.log(res);
// }
// copyS(str, 5);
//shortcut

// function copies(str, n) {
// 	if (n < 0) {
// 		return false;
// 	} else return str.repeat(n);
// }

// var res = copies(str + " ", 5);
// console.log(res);

//////////////////////////////////////////////////////  copies of last 3 char of a given string

// var str = "rujithramu";

// function LTchar(s) {
// 	let lTc = s.substring(s.length - 3);
// 	let res = "";
// 	for (let i = 0; i <= 3; i++) {
// 		res += " " + lTc;
// 	}
// 	console.log(res);
// }
// LTchar(str);
///////////////////////////////////////////////////////////first half of a even string

// let str = "abcdefghijklmnopqrst";

// function halfE(s) {
// 	let Es = "";
// 	let H = "";
// 	for (i in s) {
// 		if (i % 2 == 0) {
// 			Es += s[i];
// 		}
// 	}
// 	console.log(Es);
// 	for (let i = 0; i <= Es.length / 2 - 1; i++) {
// 		H += Es[i];
// 	}

// 	console.log(H);
// }
// halfE(str);

// function halfE(s) {
// 	if (s.length % 2 == 0) {
// 		return s.slice(0, s.length / 2);
// 	} else return str;
// }
// var res = halfE(str);
// console.log(res);

////////////////////////////////////////////////////////////////f l ==r

// let str = "rujithramu";
// function fl(s) {
// 	let exta = "";

// 	for (let i = 0; i <= s.length - 1; i++) {
// 		if (s[i] != s[0] && s[i] != s[s.length - 1]) {
// 			exta += s[i];
// 		}
// 	}
// 	console.log(exta);

// console.log(s.substring(1, s.length - 1));
// }
// fl(str);

//////////////////////////////////////////////////////////////////////

// let str = "rujithramuscript";

// console.log(str.substring(str.length - 6, str.length));

// function ste(s) {
// 	let com = "script";
// 	if (s.substring(s.length - 6, s.length) === "script") {
// 		return true;
// 	} else false;
// }
// let res = ste(str);
// console.log(res);
/////////////////////////////////////////////////////////////////

// let str = "prujithramup";

// console.log(str[0], str[str.length - 2]);

// function p(s) {
// 	let r = "";
// 	if ((s[0] && s[s.length - 1]) == "p") {
// 		r += s.substring(s[1], s[s.length - 2]);
// 		return r;
// 	} else return s;
// }
// let res = p(str);
// console.log(res);
///////////////////////////////////////////////////////////

/////////////////////////// ARRAYS //////////////////////////////

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function ARRAYS(a) {
// 	let res = 0;
// 	for (let i of arr) {
// 		res += i;
// 	}
// 	console.log(res);
// }

// ARRAYS(arr);

///////////////////////////////////////////////////////// f or l position ----> 1

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1];

// for (let i in arr) {
// 	if (arr[1] == 1 || arr[arr.length - 1] === 1) {
// 		console.log("yes");
// 		// return true;
// 	} else console.log("no");
// }

///////////////////////////////////////////////////////last == first

// let arr = [1, 2, 1];

// function equal(a) {
// 	if (arr.length > 1) return arr[0] == arr[arr.length - 1];
// 	else false;
// }
// let res = equal(arr);
// console.log(res);

/////////////////////////////////////////////////////////////////// eversr of ele in array

// let arr = [1, 2, 3];
// console.log(arr.length);
// console.log(arr.length - 1);

// function reverse(a) {
// 	let narr = [];
// 	for (let i = 1; i <= 3; i++) {
// 		narr.push(a[a.length - i]);
// 	}
// 	return narr;
// }
// let res = reverse(arr);
// console.log(res);
