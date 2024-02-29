import chalk from 'chalk';

console.log(chalk.blue(
  `I am a blue line ${
    chalk.yellow.underline.bold('with a yellow substring')
  } that becomes blue again!`,
));
