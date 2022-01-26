function score(dice) {
  let counts = {};

  dice.forEach(item => {
    if (counts[item]) {
      counts[item] += 1;
      return;
    }
    counts[item] = 1;
  });

  //   for (const count in counts) {
  //     let answer = 0;
  //     if (counts[count] === 3) {
  //       answer = parseInt(counts[count]) * 100;
  //     } else {
  //       answer += 50;
  //     }
  //     return answer;
  //   }
}

console.log(score([2, 3, 4, 6, 2]));
