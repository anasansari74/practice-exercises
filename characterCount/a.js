function count(string) {
  if (string.length === 0) {
    return {};
  } else {
    const splittedStr = string.split("");

    let infoToFind = [];

    for (let i = 0; i < splittedStr.length; i++) {
      const toAdd = (character, count) => {
        return {
          character,
          count,
        };
      };

      if (i == 0) {
        infoToFind.push(toAdd(splittedStr[i], 1));
      } else {
        const foundIndex = infoToFind.findIndex(
          target => target.character == splittedStr[i]
        );

        if (foundIndex >= 0) {
          infoToFind[foundIndex].count++;
        } else {
          infoToFind.push(toAdd(splittedStr[i], 1));
        }
      }
    }

    return infoToFind;
  }
}

console.log(count("aba"));
