const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if ( isNaN(sampleActivity) || sampleActivity === NaN || sampleActivity <= 0 || typeof sampleActivity === 'undefined') {
    return false;
  }
 if (typeof sampleActivity === 'string') {
  //let mathsampleParse = parseFloat(sampleActivity);
 //let mathsampleActivity = Math.ceil(sampleActivity);
let k = 0.693 / HALF_LIFE_PERIOD ;
let t = Math.log(MODERN_ACTIVITY/sampleActivity)/k;
if (Math.ceil(t) > 0 && MODERN_ACTIVITY < Math.ceil(t) )  {
  return Math.ceil(t);
}
}
return false;
}

module.exports = {
  dateSample
};
