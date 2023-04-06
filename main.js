
// This will be the shuffle function for the cards in the array
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
  
//my code for the game

//make an array of card objects, did strings for value instead of numbers bc the kings/queens necessarily are not numbers.
const cards = [
    { value: '1', image: './images/diamonds_ace.svg' },
    { value: '2', image: './images/clubs_2.svg' },
    { value: '1', image: './images/diamonds_ace.svg' },
    { value: '2', image: './images/clubs_2.svg' },
    { value: '3', image: './images/clubs_3.svg' },
    { value: '4', image: './images/spades_4.svg' },
    { value: '3', image: './images/clubs_3.svg' },
    { value: '5', image: './images/spades_5.svg' },
    { value: '4', image: './images/spades_4.svg' },
    { value: '5', image: './images/spades_5.svg' },
]

// we can select all of the ten card elements by using .querySelectorAll and storing it in a variable cardEls. The selector is .playingCards which all cards have.
const cardEls = document.querySelectorAll('.playingcard')

let guessOne = null


//this will shuffle the cards array, which contains its objects
shuffle(cards)


//adding an event listener for each of the ten cards in cardEls which is accessed with .querySelectorAll . the event listener is for a click on the cards.
cardEls.forEach(function (el, index) {
     el.addEventListener('click', function () {
        let cardClicked = cards[index]
  el.setAttribute('src', cardClicked.image) 
  //setAttribute method so facedown element being clicked on shows .image of card from array

  if(guessOne === null) {
    guessOne = index
  } else {
    if (cards[guessOne].value === cards[index].value) { 
      guessOne = null
    } else { 
      setTimeout(function () {
    }, 1750)
      cardEls[guessOne].setAttribute('src', './images/red.svg')
      cardEls[index].setAttribute('src', './images/red.svg')
      guessOne = null

    }
  }
})
})