/// <reference path="../lib/TSDef/p5.global-mode.d.ts" />


/**
 * Creating the variables which are gonna be used in the process of coding 
 */
let winHeight = 500; 
let winWidth = 500;
var leftPaddleHeight = 150;
var leftPaddleWidth = 35;
var leftPaddleX = 50; 
var leftPaddleY = winHeight/2-150/2;
var rightPaddleHeight = 150;
var rightPaddleWitdh = 35;
var rightPaddleX = winWidth-85;
var rightPaddleY = winHeight/2-150/2;

var speed = 10;


class Ball{
    var x;
    var y;
    
}

/**
 * This draws the Canvas.
 */
function setup() {
    createCanvas(winWidth, winHeight);
}

/**
 * This function is for creating the background.
 */
function draw() {
    background(220);
    rect(rightPaddleX, rightPaddleY, rightPaddleWitdh, rightPaddleHeight);  // right paddle
    rect(leftPaddleX, leftPaddleY, leftPaddleWidth, leftPaddleHeight); // creating the left paddle
    ellipse(winHeight/2, winWidth/2, 10, 10);

    leftPaddleMove(); // left paddle movement 
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
        if(leftPaddleY < (speed + 1))   // speed here is the limit the paddle should stay at its max.
            leftPaddleY = (speed + 1);

        leftPaddleY -= speed;
    }

   
    /**
     * This is the bottom side border. The bottom side border is the max winHeight minus the 
     * paddle height minus the amount of speed the paddle is moving, so the paddle doenst move out 
     * of the box.  
     */
    if(keyIsDown(DOWN_ARROW)){
        if(leftPaddleY > winHeight - leftPaddleHeight - (speed + 1))
            leftPaddleY = winHeight - leftPaddleHeight - (speed + 1);

        leftPaddleY += speed; 
    }

}

/**
 * This function will be implemented for some kind of future rotation-additions(?) to have more cocaine like movements.
 */
function rotation() {
}

/**
 * This function is for creating the paddles and to make them move.
 */
