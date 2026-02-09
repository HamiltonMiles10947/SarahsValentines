const datelist = document.querySelectorAll(".datelist");
const envelope = document.getElementById("envelope");
const coldFeetButton = document.getElementById("changeButton");
const coldFeet = document.getElementById("mindChange");
const modal = document.getElementById("modal");
const finalButton = document.getElementById("finalButton");

const letterState = ["closedLetter.png", "openLetter.png"];
letterCounter = 0;


coldFeetButton.addEventListener('mouseenter', () => {
    coldFeetButton.style.backgroundColor = "#314156"
})
coldFeetButton.addEventListener('mouseleave', () => {
    coldFeetButton.style.backgroundColor = "#5d728d"
})

coldFeetButton.addEventListener('mousedown', () => {
    console.log("clicked")
    coldFeetButton.textContent = "too bad 😘";
    coldFeet.classList.add("leave");
});

datelist.forEach(item => {
   item.addEventListener('mouseenter', function () {
        if(this.style.backgroundColor != "rgb(214, 146, 158)"){
            this.style.backgroundColor = "pink";
            this.style.transform = 'scale(.95)';
        }
    });
    item.addEventListener('mouseleave', function (){
        if(this.style.backgroundColor != "rgb(214, 146, 158)"){
            this.style.backgroundColor = "white";
            this.style.transform = 'scale(1)';
        }

    });
    item.addEventListener('mousedown', function (){
        if(this.style.backgroundColor != "rgb(214, 146, 158)"){
            this.style.backgroundColor = "rgb(214, 146, 158)";
            this.style.transform = 'scale(.95)';
        }
        else{
            this.style.backgroundColor = "pink";
        }
    });
});

envelope.addEventListener('mouseenter', () =>{
    envelope.style.transform = 'scale(1.5)';
    if(letterCounter = 1){
        showLetter()
    }
});
envelope.addEventListener('mouseleave', () => {
    envelope.style.transform = 'scale(1)';
})
envelope.addEventListener('mousedown', () => {
    openEnvelope();
    modal.classList.add("open");
});
window.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.classList.remove("open");
        openEnvelope();
    }
});

finalButton.addEventListener("click", () =>{
    window.location.href = "happyValentines.html";
})
finalButton.addEventListener("mouseenter", () =>{
    finalButton.style.backgroundColor = "pink";
})
finalButton.addEventListener("mouseleave", () =>{
    finalButton.style.backgroundColor = "salmon";
})


function openEnvelope(){
    letterCounter = (letterCounter + 1) %2;
    envelope.src= "images/" + letterState[letterCounter];
}
function showLetter(){

}