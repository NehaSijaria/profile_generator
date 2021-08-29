const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name? Nicknames are also acceptable :) ", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question('What do you listen to while doing that? ' , (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            rl.question('What do you think of Node.js? ', (answer7) => {
              console.log(`Hello ${answer1}. You like ${answer2} and listen ${answer3} while doing that. Your favorite meal is ${answer5} at ${answer4}. Your favorite sport is ${answer6}. you think Node.js is ${answer7}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});