const moment = require('moment');


console.log(moment(new Date()).format('YYYY-MM-DD HH:mm:ss'));
console.log(moment("20111031", "YYYYMMDD").fromNow());
console.log(moment().format('llll'));
