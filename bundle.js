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
System.register("main", ["test"], function (exports_2, context_2) {
    "use strict";
    var test_1;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (test_1_1) {
                test_1 = test_1_1;
            }
        ],
        execute: function () {
            console.log("TCL: testStr", test_1.testStr);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsianMvdGVzdC50cyIsImpzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBLHFCQUFhLE9BQU8sR0FBRyxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztZQ0VqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxjQUFPLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0ZXN0U3RyID0gXCJob3VkaW5pXCI7XHJcbiIsImltcG9ydCB7IHRlc3RTdHIgfSBmcm9tIFwiLi90ZXN0XCI7XHJcblxyXG5jb25zb2xlLmxvZyhcIlRDTDogdGVzdFN0clwiLCB0ZXN0U3RyKTtcclxuIl19