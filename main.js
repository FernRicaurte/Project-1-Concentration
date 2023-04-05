
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
let cards = [
    { value: '1', image: './images/diamonds_ace.svg' },
    { value: '2', image: './images/clubs_2.svg' },
    { value: '3', image: './images/clubs_3.svg' },
    { value: '4', image: './images/spades_4.svg' },
    { value: '5', image: './images/spades_5.svg' },
]

const cardEls = document.querySelectorAll('.playingcard');

shuffle(cards);

cardEls.forEach(function(el, index) {
el.addEventListener('click', function() {
    
})
})