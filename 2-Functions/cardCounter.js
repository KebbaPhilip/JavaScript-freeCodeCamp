let count = 0;

const cardCounter = (card) => {
  if (card > 2 && card < 10) {
    card = Number(card);
  } else {
    card = String(card);
  }
  if (
    card == 1 ||
    card == 2 ||
    card == 3 ||
    card == 4 ||
    card == 5 ||
    card == 6
  ) {
    count++;
  }
  if (card === 7 || card === 8 || card === 9) {
    count = count;
  }
  if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
    count--;
  }

  if (count > 0) {
    return `${count} Bet`;
  } else {
    return `${count} Hold`;
  }
};

console.log(typeof cardCounter(1));
console.log(cardCounter(2));
console.log(cardCounter(3));
console.log(cardCounter(4));
