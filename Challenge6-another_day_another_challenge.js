const roster = [];

const astronaut = {
  firstName:"Chris",
  lastName: "Hadfield",
  nickname:"Space Oddity",
  prefix:"Astronaut"
};

const addAstronautToRoster = (roster, astronaut) => {
  roster.push(astronaut);
  console.log(roster);
}

addAstronautToRoster(roster, astronaut);