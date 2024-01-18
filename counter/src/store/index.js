import { createStore } from "redux";
const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};
const counterReducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    newStore = {
      ...store,
      counter: store.counter + Number(action.payload.num),
    };
  } else if (action.type === "SUBTRACTION") {
    newStore = {
      ...store,
      counter: store.counter - Number(action.payload.num),
    };
  } else if (action.type === "PRIVACY") {
    newStore = { ...store, privacy: !store.privacy };
    // console.log("clicked");
  }
  return newStore;
};
const counterStore = createStore(counterReducer);
export default counterStore;
