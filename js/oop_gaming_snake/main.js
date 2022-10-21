document.getElementById("game").setAttribute("data-width", "300");

let widthShape = document.getElementById("game").getAttribute("data-width");

document.getElementById("game").setAttribute("data-height", "300");

let heightShape = document.getElementById("game").getAttribute("data-height");
class Item {
  shape;
  axis_x;
  axis_y;
  constructor(shape, axis_x, axis_y) {
    this.shape = shape;
    this.axis_x = axis_x;
    this.axis_y = axis_y;
    this.shape.style.left = axis_x + "px";
    this.shape.style.top = axis_y + "px";
  }
}

class Food extends Item {
  constructor(shape, axis_x, axis_y) {
    super(shape, axis_x, axis_y);
  }
  recreate() {
    
    this.axis_x = getAccurateNumberWidth() - 20;
    this.axis_y = getAccurateNumberHeight() - 20;
    this.shape.style.left = this.axis_x + "px"
    this.shape.style.top = this.axis_y + "px";
  }
}

class Player extends Item {
  constructor(shape, axis_x, axis_y) {
    super(shape, axis_x, axis_y);
  }

  moveUp() {
    this.axis_y -= 20;
    this.shape.style.top = this.axis_y + "px";
  }
  moveDown() {
    this.axis_y += 20;
    this.shape.style.top = this.axis_y + "px";
  }
  moveLeft() {
    this.axis_x -= 20;
    this.shape.style.left = this.axis_x + "px";
  }
  moveRight() {
    this.axis_x += 20;
    this.shape.style.left = this.axis_x + "px";
  }
}
// let arr1 = [10];

function getAccurateNumberWidth() {
  let randomNumber = Math.floor(Math.random() * Number(widthShape));
 let finalresult; 
  // console.log(randomNumber);

  if ((randomNumber - (randomNumber % 20)) > 20) {
    

     finalresult = (randomNumber - (randomNumber % 20))
  } else {
    
    finalresult = 20
  }

  return finalresult;
}

function getAccurateNumberHeight() {
  let randomNumber = Math.floor(Math.random() * Number(heightShape));

  // console.log(randomNumber);

 
  if ((randomNumber - (randomNumber % 20)) > 20) {
    finalresult = randomNumber - (randomNumber % 20);
  } else {
    finalresult = 20;
  }

  return finalresult;
}


let food = new Food(
  document.getElementById("food"),

  (foodxvalue = getAccurateNumberWidth() - 20),
  (foodyvalue = getAccurateNumberHeight() - 20)
);

let player = new Player(
  document.getElementById("player"),
  (playerxvalue = getAccurateNumberWidth() - 20),
  (playerxvalue = getAccurateNumberHeight() - 20)
);

// document.addEventListener('mousemove', function (e) {
  

//   console.log(e.clientX);

//   console.log(e.clientY);
// img.style.position = 'absolute';
// img.style.left = e.clientX + 'px';
// img.style.top = e.clientY + 'px';

// })

window.addEventListener("keydown", function (e) {
  
// console.log(e.keyCode);
  switch (e.keyCode) {
    case 38: {

      if (player.axis_y > 60) {
        
         player.moveUp();

      } 
     
      break;
    }
    case 40: {

      if (player.axis_y < 340) player.moveDown();
      break;
    }
    case 37: {

            if (player.axis_x > 0) {
            
      player.moveLeft();
            }
     
      break;
    }
    case 39: {
      player.moveRight();
      break;
    }
  }
  if (player.axis_x === food.axis_x && player.axis_y === food.axis_y) {
    
    food.recreate();
  }
})

