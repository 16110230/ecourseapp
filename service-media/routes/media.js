require('dotenv').config();
const express = require('express');
const router = express.Router();
const isBase64 = require('is-base64')
const base64Img = require('base64-image')
const {IMAGE_LOC} = process.env;
const {Media} = require('../models')



/* GET users listing. */
router.post('/', function(req, res, next) {
  const image = req.body.image

  if(!isBase64(image, {mimeRequired:true})){
    return res.status(400).json({status : 'error', message : 'Invalid Base64'})
  }

  // base64Image.img(image, IMAGE_LOC, Date.now(), (err, async filepath => {
  //   if (err) {
  //     return res.status(400).json({status: 'failed', message: err.message})
  //   }
  //
  //   const filename = filepath.split("\\").pop().split("/").pop();
  //
  //   const media = await Media.create({image: `image/$(filename)`})
  //
  //   return res.json({
  //     status: 'success',
  //     data: {
  //       id: media.id,
  //       image: `${req.get('host')}/images/${filename}`
  //     }
  //   })
  //
  // }))

  base64Img(image, './public/images', Date.now(), async (err, filepath) => {
    if (err) {
      return res.status(400).json({ status: 'error', message: err.message });
    }

    const filename = filepath.split("\\").pop().split("/").pop();

    const media = await Media.create({ image: `images/${filename}` });

    console.log(media)

    console.log(filename)
    return res.json({
      status: 'success',
      data: {
        id: media.id,
        image: `${HOSTNAME}/images/${filename}`
      }
    });

  })

  // return res.status(200).json({status : 'success', message : 'Image Saved'})

});



module.exports = router;
