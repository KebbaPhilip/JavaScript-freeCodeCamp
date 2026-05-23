let lunches = [];

function addLunchToEnd(lunchList, str) {
  lunchList.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return lunchList;
}

function addLunchToStart(lunchList, str) {
  lunchList.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return lunchList;
}

function removeLastLunch(lunchList) {
  if (lunchList.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let item = lunchList.pop();
    console.log(`${item} removed from the end of the lunch menu.`);
  }
  return lunchList;
}

function removeFirstLunch(lunchList) {
  if (lunchList.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let item = lunchList.shift();
    console.log(`${item} removed from the start of the lunch menu.`);
  }
  return lunchList;
}

function getRandomLunch(lunchList) {
  if (lunchList.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomLunch = lunchList[Math.floor(Math.random() * lunchList.length)];
    console.log(`Randomly selected lunch: ${randomLunch}`);
  }
}

function showLunchMenu(menu) {
  if (menu.length != 0) {
    console.log(`Menu items: ${menu[i].join(", ")}`);
  } else {
    console.log("The menu is empty.");
  }
}

showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);
