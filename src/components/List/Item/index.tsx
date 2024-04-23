import { ITarefa } from '../../../types/task'
import style from './Item.module.scss'

export default function Item( {task, time, selected, completed, id} : ITarefa ) {
    return(
        <li className={style.item}>
            <h3>
                {task}
            </h3>
            <span>
                {time}
            </span>
        </li>
    )
}