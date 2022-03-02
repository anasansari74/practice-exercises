const ClosestEnemy = arr => {
  if (arr.indexOf(2) !== -1) {
    const indexOfOne = arr.indexOf(1);

    let goingRight = 0;
    for (let i = indexOfOne; i < arr.length; i++) {
      if (arr[i] !== undefined) {
        if (arr[i] !== 2) {
          goingRight += 1;
        } else break;
      } else {
        goingRight = undefined;
        break;
      }
    }

    let goingLeft = 0;
    for (let i = indexOfOne; i < arr.length; i--) {
      if (arr[i] !== undefined) {
        if (arr[i] !== 2) {
          goingLeft += 1;
        } else break;
      } else {
        goingLeft = undefined;
        break;
      }
    }

    if (goingLeft === undefined) {
      return goingRight;
    } else if (goingRight === undefined) {
      return goingLeft;
    } else if (goingLeft < goingRight) {
      return goingLeft;
    } else {
      return goingRight;
    }
  } else {
    return 0;
  }
};

console.log(ClosestEnemy([1, 0, 0, 0, 2, 2, 2]));
