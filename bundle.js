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
            drawScreen();
        };
        var leftRotateBtn = document.getElementById('leftRotateBtn');
        var rightRotateBtn = document.getElementById('rightRotateBtn');
        leftRotateBtn.onclick = function () {
            currentRotation -= 90;
            console.log('TCL: leftRotateBtn.onclick -> currentRotation', currentRotation);
            syncCanvasSizeWithImage(image, currentRotation, theCanvas);
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.translate(theCanvas.width / 2, theCanvas.height / 2);
            context.rotate((currentRotation * Math.PI) / 180);
            drawScreen();
        };
        rightRotateBtn.onclick = function () {
            currentRotation += 90;
            console.log('TCL: rightRotateBtn.onclick -> currentRotation', currentRotation);
            syncCanvasSizeWithImage(image, currentRotation, theCanvas);
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.translate(theCanvas.width / 2, theCanvas.height / 2);
            context.rotate((currentRotation * Math.PI) / 180);
            drawScreen();
        };
        function drawScreen() {
            // syncCanvasSizeWithImage(image, 0, theCanvas)
            context.drawImage(image, 0, 0);
        }
        function syncCanvasSizeWithImage(image, rotate, canvas) {
            if (rotate === 0) {
                canvas.width = image.width;
                canvas.height = image.height;
            }
            else if (rotate % 90 === 0) {
                canvas.width = image.height;
                canvas.height = image.width;
            }
            else {
                canvas.width = image.width;
                canvas.height = image.height;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsianMvdGVzdC50cyIsImpzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBLHFCQUFhLE9BQU8sR0FBRyxTQUFTLEVBQUM7Ozs7Ozs7SUNJakMsU0FBUyxpQkFBaUI7UUFDeEIsU0FBUyxFQUFFLENBQUE7SUFDYixDQUFDO0lBRUQsU0FBUyxTQUFTO1FBQ2hCLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFzQixDQUFBO1FBQ3hFLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDMUMsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFBO1FBRXZCLElBQU0sS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUE7UUFDekIsS0FBSyxDQUFDLEdBQUcsR0FBRyxvQkFBb0IsQ0FBQTtRQUNoQyxLQUFLLENBQUMsTUFBTSxHQUFHO1lBQ2IsVUFBVSxFQUFFLENBQUE7UUFDZCxDQUFDLENBQUE7UUFFRCxJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQzlELElBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUVoRSxhQUFhLENBQUMsT0FBTyxHQUFHO1lBQ3RCLGVBQWUsSUFBSSxFQUFFLENBQUE7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FDVCwrQ0FBK0MsRUFDL0MsZUFBZSxDQUNoQixDQUFBO1lBQ0QsdUJBQXVCLENBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQTtZQUUxRCxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDdEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQzVELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1lBRWpELFVBQVUsRUFBRSxDQUFBO1FBQ2QsQ0FBQyxDQUFBO1FBRUQsY0FBYyxDQUFDLE9BQU8sR0FBRztZQUN2QixlQUFlLElBQUksRUFBRSxDQUFBO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQ1QsZ0RBQWdELEVBQ2hELGVBQWUsQ0FDaEIsQ0FBQTtZQUVELHVCQUF1QixDQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUE7WUFFMUQsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ3RDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUM1RCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQTtZQUVqRCxVQUFVLEVBQUUsQ0FBQTtRQUNkLENBQUMsQ0FBQTtRQUVELFNBQVMsVUFBVTtZQUNqQiwrQ0FBK0M7WUFDL0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2hDLENBQUM7UUFFRCxTQUFTLHVCQUF1QixDQUM5QixLQUF1QixFQUN2QixNQUFjLEVBQ2QsTUFBeUI7WUFFekIsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNoQixNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUE7Z0JBQzFCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQTthQUM3QjtpQkFBTSxJQUFJLE1BQU0sR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUM1QixNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUE7Z0JBQzNCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQTthQUM1QjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUE7Z0JBQzFCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQTthQUM3QjtRQUNILENBQUM7SUFDSCxDQUFDOzs7O1lBeEVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdGVzdFN0ciA9IFwiaG91ZGluaVwiO1xyXG4iLCJpbXBvcnQgeyB0ZXN0U3RyIH0gZnJvbSAnLi90ZXN0J1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBldmVudFdpbmRvd0xvYWRlZCwgZmFsc2UpXHJcblxyXG5mdW5jdGlvbiBldmVudFdpbmRvd0xvYWRlZCgpIHtcclxuICBjYW52YXNBcHAoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYW52YXNBcHAoKSB7XHJcbiAgY29uc3QgdGhlQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50XHJcbiAgY29uc3QgY29udGV4dCA9IHRoZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcbiAgbGV0IGN1cnJlbnRSb3RhdGlvbiA9IDBcclxuXHJcbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxyXG4gIGltYWdlLnNyYyA9ICcuLi9pbWFnZXMvZGVtby5wbmcnXHJcbiAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgZHJhd1NjcmVlbigpXHJcbiAgfVxyXG5cclxuICBjb25zdCBsZWZ0Um90YXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnRSb3RhdGVCdG4nKVxyXG4gIGNvbnN0IHJpZ2h0Um90YXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0Um90YXRlQnRuJylcclxuXHJcbiAgbGVmdFJvdGF0ZUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBjdXJyZW50Um90YXRpb24gLT0gOTBcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAnVENMOiBsZWZ0Um90YXRlQnRuLm9uY2xpY2sgLT4gY3VycmVudFJvdGF0aW9uJyxcclxuICAgICAgY3VycmVudFJvdGF0aW9uXHJcbiAgICApXHJcbiAgICBzeW5jQ2FudmFzU2l6ZVdpdGhJbWFnZShpbWFnZSwgY3VycmVudFJvdGF0aW9uLCB0aGVDYW52YXMpXHJcblxyXG4gICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMClcclxuICAgIGNvbnRleHQudHJhbnNsYXRlKHRoZUNhbnZhcy53aWR0aCAvIDIsIHRoZUNhbnZhcy5oZWlnaHQgLyAyKVxyXG4gICAgY29udGV4dC5yb3RhdGUoKGN1cnJlbnRSb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwKVxyXG5cclxuICAgIGRyYXdTY3JlZW4oKVxyXG4gIH1cclxuXHJcbiAgcmlnaHRSb3RhdGVCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgY3VycmVudFJvdGF0aW9uICs9IDkwXHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgJ1RDTDogcmlnaHRSb3RhdGVCdG4ub25jbGljayAtPiBjdXJyZW50Um90YXRpb24nLFxyXG4gICAgICBjdXJyZW50Um90YXRpb25cclxuICAgIClcclxuXHJcbiAgICBzeW5jQ2FudmFzU2l6ZVdpdGhJbWFnZShpbWFnZSwgY3VycmVudFJvdGF0aW9uLCB0aGVDYW52YXMpXHJcblxyXG4gICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMClcclxuICAgIGNvbnRleHQudHJhbnNsYXRlKHRoZUNhbnZhcy53aWR0aCAvIDIsIHRoZUNhbnZhcy5oZWlnaHQgLyAyKVxyXG4gICAgY29udGV4dC5yb3RhdGUoKGN1cnJlbnRSb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwKVxyXG5cclxuICAgIGRyYXdTY3JlZW4oKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZHJhd1NjcmVlbigpIHtcclxuICAgIC8vIHN5bmNDYW52YXNTaXplV2l0aEltYWdlKGltYWdlLCAwLCB0aGVDYW52YXMpXHJcbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN5bmNDYW52YXNTaXplV2l0aEltYWdlKFxyXG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQsXHJcbiAgICByb3RhdGU6IG51bWJlcixcclxuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcclxuICApIHtcclxuICAgIGlmIChyb3RhdGUgPT09IDApIHtcclxuICAgICAgY2FudmFzLndpZHRoID0gaW1hZ2Uud2lkdGhcclxuICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlLmhlaWdodFxyXG4gICAgfSBlbHNlIGlmIChyb3RhdGUgJSA5MCA9PT0gMCkge1xyXG4gICAgICBjYW52YXMud2lkdGggPSBpbWFnZS5oZWlnaHRcclxuICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlLndpZHRoXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYW52YXMud2lkdGggPSBpbWFnZS53aWR0aFxyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==