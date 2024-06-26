import React, {useState} from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';
import Timer from '../components/Timer';
import { ITarefa } from '../types/task';

function App() {
  const [ tasks, setTasks ] = useState<ITarefa[] | []>([])
  const [ selected, setSelected ] = useState<ITarefa>()
  
  function selectTask(selectedTask: ITarefa){
    setSelected(selectedTask)
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true: false
    })))
  }

  function taskComplete() {
    if( selected ){
      setSelected(undefined)
      setTasks(oldTasks => oldTasks.map(task => {
        if (task.id === selected.id){
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
        task={tasks} 
        selectTask={selectTask}
      />
      <Timer 
        selected={selected}
        taskComplete={taskComplete}
      />
    </div>
  );
}

export default App;
