const roster = [
  {
    job: "Shuttle DJ"
  },
  {
    job: "Space Cook"
  }
] 

const listAstronautJobs = (roster) => {
  let output = [];

  for (const astronaut of roster) {
    output.push(astronaut['job']);
  }
  return output
}

listAstronautJobs(roster)