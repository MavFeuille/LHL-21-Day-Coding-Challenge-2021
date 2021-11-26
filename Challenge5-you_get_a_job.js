const astronaut = {
  firstName:"Chris",
  lastName: "Hadfield",
  nickname:"Space Oddity",
  prefix:"Astronaut"
}

const job = "Shuttle DJ";

const addJobToAstronaut = (astronaut, job) => {
  astronaut = Object.assign(astronaut, {job: `${job}`})
  console.log("astronaut: ", astronaut)
  return astronaut
}

addJobToAstronaut(astronaut, job)