// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if (currency <= 0) {
    return {}
  }
  else if (currency > 10000) {
    return  {error: "You are rich, my friend! We don't have so much coins for exchange"}
  }
  const curr = [50, 25, 10, 5, 1];
  let result = {};
  let h = Math.floor(currency / curr[0]);
  h > 0 ? result.H = h: null;
  currency = currency - h * curr[0];
  let q = Math.floor(currency / curr[1]);
  q > 0 ? result.Q = q: null;
  currency = currency - q * curr[1];
  let d = Math.floor(currency / curr[2]);
  d > 0 ? result.D = d: null;
  currency = currency - d * curr[2];
  let n = Math.floor(currency / curr[3]);
  n > 0 ? result.N = n: null;
  currency = currency - n * curr[3];
  let p = Math.floor(currency / curr[4]);
  p > 0 ? result.P = p: null;
  currency = currency - p * curr[4];
  return result;
}
