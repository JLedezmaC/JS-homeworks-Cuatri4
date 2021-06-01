const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
canvas.style.border = '1px solid black';

let positionX = 450;
let positionY = 450;
let VelocityX = getRandomArbitrary(-3, 3);
let VelocityY = getRandomArbitrary(-3, 3);

let positionXCircle = 250;
let positionYCircle = 250;
let VelocityXCircle = getRandomArbitrary(-8, 8);
let VelocityYCircle = getRandomArbitrary(-8, 8);

function escenary(rectangle){
    if(rectangle.positionX + 150 > canvas.width ){
        rectangle.VelocityX = -rectangle.VelocityX;
    }
    if(rectangle.positionX < 0){
        rectangle.VelocityX = -rectangle.VelocityX;
    }

    if(rectangle.positionY + 150 > canvas.height ){
        rectangle.VelocityY = -rectangle.VelocityY;
    }
    if(rectangle.positionY < 0){
        rectangle.VelocityY = -rectangle.VelocityY;
    }

}

function animation2D(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    const rectangle = new mesuresSquare (positionX,positionY,VelocityX,VelocityY);
    const circle = new measuresCircle (positionXCircle,positionYCircle,VelocityXCircle,VelocityYCircle);
    rectangle.drawSquare();
    circle.drawCircle();

    escenary(rectangle);


    if(positionXCircle - 100  <= 0 ){
        VelocityXCircle = -VelocityXCircle; 
    }

    if(positionXCircle + 100 > canvas.width){
        VelocityXCircle = -VelocityXCircle; 
    }

    if(positionYCircle - 100  <= 0){
        VelocityYCircle = -VelocityYCircle;
    }

    if(positionYCircle + 100 > canvas.height ){
        VelocityYCircle = -VelocityYCircle;
    }
    
    let edgeX =  positionXCircle;
    let edgeY = positionYCircle;

    if(positionXCircle < positionX ){
        edgeX =  positionX;
    }else if (positionXCircle > positionX + 150 ){
        edgeX = positionX + 150;
    }

    if(positionYCircle < positionY ){
        edgeY = positionY
    }else if(positionYCircle > positionY + 150){
        edgeY = positionY + 150
    }


    const distX  = positionXCircle - edgeX;
    const distY  = positionYCircle - edgeY;
    const distance = Math.sqrt((distX*distX) + (distY*distY));

    if(distance <= 100){
        if(Math.abs(distX)<= 100 && Math.abs(distX) > 75){
            VelocityX = -VelocityX;
            VelocityXCircle = -VelocityXCircle
        }
        if(Math.abs(distY)<=100 && Math.abs(distY) > 75 ){
            VelocityY = - VelocityY
            VelocityYCircle = -VelocityYCircle
        }
    }

    positionX += VelocityX;
    positionY += VelocityY;
    positionXCircle += VelocityXCircle;
    positionYCircle += VelocityYCircle;

    window.requestAnimationFrame(animation2D);
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
window.requestAnimationFrame(animation2D);



class mesuresSquare{
    constructor(positionX,positionY,VelocityX,VelocityY){
        this.positionX = positionX;
        this.positionY = positionY;
        this.VelocityX = VelocityX;
        this.VelocityY = VelocityY;
    }
    drawSquare(){
        ctx.fillStyle = "blue"; 
        ctx.fillRect(this.positionX,this.positionY,150,150);
    }
}

class measuresCircle{
    constructor(positionXCircle,positionYCircle,VelocityXCircle,VelocityYCircle){
        this.positionX = positionXCircle;
        this.positionY = positionYCircle;
        this.VelocityX = VelocityXCircle;
        this.VelocityY = VelocityYCircle;
    }
    drawCircle(){
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(positionXCircle,positionYCircle, 100, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}



