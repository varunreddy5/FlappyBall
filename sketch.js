var width,height,bird,pipes,p5;
var pipesArr=[];
var scorePipes=0,textColorButton;
var gameOverScreen=false;
//function preload() {
//  myFont = loadFont('assets/Avenir.otf');
//}
function setup(){
    width=window.innerWidth;
    height=window.innerHeight;

    createCanvas(width,height);
    
    textFont('Sintony');
//    fill(255);
//    text("Press Space for movement",width/10,height/3);
    bird=new Bird();
    
    pipesArr.push(new Pipe());
   
}

function draw(){
    background(37,37,37);
   
     for(var i=0;i<pipesArr.length;i++){
        pipesArr[i].showPipes();
        pipesArr[i].updatePipe(); 
        
        if(pipesArr[i].hits(bird)){
            gameOverScreen=true;
            gameOver();
            
            console.log("HIT");
            
            
        }
         pipesArr[i].scoreFun(); 
         
        
        if(pipesArr[i].pipeX<-300){
            pipesArr.splice(i,1);
        }
    }
     bird.show();
    bird.motion();
    
    if(frameCount %80==0){

            pipesArr.push(new Pipe());

        
    }
    printScore();
    function printScore(){
        textAlign(CENTER);
        fill(0,230,172);
        textSize(50); 
        text(scorePipes, width/2, height/4);
        
        
    }
    
    
    
}

function keyPressed(){
    if(keyIsPressed==true){
        bird.upwardMovement();
    }
}
function gameOver(){
    
    textSize(30);
    fill(255);
//    textFont(myFont);
    text("Game Over", width/2,height/2);
    textSize(15);
    fill(255);
//    textFont(myFont);
    text("Click to restart",width/2,height/2+30);
//    createCanvas(width,height);
//    background(0,255,0);
    
    noLoop();
    
    
}
function mousePressed(){
    if(gameOverScreen){
        location.reload();
    }
}



