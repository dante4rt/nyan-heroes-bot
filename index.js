require('dotenv').config();
require('colors');
const readlineSync = require('readline-sync');
const getTask = require('./getTask');
const clearTask = require('./clearTask');
const getProfile = require('./getProfile');

async function processTasks() {
  process.stdout.write('\x1Bc');
  console.log('========================================'.cyan);
  console.log('=      Nyan Heroes Bot – Season 2      ='.cyan);
  console.log('=     Created by HappyCuanAirdrop      ='.cyan);
  console.log('=    https://t.me/HappyCuanAirdrop     ='.cyan);
  console.log('========================================'.cyan);
  console.log();

  console.log('Select an option:');
  console.log('1. Get Tasks and Clear');
  console.log('2. Get Profile');

  const choice = readlineSync.question('Enter your choice: ');

  switch (choice) {
    case '1':
      try {
        const tasks = await getTask();
        await clearTask(tasks);
        console.log('Tasks cleared successfully.'.green);
      } catch (error) {
        console.log('Error processing tasks: '.red + error);
      }
      break;
    case '2':
      try {
        await getProfile();
      } catch (error) {
        console.log('Error getting profile: '.red + error);
      }
      break;
    default:
      console.log('Invalid choice. Please select 1 or 2.'.red);
  }
}

processTasks();
