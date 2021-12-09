const listOfChoices = [
  "Ceasar Salad",
  "Ceasar Salad",
  "Ceasar Salad",
  "Stale Bread", 
  "Stale Bread", 
  "Stale Bread", 
  "Stale Bread"
]

const chooseLunchWinner = (listOfChoices) => {
  let choice1 = listOfChoices.filter(choice => choice === listOfChoices[0])
  let choice2 = listOfChoices.filter(choice => choice === listOfChoices[listOfChoices.length-1])
  
  return choice1.length > choice2.length ? choice1[0] : choice2[0]
}
chooseLunchWinner(listOfChoices);