const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name?\n', (name) => {
  rl.question('What is an activity you like doing?\n', (activity) => {
    rl.question('What do you listen to while doing that?\n', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)\n', (meal) => {
        rl.question('What is your favourite thing to eat for that meal?\n', (food) => {
          rl.question('Which sport is your absolute favourite?\n', (sport) => {
            rl.question('What is your superpower?\n', (superpower) => {

              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);


  rl.close();
})})})})})})});