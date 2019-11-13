export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const setCounter = (my_set_value) => {
  console.log('action center');
  console.log(my_set_value);
  return ({
    type: 'SET_COUNTER',
    set_value: my_set_value
  });
};
/*
export const reset = () => ({
  type: 'RESET'
});
*/
