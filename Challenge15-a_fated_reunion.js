const launchDate = "2021-12-12";
const fakeToday = "2021-12-01";
const missionName = "Moon visit";

const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date() // Do not alter this line!
  console.log("today: ", today)

  const newLaunchDate = new Date (launchDate);
  const timeRemaining = Math.abs(newLaunchDate - today);
  console.log("timeRemaining: ", timeRemaining)
  const daysRemaining = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));
  console.log(daysRemaining)
  let output = {};
 
}

timeRemaining(launchDate, fakeToday, missionName)