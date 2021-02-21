import { stateInGame, types } from "types";

export const initialState = {
  calculate: false,
  tried: 0,
  assert: 0,
  cards: [],
  inGame: stateInGame.WAITTING,
  date: null,
  nDecks: "",
  timeTotal: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case types.SETTER:
      console.log(action.payload);
      return {
        ...state,
        nDecks: action.payload.nDecks,
      };
    case types.INITIAL:
      return {
        ...state,
        inGame: stateInGame.PLAY,
        date: action.payload.date,
      };
    case types.VERIFY:
      const card = {
        number: action.payload.number,
        setOpened: action.payload.setOpened,
      };
      const cal = state.cards.lenght > 0 ? true : false;

      return {
        ...state,
        cards: [...state.cards, card],
        calculate: cal,
      };
    case types.CHECK:
      return {
        ...state,
        calculate: true,
      };
    case types.CHECKED:
      return {
        ...state,
        calculate: false,
      };
    case types.COMPARATE:
      const [firstCars, secondCard] = state.cards;
      const isPair = firstCars.number === secondCard.number;
      const assert = isPair ? 1 : 0;
      if (!isPair) {
        firstCars.setOpened(false);
        secondCard.setOpened(false);
      }

      return {
        ...state,
        tried: state.tried + 1,
        assert: state.assert + assert,
        cards: [],
      };
    case types.CULMINATED:
      return {
        ...state,
        inGame: stateInGame.WON,
      };
    case types.END:
      return {
        ...state,
        timeTotal: action.payload,
      };
    default:
      return state;
  }
};
