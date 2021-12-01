const weatherEntries = [
  { 
    temperature:0, 
    weather:"sunny", 
    windDirection: "NNE", 
    windSpeed:44.74 
  },
  { 
    temperature:10, 
    weather:"cloudy", 
    windDirection: "NNE", 
    windSpeed:14.74 
  }
]  

const averageWindSpeed = (weatherEntries) => {
  let sum = 0;
  let average = 0;

  for (entry of weatherEntries) {
    sum += entry['windSpeed'];
  }
  average = Math.round(sum / weatherEntries.length);
  console.log("average: ", average);
  return average;
}

averageWindSpped(weatherEntries)