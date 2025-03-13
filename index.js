// Code your solutions in this file
function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

// Example usage:
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));



function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

// Example usage:
countDown(10);


