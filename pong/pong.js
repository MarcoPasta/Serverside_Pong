/// <reference path="../lib/TSDef/p5.global-mode.d.ts" />


/**
 * Creating the variables which are gonna be used in the process of coding 
 */
let winHeight = 500; 
let winWidth = 500;
var speed = 10;
var risingVelocity = 5;
var pointCounter = 0;
var domLabel;


let leftPaddle = {
    height: 150,
    width: 35,
    x: 50, 
    y: winHeight/2-150/2
}

let ball = {
    x: winWidth/2,
    y: winHeight/2,
    height: 10,
    width: 10
}


let movement = {
    x: 5, 
    y: 0,
    velocity: function (d) {
        let l = sqrt(this.x*this.x + this.y*this.y);
        return {
            x: this.x / l * d,
            y: this.y / l * d
        }
    }
};


/**
 * This draws the Canvas.
 */
function setup() {
    createCanvas(winWidth, winHeight);
    movement.y = random(-3,3);
    domLabel = document.createElement("p");
    domLabel.innerHTML = pointCounter;
    domLabel.classList.add("pointCounter");
    document.body.appendChild(domLabel);
    
}

/**
 * This function is for creating the background.
 */
function draw() {
    background(220);
    //rect(rightPaddleX, rightPaddleY, rightPaddleWitdh, rightPaddleHeight);  // right paddle
    rect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height); // creating the left paddle
    ellipse(ball.x, ball.y, ball.width, ball.height);

    leftPaddleMove();   // left paddle movement
    ballMovement();    // Ball movement
    risingVelocity += 0.001;
}


/* 
    Kopfkommentar für Luca: 
    Man kann in JS Funktionsprototypen definieren (in draw weil das der Elementare Ausführungsort ist) und 
    Sie dann dann später weiter unten im Code auscoden, womit man sich eine menge Platz und Sauberkeit in
    der draw() Funktion spart.
*/ 
function leftPaddleMove(){
        /**
     * The paddle is getting drawn at [0,0]. To prevent the paddle from moving out of the box, 
     * the position should stay at the exact border. The exact Border for top side is 0 + the amount 
     * of speed the paddle is being moved. Also add an additional 1 so the paddle stays inside the box.
     */
    if(keyIsDown(UP_ARROW)){
        if(leftPaddle.y < (speed + 1))   // speed here is the limit the paddle should stay at its max.
            leftPaddle.y = (speed + 1);

        leftPaddle.y -= speed;
    }
    /**
     * This is the bottom side border. The bottom side border is the max winHeight minus the 
     * paddle height minus the amount of speed the paddle is moving, so the paddle doenst move out 
     * of the box.  
     */
    if(keyIsDown(DOWN_ARROW)){
        if(leftPaddle.y > winHeight - leftPaddle.height - (speed + 1))
            leftPaddle.y = winHeight - leftPaddle.height - (speed + 1);

        leftPaddle.y += speed; 
    }
}



/**
 * Finding out that optimal ball speed seems to be 
 */

function ballMovement(){
    
    /**
     * to be edited
     */


    if(ball.x > winWidth - ball.width){
        movement.x *= -1;
        ball.x = winWidth - ball.width;
        pointCounter++;
        domLabel.innerHTML = pointCounter;

    }

    if((ball.x < (leftPaddle.x + leftPaddle.width)) && (leftPaddle.y < ball.y) && ((leftPaddle.y + leftPaddle.height) > ball.y) && ball.x > leftPaddle.x){
        movement.x *= -1;
        ball.x = (leftPaddle.x + leftPaddle.width) + 1;
        movement.y = random(-3, 3);
    }

    if(ball.y < 0 + ball.height){
        movement.y = random(0,5);
    }

    if(ball.y > winHeight - ball.height){ 
        movement.y = random(-5, 0);
    }

    if(ball.x < 0){
        alert("Du Kackboon");
        noLoop();
    }


    ball.x += movement.velocity(risingVelocity).x;
    ball.y += movement.velocity(risingVelocity).y;

}



// /**
//  * This function will be implemented for some kind of future rotation-additions(?) to have more cocaine like movements.
//  */
// function rotation() {
// }

// /**
//  * This function is for creating the paddles and to make them move.
//  */