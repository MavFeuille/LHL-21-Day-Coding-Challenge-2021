const launchDate = "2021-12-12";
const fakeToday = "2021-12-01";
const missionName = "Moon visit";

const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date() // Do not alter this line!
  

  const newLaunchDate = new Date(launchDate);
  const newToday = new Date (today);
  const timeRemaining = Math.abs(newLaunchDate - newToday);
  const daysRemaining = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));

  let output = {
    missionName: `${missionName}`,
    daysRemaining: `${daysRemaining}`
  };

  // console.log("output: ", output)
  return output;
}

timeRemaining(launchDate, missionName, fakeToday)