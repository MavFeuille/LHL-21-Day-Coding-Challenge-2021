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
  return toggleList;
}
    
switchAllTogglesOn(toggleList)