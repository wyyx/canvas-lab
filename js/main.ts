import { testStr } from './test'

window.addEventListener('load', eventWindowLoaded, false)

function eventWindowLoaded() {
  canvasApp()
}

function canvasApp() {
  var theCanvas = document.getElementById('canvas') as HTMLCanvasElement
  var context = theCanvas.getContext('2d')

  var mouseX
  var mouseY
  var tileSheet = new Image()
  tileSheet.addEventListener('load', eventSheetLoaded, false)
  tileSheet.src = '../images/tanks_sheet.png'
  var imageData = context.createImageData(32, 32)

  function eventSheetLoaded() {
    startUp()
  }

  function startUp() {
    context.fillStyle = '#aaaaaa'
    context.fillRect(0, 0, 256, 256)
    drawTileSheet()
  }

  function drawTileSheet() {
    context.drawImage(tileSheet, 0, 0)
  }

  function highlightTile(tileId, x, y) {
    context.fillStyle = '#aaaaaa'
    context.fillRect(0, 0, 256, 128)
    drawTileSheet()
    imageData = context.getImageData(x, y, 32, 32)
    //loop through imageData.data. Set every 4th value to a new value
    for (let j = 3; j < imageData.data.length; j += 4) {
      imageData.data[j] = 128
    }
    var startX = Math.floor(tileId % 8) * 32
    var startY = Math.floor(tileId / 8) * 32
    context.strokeStyle = 'red'
    context.strokeRect(startX, startY, 32, 32)
  }

  function onMouseMove(e) {
    mouseX = e.clientX - theCanvas.offsetLeft
    mouseY = e.clientY - theCanvas.offsetTop
  }

  function onMouseClick(e) {
    console.log('click: ' + mouseX + ',' + mouseY)
    if (mouseY < 128) {
      //find tile to highlight
      var col = Math.floor(mouseX / 32)
      var row = Math.floor(mouseY / 32)
      var tileId = row * 7 + (col + row)
      highlightTile(tileId, col * 32, row * 32)
    } else {
      var col = Math.floor(mouseX / 32)
      var row = Math.floor(mouseY / 32)
      context.putImageData(imageData, col * 32, row * 32)
    }
  }

  theCanvas.addEventListener('mousemove', onMouseMove, false)
  theCanvas.addEventListener('click', onMouseClick, false)
}
