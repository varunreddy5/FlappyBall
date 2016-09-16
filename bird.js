function Bird(){
    this.XCoordinate=120;
    this.YCoordinate=height/2;
    this.gravity=0.25;
    this.velocity=0;
    this.lift=7;
   
    this.totalScore=0;
    
    this.show=function(){
        fill(192,64,64);
        ellipse(this.XCoordinate,this.YCoordinate,25,25);
    }
    
    this.motion=function(){
        this.velocity+=this.gravity;
        this.YCoordinate+=this.velocity;
        if(this.YCoordinate>height){
            this.velocity=0;
            this.YCoordinate=height;
        }
         if(this.YCoordinate<0){
            this.velocity=0;
            this.YCoordinate=0;
        }
    }
    
    this.upwardMovement=function(){
        this.velocity=-this.lift;
    }
    
//    this.scoreBird=function(pipeArr){
//        if((this.XCoordinate-12.5)>(pipeArr.pipeX+20) && score==1){
//            
//                
//                this.totalScore=this.totalScore+1;
//                console.log(this.totalScore); 
//                score=0;
//                
//               
//            
//        }
//        
//        
//    }
}