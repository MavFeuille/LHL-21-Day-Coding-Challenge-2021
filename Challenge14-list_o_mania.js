const toggleList = [
	{
		name:"Air",
		isOn:true
	},
	{
		name:"Radio",
		isOn:false
	},
];

const switchAllTogglesOn = (toggleList) => {
  toggleList.forEach((toggleItem) => {
    if (toggleItem.isOn === false) {
      toggleItem.isOn = true;
    }
  })

  // console.log("toggleList: ", toggleList)
  return toggleList;
}
    
switchAllTogglesOn(toggleList)