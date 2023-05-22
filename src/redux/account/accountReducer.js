const initialState = {
  balance: 100,
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'account/deposit':
      return {
        balance: state.balance + action.payload,
      };

    case 'account/withdraw':
      return {
        balance: state.balance - action.payload,
      };

    default:
      return state;
  }
};
