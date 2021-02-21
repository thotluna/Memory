import shuffle from "lodash.shuffle";
export default function getDecks(lot) {
  const decks = [];

  for (let i = 0; i < lot; i++) {
    const value = Math.floor(Math.random() * 99);
    decks.push(value);
    decks.push(value);
  }

  return shuffle(decks);
}
