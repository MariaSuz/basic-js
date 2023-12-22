const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  abc = '';    
  member = members.sort();
   member.forEach((element) => {
       if (typeof element === 'string' || element instanceof String ) {
        let k = element.replace(/ +/g, ' ').trim();
           abc +=k[0].toUpperCase()
       }
   })
   return abc.split('').sort().join('');
 }

module.exports = {
  createDreamTeam
};
