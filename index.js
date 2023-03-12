function writeCards(names, giftType) {
    const messages = [];
  
    names.forEach((name) => {
      messages.push(`Thank you, ${name}, for the wonderful ${giftType} gift!`);
    });
  
    return messages;
  }
  
  function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
  
  module.exports = {
    writeCards,
    countDown,
  };