const checkGaugeStatus = (gauge) => {
  // Code here!
return gauge.current >= gauge.min && gauge.current <= gauge.max ? true : false;
  // Remember to return a value!
}