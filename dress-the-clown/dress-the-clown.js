  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

document.addEventListener('DOMContentLoaded', () => {
  let headIndex = 0
  const headImg = document.getElementById('head')

  function changeClownHead(direction = "forward") {
    if (direction === "forward") {
      headIndex = (headIndex + 1) % 6 
    } else if (direction === "backward") {
      headIndex = (headIndex - 1 + 6) % 6  
    }
    let headSrc = "./images/head" + (headIndex + 1) + ".png"
    headImg.src = headSrc;
  }
  
  let bodyIndex = 0
const bodyImg = document.getElementById('body')

function changeClownBody(direction = "forward") {
  if (direction === "forward") {
    bodyIndex = (bodyIndex + 1) % 6
  } else if (direction === "backward") {
    bodyIndex = (bodyIndex - 1 + 6) % 6
  }
  let bodySrc = "./images/body" + (bodyIndex + 1) + ".png"
  bodyImg.src = bodySrc
}

let shoesIndex = 0;
const shoesImg = document.getElementById('shoes');

function changeClownShoes(direction = "forward") {
  if (direction === "forward") {
    shoesIndex = (shoesIndex + 1) % 6
  } else if (direction === "backward") {
    shoesIndex = (shoesIndex - 1 + 6) % 6
  }
  let shoesSrc = "./images/shoes" + (shoesIndex + 1) + ".png";
  shoesImg.src = shoesSrc
}

  headImg.addEventListener('click', () => changeClownHead("forward"))

  
document.addEventListener('keydown', (event) => {
  if (event.key === "ArrowRight") {
    changeClownHead("forward")
  } else if (event.key === "ArrowLeft") {
    changeClownHead("backward")
  } else if (event.key === "ArrowUp") {
    changeClownBody("forward")
  } else if (event.key === "ArrowDown") {
    changeClownBody("backward")
  }
})

})



console.log("Dress The Clown!")

