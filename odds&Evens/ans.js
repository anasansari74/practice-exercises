function evensAndOdds(num) {
  if (num % 2 == 0) {
    return (num >>> 0).toString(2);
  } else {
    return num.toString(16);
  }
}

console.log("if even:", evensAndOdds(2));
console.log("if odd:", evensAndOdds(13));
