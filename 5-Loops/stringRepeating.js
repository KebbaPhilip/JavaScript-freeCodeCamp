function repeatStringNumTimes(string, number) {
  if (number <= 0) return "";

  let repeatedStr = "";
  let num = 0;

  while (num < number) {
    repeatedStr += string;
    num++;
  }

  return repeatedStr;
}

console.log(repeatStringNumTimes("*", 8)); // ********
