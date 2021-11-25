const checkGaugeStatus = (gauge) => {
return gauge.current >= gauge.min && gauge.current <= gauge.max ? true : false;
}