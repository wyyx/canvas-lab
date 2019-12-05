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
        var image = new Image();
        image.src = '../images/demo.png';
        image.onload = function () {
            syncCanvasSizeWithImage(image, currentRotation, theCanvas);
            drawScreen();
        };
        var leftRotateBtn = document.getElementById('leftRotateBtn');
        var rightRotateBtn = document.getElementById('rightRotateBtn');
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
        function drawScreen() {
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.translate(theCanvas.width / 2, theCanvas.height / 2);
            context.rotate((currentRotation * Math.PI) / 180);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsianMvdGVzdC50cyIsImpzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBLHFCQUFhLE9BQU8sR0FBRyxTQUFTLEVBQUM7Ozs7Ozs7SUNJakMsU0FBUyxpQkFBaUI7UUFDeEIsU0FBUyxFQUFFLENBQUE7SUFDYixDQUFDO0lBRUQsU0FBUyxTQUFTO1FBQ2hCLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFzQixDQUFBO1FBQ3hFLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDMUMsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFBO1FBRXZCLElBQU0sS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUE7UUFDekIsS0FBSyxDQUFDLEdBQUcsR0FBRyxvQkFBb0IsQ0FBQTtRQUNoQyxLQUFLLENBQUMsTUFBTSxHQUFHO1lBQ2IsdUJBQXVCLENBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQTtZQUMxRCxVQUFVLEVBQUUsQ0FBQTtRQUNkLENBQUMsQ0FBQTtRQUVELElBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDOUQsSUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBRWhFLGFBQWEsQ0FBQyxPQUFPLEdBQUc7WUFDdEIsZUFBZSxJQUFJLEVBQUUsQ0FBQTtZQUNyQix1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFBO1lBQzFELFVBQVUsRUFBRSxDQUFBO1FBQ2QsQ0FBQyxDQUFBO1FBRUQsY0FBYyxDQUFDLE9BQU8sR0FBRztZQUN2QixlQUFlLElBQUksRUFBRSxDQUFBO1lBQ3JCLHVCQUF1QixDQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUE7WUFDMUQsVUFBVSxFQUFFLENBQUE7UUFDZCxDQUFDLENBQUE7UUFFRCxTQUFTLFVBQVU7WUFDakIsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ3RDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUM1RCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQTtZQUNqRCxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUMvRCxDQUFDO1FBRUQsU0FBUyx1QkFBdUIsQ0FDOUIsS0FBdUIsRUFDdkIsTUFBYyxFQUNkLE1BQXlCO1lBRXpCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkMsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFBO2dCQUMxQixNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUE7YUFDN0I7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFBO2dCQUMzQixNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUE7YUFDNUI7UUFDSCxDQUFDO0lBQ0gsQ0FBQzs7OztZQXJERCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRlc3RTdHIgPSBcImhvdWRpbmlcIjtcbiIsImltcG9ydCB7IHRlc3RTdHIgfSBmcm9tICcuL3Rlc3QnXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZXZlbnRXaW5kb3dMb2FkZWQsIGZhbHNlKVxuXG5mdW5jdGlvbiBldmVudFdpbmRvd0xvYWRlZCgpIHtcbiAgY2FudmFzQXBwKClcbn1cblxuZnVuY3Rpb24gY2FudmFzQXBwKCkge1xuICBjb25zdCB0aGVDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnRcbiAgY29uc3QgY29udGV4dCA9IHRoZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gIGxldCBjdXJyZW50Um90YXRpb24gPSAwXG5cbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICBpbWFnZS5zcmMgPSAnLi4vaW1hZ2VzL2RlbW8ucG5nJ1xuICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgc3luY0NhbnZhc1NpemVXaXRoSW1hZ2UoaW1hZ2UsIGN1cnJlbnRSb3RhdGlvbiwgdGhlQ2FudmFzKVxuICAgIGRyYXdTY3JlZW4oKVxuICB9XG5cbiAgY29uc3QgbGVmdFJvdGF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0Um90YXRlQnRuJylcbiAgY29uc3QgcmlnaHRSb3RhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHRSb3RhdGVCdG4nKVxuXG4gIGxlZnRSb3RhdGVCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGN1cnJlbnRSb3RhdGlvbiAtPSA5MFxuICAgIHN5bmNDYW52YXNTaXplV2l0aEltYWdlKGltYWdlLCBjdXJyZW50Um90YXRpb24sIHRoZUNhbnZhcylcbiAgICBkcmF3U2NyZWVuKClcbiAgfVxuXG4gIHJpZ2h0Um90YXRlQnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBjdXJyZW50Um90YXRpb24gKz0gOTBcbiAgICBzeW5jQ2FudmFzU2l6ZVdpdGhJbWFnZShpbWFnZSwgY3VycmVudFJvdGF0aW9uLCB0aGVDYW52YXMpXG4gICAgZHJhd1NjcmVlbigpXG4gIH1cblxuICBmdW5jdGlvbiBkcmF3U2NyZWVuKCkge1xuICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApXG4gICAgY29udGV4dC50cmFuc2xhdGUodGhlQ2FudmFzLndpZHRoIC8gMiwgdGhlQ2FudmFzLmhlaWdodCAvIDIpXG4gICAgY29udGV4dC5yb3RhdGUoKGN1cnJlbnRSb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwKVxuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAtaW1hZ2Uud2lkdGggLyAyLCAtaW1hZ2UuaGVpZ2h0IC8gMilcbiAgfVxuXG4gIGZ1bmN0aW9uIHN5bmNDYW52YXNTaXplV2l0aEltYWdlKFxuICAgIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50LFxuICAgIHJvdGF0ZTogbnVtYmVyLFxuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcbiAgKSB7XG4gICAgaWYgKE1hdGguYWJzKHJvdGF0ZSAvIDkwKSAlIDIgPT09IDApIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IGltYWdlLndpZHRoXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IGltYWdlLmhlaWdodFxuICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlLndpZHRoXG4gICAgfVxuICB9XG59XG4iXX0=