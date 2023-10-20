// var str = "rujith";

// if (Object.prototype.toString.call(str) === "[object String]") {
// 	console.log("yes");
// } else console.log("no");

///////////////////////////////////////////////////////////////////////////////str blank or not

// var str = "rujith";

// function sb(s) {
// 	if (s == "") {
// 		console.log("empty");
// 	} else {
// 		console.log("not empty");
// 	}
// }

// sb(str);
////////////////////////////////////////////////////////////////

// function splitS(s) {
// 	return s.split(" ");
// }
// let res = splitS("rujith ramu");
// console.log(res);

//////////////////////////////////////////////////// specified charater

// function SpecifiedChar(s, n) {
// 	for (let i in s) {
// 		if (i == n) {
// 			console.log(s[i]);
// 		}
// 	}
// }
// SpecifiedChar("rujithramu", 5);

/////////////////////////////////////////////specified number of  characters

// function SNC(s, n) {
// 	console.log(s.slice(0, n));

// console.log(s.substring(0, n));
// }
// SNC("rujithramu", 4);
////#################################------> normal
// function snc(s, n) {
// 	let res = "";
// 	for (let i = 0; i <= n - 1; i++) {
// 		res += s[i];
// 	}
// 	console.log(res);
// }

// snc("rujithramu", 4);
/////////////////////////////////////////////////////////	Rujith Ramu -----> Rujith R

// function abbevate(s) {
// 	let sa = null;
// 	sa = s.split(" ");
// 	console.log(sa[0] + " " + sa[1][0]);
// 	// console.log(sa);
// }
// abbevate("rujith ramu ");

////////////////////////////////////////////// email hiding

// function protect_email(e) {
// 	let SplitedE = e.split("@");
// 	let part1 = SplitedE[0];
// 	let part2 = SplitedE[1];
// 	let part1H = part1.substring(0, part1.length / 2);
// 	console.log(part1H + "...@" + part2);
// }
// protect_email("rujithramu123@gmail.com");

/////////////////////////////////////////////////////////// parameterize

// function parameterize(s) {
// 	let splitted = s.split(" ");
// 	let res = "";
// 	for (i of splitted) {
// 		if (splitted[splitted.length]) res += i + "";
// 		res += i + "-";
// 	}

// 	console.log(res);
// let splitted = s.split(" ").join("-");
// console.log(splitted);
// }
// parameterize("rujith ramu are yo in hydrebad");
////////////////////////////////////////////////////////////////////// each words first letter capital

// function EWC(s) {
// 	let splitted = s.split(" ");
// 	let res = "";
// 	for (let i of splitted) {
// 		res += i[0].toUpperCase() + i.substring(1) + " ";
// 	}
// 	console.log(res);
// }

// EWC("rujith ramu is very bad boy");

/////////////////////////////////////////////// UC to LC and LC to UC

// function changeCase(s) {
// 	let res = "";
// 	for (let i = 0; i <= s.length - 1; i++) {
// 		if (s[i] == s[i].toUpperCase()) res += s[i].toLowerCase();
// 		else {
// 			res += s[i].toUpperCase();
// 		}
// 	}
// 	console.log(res);
// }
// var res = changeCase("RuJiThRaMu");
// // console.log(res);

////////////////////////////////////////////////////// 	string into camel case

// function camelize(s) {
// 	let splitted = s.split(" ");
// 	let res = "";
// 	for (let i = 0; i <= s.length - 1; i++) {
// 		for (let j = 0; ; ) {
// 			if (i[j] == i[j].toUpperCase()) res += splitted[i];
// 			else {
// 				let cc = i[j].toUpperCase();
// 				res += cc + splitted.substring(1, splitted.length);
// 			}
// 		}
// 	}
// 	console.log(res);
// }

// camelize("rujith ramu is very bad and cruel man in the world");

///////////////////////////////////////////////////////
/////////////////////////////////////////////////////// string concat n times

// function strconcate(s, n) {
// 	let res = "";
// 	for (let i = 0; i <= n; i++) {
// 		res += s + " ";
// 	}
// 	console.log(res);
// }
// strconcate("rujith", 5);

///////////////////////////////////////// string into string at particlar index ...default 1

// function addstr(s1, s2 = "", n = 0) {
// 	let f = s1.substring(0, n);
// 	let l = s1.substring(n, s1.length);
// 	let res = f + " " + s2 + " " + l;
// 	console.log(res);
// }
// addstr("We are doing some exercises", "JavaScript", 18);

/////////////////////////////////////////// human formated  a number

// function H_f(n) {
// 	let sn = n.toString();
// 	let res = "";

// 	if ((sn == 11, 12, 13)) res += sn + "th";
// 	if (sn[sn.length - 1] == 1) res += sn + "st";
// 	else if (sn[sn.length - 1] == 2) res += sn + "nd";
// 	else if (sn[sn.length - 1] == 3) res += sn + "rd";
// 	else res += sn + "th";

// 	console.log(res);
// }
// H_f(12);

/////////////////// with switch case --------> exactly correct

// function H_F(num) {
// 	if (typeof num === "undefined") return;
// 	if (num % 100 >= 11 && num % 100 <= 13) return num + "th";
// 	switch (num % 10) {
// 		case 1:
// 			return num + "st";
// 		case 2:
// 			return num + "nd";
// 		case 3:
// 			return num + "rd";
// 	}
// 	return num + "th";
// }

// var res = H_F(12);
// console.log(res);

///////////////////////////////////////////////////
// let s = "rujithramu";
// let res = "";

// for (let i of s) {
// 	res = i + res;
// }

// console.log(res);

// let s = "rujithramu";

// let f = s[0];
// let se = "";

// for (let i = 1; i <= s.length - 1; i++) {
// 	se = s[i] + se;
// }

// console.log(se + f);

/////////////////////////////////////////////////////////////////////

let s = "rujithramu";

let res = "";

for (let i of s) {
	res = i + res;
}

console.log(res);
