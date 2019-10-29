import chalk from "chalk";
export default {
  success(msg) {
    console.log(chalk.bold.blue("√ " + msg));
  },
  error(msg) {
    console.log(chalk.bold.red("× " + msg));
  },
  warn(msg) {
    console.log(chalk.bold.yellow("! " + msg));
  },
  info(msg) {
    console.log(msg);
  }
};
