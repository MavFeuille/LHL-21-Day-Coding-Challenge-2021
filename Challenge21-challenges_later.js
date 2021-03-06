const exchanges = [
  {origin:"MC", message:"So how is it out there?"},
  {origin:"Shuttle", message:"Oh it's pretty nice!"},
  {origin:"MC", message:"Did you like the challenges?"},
]
   
const missionData = {
  astro:["...","..."], 
  bio:["..."], 
  physics:["..."]
}

const parseMissionSummary = (exchanges, missionData) => {
  let transcriptArray = exchanges.map((item) => `${item.origin}: ${item.message}`);
  let outputObj = { transcript: transcriptArray, missionData}
  return outputObj;
}

// console.log(parseMissionSummary(exchanges, missionData));