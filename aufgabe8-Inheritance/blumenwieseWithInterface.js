var Aufgabe7_Classes;
(function (Aufgabe7_Classes) {
    window.addEventListener("load", init);
    var alleBienen = [];
    var n = 10; // Anzahl der Bienen
    var imgData = ImageData;
    var fixedFlowers = [];
    // canvasInitialize_
    function init(_event) {
        Aufgabe7_Classes.canvas = document.getElementsByTagName("canvas")[0];
        console.log(Aufgabe7_Classes.canvas);
        Aufgabe7_Classes.crc2 = Aufgabe7_Classes.canvas.getContext("2d");
        console.log("crc2");
        var landscape = new Aufgabe7_Classes.Landscape();
        //RANDOMFLOWERS LEFT
        for (var i = 0; i < 15; i++) {
            var flower0 = new Aufgabe7_Classes.Flower();
            flower0.drawType();
        }
        //RANDOMFLOWERS RIGHT
        for (var i = 0; i < 15; i++) {
            var flower0 = new Aufgabe7_Classes.Flower();
            flower0.drawType();
        }
        //getImgData erst, wenn alles gezeichnet ist        
        imgData = Aufgabe7_Classes.crc2.getImageData(0, 0, Aufgabe7_Classes.canvas.width, Aufgabe7_Classes.canvas.height);
        for (var i = void 0; i < 10; i++) {
            var placedFlowers = new Aufgabe7_Classes.Flower;
            placedFlowers = fixedFlowers[i];
            fixedFlowers.push(placedFlowers);
            console.log(placedFlowers);
        }
        // Startpunkt f�r Bienen
        for (var i = 0; i < n; i++) {
            var values = new Aufgabe7_Classes.Bee(240, 200);
            alleBienen[i] = values;
        }
        window.setTimeout(animate, 20);
        //addBeeOnClick
        Aufgabe7_Classes.canvas.addEventListener("click", addBeeOnClick);
        console.log("IMGDATA?");
    }
    //ANIMATE
    function animate() {
        Aufgabe7_Classes.crc2.putImageData(imgData, 0, 0);
        for (var i = 0; i < n; i++) {
            var values = alleBienen[i];
            values.update();
            if (values.x < 0) {
                values.x = 600;
            }
            if (values.x > 600) {
                values.x = 0;
            }
            if (values.y < 0) {
                values.y = 400;
            }
            if (values.y > 400) {
                values.y = 0;
            }
        }
        window.setTimeout(animate, 20);
        console.log("Hallo, ist da jemand?");
    }
    function addBeeOnClick(_event) {
        var colors = ["#F7FE2E", "#2E2EFE", "#FE9A2E", "#FA58F4", "#81DAF5"];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        if (n < 99) {
            n++;
            alleBienen.push(new Aufgabe7_Classes.Bee(240, 200));
        }
        else {
            n -= 10;
            alleBienen.push(new Aufgabe7_Classes.Bee(240, 200));
        }
        console.log(n);
    }
})(Aufgabe7_Classes || (Aufgabe7_Classes = {}));
//# sourceMappingURL=blumenwieseWithInterface.js.map