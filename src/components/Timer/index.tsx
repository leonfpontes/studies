import { useEffect, useState } from "react"
import { timeToSeconds } from "../../common/utils/time"
import { ITarefa } from "../../types/task"
import Button from "../Button"
import Clock from "./Clock"
import style from './Timer.module.scss'

interface Props {
    selected: ITarefa | undefined
}

export default function Timer({ selected } : Props) {
    const [time, setTime] = useState<number>()

    useEffect(() => {
        if ( selected?.time ){
            setTime(timeToSeconds(selected.time))
        }
    }, [selected])

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock time={time}/>
            </div>
            <Button text="Começar!"/>
        </div>
    )
}