function dontGiveMeFive(start, end) {
  const newArray = [];

  for (let i = start; i <= end; i++) {
    const element = i;

    if (!element.toString().split("").includes("5")) newArray.push(element);
  }

  return newArray.length;
}

console.log(dontGiveMeFive(-5, 9));
