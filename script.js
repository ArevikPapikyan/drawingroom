function setup() {
    createCanvas(1000, 700);
    background("#acacac");
}

function main() {
    socket = io.connect('http://localhost:3000');

    function drawcircles(coordinates) {
        for (var i = 0; i < coordinates.length; i++) {
            ellipse(coordinates[i][0], coordinates[i][1], 30, 30);
        }
    }
    socket.on('drawcircles', drawcircles);

} // main closing bracket

window.onload = main;

function mouseDragged() {
    socket.emit("get coordinates", [mouseX, mouseY]);
}