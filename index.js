// run our main fetch function

const { nextISSTimesForMyLocation } = require('./iss');


// const printOutPass = function(passTimes) {
//   for ( const nextPass of data) {
//     const time  = new Date (nextPass.risetime * 1000);
//     const humanTime = time.toString();
//     const duration = nextPass.duration
//     console.log(`Next pass at ${humanTime} for ${duration} seconds!`)
//   }
// }

const printOutPass = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`)
  }
}


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log(`It didn't work!`, error);
  }

  printOutPass(passTimes);
});