import { useSelector } from 'react-redux';
import { selectVisibleTasks, selectTaskCount } from 'redux/selectors';

export const useTasks = () => {
  return useSelector(selectVisibleTasks);
};

export const useTaskCount = () => {
  return useSelector(selectTaskCount);
};
