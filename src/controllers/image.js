const path = require('path');
const {randomNumber} = require('../helpers/libs');
const fs = require('fs-extra');
// by default node.js imports the 'index.js' file from a folder.
const {Image} = require('../models');
const ctrl = {};

ctrl.index = (req, res) => {

};

// information related to the image will be loaded into 'req' object.
ctrl.create = (req, res) => {
  
  const saveImage = async() => {
    const imgURL = randomNumber();
    const images = await Image.find({filename: imgURL});
    if(images.length > 0){
      saveImage();
    }else{
      // get image address
      const imageTempPath = req.file.path;
      // get image extension
      const ext = path.extname(req.file.originalname).toLowerCase();
      // store the address where the image will be placed
      const targetPath = path.resolve('src/public/upload/' + imgURL + ext)
      console.log(targetPath);

      if(ext == '.png' || ext == '.jpg' || ext == '.jpeg' || ext == '.gif'){
        // move the image from one file to another
        await fs.rename(imageTempPath, targetPath);
        console.log('entra');
        const newImg = new Image({
          title: req.body.title,
          filename: imgURL + ext,
          description: req.body.description,
        });
        const imageSaved =  await newImg.save();
        //res.redirect('/images');
        res.send('works');
      }else{
        await fs.unlink(imageTempPath);
        res.status(500).json({error: 'Only Images are allowed'});
      }
    }
  };

  saveImage();  
};

ctrl.like = (req, res) => {

};

ctrl.comment = (req, res) => {

};

ctrl.remove = (req, res) => {

};

module.exports = ctrl;
