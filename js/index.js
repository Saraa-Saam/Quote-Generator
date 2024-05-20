var newQuote = [
  "Be yourself; everyone else is already taken.",
  "So many books, so little time.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "A room without books is like a body without a soul.",
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  "You only live once, but if you do it right, once is enough",
  "Be the change that you wish to see in the world.",
  "If you tell the truth, you don't have to remember anything.",
  "A friend is someone who knows all about you and still loves you.",
  "To live is the rarest thing in the world. Most people exist, that is all.",
  "It is better to be hated for what you are than to be loved for what you are not.",
];
var saidBy = [
  "Oscar Wilde",
  " Marilyn Monroe",
  "Frank Zappa",
  "Albert Einstein",
  "Marcus Tullius Cicero",
  "Bernard M. Baruch",
  "William W. Purkey",
  "Dr. Seuss",
  " Mae West",
  "Mahatma Gandhi",
  "Robert Frost"
];
var lastNum = null

// function createQuote() {
//   var randomNum = Math.floor(Math.random() * 11);
//   if(randomNum==lastNum){
//     createQuote()
//   }
//    lastNum = randomNum
//   document.getElementById("quoteOutput").innerText = newQuote[randomNum];
//   document.getElementById("saidBYOutput").innerText = saidBy[randomNum];

// }

//*** or***//
function createQuote() {
  var randomNum = Math.floor(Math.random() * 11);
  if(randomNum==lastNum){
    if(randomNum>0){
      randomNum= randomNum -1;
    }else{
      randomNum = randomNum +1;
    }
  }
   lastNum = randomNum
  document.getElementById("quoteOutput").innerText = newQuote[randomNum];
  document.getElementById("saidBYOutput").innerText = saidBy[randomNum];

}
