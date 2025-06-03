export default {
  increment(state) {
    state.counter = state.counter + 1;
  },
  increase(state, payload) {
    console.log('increase me');
    console.log(state);
    console.log('increase me 2');
    state.counter = state.counter + payload.value;
  },
  setToZero(state) {
    state.counter = 0;
  },
};
