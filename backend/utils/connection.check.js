const schedule = require('node-schedule');
const axios = require('axios');

const dailyConnectionCheck = () => {
  schedule.scheduleJob({ hour: 18 }, async () => {
    for (let i = 0; i < 10; i++) {
      // takes two fucking minutes to generate all images
      console.log('Image being generated')
      await axios.post('http://localhost:3001/generate-image', {
        prompt: 'insert prompt'
      });
      console.log('Image generated');
    }
  })
}
dailyConnectionCheck();

module.exports = dailyConnectionCheck;