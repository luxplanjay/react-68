import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deposit, withdraw } from 'redux/account/accountActions';

export const Controls = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={evt => setValue(Number(evt.target.value))}
      />

      <button onClick={() => dispatch(deposit(value))}>Deposit</button>
      <button onClick={() => dispatch(withdraw(value))}>Withdraw</button>
    </div>
  );
};
