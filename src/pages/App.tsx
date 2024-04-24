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

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
        task={tasks} 
        selectTask={selectTask}
      />
      <Timer selected={selected}/>
    </div>
  );
}

export default App;
