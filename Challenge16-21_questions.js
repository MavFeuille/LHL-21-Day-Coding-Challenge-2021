const firstPosition = {
  time: 1637074462,
  altitude: 1100
}

const secondPosition = {
  time: 1637074558,
  altitude: 2200
}

const getAverageSpeed = (firstPosition, secondPosition) => {
  const altitudeDifference = secondPosition.altitude - firstPosition.altitude
  const timeDiffereence = secondPosition.time - firstPosition.time
  const averageSpeed = (altitudeDifference / timeDiffereence).toFixed(1);
  return parseFloat(averageSpeed);
}

getAverageSpeed(firstPosition, secondPosition);