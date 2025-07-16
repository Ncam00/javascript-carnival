  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

document.addEventListener('DOMContentLoaded', () => {
  
  const partNames = ['head', 'body', 'shoes']
  

  const images = {
    head: document.getElementById('head'),
    body: document.getElementById('body'),
    shoes: document.getElementById('shoes')
  }

  const indexes = {
    head: 0,
    body: 0,
    shoes: 0
  }

  let clothingIndex = 0

  function changeClothing(direction = 'forward') {
    const part = partNames[clothingIndex]
    const max = 6

    if (direction === 'forward') {
      indexes[part] = (indexes[part] + 1) % max
    } else {
      indexes[part] = (indexes[part] - 1 + max) % max
    }

    images[part].src = `./images/${part}${indexes[part] + 1}.png`
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      changeClothing('forward')
    } else if (event.key === 'ArrowLeft') {
      changeClothing('backward')
    } else if (event.key === 'ArrowUp') {
      clothingIndex = (clothingIndex - 1 + 3) % 3
    } else if (event.key === 'ArrowDown') {
      clothingIndex = (clothingIndex + 1) % 3
    }
  })
})



console.log("Dress The Clown!")

