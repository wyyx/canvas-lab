import { testStr } from './test'

window.addEventListener('load', eventWindowLoaded, false)

function eventWindowLoaded() {
  canvasApp()
}

function canvasApp() {
  const theCanvas = document.getElementById('canvas') as HTMLCanvasElement
  const context = theCanvas.getContext('2d')
  let currentRotation = 0

  const image = new Image()
  image.src = '../images/demo.png'
  image.onload = () => {
    syncCanvasSizeWithImage(image, currentRotation, theCanvas)
    drawScreen()
  }

  const leftRotateBtn = document.getElementById('leftRotateBtn')
  const rightRotateBtn = document.getElementById('rightRotateBtn')

  leftRotateBtn.onclick = function() {
    currentRotation -= 90
    syncCanvasSizeWithImage(image, currentRotation, theCanvas)
    drawScreen()
  }

  rightRotateBtn.onclick = function() {
    currentRotation += 90
    syncCanvasSizeWithImage(image, currentRotation, theCanvas)
    drawScreen()
  }

  function drawScreen() {
    context.setTransform(1, 0, 0, 1, 0, 0)
    context.translate(theCanvas.width / 2, theCanvas.height / 2)
    context.rotate((currentRotation * Math.PI) / 180)
    context.drawImage(image, -image.width / 2, -image.height / 2)
  }

  function syncCanvasSizeWithImage(
    image: HTMLImageElement,
    rotate: number,
    canvas: HTMLCanvasElement
  ) {
    if (Math.abs(rotate / 90) % 2 === 0) {
      canvas.width = image.width
      canvas.height = image.height
    } else {
      canvas.width = image.height
      canvas.height = image.width
    }
  }
}
