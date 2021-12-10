const receivedData = [
  {type: "astro", data: "Saturn Data"},
  {type: "bio", data: "Space Potatoes"},
  {type: "physics", data: "Lagrange Points"},
  {type: "bio", data: "OMG Tardigrades"},
  {type: "physics", data: "Material reflectivity"},
  {type: "astro", data: "Mercury is not the hottest"},
];

const organizeData = (receivedData) => {
  let astro = [];
  let bio = [];
  let physics = [];

  for (const data of receivedData) {
    if (data.type === "astro") {
      astro.push(data.data);
      // console.log(astro)
    }
    if (data.type === "bio") {
      bio.push(data.data);
      // console.log(bio);
    }
    if (data.type === "physics") {
      physics.push(data.data);
      // console.log(physics);
    }
  }

  let outputObj = { "astro": astro, "bio": bio, "physics": physics};
  // console.log("outputObj: ", outputObj);
  return outputObj;

}

organizeData(receivedData);