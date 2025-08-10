const tools = {
  capitalizeFistrChar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  reverse(str) {
    return str.split('').reverse().join('');
  },
  isEmpty(str) {
    return str.trim() === '';
  }
};

export default tools;
