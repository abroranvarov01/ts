// 1- masalla //

// let soz: string | null = prompt("Enter a string");

// let a: string = '';

// if(soz != null){
//   a += '<<';
//   for(let i = 0; i < soz.length; i++){
//     a += soz[i];
//   }
//   a += '>>';
// }
// console.log(a);

// 2- masalla //

// let a: string | null = prompt("Enter a string");
// let num: number = Number(prompt("Enter a number"));

// let b: string = '';

// if(a != null && num != null){
//   for(let i = 0; i < num; i++){
//     b += a[i]
//   }
// }

// console.log(b);

// 3- masalla //

// let soz1: string | null = prompt("Enter a string");
// let soz2: string | null = prompt("Enter a string");

// let soz3: string =''

// if(soz1 != null && soz2 != null){
//   for(let i = 1; i < soz1.length; i++){
//     soz3 += soz1[i]
//   }
//   for(let i = 1; i < soz2.length; i++){
//     soz3 += soz2[i]
//   }
// }

// console.log(soz3);
// exp4
// const str1: string | null = prompt("Enter the word");
// const str2: string | null = prompt("enter boolean");
// let bol: Boolean = true;

// if (str1 != null && str2 != null) {
//   if (str2 != "true") {
//     bol = false;
//   }
//   if (bol) {
//     console.log(str1[0]);
//   } else {
//     console.log(str1[str1.length - 1]);
//   }
// }

//exp5
// let str: string | null = prompt("");
// if (str != null) {
//   if (str[str.length - 1] == "y" && str[str.length - 2] == "l") {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// exp 6

// let str: string | null = prompt("");
// let newStr: string = "";
// if (str != null) {
//   newStr += str[Math.floor(str.length / 2 - 1)];
//   newStr += str[Math.floor(str.length / 2)];
//   newStr += str[Math.floor(str.length / 2 + 1)];
// }
// console.log(newStr);

// // exp 7

// let str: string | null = prompt("");
// let str2: string | null = prompt("");
// let newStr: string = "";
// if (str != null && str2 != null) {
//   newStr += str[0];
//   newStr += str2[str2.length - 1];
// }
// console.log(newStr);

// // exp 8
// let str: string | null = prompt("Введите строку:");

// if (str != null) {
//   let found: boolean = false;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       (str[i] == "r" && str[i + 1] == "e" && str[i + 2] == "d") ||
//       (str[i] == "b" && str[i + 1] == "k" && str[i + 2] == "b") ||
//       (str[i] == "b" &&
//         str[i + 1] == "l" &&
//         str[i + 2] == "u" &&
//         str[i + 3] == "e")
//     ) {
//       found = true;
//       break;
//     }
//   }
//   console.log(found);
// }

// // exp 9
// let str: string | null = prompt("Введите строку:");
// let newStr: string = "";
// if (str != null) {
//   newStr += str[0];
//   newStr += str[1];
//   newStr += newStr + newStr;
// }
// console.log(newStr);

// exp 10
function makeAbba(a: string, b: string) {
  return a + b + b + a;
}

console.log(makeAbba("Hi", "Bye"));
