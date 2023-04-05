
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
  }
  
//my code for the game

//make an array of card objects, did strings for value instead of numbers bc the kings/queens necessarily are not numbers.
let cards = [
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
const cardEls = document.querySelectorAll('.playingcard');

//this will shuffle the cards array, which contains its objects
shuffle(cards)


//adding an event listener for each of the ten cards in cardEls which is accessed with .querySelectorAll . the event listener is for a click on the cards.
cardEls.forEach(function(el, index) {
el.addEventListener('click', function() {
  const clickedCard = cards[index]
  el.setAttribute('src', clickedCard.image) // using the setAttribute method so that element being clicked on shows image.
    console.log(clickedCard);
})
})