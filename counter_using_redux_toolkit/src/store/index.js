import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state, action) => {
      state.counterVal--;
    },
    addition: (state, action) => {
      state.counterVal += Number(action.payload.num);
    },
    subtraction: (state, action) => {
      state.counterVal -= Number(action.payload.num);
    },
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
export const counterAction = counterSlice.actions;
export default counterStore;
// const INITIAL_VALUE = {
//   counter: 0,
//   privacy: false,
// };
// const counterReducer = (store = INITIAL_VALUE, action) => {
//   let newStore = store;
//   if (action.type === "INCREMENT") {
//     newStore = { ...store, counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     newStore = { ...store, counter: store.counter - 1 };
//   } else if (action.type === "ADDITION") {
//     newStore = {
//       ...store,
//       counter: store.counter + Number(action.payload.num),
//     };
//   } else if (action.type === "SUBTRACTION") {
//     newStore = {
//       ...store,
//       counter: store.counter - Number(action.payload.num),
//     };
//   } else if (action.type === "PRIVACY") {
//     newStore = { ...store, privacy: !store.privacy };
//     // console.log("clicked");
//   }
//   return newStore;
// };
