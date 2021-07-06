const fs = require('fs');
const os = require('os');
const path = require('path');
const chalk = require('chalk');

const savePassword = (psw, saveReset = false) => {

   const flag = saveReset ? 'w' : 'a';

   fs.open(path.join(__dirname, '..', 'passwords.txt'), flag, 666, (e, id) => {
      fs.write(id, psw + os.EOL, null, 'utf-8', () => {
         fs.close(id, () => {
            console.log(chalk.yellow('Password saved to passwords.txt'));
         })
      })
   });
}

module.exports = savePassword;