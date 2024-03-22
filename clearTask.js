require('dotenv').config();
const axios = require('axios');

async function clearTask(tasks) {
  try {
    for (const task of tasks) {
      const { data } = await axios({
        method: 'POST',
        url: 'https://api.nyanheroes.com/Quest/setQuest',
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
        data: {
          Id: task.id,
          WalletAddress: '',
        },
      });

      console.log(
        'Cleared task with title '.green + task.title + ': '.green + data.result
      );
    }
  } catch (error) {
    console.log('Error in clearTask: '.red + error.code);
  }
}

module.exports = clearTask;
