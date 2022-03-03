function getLargerNumbers(a, b) {
  let newArray = [];

  for (let i = 0; i < a.length; i++) {
    const numToPush = Math.max(a[i], b[i]);
    newArray.push(numToPush);
  }

  return newArray;
}

console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80]));
