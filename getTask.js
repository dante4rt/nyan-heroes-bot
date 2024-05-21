require('dotenv').config();
const axios = require('axios');

async function getTask() {
  try {
    const { data } = await axios({
      url: 'https://api.nyanheroes.com/Quest/getQuests?season=2',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
        Origin: 'https://missions.nyanheroes.com',
      },
    });

    const allQuest = data.quests;
    return allQuest;
  } catch (error) {
    console.log('Error in Get Task: '.red + error);
  }
}

module.exports = getTask;
