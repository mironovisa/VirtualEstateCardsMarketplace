const schedule = require('node-schedule');
const axios = require('axios');

const dailyConnectionCheck = () => {
  schedule.scheduleJob({ second: 5, minute: 29, hour: 18 }, async () => {
    for (let i = 0; i < 1; i++) {
      console.log('Began Generating Image');
      await axios.post('http://localhost:3001/generate-image');
      console.log('Image Successfully Generated');
    }
  })
}
dailyConnectionCheck();
