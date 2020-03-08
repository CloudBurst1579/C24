const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,pig1,pig2,bird1,log1,log2,log3,log4,Ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,330,70,70);
    pig1 = new pig(780,330);
    box2 = new Box(860,330,70,70);
    log1 = new log(780,280,270,PI/2);

    box3 = new Box(700,235,70,70);
    pig2 = new pig(780,235);
    box4 = new Box(860,235,70,70);
    log2 = new log(780,190,270,PI/2);

    log3 = new log(700,120,110,PI/4);
    box5 = new Box(780,145,70,70);
    log4 = new log(860,120,110,-PI/4);

    bird1 = new bird(100,100);

    Ground = new ground(600,385,1200,30);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    pig1.display();
    box2.display();
    log1.display();

    box3.display();
    pig2.display();
    box4.display();
    log2.display();

    log3.display();
    box5.display();
    log4.display();

    bird1.display();

    Ground.display();

    console.log(Ground.y);
}