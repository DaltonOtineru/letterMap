const check = 'H uJASuj489d4$ #ijfi4%afu';

const letterOccurence = (str) => {
  let letterMap = {};

  for (let char of str) {
    if (!letterMap[char]) {
      letterMap[char] = 1;
    } else {
      letterMap[char]++;
    }
  }
  console.log(letterMap);
};

letterOccurence(check);
