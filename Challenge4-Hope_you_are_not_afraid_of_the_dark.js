const toggle = {
  name: "toggleA",
  isOn: false
}

const switchToggle = (toggle) => {

 if (!toggle.isOn) {
   console.log("BEFORE switch toggle.isOn status: " , toggle.isOn);
   toggle.isOn = true;
   console.log("AFTER switch toggle.isOn status: ", toggle.isOn);
   console.log("Toggle: ", toggle);
   return toggle;
 } else {
  console.log("BEFORE switch toggle.isOn status: " , toggle.isOn);
  toggle.isOn = false;
  console.log("AFTER switch toggle.isOn status: ", toggle.isOn);
  console.log("Toggle: ", toggle);
  return toggle;
 }
}

console.log(switchToggle(toggle));