const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What is your last name?' , (lastName) => {
    rl.question('What is your favorate kind of music? ', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        rl.question('What\'s your favourite thing to eat? ', (favFood) => {
          rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superPower) => {
            console.log(`Hey ${name} ${lastName}, so you love listening to ${music} music? And you like ${favFood} for ${meal}, mmm that sounds good! , oh and your super power is ${superPower}, NBD...`);
            rl.close();
          });
        });
      });
    });
  });
});