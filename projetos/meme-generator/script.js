const inputImage = document.querySelector('input.file-upload');
const inputText = document.querySelector('input.text-input');
const imageElement = document.querySelector('.meme-image');
const buttonWater = document.querySelector('.water');
const buttonEarth = document.querySelector('.earth');
const buttonFire = document.querySelector('.fire');
const memeItem1 = document.querySelector('.meme-1');
const memeItem2 = document.querySelector('.meme-2');
const memeItem3 = document.querySelector('.meme-3');
const memeItem4 = document.querySelector('.meme-4');

function createImageElement() {
  imageElement.src = '';
  const url = document.querySelector('input.file-upload').files[0];
  imageElement.style.backgroundImage = `url(${URL.createObjectURL(url)})`;
  imageElement.alt = '';
}


function showText() {
  const texto = inputText.value;
  document.querySelector('.meme-text').innerText = texto;
}

function turnBorderFire() {
  document.querySelector('.meme-image-container').style.border = '3px dashed rgb(255, 0, 0)';
}

function turnBorderWater() {
  document.querySelector('.meme-image-container').style.border = '5px double rgb(0, 0, 255)';
}

function turnBorderEarth() {
  document.querySelector('.meme-image-container').style.border = '6px groove rgb(0, 128, 0)';
}

function changeImage(event) {
  const url = event.src;
  imageElement.src = url;
  imageElement.alt = '';
}

inputText.addEventListener('keyup', showText);

inputImage.addEventListener('change', createImageElement, true);

buttonWater.addEventListener('click', turnBorderWater);

buttonFire.addEventListener('click', turnBorderFire);

buttonEarth.addEventListener('click', turnBorderEarth);

memeItem1.addEventListener('click', function () {
  changeImage(memeItem1);
});
memeItem2.addEventListener('click', function () {
  changeImage(memeItem2);
});

memeItem3.addEventListener('click', function () {
  changeImage(memeItem3);
});

memeItem4.addEventListener('click', function () {
  changeImage(memeItem4);
});
