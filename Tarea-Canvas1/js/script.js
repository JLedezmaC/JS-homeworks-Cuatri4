const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
let angle = 0;
let angle2 = 0;
let speed = 1;

let CenterX = canvas.width/2;
let CenterY = canvas.height/2;

let x = 0;
let y = 0;

let x2 = 0;
let y2 = 0;

let x3 = 0;
let y3 = 0;

let x4 = 0;
let y4 = 0;

function animation2D(){
    ctx.fillStyle = '#000';
    ctx.fillRect(0,0,canvas.width,canvas.height)
    let random = () => {
        return Math.random() * 256 ;
    }
    let color = `rgb(${random()}, ${random()}, ${random()})`;
    /*Sun */
    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.arc(CenterX,CenterY, 100, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    /*First Planet  */
    let newX  = 175 * Math.cos(angle * (Math.PI/180));
    let newY = 175 * Math.sin(angle * (Math.PI/180));
    /*Second Planet  */
    let newX2  = -175 * Math.cos(angle * (Math.PI/180));
    let newY2 = -175 * Math.sin(angle * (Math.PI/180));
    /*Third  Planet  */
    let newX3  = 275 * Math.cos(angle2 * (Math.PI/180));
    let newY3 = 275 * Math.sin(angle2 * (Math.PI/180));
    /*fourth  Planet  */
    let newX4  = -275 * Math.cos(angle2 * (Math.PI/180));
    let newY4 = -275 * Math.sin(angle2 * (Math.PI/180));


    /*first  team */
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x,y, 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    /*second  team */
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x2 ,y2 , 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    /*third  team */
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x3 ,y3 , 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    /*fourth   team */
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x4 ,y4 , 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    x = newX + CenterX;
    y = newY + CenterY;

    x2 = newX2 + CenterX;
    y2 = newY2 + CenterY;

    x3 = newX3 + CenterX;
    y3 = newY3 + CenterY;

    x4 = newX4 + CenterX;
    y4 = newY4 + CenterY;
    
    angle +=speed;
    angle2 += speed + 20;
    window.requestAnimationFrame(animation2D);
}

window.requestAnimationFrame(animation2D);
