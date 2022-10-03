const progress = document.getElementById('progress')
const next = document.getElementById('next')
const previous = document.getElementById('prev')
const continuous = document.getElementById('infi')
const circles = document.querySelectorAll('.circle')
let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive >= circles.length) {
        currentActive = circles.length
    }
    
    console.log(currentActive)
    update()
})

previous.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    console.log(currentActive)
    update()
})

continuous.addEventListener('click', () => {
    continuousFunction()
})

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }


function continuousFunction() {
    previous.disabled = true
    next.disabled = true
    currentActive = 1
    update()
    let pass = 0
    while(pass < 8) {
        wait(500)
        currentActive++
        if(currentActive == 4) {
            update()
            currentActive = 0
        } else {
            update()
        }
        pass++
    }
}

function update() {
    circles.forEach((circle, idx) => {
        console.log("update - currentActive: " + currentActive)
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    console.log(actives.length, circles.length)
    progress.style.width = (actives.length-1)/(circles.length-1) * 100 + '%'    

    if (currentActive === 1) {
        previous.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        previous.disabled = false
        next.disabled = false
    }
}