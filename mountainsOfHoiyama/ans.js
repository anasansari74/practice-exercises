function mountainsOfHoiyama(width) {
  const sumOfArr = arr => {
    arr.reduce((a, b) => a + b);
  };

  findMid = arr => {
    return arr[(arr.length / 2) | 0];
  };

  let weightArray = [];

  let widthTree = [width];

  while (widthTree[0] !== 1) {
    weightArray.push(sumOfArr(widthTree));

    console.log(findMid(widthTree));
  }
}

console.log(mountainsOfHoiyama(3));
