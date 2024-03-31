var cards = [
    "A",
    "A",
    "B",
    "B",
    "C",
    "C",
    "D",
    "D",
    "E",
    "E",
    "F",
    "F",
    "G",
    "G",
    "H",
    "H",
    "I",
    "I",
  ]
const gameBoard = document.getElementById("game-board")
const restartButton = document.getElementById("restart-button")
const bigButton=document.getElementById("big-button")
const smallButton=document.getElementById("small-button")
let flippedCards = []
let matchedCards = 0
  
  function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }
  

function createCard(cardValue){
    const card=document.createElement("div")
    card.classList.add("card")
    const cardInner=document.createElement("div")
    const cardFront=document.createElement("div")
    const cardBack=document.createElement("div")
    cardInner.classList.add("card-inner")
    cardFront.classList.add("card-face", "card-front")
    cardBack.classList.add("card-face","card-back")
    cardBack.textContent=cardValue
    cardInner.appendChild(cardFront)
    cardInner.appendChild(cardBack)
    card.appendChild(cardInner)
    card.addEventListener("click",()=>{
        if(card.classList.contains("flipped")||flippedCards.length===2){
            return
        }
        card.classList.add("flipped")
        flippedCards.push(card)
        if(flippedCards.length==2){
            const [card1,card2]=flippedCards
            if(card1.querySelector(".card-back").textContent===card2.querySelector(".card-back").textContent){
                matchedCards++
                if(matchedCards===cards.length/2){
                    setTimeout(()=>{
                        alert("You won!")
                    },500)
                }
            } else{
                    setTimeout(()=>{
                        card1.classList.remove("flipped")
                        card2.classList.remove("flipped")
                    },600)
                }
                flippedCards=[]
            }
        })
    return card
}

function small(){
    cards = [
        "A",
        "A",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "E",
        "E",
        "F",
        "F",
        "G",
        "G",
        "H",
        "H",
        "I",
        "I"
      ]
    shuffleCards(cards)
    gameBoard.innerHTML=""
    matchedCards=0
    for (const cardValue of cards){
        const card=createCard(cardValue)
        gameBoard.appendChild(card)
    }
}
function startGame(){
    shuffleCards(cards)
    gameBoard.innerHTML=""
    matchedCards=0
    for (const cardValue of cards){
        const card=createCard(cardValue)
        gameBoard.appendChild(card)
    }
}
function big(){
    cards = [
        "A",
        "A",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "E",
        "E",
        "F",
        "F",
        "G",
        "G",
        "H",
        "H",
        "I",
        "I",
        "J",
        "J",
        "K",
        "K",
        "L",
        "L",
        "M",
        "M",
        "N",
        "N",
        "O",
        "O",
        "P",
        "P",
        "Q",
        "Q",
        "R",
        "R"
      ]
    document.getElementById("game-board").style.gridTemplateColumns = "repeat(6, 100px)";
    shuffleCards(cards)
    gameBoard.innerHTML=""
    matchedCards=0
    for (const cardValue of cards){
        const card=createCard(cardValue)
        gameBoard.appendChild(card)
    }
}
startGame()
restartButton.addEventListener("click",startGame)
bigButton.addEventListener("click",big)
smallButton.addEventListener("click",small)
