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

    function countDown(counter: number = 0){
        setTimeout(() =>{
            if(counter > 0){
                setTime(counter - 1)
                return countDown( counter - 1)
            }
        }, 1000)
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock time={time}/>
            </div>
            <Button onClick={() => countDown(time)} text="Começar!"/>
        </div>
    )
}