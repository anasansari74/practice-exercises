function reverseWords(str) {
  const splitStr = str.split(" ");

  let res = splitStr.map(word => word.split("").reverse().join("")).join(" ");

  return res;
}

// function reverseWords(string) {
//   return string.split("").reverse().join("").split(" ").reverse().join(" ");
// }

console.log(reverseWords("double  spaces"));
