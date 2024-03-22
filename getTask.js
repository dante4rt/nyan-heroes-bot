require('dotenv').config();
const axios = require('axios');

async function getTask() {
  try {
    const { data } = await axios({
      url: 'https://api.nyanheroes.com/Quest/getQuests',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    });

    const allQuest = data.quests;
    return allQuest;
  } catch (error) {
    console.log('Error in Get Task: '.red + error);
  }
}

module.exports = getTask;
