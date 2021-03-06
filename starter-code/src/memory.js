var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var currentIndex = this.cards.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = cards[currentIndex];
    this.cards[currentIndex] = this.cards[randomIndex];
    this.cards[randomIndex] = temporaryValue;
  }
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++
  if ($(firstCard).attr("data-card-name") === $(secondCard).attr("data-card-name")) {
    this.pairsGuessed++;
  const guessSound = new Audio('./sound/magic-coins.ogg');
    guessSound.play();  
    $(memoryGame.pickedCards).toggleClass("grow-cards")
    return true;
  } else {
    setTimeout(() => $(firstCard).children().toggleClass("front").toggleClass("back"), 1000);
    setTimeout(() => $(secondCard).children().toggleClass("front").toggleClass("back"), 1000);
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === this.cards.length / 2) {
    const winSound = new Audio ("./sound/win.ogg")
    winSound.play();
    return true;
  } else {
    return false;
  }
};