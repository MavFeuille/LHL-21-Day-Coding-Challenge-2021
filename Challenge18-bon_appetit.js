const listOfChoices = [
  "Chicken Dinner",
  "Chicken Dinner",
  "Chicken Dinner",
  "Ice Cream Sandwich", 
  "Ice Cream Sandwich"
]

const chooseLunchWinner = (listOfChoices) => {
  let choice1 = 0;
  let choice2 = 0;

  for (const choice of listOfChoices) {
    if (choice === "choice1 Dinner") {
      choice1 += 1;
    } else {
      choice2 += 1;
    }
  }
  // console.log("choice1: ", choice1);
  // console.log("choice2: ", choice2);

  return choice1 > choice2 ? "choice1 Dinner" : "Ice Cream Sandwich"
}

chooseLunchWinner(listOfChoices);