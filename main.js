
// This is the shuffle function for the cards in the array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  };
  
//CODE FOR THE GAME:

//Making array of card objects- strings for value- not all cards are numbers
const cards = [
    { value: '1', image: './images/diamonds_ace.svg', matched: false },
    { value: '1', image: './images/diamonds_ace.svg', matched: false },
    { value: '2', image: './images/clubs_2.svg', matched: false },
    { value: '2', image: './images/clubs_2.svg', matched: false },
    { value: '3', image: './images/clubs_3.svg', matched: false },
    { value: '3', image: './images/clubs_3.svg', matched: false },
    { value: '4', image: './images/spades_4.svg', matched: false }, //added matched property to check for matches
    { value: '4', image: './images/spades_4.svg', matched: false },
    { value: '5', image: './images/spades_5.svg', matched: false },
    { value: '5', image: './images/spades_5.svg', matched: false },
]

//ten facedown, red card elements stored in cardEls using method
const cardEls = document.querySelectorAll('.playingcard')
//initializing the first guess to null, in guessOne
let guessOne = null
//Shuffling the objects in the cards array
let cardsFlipped = 0
let guesses = 0

shuffle(cards)  

//adding an event listener 'click' for each card in cardEls-the first guess
cardEls.forEach(function (el, index) {
     el.addEventListener('click', function () {
      if (index === guessOne || cards[index].matched) { //if same card is clicked twice/invalid guess or if cards are matched already, does not count as guess
        alert('invalid guess')
        return
      }

      //setAttribute so facedown, red card element, when clicked shows image of card from array-faceup
      let cardClicked = cards[index]
  el.setAttribute('src', cardClicked.image) 
  
  if(guessOne === null) {
    guessOne = index
    //this block is for the second guess
  } else {
    guesses++
    document.querySelector('#guesses').textContent = guesses

  
    if (cards[guessOne].value === cards[index].value) { //matching the index(guessOne) of first guess to current guess-index
      cards[guessOne].matched = true //when there is a match, matched property will set to true
      cards[index].matched = true // ^^index, also matched set to true
      guessOne = null //this resets first guess, the matched cards are left up.
      cardsFlipped += 2 //when both guessOne and index match this increments to 2

      //this block will check for a win and restart the game, if so
      if(cardsFlipped === cards.length) {
        gameRestart()
      }

      //this part of the block is for a non-match -also- checks for win and restarts game
    } else { 
      setTimeout(function () {
    }, 2000)
      cardEls[guessOne].setAttribute('src', './images/red.svg') //card set back to red, face down
      cardEls[index].setAttribute('src', './images/red.svg') //card set back to red, face down
      guessOne = null //reset for another turn

    }
  }
})
})

//CODE FOR GAME RESTART:

function gameRestart() {
  setTimeout(function() {
  }, 2000)
  guessOne = null 
  cardsFlipped = 0
  guesses = 0
  document.querySelector('#guesses').textContent = guesses

  cardEls.forEach(function (el, index) {
    el.setAttribute('src', './images/red.svg')
  })
  cards.forEach(function(card, index) {
    card.matched = false
  })
  shuffle(cards)
}
//resart button
document.querySelector('#restart').addEventListener('click', function() {
  gameRestart()
})
