// function play(){
//     const homeSection = document.getElementById("home-screen")
//     homeSection.classList.add("hidden")

//     const playGroundSection = document.getElementById("play-ground")
//     playGroundSection.classList.remove("hidden")
// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key

    // skip the game if press 'esc'

    if(playerPressed === "Escape"){
        gameOver();
    }
    

    // key player is expected to press
    const currentAlphabetElement = document.getElementById("current-alphabet")
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase()

    if(playerPressed === expectedAlphabet){
        console.log("You get a pont")

        const currentScore = getTextElementValueById("current-score")
        const updatedScore = currentScore + 1 ;
        
        setTextElementValueById("current-score", updatedScore)


        // console.log("You get a pont")
        // console.log("You get a pont")
        // console.log("You get a pont")
        removeBackgroundColorById(expectedAlphabet)

        // const currentScoreElement = document.getElementById("current-score")
        // const currentScoreText = currentScoreElement.innerText
        // const currentScore = parseInt(currentScoreText)

        // const newScore = currentScore + 1 ;
        // currentScoreElement.innerText = newScore ;

        



        continueGame()
    }
    else{

        const currentLife = getTextElementValueById("current-life")
        const updatedLife = currentLife - 1 ;

        setTextElementValueById("current-life", updatedLife)
        
        if(updatedLife === 0){
            gameOver();
        }

        /*console.log("you lost a life")

        const currentLifeElement = document.getElementById("current-life")
        const currentLifeText = currentLifeElement.innerText
        const currentLife = parseInt(currentLifeText)


        const newLife = currentLife - 1 ;
        currentLifeElement.innerText = newLife*/

    }
}

document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    const alphabet = getRandomAlphabet();
    console.log(alphabet)

    const currentAlphabetElement = document.getElementById("current-alphabet")
    currentAlphabetElement.innerText = alphabet ;

    setBackgroundColorById(alphabet)
}

function play(){
    hideElementById("home-screen");
    hideElementById("final-score")
    showElementById("play-ground");

    setTextElementValueById("current-life", 5)
    setTextElementValueById("current-score", 0)

    continueGame()
}

function gameOver(){

    hideElementById("play-ground")
    showElementById("final-score")

    const lastScore = getTextElementValueById("current-score")
    setTextElementValueById("last-score", lastScore)


    const currentAlphabet = getElementTextById("current-alphabet")
    removeBackgroundColorById(currentAlphabet);


}