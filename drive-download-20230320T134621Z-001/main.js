var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var roverWidth = 100
var roverHeight = 90
var roverX = 10
var roverY = 10
var backgroundImage = "mars.jpg"
var roverImage = "rover.png"
    function add(){
        background = new Image()
        background.onload = uploadBackground
        background.src=backgroundImage
        rover = new Image()
        rover.onload = uploadRover
        rover.src=roverImage
    }   
    function uploadBackground(){
        ctx.drawImage(background,0,0,canvas.width,canvas.height)
    }
    function uploadRover(){
        ctx.drawImage(rover,roverX,roverY,roverWidth,roverHeight)
    }
    window.addEventListener("keydown", keyDown)
    function keyDown(e){
        var keyPressed = e.keyCode 
        console.log(keyPressed)
        if (keyPressed == "38") {
            up()
            console.log("up")
        }
        if (keyPressed == "39") {
            right()
        }
        if (keyPressed == "40") {
            down()
        }
        if (keyPressed == "37") {
            left()
        }
    }

    function up(){
        if (roverY >= 90) {
            roverY = roverY- 10
            uploadBackground()
            uploadRover()
        }
    }
    function down(){
        if (roverY <= 400) {
            roverY = roverY + 10
            uploadBackground()
            uploadRover()
        }   
    }
    function right(){
        if (roverX <= 800) {
            roverX = roverX + 10
            uploadBackground()
            uploadRover()
        }
    }
    function left(){
        if (roverX >= 10) {
            roverX = roverX - 10
            uploadBackground()
            uploadRover()
        }
    }