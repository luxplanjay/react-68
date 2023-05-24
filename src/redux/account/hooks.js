import { useSelector } from 'react-redux';

export const useBalance = () => {
  const balance = useSelector(state => state.account.balance);
  return balance;
};
