function setup() {
    createCanvas(500, 500);  
    background("rgb(255,255,255)");
  }
  
  function draw() {
  
    stroke("black");
    fill("#70BCDF");
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 30);
    }
   }