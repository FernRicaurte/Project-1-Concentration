

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

const cards = [
    { value: '1', image: './images/diamonds_ace.svg', matched: false },
    { value: '1', image: './images/diamonds_ace.svg', matched: false },
    { value: '2', image: './images/clubs_2.svg', matched: false },
    { value: '2', image: './images/clubs_2.svg', matched: false },
    { value: '3', image: './images/clubs_3.svg', matched: false },
    { value: '3', image: './images/clubs_3.svg', matched: false },
    { value: '4', image: './images/spades_4.svg', matched: false }, 
    { value: '4', image: './images/spades_4.svg', matched: false },
    { value: '5', image: './images/spades_5.svg', matched: false },
    { value: '5', image: './images/spades_5.svg', matched: false },
]


const cardEls = document.querySelectorAll('.playingcard')
let guessOne = null
let cardsFlipped = 0
let guesses = 0
shuffle(cards)  


  cardEls.forEach(function (el, index) {
  el.addEventListener('click', function () {
  if (index === guessOne || cards[index].matched) { 
  alert('invalid guess')
  return
}
   
  let cardClicked = cards[index]
  el.setAttribute('src', cardClicked.image) 
  
  if(guessOne === null) {
  guessOne = index
  } else {
  guesses++
  document.querySelector('#guesses').textContent = guesses

  if (cards[guessOne].value === cards[index].value) { 
  cards[guessOne].matched = true 
  cards[index].matched = true 
  guessOne = null 
  cardsFlipped += 2 

  if(cardsFlipped === cards.length) {
  gameRestart()
  }

  } else { 
  setTimeout(function () {
  }, 2000)
  cardEls[guessOne].setAttribute('src', './images/red.svg') 
  cardEls[index].setAttribute('src', './images/red.svg') 
  guessOne = null 
    }
  }
})
})

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

document.querySelector('#restart').addEventListener('click', function() {
gameRestart()
})
