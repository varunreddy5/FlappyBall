    function Pipe(){
        this.minimumLength=180;
        this.highlight=false;
        this.topPipeLength=this.minimumLength+(Math.random()*110);
        this.bottomPipeLength=this.minimumLength+(Math.random()*110);
        this.pipeX=width;
        this.speed=-3;
        this.pipeScore=0;
        this.pipeArray=[0];

        this.showPipes=function(){

                fill(0,128,255);
                if(this.highlight){
                    fill(255);
                }
                rect(this.pipeX,0,20,this.topPipeLength);

                rect(this.pipeX,height-this.bottomPipeLength,20,this.bottomPipeLength);


            }
        this.updatePipe=function(){
            this.pipeX=this.pipeX+this.speed;
        }
        this.hits=function(bird){
            if(bird.YCoordinate-12.5<this.topPipeLength || bird.YCoordinate+12.5>height-this.bottomPipeLength){      
               if (bird.XCoordinate+12.5>this.pipeX && bird.XCoordinate-12.5<this.pipeX+20){
                this.highlight=true;
                return true;
                }
                else{
                  return false;  
                }
                
                
            }
            else{
                 return false;
            }
        
        
        
        }
        this.scoreFun=function(){
           
            var score=this.pipeArray[0];
            if(bird.XCoordinate-12.5>(this.pipeX+20) && score==0){
                score=1;
                this.pipeArray[0]=1;
                updateScore();
        }
           function updateScore(){
                scorePipes++;
               
                console.log(scorePipes);
            }
            
               
        }
        
        
        }

    