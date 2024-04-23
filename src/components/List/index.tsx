import style from './List.module.scss';
import Item from "./Item";
import { ITarefa } from '../../types/task';

interface Props {
    task: ITarefa[],
    selectTask: (selectedTask: ITarefa) => void
}

function List({task, selectTask}: Props) {
    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {task.map((item) => (
                    <Item
                        /* task={item.task}
                        time={item.time} */
                        selectTask={selectTask}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List