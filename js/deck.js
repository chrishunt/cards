function Deck () {
  var suits  = ['D','H','C','S'],
      values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

  this.new = function() {
    var deck = [];

    for (var i = 0; i < values.length; i++) {
      for (var j = 0; j < suits.length; j++) {
        deck.push(values[i] + suits[j]);
      }
    }

    return deck;
  };

  this.shuffle = function() {
    var deck = this.new(),
        counter = deck.length,
        temp,
        index;

    while (counter > 0) {
      index = Math.floor(Math.random() * counter);
      counter--;

      temp = deck[counter];
      deck[counter] = deck[index];
      deck[index] = temp;
    }

    this.index = 0;
    this.deck = ['back'].concat(deck);
  };

  this.currentCard = function() {
    return this.deck[this.index];
  };

  this.nextCard = function() {
    this.index++;
    if (this.index > 52) {
      this.index = 0;
    }

    return this.currentCard();
  };

  this.previousCard = function() {
    this.index--;
    if (this.index < 0) {
      this.index = 52;
    }

    return this.currentCard();
  };

  this.progress = function() {
    return Math.floor((100.0 / this.deck.length) * this.index);
  };

  this.shuffle();
}
