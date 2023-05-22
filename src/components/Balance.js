import { useSelector } from 'react-redux';

export const Balance = () => {
  const currentBalance = useSelector(state => state.account.balance);

  return (
    <div>
      <b>Balance: {currentBalance}</b>
    </div>
  );
};
