function score(dice) {
  let counts = {};

  dice.forEach(item => {
    if (counts[item]) {
      counts[item] += 1;
      return;
    }
    counts[item] = 1;
  });

  console.log("counts:", counts);

  for (const count in counts) {
    let answer = 0;

    if (count === 3 && counts === 1) {
      answer += 1000;
      counts[1] -= 3;
      continue;
    } else if (count === 3 && counts !== 1) {
      answer += parseInt(counts) * 100;
      counts[count] -= 3;
      continue;
    } else if (count === 1 && counts === 1) {
      answer += 100;
      counts[1] -= 1;
      continue;
    } else if (count === 1 && counts === 5) {
      answer += 50;
      counts[1] -= 1;
      continue;
    }

    return answer;
  }
}

console.log(score([2, 3, 4, 6, 2]));
