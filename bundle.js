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
        drawScreen();
        function drawScreen() {
            context.strokeStyle = 'red';
            context.lineWidth = 5;
            context.moveTo(0, 0);
            context.lineTo(50, 0);
            context.lineTo(50, 50);
            context.stroke();
            var isPoint1InPath1 = context.isPointInPath(0, 0);
            var isPoint1InPath2 = context.isPointInPath(25, 100);
            console.log('isPoint1InPath1=' + isPoint1InPath1);
            console.log('isPoint1InPath2=' + isPoint1InPath2);
            context.closePath();
        }
    }
    return {
        setters: [],
        execute: function () {
            window.addEventListener('load', eventWindowLoaded, false);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsianMvdGVzdC50cyIsImpzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBLHFCQUFhLE9BQU8sR0FBRyxTQUFTLEVBQUM7Ozs7Ozs7SUNJakMsU0FBUyxpQkFBaUI7UUFDeEIsU0FBUyxFQUFFLENBQUE7SUFDYixDQUFDO0lBRUQsU0FBUyxTQUFTO1FBQ2hCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFzQixDQUFBO1FBQ3RFLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFeEMsVUFBVSxFQUFFLENBQUE7UUFFWixTQUFTLFVBQVU7WUFDakIsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUE7WUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7WUFDckIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDcEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDckIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDdEIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQ2hCLElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ2pELElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsZUFBZSxDQUFDLENBQUE7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxlQUFlLENBQUMsQ0FBQTtZQUNqRCxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDckIsQ0FBQztJQUNILENBQUM7Ozs7WUF6QkQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0ZXN0U3RyID0gXCJob3VkaW5pXCI7XHJcbiIsImltcG9ydCB7IHRlc3RTdHIgfSBmcm9tICcuL3Rlc3QnXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGV2ZW50V2luZG93TG9hZGVkLCBmYWxzZSlcclxuXHJcbmZ1bmN0aW9uIGV2ZW50V2luZG93TG9hZGVkKCkge1xyXG4gIGNhbnZhc0FwcCgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbnZhc0FwcCgpIHtcclxuICB2YXIgdGhlQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50XHJcbiAgdmFyIGNvbnRleHQgPSB0aGVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG5cclxuICBkcmF3U2NyZWVuKClcclxuXHJcbiAgZnVuY3Rpb24gZHJhd1NjcmVlbigpIHtcclxuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAncmVkJ1xyXG4gICAgY29udGV4dC5saW5lV2lkdGggPSA1XHJcbiAgICBjb250ZXh0Lm1vdmVUbygwLCAwKVxyXG4gICAgY29udGV4dC5saW5lVG8oNTAsIDApXHJcbiAgICBjb250ZXh0LmxpbmVUbyg1MCwgNTApXHJcbiAgICBjb250ZXh0LnN0cm9rZSgpXHJcbiAgICB2YXIgaXNQb2ludDFJblBhdGgxID0gY29udGV4dC5pc1BvaW50SW5QYXRoKDAsIDApXHJcbiAgICB2YXIgaXNQb2ludDFJblBhdGgyID0gY29udGV4dC5pc1BvaW50SW5QYXRoKDI1LCAxMDApXHJcbiAgICBjb25zb2xlLmxvZygnaXNQb2ludDFJblBhdGgxPScgKyBpc1BvaW50MUluUGF0aDEpXHJcbiAgICBjb25zb2xlLmxvZygnaXNQb2ludDFJblBhdGgyPScgKyBpc1BvaW50MUluUGF0aDIpXHJcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpXHJcbiAgfVxyXG59XHJcbiJdfQ==