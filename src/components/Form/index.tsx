import React, { useState } from "react";
import Button from "../Button";
import style from './Form.module.scss';
import { ITarefa } from "../../types/task";
import {v4 as uuidv4} from 'uuid';

interface Props {
    setTasks:  React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Form({ setTasks }: Props) {
    const [task, setTask] = useState('')
    const [time, setTime] = useState('00:00')
    function addTask(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setTasks((oldTask) => 
            [
                ...oldTask, 
                {
                    task,
                    time,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                } 
            ]
        )
        setTask('')
        setTime('00:00')
    }
    return(
        <form className={style.novaTarefa} onSubmit={addTask}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        value={task}
                        onChange={ evento => setTask(evento.target.value)}
                        placeholder="O que você quer estudar?"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Tempo
                    </label>
                    <input 
                        type="time"
                        step="1"
                        name="time"
                        value={time}
                        onChange={ evento => setTime(evento.target.value)}
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button text="submit">Adicionar</Button>
            </form>
    )
}

/* class Form extends React.Component <{setTasks:  React.Dispatch<React.SetStateAction<ITarefa[]>>}> {
    state = {
        task: '',
        time: '00:00'
    }

    addTask(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        this.props.setTasks((oldTask) => 
            [
                ...oldTask, 
                {
                    ...this.state,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                } 
            ]
        )
        this.setState({
            task: '',
            time: '00:00'
        })
    }

    render() {
        return(
            <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        value={this.state.task}
                        onChange={ evento => this.setState({...this.state, task: evento.target.value})}
                        placeholder="O que você quer estudar?"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Tempo
                    </label>
                    <input 
                        type="time"
                        step="1"
                        name="time"
                        value={this.state.time}
                        onChange={ evento => this.setState({...this.state, time: evento.target.value})}
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button type="submit"></Button>/>
            </form>
        )
    }
} */

export default Form