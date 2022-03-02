function dotCalculator(equation) {
  const splittedEq = equation.split(" ");

  const firstNumber = parseInt(splittedEq[0].length);
  const lastNumber = parseInt(splittedEq[2].length);

  let res = [];
  let resToFind = null;

  if (splittedEq[1] === "*") {
    resToFind = firstNumber * lastNumber;
  } else if (splittedEq[1] === "+") {
    resToFind = firstNumber + lastNumber;
  } else if (splittedEq[1] === "-") {
    resToFind = firstNumber - lastNumber;
  } else {
    resToFind = Math.floor(firstNumber / lastNumber);
  }

  if (resToFind === 0) {
    return "";
  } else {
    for (let i = 0; i < resToFind; i++) {
      const element = ".";

      res.push(element);
    }
    return res.join("");
  }
}

console.log(dotCalculator("..... // .."));
