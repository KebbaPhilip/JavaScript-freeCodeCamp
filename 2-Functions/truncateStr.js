function truncateString(str, num) {
  if (str.length > num) {
    let truncatedStr = str.slice(0, num);
    for (let i = 0; i <= str.length; i++) {
      truncatedStr += ".";
    }
    return truncatedStr;
  }
  return str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
