const toggle = {
  name: "toggleA",
  isOn: false
}

const switchToggle = (toggle) => {

 if (!toggle.isOn) {
   toggle.isOn = true;
   return toggle;
 } else {
  toggle.isOn = false;
  return toggle;
 }
}