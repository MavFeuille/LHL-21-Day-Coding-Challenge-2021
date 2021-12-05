const gaugeList = [
  {
    current:0.4,
    min:0.1,
    max:0.9
  },
  {
    current:1.2,
    min:0.1,
    max:0.6
  }
];

const checkAllGauges = (gaugeList) => {
  allGauges = gaugeList.map((gaugeList) => gaugeList.current >= gaugeList.min && gaugeList.current <= gaugeList.max ? true : false);
  return allGauges.every((element) => element === true)
}

checkAllGauges(gaugeList);