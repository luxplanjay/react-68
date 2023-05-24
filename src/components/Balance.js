import { useBalance } from 'redux/account/hooks';

export const Balance = () => {
  const currentBalance = useBalance();

  return (
    <div>
      <b>Balance: {currentBalance}</b>
    </div>
  );
};
