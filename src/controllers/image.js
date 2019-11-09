const path = require('path');
const {randomNumber} = require('../helpers/libs');
const fs = require('fs-extra');
const ctrl = {};

ctrl.index = (req, res) => {

};

// information related to the image will be loaded into 'req' object.
ctrl.create = async(req, res) => {
  const imgURL = randomNumber();
  console.log(imgURL);
  // get image address
  const imageTempPath = req.file.path;
  // get image extension
  const ext = path.extname(req.file.originalname).toLowerCase();
  // store the address where the image will be placed
  const targetPath = path.resolve('src/public/upload/' + imgURL + ext)
  console.log(targetPath);

  if (ext == '.png' || ext == '.jpg' || ext == '.gif'){
    // move the image from one file to another
    await fs.rename(imageTempPath, targetPath);
  }
  res.send('works')
};

ctrl.like = (req, res) => {

};

ctrl.comment = (req, res) => {

};

ctrl.remove = (req, res) => {

};

module.exports = ctrl;
