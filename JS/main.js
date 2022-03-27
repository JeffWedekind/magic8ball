// Global
const eightBallImages = [
    "magic8ball_1.png",
    "magic8ball_2.png",
    "magic8ball_3.png",
    "magic8ball_4.png",
    "magic8ball_5.png",
    "magic8ball_6.png",
    "magic8ball_7.png",
    "magic8ball_8.png",
    "magic8ball_9.png",
    "magic8ball_10.png",
    "magic8ball_11.png",
    "magic8ball_12.png",
    "magic8ball_13.png",
    "magic8ball_14.png",
    "magic8ball_15.png",
    "magic8ball_16.png",
    "magic8ball_17.png",
    "magic8ball_18.png",
    "magic8ball_19.png",
    "magic8ball_20.png",
] 
// Global
const eightBall = document.getElementById("eightball");
const askButton = document.getElementById("ask");
let questionInput = document.getElementById("questionInput");
let questionText = document.getElementById("questionText");
const questionDisplay = document.getElementById("questionDisplay");
questionDisplay.style.display = "none";
const inputForm = document.getElementById("inputform");
const askAgain = document.getElementById("askAgain");
const eightBallStart = "./IMG/magic8ball_start.png";
// Start of event listener ASK
askButton.addEventListener("click", ()=>{
    if(!questionInput.value.length){
        alert("Please type a question.");
        return
    }
    let randomImageNumber = Math.ceil(Math.random()*eightBallImages.length);
    let randomImage = "./IMG/"+eightBallImages[randomImageNumber];
    eightBall.src = randomImage;
    questionText.innerText = questionInput.value;
    questionDisplay.style.display = "block";
    inputForm.style.display = "none";
});
// ASK Again Event Listener
askAgain.addEventListener("click", ()=> {
    questionDisplay.style.display = "none";
    inputForm.style.display = "block";
    eightBall.src = eightBallStart;
})