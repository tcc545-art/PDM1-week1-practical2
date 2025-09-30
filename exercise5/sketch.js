function setup(){
    createCanvas(800,800)
background(255);
}
function draw(){
    // Body
    strokeWeight(15)
    stroke(0)
    {fill(255, 204, 0);
    rectMode(CENTER)
    rect(400,400,400,300,13);
    strokeWeight(15);
    stroke(0);
    //nose and mouth
    line(500, 450, 400, 400);
     line(500, 450, 380, 500);

    }

    //right eye

    {fill(0);
    noStroke()
    circle(500,350,70);
    fill(255);
    circle(500,340,24);}

//left eye

    {fill(0);
    noStroke();
    circle(300,350,70);
    fill(255);
    circle(300,340,24);}

    //legs
    
  strokeWeight(15);
    stroke(0);
    line(500, 550,500, 700);
    line(300, 550, 300, 700);
    fill(0)
    ellipse(270,700,60,25)
    ellipse(530,700,60,25)
 

}
    