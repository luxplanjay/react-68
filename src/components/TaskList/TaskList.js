import { Task } from 'components/Task/Task';
import css from './TaskList.module.css';
import { useTasks } from 'hooks';

export const TaskList = () => {
  const tasks = useTasks();

  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
