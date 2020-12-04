const mixedMessgaes = {
  _dictionary: [],

  get dictionary() {
    console.log(this._dictionary)
  },

  addNewWord(word, definition){
    let newWord = {
      word,
      definition
    };
    this._dictionary.push(newWord);
  },

  randomMessage() {
    let wordSelector = Math.floor(Math.random() * this._dictionary.length);
    console.log(`\n${(this._dictionary[wordSelector].word).toUpperCase()}\n`);
    console.log(this._dictionary[wordSelector].definition);
  }
}

mixedMessgaes.addNewWord('tallowy', `resembling tallow in consistency, color, etc.; fatty:
a tallowy mass of moistened powder; tallowy skin.`);

mixedMessgaes.addNewWord('level', 'having no part higher than another; having a flat or even surface.');

mixedMessgaes.addNewWord('determine', 'to settle or decide (a dispute, question, etc.) by an authoritative or conclusive decision.');

mixedMessgaes.addNewWord('ascertain', `to find out definitely; learn with certainty or assurance; determine:
to ascertain the facts.`);

mixedMessgaes.addNewWord('archaic', 'marked by the characteristics of an earlier period; antiquated:');

mixedMessgaes.addNewWord('characteristic', `Also char·ac·ter·is·ti·cal. pertaining to, constituting, or indicating the character or peculiar quality of a person or thing; typical; distinctive:
Red and gold are the characteristic colors of autumn.`);


mixedMessgaes.randomMessage();





