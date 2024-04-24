import { kMaxLength } from 'buffer'
import style from './Clock.module.scss'

interface Props {
    time: number | undefined
}

export default function Clock({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    const [minDec, minUn] = String(minutes).padStart(2, '0')
    const [secDec, secUn] = String(seconds).padStart(2, '0')

    return(
        <>
            <span className={style.relogioNumero}>{minDec}</span>
            <span className={style.relogioNumero}>{minUn}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secDec}</span>
            <span className={style.relogioNumero}>{secUn}</span>
        </>

    )
}