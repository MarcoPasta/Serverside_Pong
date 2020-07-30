/// <reference path="../lib/TSDef/p5.global-mode.d.ts" />


/**
 * Creating the variables which are gonna be used in the process of coding 
 */
let winHeight = 800; 
let winWidth = 800;
var leftPaddleHeight = 150;
var leftPaddleWidth = 35;
var leftPaddleX = winWidth-750; 
var leftPaddleY = winHeight/2-150/2;
var rightPaddleHeight = 150;
var rightPaddleWitdh = 35;
var rightPaddleX = winWidth-85;
var rightPaddleY = winHeight/2-150/2;

var speed = 5;

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

    if(keyIsPressed){
        if(keyCode == LEFT_ARROW)
            leftPaddleY += speed;
    }

    if(keyIsPressed){
        if(keyCode == Right_ARROW)
            leftPaddleY -= speed;
    }
    



    ellipse(winHeight/2, winWidth/2, 10, 10);
}

/**
 * This function will be implemented for some kind of future rotation-additions(?) to have more cocaine like movements.
 */
function rotation() {
}

/**
 * This function is for creating the paddles and to make them move.
 */
