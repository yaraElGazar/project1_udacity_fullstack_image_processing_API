import sharp from 'sharp';
import { promises as fsPromises } from 'fs';
import fs from 'fs';

// Creating the thumbnails folder if it does not exist
export function create(): void {
  if (!fs.existsSync('thumbnails')) {
    fsPromises.mkdir('thumbnails');
  }
}

// Using sharp to resize the image
export async function resizesharp(
  image: string | sharp.SharpOptions,
  heightEntered: number,
  widthEntered: number
): Promise<void> {
  const outputimage = `${image}_${heightEntered}_${widthEntered}`;

  try {
    const inputimage = `images/${image}.jpg`;

    await sharp(`${inputimage}`)
      .resize({
        width: widthEntered,
        height: heightEntered,
      })
      .toFile(`thumbnails/${outputimage}.jpg`);
  } catch (error) {
    console.log(error);
  }
}
