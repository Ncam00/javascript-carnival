  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

import { getRandomNumber } from '../random-number.js'  // Adjust path if needed

console.log('Whack-a-Mole!')

const cells = document.getElementsByTagName('td')  // Step 1: reference all table cells

function showMole() {
  // Step 1: Clear all existing moles
  for (let cell of cells) {
    cell.innerHTML = ''
  }

  // Step 2: Get a random cell
  const randomIndex = getRandomNumber(0, cells.length - 1)
  const randomCell = cells[randomIndex]

  // Step 3: Create mole image
  const moleImg = document.createElement('img')
  moleImg.src = './mole.png' 
  moleImg.id = 'mole' // helps with CSS styling
  moleImg.onclick = showMole // clicking the mole moves it again
  moleImg.onclick = whackedMole
  
  // Step 4: Add a mole to the cell
  randomCell.appendChild(moleImg)
}

const whackSound = new Audio('whack-audio.wav');

function whackedMole() {
  whackSound.play()  // Play the sound

  // Remove the mole and show a new one
  const mole = document.getElementById('mole')
  if (mole) {
    mole.remove()
  }
  showMole()
}

// Show the mole right away
showMole()

