// Importing modules
import express from 'express';
import fs from 'fs';
import path from 'path';
import { resizesharp } from '../../utilities/imageResizing';
import { create } from '../../utilities/imageResizing';

const images = express.Router();

images.get('/', (req: express.Request, res: express.Response): void => {
  // Getting queries param values from url
  const imageName = req.query.imagename as unknown as string;
  const heighturl = req.query.height as unknown as number;
  const heighturlnum: number = +heighturl;
  const widthurl = req.query.width as unknown as number;
  const widthurlnum: number = +widthurl;
  const outputimage = `${imageName}_${heighturlnum}_${widthurlnum}`;

  // Creating Thumbnails folder if not exist
  create();

  // Checking if the required image is already processed in the thumbnails folder
  if (
    fs.existsSync(`thumbnails/${imageName}_${heighturlnum}_${widthurlnum}.jpg`)
  ) {
    res.sendFile(
      path.join(
        __dirname,
        '../../../thumbnails',
        `${imageName}_${heighturlnum}_${widthurlnum}.jpg`
      )
    );
  } else {
    // Checking if the required parameters are written to the url
    if (
      isNaN(heighturlnum) &&
      isNaN(widthurlnum) &&
      !fs.existsSync(`images/${imageName}.jpg`)
    ) {
      res.send('Please enter a valid image name, height and width to the url.');
    } else if (isNaN(heighturlnum) && isNaN(widthurlnum)) {
      res.send('Please enter a valid height and width to the url.');
    } else if (
      !fs.existsSync(`images/${imageName}.jpg`) &&
      isNaN(widthurlnum)
    ) {
      res.send('Please enter a valid image name and width to the url.');
    } else if (
      !fs.existsSync(`images/${imageName}.jpg`) &&
      isNaN(heighturlnum)
    ) {
      res.send('Please enter a valid image name and height to the url.');
    } else if (isNaN(heighturlnum)) {
      res.send('Please enter a valid height to the url.');
    } else if (isNaN(widthurlnum)) {
      res.send('Please enter a valid width to the url.');
    } else if (!fs.existsSync(`images/${imageName}.jpg`)) {
      res.send('Please enter a valid image name to the url.');
    } else {
      const resize = async (): Promise<void> => {
        await resizesharp(imageName, heighturlnum, widthurlnum);
        res.sendFile(
          path.join(__dirname, '../../../thumbnails', `${outputimage}.jpg`)
        );
      };
      resize();
    }
  }
});

export default images;
