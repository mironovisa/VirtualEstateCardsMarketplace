const schedule = require('node-schedule');
const axios = require('axios');

const dailyUpload = () => {
  schedule.scheduleJob({ second: 20, minute: 56, hour: 21 }, async () => {
    for (let i = 0; i < 1; i++) {
      console.log('Began Generating Image');
      await axios.post('http://localhost:3001/generate-image');
      console.log('Image Successfully Generated');
    }
  })
}
dailyUpload();