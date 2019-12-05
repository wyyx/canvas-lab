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
    drawScreen()
  }

  const leftRotateBtn = document.getElementById('leftRotateBtn')
  const rightRotateBtn = document.getElementById('rightRotateBtn')

  leftRotateBtn.onclick = function() {
    currentRotation -= 90
    console.log(
      'TCL: leftRotateBtn.onclick -> currentRotation',
      currentRotation
    )
    syncCanvasSizeWithImage(image, currentRotation, theCanvas)

    context.setTransform(1, 0, 0, 1, 0, 0)
    context.translate(theCanvas.width / 2, theCanvas.height / 2)
    context.rotate((currentRotation * Math.PI) / 180)

    drawScreen()
  }

  rightRotateBtn.onclick = function() {
    currentRotation += 90
    console.log(
      'TCL: rightRotateBtn.onclick -> currentRotation',
      currentRotation
    )

    syncCanvasSizeWithImage(image, currentRotation, theCanvas)

    context.setTransform(1, 0, 0, 1, 0, 0)
    context.translate(theCanvas.width / 2, theCanvas.height / 2)
    context.rotate((currentRotation * Math.PI) / 180)

    drawScreen()
  }

  function drawScreen() {
    // syncCanvasSizeWithImage(image, 0, theCanvas)
    context.drawImage(image, 0, 0)
  }

  function syncCanvasSizeWithImage(
    image: HTMLImageElement,
    rotate: number,
    canvas: HTMLCanvasElement
  ) {
    if (rotate === 0) {
      canvas.width = image.width
      canvas.height = image.height
    } else if (rotate % 90 === 0) {
      canvas.width = image.height
      canvas.height = image.width
    } else {
      canvas.width = image.width
      canvas.height = image.height
    }
  }
}
