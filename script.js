const cipherAlphabet = ["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Æ","Ø","Å","ß","!","?"]

function createLines(){
    
    let circleElem = [];
    let middleCircleElem = [];
    let degLine = 5.625;
    let degletter = 0;
    for (let i = 0; i < 16; i++) {
        circleElem.push(`<div class="line" style='transform: rotate(${degLine}deg);'    ></div>`)
        middleCircleElem.push(`<div class="line2" style='transform: rotate(${degLine}deg);'    ></div>`)
        degLine = degLine + 11.25;
    }

    for (let i = 0; i < 32; i++) {
        circleElem.push(`<div class="letter" style='transform: rotate(${degletter}deg);'    >${cipherAlphabet[i]}</div>`)
        middleCircleElem.push(`<div class="letter2" style='transform: rotate(${degletter}deg);'    >${cipherAlphabet[i]}</div>`)
        degletter = degletter + 11.25;
        
    }
    let newCircleElem = circleElem.join('\n');
    let newMiddleCircleElem = middleCircleElem.join('\n');
    const circleContainer = document.getElementById('circle');
    const middleCircleContainer = document.getElementById('middle-circle');
    circleContainer.innerHTML = newCircleElem;
    middleCircleContainer.innerHTML = newMiddleCircleElem;
}


createLines();

let circleRotate = 0;


function rotate(direction) {
    if(direction.localeCompare("left") === 0) {
        circleRotate = circleRotate - 11.25;
        let element = document.getElementById("circle")
        element.style.transform = `translate(-50%, -50%) rotate(${circleRotate}deg)`
    } else {
        circleRotate = circleRotate + 11.25;
        let element = document.getElementById("circle")
        element.style.transform = `translate(-50%, -50%) rotate(${circleRotate}deg)`
    }
}