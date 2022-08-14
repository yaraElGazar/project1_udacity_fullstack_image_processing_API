import { resizesharp } from '../utilities/imageResizing';
import { create } from '../utilities/imageResizing';
import fs from 'fs';
import path from 'path';

const image = 'fjord';
const height = 2000;
const width = 1000;
const outputimage = `${image}_${height}_${width}`;

describe('Test image processing', () => {
  it('expects thumbnails folder to be created if doesnot exist', async () => {
    create();
    const folderexist = fs.existsSync(path.join(__dirname, '../../thumbnails'));
    expect(folderexist).toBe(true);
  });

  it('expects processed image to be saved in thumbnails folder', async () => {
    await resizesharp(image, height, width);
    const exist = fs.existsSync(
      path.join(__dirname, '../../thumbnails', `${outputimage}.jpg`)
    );
    expect(exist).toBe(true);
  });
});
