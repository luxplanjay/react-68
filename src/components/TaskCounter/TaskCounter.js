import css from './TaskCounter.module.css';
import { useTaskCount } from 'hooks';

export const TaskCounter = () => {
  const count = useTaskCount();

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
