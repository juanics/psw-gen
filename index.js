#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");

program.version("1.0.0").description("Console password generator");

program.option("-l, --length <length>", "Password desired length", 8);
program.option("-nn, --no-numbers", "Remove numbers from generated password");
program.option("-ns, --no-symbols", "Remove symbols from generated password");
program.option("-s, --save", "Save password to passwords.txt");
program.option(
  "-sr, --save-reset",
  "Save password to passwords.txt overriding file"
);
program.parse();

const { length, numbers, symbols, save, saveReset } = program.opts();

const numericLength = Number(length);

if (isNaN(numericLength)) {
  console.error(chalk.red("argument <length> needs to be a number"));
  return;
}
const generatedPassword = createPassword(length, numbers, symbols);
clipboardy.writeSync(generatedPassword);

if (save || saveReset) {
  savePassword(generatedPassword, saveReset);
}
console.log(chalk.blue("Generated password: ") + chalk.bold(generatedPassword));
console.log("Password copied to clipboard");
