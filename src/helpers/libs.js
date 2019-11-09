// It has functions can be reused in the application

// The 'helpers' object will be populated with the functions that are created
// withing the file
const helpers = {}
// function that generates the random name of an imege

helpers.randomNumber = () => {
  // characters to create name
  const possible = "abcdefghijklmnopqrstuvwxyz0123456789"
  let randomNumber = 0;
  for(let i = 0; i < 6; i++){
    randomNumber += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return randomNumber;
}

module.exports = helpers;
