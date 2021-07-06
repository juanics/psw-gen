const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*_-+='

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
   let chars = alpha;
   chars += hasNumbers ? numbers : '';
   chars += hasSymbols ? symbols : '';
   return generateRandomPassword(length, chars);
}

const generateRandomPassword = (length, chars) => {
   let psw = '';
   for (let i = 0; i < length; i++) {
      psw += chars.charAt(Math.floor(Math.random() * chars.length));
   }
   console.log()
   return psw;
};

module.exports = createPassword;