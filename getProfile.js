require('dotenv').config();
const axios = require('axios');

async function getProfile() {
  try {
    const { data } = await axios({
      url: 'https://api.nyanheroes.com/User/getUserQuestData',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    });

    console.log('Your User ID: '.green + data.userId);
    console.log('Your Twitter username: '.green + data.twitterUsername);
    console.log('Your points: '.green + data.points);
    console.log(
      'Your completed missions: '.green + data.totalMissionsCompleted
    );
    console.log('Your total referral: '.green + data.totalReferral);
  } catch (error) {
    console.log('Error in getProfile: '.red + error.code);
  }
}

module.exports = getProfile;
