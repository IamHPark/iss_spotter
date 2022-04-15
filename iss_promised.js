const request = require('request-promise-native');

/*
 * Requests user's ip address from https://www.ipify.org/
 * Input: None
 * Returns: Promise of request for ip data, returned as JSON string
 */
const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIp = function(body) {
  const ip = JSON.parse(body).ip
  return request(`https://freegeoip.app/json/${ip}`);
}

const fetchISSFlyOverTimes = function(body) {
  const lat = JSON.parse(body).latitude;
  const lon = JSON.parse(body).longitude;
  return request(`https://iss-pass.herokuapp.com/json/?lat=${lat}&lon=${lon}`);
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIp)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
}

module.exports = { nextISSTimesForMyLocation };