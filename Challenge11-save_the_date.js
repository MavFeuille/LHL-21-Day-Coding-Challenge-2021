const missionDate = "2021-12-12"
const platformList = [
  {
    name:"Platform A",
    bookDate:"2021-12-11"
  },
  {
    name:"Platform B",
    bookDate:undefined
  },
  {
    name:"Platform C",
    bookDate:undefined
  },
] 

const bookFreePlatform = (platformList, missionDate) => {

  for (const obj of platformList) {
    if (!obj.bookDate) {
      obj.bookDate = missionDate;
      break;
    }
  }
  return platformList;
  // console.log("platformList: ", platformList);
}

bookFreePlatform(platformList, missionDate)