import { testStr } from './test'

window.addEventListener('load', eventWindowLoaded, false)

function eventWindowLoaded() {
  canvasApp()
}

function canvasApp() {
  var theCanvas = document.getElementById('canvas') as HTMLCanvasElement
  var context = theCanvas.getContext('2d')

  var tileSheet = new Image()
  tileSheet.addEventListener('load', eventSheetLoaded, false)
  tileSheet.src = '../images/tanks_sheet.png'
  var mapIndexOffset = -1
  var mapRows = 10
  var mapCols = 10
  var tileMap = [
    [32, 31, 31, 31, 1, 31, 31, 31, 31, 32],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [32, 1, 26, 1, 26, 1, 26, 1, 1, 32],
    [32, 26, 1, 1, 26, 1, 1, 26, 1, 32],
    [32, 1, 1, 1, 26, 26, 1, 26, 1, 32],
    [32, 1, 1, 26, 1, 1, 1, 26, 1, 32],
    [32, 1, 1, 1, 1, 1, 1, 26, 1, 32],
    [1, 1, 26, 1, 26, 1, 26, 1, 1, 1],
    [32, 1, 1, 1, 1, 1, 1, 1, 1, 32],
    [32, 31, 31, 31, 1, 31, 31, 31, 31, 32]
  ]
  function eventSheetLoaded() {
    drawScreen()
  }
  function drawScreen() {
    for (var rowCtr = 0; rowCtr < mapRows; rowCtr++) {
      for (var colCtr = 0; colCtr < mapCols; colCtr++) {
        var tileId = tileMap[rowCtr][colCtr] + mapIndexOffset
        var sourceX = Math.floor(tileId % 8) * 32
        var sourceY = Math.floor(tileId / 8) * 32
        context.drawImage(
          tileSheet,
          sourceX,
          sourceY,
          32,
          32,
          colCtr * 32,
          rowCtr * 32,
          32,
          32
        )
      }
    }
  }
}
