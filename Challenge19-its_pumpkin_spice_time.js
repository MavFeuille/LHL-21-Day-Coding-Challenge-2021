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
    }
    if (data.type === "bio") {
      bio.push(data.data);
    }
    if (data.type === "physics") {
      physics.push(data.data);
    }
  }

  let outputObj = { "astro": astro, "bio": bio, "physics": physics};
  return outputObj;
}

organizeData(receivedData);