const toggleList = [
  {
    name: "toggleA",
    isOn: false
    }, 
  {
    name: "toggleB",
    isOn: true
  }
]
const specificToggle = "toggleA";

const switchSpecificToggle = (toggleList, specificToggle) => {
  for (const item of toggleList) {
    if (item.name === specificToggle) {
      if (!item.isOn) {
        item.isOn = true;
        // console.log("toggleList: ", toggleList);
        return toggleList;
      } else {
        item.isOn = false;
        // console.log("toggleList: ", toggleList);
        return toggleList;
      }
    }
  }
};

switchSpecificToggle(toggleList, specificToggle);