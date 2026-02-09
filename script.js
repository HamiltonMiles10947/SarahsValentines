const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const container = document.getElementById("center");
const image = document.getElementById("miles");
const words = document.getElementsByTagName('h1');
yesClicked = 0;
imageCounter = 0;
const yesPrompts = ["Yes", "Really?", "You mean it?", "You Sure?", "!"];
const goodImageNames = [ "flowers.png", "smiles.png", "yay.png", "hearts.png"];
const badImageNames = ["cry.png", "huh.png",];

yesButton.addEventListener('mouseenter', ()=> {
    yesButton.style.backgroundColor = "rgb(236, 38, 160)";
})

yesButton.addEventListener("mouseleave", () => {
    yesButton.style.backgroundColor = "red";
})
yesButton.addEventListener('mousedown', () => {
    clickYes();
})

noButton.addEventListener("mouseenter", (e) => {
    noButton.style.backgroundColor = "black";
    moveButton(e);
    changeImage('no');
})
noButton.addEventListener('mouseleave', (e) => {
    noButton.style.backgroundColor = "white";
    returnButton();
})
noButton.addEventListener('mouseenter', () => {

    if(container.style.backgroundColor == 'black'){
        container.style.backgroundColor = 'white';
        for (let header of words)
            header.style.color = 'black';
    }else{
        container.style.backgroundColor = 'black';
        for (let header of words)
            header.style.color = 'white';
    }

    
})


function moveButton(e) {
    const rect = noButton.getBoundingClientRect();

    const buttonCenterX = rect.left+rect.width /2;
    const buttonCenterY = rect.top +rect.height /2;

    const distanceX = e.clientX - buttonCenterX;
    const distanceY = e.clientY - buttonCenterY;

    runAway(distanceX, distanceY);
}

function runAway(dx,dy){
    const strength = 120;

    let newLeft = noButton.offsetLeft - dx / Math.abs(dx || 1) * strength;
    let newTop = noButton.offsetTop - dy / Math.abs(dy || 1) * strength;

    // // Keep it on screen
    const maxX = (window.innerWidth-50) - noButton.offsetWidth;
    const maxY = (window.innerHeight - 15) - noButton.offsetHeight;

    //Wall bouncing 
    x = noButton.offsetLeft;
    y = noButton.offsetTop;
    if(no <=0 || x >= maxX){
        newLeft *= -1;
    }
    if(y <=0 || y >= maxY){
        newTop *= -1;
    }

    newLeft = Math.max(0, Math.min(maxX, newLeft));
    newTop = Math.max(0, Math.min(maxY, newTop));



    noButton.style.left = `${newLeft}px`;
    noButton.style.top = `${newTop}px`;
}

function returnButton(){
    
}

function changeImage(reaction){
    if (reaction == "no") {
        imageCounter = (imageCounter +1) % 2
        image.src = "images/" + badImageNames[imageCounter];
    }
    else if (reaction == "yes") {
        imageCounter = (imageCounter +1) % 4
        image.src = "images/" + goodImageNames[imageCounter];
    }
    console.log(imageCounter);
}

function clickYes(){
    yesClicked += 1;

    if(yesClicked >= 4){
        window.location.href = "saidYes.html";
    }
    yesButton.textContent = yesPrompts[yesClicked];
    changeImage("yes");
}