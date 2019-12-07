System.register("test", [], function (exports_1, context_1) {
    "use strict";
    var testStr;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("testStr", testStr = "houdini");
        }
    };
});
System.register("main", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function eventWindowLoaded() {
        canvasApp();
    }
    function canvasApp() {
        var theCanvas = document.getElementById('canvas');
        var context = theCanvas.getContext('2d');
        var currentRotation = 0;
        var hFlip = 1;
        var vFlip = 1;
        var image = new Image();
        image.src = '../images/demo.png';
        image.onload = function () {
            syncCanvasSizeWithImage(image, currentRotation, theCanvas);
            drawScreen();
        };
        var leftRotateBtn = document.getElementById('leftRotateBtn');
        var rightRotateBtn = document.getElementById('rightRotateBtn');
        var hFlipBtn = document.getElementById('hFlipBtn');
        var vFlipBtn = document.getElementById('vFlipBtn');
        leftRotateBtn.onclick = function () {
            currentRotation -= 90;
            syncCanvasSizeWithImage(image, currentRotation, theCanvas);
            drawScreen();
        };
        rightRotateBtn.onclick = function () {
            currentRotation += 90;
            syncCanvasSizeWithImage(image, currentRotation, theCanvas);
            drawScreen();
        };
        hFlipBtn.onclick = function () {
            hFlip = -hFlip;
            drawScreen();
        };
        vFlipBtn.onclick = function () {
            vFlip = -vFlip;
            drawScreen();
        };
        function drawScreen() {
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.translate(theCanvas.width / 2, theCanvas.height / 2);
            context.rotate((currentRotation * Math.PI) / 180);
            context.scale(hFlip, vFlip);
            context.drawImage(image, -image.width / 2, -image.height / 2);
        }
        function syncCanvasSizeWithImage(image, rotate, canvas) {
            if (Math.abs(rotate / 90) % 2 === 0) {
                canvas.width = image.width;
                canvas.height = image.height;
            }
            else {
                canvas.width = image.height;
                canvas.height = image.width;
            }
        }
    }
    return {
        setters: [],
        execute: function () {
            window.addEventListener('load', eventWindowLoaded, false);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsianMvdGVzdC50cyIsImpzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBLHFCQUFhLE9BQU8sR0FBRyxTQUFTLEVBQUM7Ozs7Ozs7SUNJakMsU0FBUyxpQkFBaUI7UUFDeEIsU0FBUyxFQUFFLENBQUE7SUFDYixDQUFDO0lBRUQsU0FBUyxTQUFTO1FBQ2hCLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFzQixDQUFBO1FBQ3hFLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDMUMsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUNiLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUViLElBQU0sS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUE7UUFDekIsS0FBSyxDQUFDLEdBQUcsR0FBRyxvQkFBb0IsQ0FBQTtRQUNoQyxLQUFLLENBQUMsTUFBTSxHQUFHO1lBQ2IsdUJBQXVCLENBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQTtZQUMxRCxVQUFVLEVBQUUsQ0FBQTtRQUNkLENBQUMsQ0FBQTtRQUVELElBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDOUQsSUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ2hFLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDcEQsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUVwRCxhQUFhLENBQUMsT0FBTyxHQUFHO1lBQ3RCLGVBQWUsSUFBSSxFQUFFLENBQUE7WUFDckIsdUJBQXVCLENBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQTtZQUMxRCxVQUFVLEVBQUUsQ0FBQTtRQUNkLENBQUMsQ0FBQTtRQUVELGNBQWMsQ0FBQyxPQUFPLEdBQUc7WUFDdkIsZUFBZSxJQUFJLEVBQUUsQ0FBQTtZQUNyQix1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFBO1lBQzFELFVBQVUsRUFBRSxDQUFBO1FBQ2QsQ0FBQyxDQUFBO1FBRUQsUUFBUSxDQUFDLE9BQU8sR0FBRztZQUNqQixLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUE7WUFDZCxVQUFVLEVBQUUsQ0FBQTtRQUNkLENBQUMsQ0FBQTtRQUVELFFBQVEsQ0FBQyxPQUFPLEdBQUc7WUFDakIsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFBO1lBQ2QsVUFBVSxFQUFFLENBQUE7UUFDZCxDQUFDLENBQUE7UUFFRCxTQUFTLFVBQVU7WUFDakIsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ3RDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUM1RCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQTtZQUNqRCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQTtZQUMzQixPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUMvRCxDQUFDO1FBRUQsU0FBUyx1QkFBdUIsQ0FDOUIsS0FBdUIsRUFDdkIsTUFBYyxFQUNkLE1BQXlCO1lBRXpCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkMsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFBO2dCQUMxQixNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUE7YUFDN0I7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFBO2dCQUMzQixNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUE7YUFDNUI7UUFDSCxDQUFDO0lBQ0gsQ0FBQzs7OztZQXBFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRlc3RTdHIgPSBcImhvdWRpbmlcIjtcbiIsImltcG9ydCB7IHRlc3RTdHIgfSBmcm9tICcuL3Rlc3QnXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZXZlbnRXaW5kb3dMb2FkZWQsIGZhbHNlKVxuXG5mdW5jdGlvbiBldmVudFdpbmRvd0xvYWRlZCgpIHtcbiAgY2FudmFzQXBwKClcbn1cblxuZnVuY3Rpb24gY2FudmFzQXBwKCkge1xuICBjb25zdCB0aGVDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnRcbiAgY29uc3QgY29udGV4dCA9IHRoZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gIGxldCBjdXJyZW50Um90YXRpb24gPSAwXG4gIGxldCBoRmxpcCA9IDFcbiAgbGV0IHZGbGlwID0gMVxuXG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKClcbiAgaW1hZ2Uuc3JjID0gJy4uL2ltYWdlcy9kZW1vLnBuZydcbiAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgIHN5bmNDYW52YXNTaXplV2l0aEltYWdlKGltYWdlLCBjdXJyZW50Um90YXRpb24sIHRoZUNhbnZhcylcbiAgICBkcmF3U2NyZWVuKClcbiAgfVxuXG4gIGNvbnN0IGxlZnRSb3RhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdFJvdGF0ZUJ0bicpXG4gIGNvbnN0IHJpZ2h0Um90YXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0Um90YXRlQnRuJylcbiAgY29uc3QgaEZsaXBCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaEZsaXBCdG4nKVxuICBjb25zdCB2RmxpcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2RmxpcEJ0bicpXG5cbiAgbGVmdFJvdGF0ZUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgY3VycmVudFJvdGF0aW9uIC09IDkwXG4gICAgc3luY0NhbnZhc1NpemVXaXRoSW1hZ2UoaW1hZ2UsIGN1cnJlbnRSb3RhdGlvbiwgdGhlQ2FudmFzKVxuICAgIGRyYXdTY3JlZW4oKVxuICB9XG5cbiAgcmlnaHRSb3RhdGVCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGN1cnJlbnRSb3RhdGlvbiArPSA5MFxuICAgIHN5bmNDYW52YXNTaXplV2l0aEltYWdlKGltYWdlLCBjdXJyZW50Um90YXRpb24sIHRoZUNhbnZhcylcbiAgICBkcmF3U2NyZWVuKClcbiAgfVxuXG4gIGhGbGlwQnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBoRmxpcCA9IC1oRmxpcFxuICAgIGRyYXdTY3JlZW4oKVxuICB9XG5cbiAgdkZsaXBCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIHZGbGlwID0gLXZGbGlwXG4gICAgZHJhd1NjcmVlbigpXG4gIH1cblxuICBmdW5jdGlvbiBkcmF3U2NyZWVuKCkge1xuICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApXG4gICAgY29udGV4dC50cmFuc2xhdGUodGhlQ2FudmFzLndpZHRoIC8gMiwgdGhlQ2FudmFzLmhlaWdodCAvIDIpXG4gICAgY29udGV4dC5yb3RhdGUoKGN1cnJlbnRSb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwKVxuICAgIGNvbnRleHQuc2NhbGUoaEZsaXAsIHZGbGlwKVxuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAtaW1hZ2Uud2lkdGggLyAyLCAtaW1hZ2UuaGVpZ2h0IC8gMilcbiAgfVxuXG4gIGZ1bmN0aW9uIHN5bmNDYW52YXNTaXplV2l0aEltYWdlKFxuICAgIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50LFxuICAgIHJvdGF0ZTogbnVtYmVyLFxuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcbiAgKSB7XG4gICAgaWYgKE1hdGguYWJzKHJvdGF0ZSAvIDkwKSAlIDIgPT09IDApIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IGltYWdlLndpZHRoXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IGltYWdlLmhlaWdodFxuICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlLndpZHRoXG4gICAgfVxuICB9XG59XG4iXX0=