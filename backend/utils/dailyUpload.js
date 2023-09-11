const schedule = require('node-schedule');
const axios = require('axios');

const dailyUpload = () => {
  schedule.scheduleJob({ hour: 18 }, async () => {
    for (let i = 0; i < 10; i++) {
      console.log('Generating image...');
      await axios.post('http://localhost:3001/generate-image');
      console.log(`${i} Image(s) generated!`);
      if (i < 9) {
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
    }
  })
}
dailyUpload();