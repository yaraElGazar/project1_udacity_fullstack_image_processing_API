# Image processing API

##### This API allows the user to place and resize images into their frontend via url parameters. It also reduces page load size by serving scaled versions of the images to their frontend.

## Quick Start

1. To compile typescript files to JavaScript:<br> type to your terminal
   `npm run build`

2. To run prettier:<br>
   type `npm run prettier`

3. To run eslint: <br>
   type `npm run lint`

4. To run Jasmine tests: <br>
   type `npm run test`

5. To start the server: <br>
   type `npm run start`

## Using the API

##### To start using the API please follow the following steps

1. Make sure the server is running on port 3000.
2. Open your browser
3. In the Address bar type: <br>
   `http://localhost:3000/api/images?imagename=` Name of the required image to be processed`&height=`Required height`&width=`Required width

For Example: <br>
If the required image is : fjord.jpg<br>
the required width is : 1000 <br>
the required height is : 2000 <br>

#### The url to be used is: <br>

`http://localhost:3000/api/images/?imagename=fjord&width=1000&height=2000`

#### The processed image

The processed image will be sent to the browser and will be saved to the 'thumbnails' folder with the name: <br>
`imagename_height_width.jpg`<br>
For the previous example, the output image will be named:<br>
`fjord_2000_1000.jpg`<br>

#### The availble images to be used are (saved in the 'images' folder): <br>

1. encenadaport.jpg
2. fjord.jpg
3. icelandwaterfall.jpg
4. palmtunnel.jpg
5. santamonica.jpg
