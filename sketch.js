const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1000,600);
  

  square1 = new Square(40,550,40,40);

  obstacle1 = new Obstacle(100,100,1620,20);
  obstacle2 = new Obstacle(10,350,20,480)
  obstacle3 = new Obstacle(900,350,20,480)
  obstacle4 = new Obstacle(200,580,1380,20)

  ball1 = new Ball(800,500,25);

  
  obstacle5 = new Obstacle(815,500,150,10)
  obstacle6 = new Obstacle(700,550,10,40)
  obstacle7 = new Obstacle(700,210,10,200)
  obstacle8 = new Obstacle(95,525,150,10) 
  obstacle9 = new Obstacle(200,580,1380,20)

  obstacle10 = new Obstacle(450,210,10,200)
  obstacle11 = new Obstacle(200,210,10,200)
  obstacle12 = new Obstacle(320,410,10,320)
  obstacle13 = new Obstacle(590,410,10,320)
  obstacle14 = new Obstacle(700,400,210,10)
  obstacle15 = new Obstacle(640,490,90,10)
  obstacle16 = new Obstacle(870,290,10,360)

  obstacle17 = new Obstacle(750,310,170,10)
  obstacle18 = new Obstacle(480,410,210,10)
  obstacle19 = new Obstacle(390,470,130,10)
  obstacle20 = new Obstacle(790,450,100,10)
  obstacle21 = new Obstacle(645,350,100,10)

  obstacle22 = new Obstacle(365,300,80,10)
  obstacle23 = new Obstacle(405,250,80,10)
  obstacle24 = new Obstacle(625,280,60,10)
  obstacle25 = new Obstacle(669,230,50,10)
  obstacle26 = new Obstacle(375,350,100,10)
  obstacle27 = new Obstacle(215,400,200,10)
  obstacle28 = new Obstacle(70,450,100,10)

  obstacle29 = new Obstacle(170,480,50,10)
  obstacle30 = new Obstacle(270,520,90,10)

}

function draw() {
  background(0);  
  Engine.update(engine);
  
  if(ball1.body.position.x<40){
    textSize(20);
    fill("cyan")
    text("Game Over",300,200);
  }

  square1.display()
  obstacle1.display()
  obstacle2.display()
  obstacle3.display()
  obstacle4.display()
  obstacle5.display()
  obstacle6.display()
  obstacle7.display()
  obstacle8.display()
  obstacle9.display()
  obstacle10.display()
  obstacle11.display()
  obstacle12.display()
  obstacle13.display()
  obstacle14.display()
  obstacle15.display()
  obstacle16.display()
  obstacle17.display()
  obstacle18.display()
  obstacle19.display()
  obstacle20.display()
  obstacle21.display()
  obstacle22.display()
  obstacle23.display()
  obstacle24.display()
  obstacle25.display()
  obstacle26.display()
  obstacle27.display()
  obstacle28.display()
  obstacle29.display()
  obstacle30.display()
  ball1.display()

  
}
function keyPressed(){
  if(keyCode === LEFT_ARROW){
    translation = {x:-10,y:10}
    Matter.Body.translate(ball1.body,translation)
  }
  if(keyCode === RIGHT_ARROW){
    translation = {x:10,y:-20}
    Matter.Body.translate(ball1.body,translation)
  }
  if(keyCode === UP_ARROW){
    translation = {x:-10,y:-50}
    Matter.Body.translate(ball1.body,translation)
  }
}


