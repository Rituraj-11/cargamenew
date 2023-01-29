window.history.forward();
        function noBack() {
            window.history.forward();
        }


let score = document.querySelector('.score');
let gameScreen = document.querySelector('.gameScreen');
let startScreen = document.querySelector('.startScreen');
let highestScore = document.querySelector('.highest-Score');
let userName = document.querySelector('.user-name');

dataG=JSON.parse(localStorage.getItem('data'));
userName.innerHTML=dataG[0].name;
console.log(dataG);



startScreen.addEventListener('click', startGame);

document.addEventListener('keydown', keyPressed);
document.addEventListener('keyup', keyReleased);



let controls = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

let player = {
    speed: 5, // 5px per sec
    score: 0,
    start: false
}


function start(){
     console.log("Car")
    let car = document.querySelector('.car');
    let road= gameScreen.getBoundingClientRect();
    console.log(road);

    //move the car
    console.log(player.x,player.y);

    if(controls.ArrowUp && player.y>road.top){
      player.y =player.y-player.speed;
    }
    if(controls.ArrowDown && player.y<road.bottom-150){
      player.y =player.y+player.speed;
    }
    if(controls.ArrowLeft && player.x>road.left-120){
      player.x =player.x-player.speed;
    }
    if(controls.ArrowRight && player.x<road.right-210){
      player.x =player.x+player.speed;
    }
    
     if(player.start){
       car.style.top=player.y+"px";
       car.style.left=player.x+"px"

      //  car.style.left=player.y +player.speed+"px";
       
       requestAnimationFrame(start);
     }
}

function keyPressed(e) {
    console.log("Pressed",e.key);
    if(controls[e.key] ==false){
      controls[e.key] = true;
    //   console.log(controls);
    }
}

function keyReleased(e) {
    console.log("Released",e.key);
    if(controls[e.key] ==true){
        controls[e.key] = false;
        // console.log(controls);
      }
}

// startScreen.classList.add('hide');
function startGame() {
     console.log("Clicked")
     player.start = true;
    // add or remove a calss from certain element
    //  console.log(startScreen.classList)
     startScreen.classList.add('hide');
     gameScreen.classList.remove('hide');

     // create a car

     let car = document.createElement('div');
     car.setAttribute('class', 'car');
    //  car.innerText = "Car";
    //  car.style.left = "10px";
    //  car.style.top = "10px";
    player.x=car.offsetLeft;
    player.y=car.offsetTop;

    console.log(player)

    //  car.style.backgroundColor = "red";
     gameScreen.appendChild(car);

     requestAnimationFrame(start)




}