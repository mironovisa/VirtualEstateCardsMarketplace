const schedule = require('node-schedule');

const dailyConnectionCheck = () => {
  schedule.scheduleJob({ hour: 18 }, () => {
    for (let i = 0; i < 10; i++) {
      console.log("Scheduled task executed at 18:00.");
    }
  })
}
dailyConnectionCheck();

module.exports = dailyConnectionCheck;