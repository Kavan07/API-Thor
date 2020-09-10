const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;

var gameState = "onSling";

function preload() {
    getbg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    // thor = createSprite(10, 20, 50, 80);
    // thor.addImage(thorimg);

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    g1 = new Ground(800, 210, 400, 10);

    log1 = new Log(720,205,18,PI);
    log2 = new Log(740,205,18,PI);
    log3 = new Log(760,205,18,PI);
    log4 = new Log(780,205,18,PI);
    log5 = new Log(800,205,18,PI);
    log6 = new Log(700,205,18,PI);
    log7 = new Log(920,205,18,PI);
    log8 = new Log(940,205,18,PI);
    log9 = new Log(680,205,18,PI);
    log10 = new Log(660,205,18,PI);
    log11 = new Log(640,205,18,PI);
    log12 = new Log(620,205,18,PI);
    log13 = new Log(601,205,18,PI);
    log14 = new Log(820,205,18,PI);
    log15 = new Log(840,205,18,PI);
    log16 = new Log(860,205,18,PI);
    log17 = new Log(880,205,18,PI);
    log18 = new Log(900,205,18,PI);
    log19 = new Log(960,205,18,PI);
    log20 = new Log(980,205,18,PI);
    log21 = new Log(720,161,18,PI);
    log22 = new Log(740,187,18,PI);
    log23 = new Log(760,187,18,PI);
    log24 = new Log(780,187,18,PI);
    log25 = new Log(800,187,18,PI);
    log26 = new Log(700,187,18,PI);
    log27 = new Log(920,187,18,PI);
    log28 = new Log(940,187,18,PI);
    log29 = new Log(680,187,18,PI);
    log30 = new Log(660,187,18,PI);
    log31 = new Log(640,187,18,PI);
    log32 = new Log(620,187,18,PI);
   // log33 = new Log(601,187,18,PI);
    log34 = new Log(820,187,18,PI);
    log35 = new Log(840,187,18,PI);
    log36 = new Log(860,187,18,PI);
    log37 = new Log(880,187,18,PI);
    log38 = new Log(900,187,18,PI);
    log39 = new Log(960,187,18,PI);
   // log40 = new Log(980,187,18,PI);
   log41 = new Log(720,179,18,PI);
    log42 = new Log(740,179,18,PI);
    log43 = new Log(760,179,18,PI);
    log44 = new Log(780,179,18,PI);
    log45 = new Log(800,179,18,PI);
    log46 = new Log(700,179,18,PI);
    log47 = new Log(920,179,18,PI);
    log48 = new Log(940,179,18,PI);
    log49 = new Log(680,179,18,PI);
    log50 = new Log(660,179,18,PI);
    log51 = new Log(640,179,18,PI);
    log52 = new Log(620,179,18,PI);
    log53 = new Log(601,179,18,PI);
    log54 = new Log(820,179,18,PI);
    log55 = new Log(840,179,18,PI);
    log56 = new Log(860,179,18,PI);
    log57 = new Log(880,179,18,PI);
    log58 = new Log(900,179,18,PI);
    log59 = new Log(960,179,18,PI);
    log60 = new Log(980,179,18,PI);
    log61 = new Log(720,161,18,PI);
    log62 = new Log(740,161,18,PI);
    log63 = new Log(760,161,18,PI);
    log64 = new Log(780,161,18,PI);
    log65 = new Log(800,161,18,PI);
    log66 = new Log(700,161,18,PI);
    log67 = new Log(920,161,18,PI);
    log68 = new Log(940,161,18,PI);
    log69 = new Log(680,161,18,PI);
    log70 = new Log(660,161,18,PI);
    log71 = new Log(640,161,18,PI);
    log72 = new Log(620,161,18,PI);
   // log33 = new Log(601,161,18,PI);
    log74 = new Log(820,161,18,PI);
    log75 = new Log(840,161,18,PI);
    log76 = new Log(860,161,18,PI);
    log77 = new Log(880,161,18,PI);
    log78 = new Log(900,161,18,PI);
    log79 = new Log(960,161,18,PI);
    Thanos = new Box(900, 110, 50, 50);
   // log40 = new Log(980,161,18,PI);

    b1 = new Bird(200,50);
    slingshot = new SlingShot(b1.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg) {
        background(backgroundImg);
    }

    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    platform.display();
    b1.display();
    g1.display();
    slingshot.display();   
    log1.display(); 
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display(); 
    log7.display();
    log8.display();
    log9.display();
    log10.display();
    log11.display(); 
    log12.display();
    log13.display();
    log14.display();
    log15.display();
    log16.display(); 
    log17.display();
    log18.display();
    log19.display();
    log20.display();
    log21.display(); 
    log22.display();
    log23.display();
    log24.display();
    log25.display();
    log26.display(); 
    log27.display();
    log28.display();
    log29.display();
    log30.display();
    log31.display(); 
    log32.display();
    //log33.display();
    log34.display();
    log35.display();
    log36.display(); 
    log37.display();
    log38.display();
    log39.display();
    //log40.display();    

    log41.display(); 
    log42.display();
    log43.display();
    log44.display();
    log45.display();
    log46.display(); 
    log47.display();
    log48.display();
    log49.display();
    log50.display();
    log51.display(); 
    log52.display();
    //log33.display();
    log54.display();
    log55.display();
    log56.display(); 
    log57.display();
    log58.display();
    log59.display();
    //log40.display();  
    log61.display(); 
    log62.display();
    log63.display();
    log64.display();
    log65.display();
    log66.display(); 
    log67.display();
    log68.display();
    log69.display();
    log70.display();
    log71.display(); 
    log72.display();
    //log33.display();
    log74.display();
    log75.display();
    log76.display(); 
    log77.display();
    log78.display();
    log79.display();  
    Thanos.display();
}

function mouseDragged(){
    Matter.Body.setPosition(b1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if(keyCode === 32){
       slingshot.attach(b1.body);
    }
}

async function getbg() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
     //console.log(responseJSON.datetime);
     var hour = datetime.slice(11,13); 
     //console.log(hour);
  
     if(hour >= 06 && hour <= 19) {
       bg = "bg1.png";
     }
  
     else {
      bg = "bg2.jpg";
     }
  
     backgroundImg = loadImage(bg);
     console.log(backgroundImg);
  }