var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 

var plinkos = [];
var divisions = [];

var particle;
var gameState= "start";
var turn=0;
var divisionHeight=300;
var score =0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("500",20,550);
  text("500",100,550);
  text("300",180,550);
  text("300",260,550);
  text("100",340,550);
  text("100",420,550);
  text("300",500,550);
  text("300",580,550);
  text("500",660,550);
  text("500",740,550);
 
  Engine.update(engine);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
 
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

 if(particle!=null)
 {
    particle.display();
     
  if (particle.body.position.y>760)
  {
 if (particle.body.position.x < 160) 
 {
     score=score+500;      
     particle=null;
                               
 }


   if (particle.body.position.x < 320 && particle.body.position.x > 160 ) 
   {
           score = score + 300;
           particle=null;
      
     }
    if (particle.body.position.x < 480 && particle.body.position.x > 320 )
   {
         score = score + 100;  
         particle=null;
   }  
    if (particle.body.position.x < 640 && particle.body.position.x > 480 )
    {
          score = score + 300;  
          particle=null;
    }    
     if (particle.body.position.x < 800 && particle.body.position.x > 640 )
     {
           score = score + 500;  
           particle=null;
     }    

    }
    if (  turn>= 5) { gameState ="end";}
  }
 
  if ( gameState =="end") {
 
   textSize(90);
   text("GameOver", 150, 300);
   
    }
  

  for (var k = 0; k < divisions.length; k++) 
  {
    divisions[k].display();
  }

}


function mousePressed()
{
 if(gameState!=="end")
 {
  turn++;
    particle=new Particle(mouseX, 10, 10, 10); 
 }   
}
  
  
  
