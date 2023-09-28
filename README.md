# Approach

Lazy loading images is as simple as adding a single attribute to your img tag. The loading attribute can be set to lazy to enable lazy loading on the image. The browser will automatically determine when to download the image based on how close the image is to being on the screen.

``` html
<img src="some-image.jpg" loading="lazy" />
```

The biggest downside to this basic lazy loading is that the user will see a blank space where the image should be until the image is downloaded. This is not an ideal user experience. To improve this, I recommend showing a blurred placeholder image until the full image is downloaded.

A blurred placeholder image is a low-resolution version of the full image that is blurred to hide the details. This gives the user a sense of what the image will be, even though it is not yet fully downloaded. Once the full image is downloaded, the blurred placeholder image is replaced with the full image.

Lazy loading images with blurred placeholders is a simple way to improve the user experience of your website. It can also help to improve the performance of your website by reducing the number of images that are loaded at once.

In this assignment, I use a package name "Sharp" to generate placeholder images.

# Demonstration

## Install packages

```bash
yarn
```

## Prepare placeholder images and convert images to webp format

```bash
yarn convert
```

## Start

```bash
yarn start
```






