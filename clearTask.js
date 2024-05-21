require('dotenv').config();
const axios = require('axios');

async function clearTask(tasks) {
  try {
    for (const task of tasks) {
      const { data } = await axios({
        method: 'POST',
        url: 'https://api.nyanheroes.com/Quest/setQuests',
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
          Origin: 'https://missions.nyanheroes.com',
        },
        data: {
          Id: task.id,
          WalletAddress: '',
        },
      });

      console.log(
        'Cleared task with title '.green + task.title + ': '.green + data.result
      );

      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  } catch (error) {
    console.log('Error in clearTask: '.red + error);
  }
}

module.exports = clearTask;
