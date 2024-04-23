import React from "react";
import Button from "../Button";
import style from './Form.module.scss';
import { ITarefa } from "../../types/task";

class Form extends React.Component <{setTasks:  React.Dispatch<React.SetStateAction<ITarefa[]>>}> {
    state = {
        task: '',
        time: '00:00'
    }

    addTask(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        this.props.setTasks((oldTask) => [...oldTask, {...this.state} ])
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
                <Button text="Adicionar" type="submit"/>
            </form>
        )
    }
}

export default Form