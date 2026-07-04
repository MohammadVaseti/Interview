// reverse a string
function reverse(str) {
  let reversed = "";
  for (let a = str.length - 1; a >= 0; a--) {
    reversed += str[a];
  }
  console.log(reversed);
}
reverse("hana");
/////////////////////////////////////

// find the biggest number in a array
const arr = [1, 4, 2, 56, 87, 98, 198, 75];
let num = arr[0];
for (let a = 0; a <= arr.length - 1; a++) {
  if (num < arr[a]) {
    num = arr[a];
  }
}
console.log(num);

// palindrome
let word = "asdac";
let res = "";
for (let a = 0; a <= word.length - 1; a++) {
  if (word[0] == word[word.length - 1]) {
    res = "palindrome";
  } else {
    res = "not palindrome";
  }
}
console.log(res);
//////////////////////////////////////

// find unique nums in array

const arr = [1, 4, 2, 56, 87, 98, 198, 75];
