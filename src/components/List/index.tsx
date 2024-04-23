import style from './List.module.scss';
import Item from "./Item";
import { ITarefa } from '../../types/task';

function List({tasks}: {tasks: ITarefa[]}) {
    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item
                        /* task={item.task}
                        time={item.time} */
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List