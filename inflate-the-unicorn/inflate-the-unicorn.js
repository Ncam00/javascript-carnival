  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let unicornStages = [0, 0, 0]

const unicorns = document.querySelectorAll('.inflate-an-image')

unicorns.forEach((unicorn, index) => {
  unicorn.onclick = () => {
    inflateUnicorn(index)
  }
})

function inflateUnicorn(index) {
  if (unicornStages[index] < 3) {
    unicornStages[index]++
    unicorns[index].src = `./images/unicorn-${unicornStages[index]}.png`

    if (unicornStages[index] === 3) {
      confetti() // 🎉 Unicorn fully inflated!
    }
  }
}







console.log("Inflate The Unicorn!")
