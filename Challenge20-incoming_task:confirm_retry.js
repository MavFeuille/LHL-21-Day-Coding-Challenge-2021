const speed = 55
const missionData = {
  astro:["...","..."], 
  bio:["..."], 
  physics:["..."]
}

const checks = {
  maxSpeed:50,
  minSpeed:20,
  dataEntries:{
    astro:2,
    bio:1,
    physics:1
  }
}

const confirmReentryPlans = (speed, missionData, checks) => {

  if (speed >= checks.maxSpeed || speed <= checks.minSpeed) {
    return false;
  } else if (missionData.astro.length !== checks.dataEntries.astro) {
    return false;
  } else if (missionData.bio.length !== checks.dataEntries.bio) {
    return false;
  } else if (missionData.physics.length !== checks.dataEntries.physics) {
    return false;
  } else {
    return true;
  }
}

console.log(confirmReentryPlans(speed, missionData, checks));