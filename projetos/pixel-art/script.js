const colorPalette = document.querySelector('.color-palette');
const pixelBoard = document.querySelector('.pixel-board');
const clearBoard = document.querySelector('.clear-board');
const inputBoard = document.querySelector('.board-size');
const generateBoard = document.querySelector('.generate-board');
const randomizeButton = document.querySelector('.random-color-button');


colorPalette.addEventListener('click', event => {
  const selectedColor = document.getElementById(event.target.id);
  const verify = selectedColor.className;
  verify == 'color-palette' ? (
    event.stopPropagation()
    ):(
      document.querySelector('.selected').className = 'color',
      selectedColor.className = 'color selected')
    }, false);
    
    pixelBoard.addEventListener('click', event => {
      const selectedPixel = event.target;
      const colorSelected = document.querySelector('.selected');
      const colorSelectedRGB = window.getComputedStyle(colorSelected, null).getPropertyValue('background-color');
      selectedPixel.style.backgroundColor = colorSelectedRGB;  
    });
    
clearBoard.addEventListener('click', () => {
  pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1){
    pixels[index].style.backgroundColor = 'white';
  }
});

generateBoard.addEventListener('click', () => {
  const rowNumbers = pixelBoard.children.length;
  let number = 0;
  
  (inputBoard.value == '') ? number='':
  (inputBoard.value < 5) ? (number = 5,   inputBoard.value = number):
  (inputBoard.value > 50) ? (number = 50,   inputBoard.value = number):(number = parseInt(inputBoard.value));
  
  
  if (rowNumbers > number && number !== '') {
    for (let row = 0; row < rowNumbers; row += 1){
      if (row < number) {
        for (let columns = 1; columns <= (rowNumbers-number); columns += 1){
          let lastRows = rowNumbers-columns;
          // let aux = pixelBoard.children[row].children[lastRows];
          pixelBoard.children[row].removeChild(pixelBoard.children[row].children[lastRows]);
        }
      } else {
          let aux = pixelBoard.lastChild;
          pixelBoard.removeChild(aux);
      }
    }
    pixelBoard.style.width = `${(number*41)}px`;
    pixelBoard.style.height = `${(number*41)}px`;
    
  } else if (rowNumbers < number && number !== '') {
    for (let row = 0; row < number; row += 1){
      if (row < rowNumbers) {
        for (let pixels = rowNumbers; pixels < number; pixels += 1){
          const newPixel = document.createElement('div');
          newPixel.className = 'pixel td'
          pixelBoard.children[row].appendChild(newPixel);
        }
      } else {
        for (let newRowIndex=rowNumbers; newRowIndex <= number; newRowIndex += 1){
          const newRow = document.createElement('div');
          newRow.className = 'tr'
          pixelBoard.appendChild(newRow);
          break;
        }
        for (let pixels = 0; pixels < number; pixels += 1){
          let index = row;
          const newPixel = document.createElement('div');
          newPixel.className = 'pixel td'
          pixelBoard.children[index].appendChild(newPixel);
        }
      }
    }
    pixelBoard.style.width = `${(number*41)}px`;
    pixelBoard.style.height = `${(number*41)}px`;
  } else {
    number == '' ?
    alert('Board inválido!'):alert('numeros iguais');
  }
});

randomizeButton.addEventListener('click', randColor);

function randColor() {
  for (let index=1; index < colorPalette.children.length; index += 1){
    const colorItem = colorPalette.children[index];
    colorItem.style.backgroundColor = `rgb(${parseInt(Math.random()*253+1)}, ${parseInt(Math.random()*255)}, ${parseInt(Math.random()*255)})`
    // console.log(index);
    // console.log(`rgb(${parseInt(Math.random()*255)}, ${parseInt(Math.random()*255)}, ${parseInt(Math.random()*255)})`)
  }
}

window.onload = randColor();