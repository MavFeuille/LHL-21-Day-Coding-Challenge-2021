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
        return toggleList;
      } else {
        item.isOn = false;
        return toggleList;
      }
    }
  }
};

switchSpecificToggle(toggleList, specificToggle);