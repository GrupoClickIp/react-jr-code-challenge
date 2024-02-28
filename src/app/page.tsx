'use client'

import styles from "./page.module.css";
import { ChangeEvent, useId, useState } from "react";
import { Check, Trash } from 'lucide-react';

// interface Task {
//   label: string;
//   isDone: boolean;
// }

export default function Home() {
  const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    // insert your code here
  }

  const handleCreateTask = () => {
    // insert your code here
  }

  const handleDeleteTask = () => {
    // insert your code here
  }

  const handleDoneTask = () => {
    // insert your code here
  }

  return (
    <main className={styles.main}>
      <h1>Todo App</h1>

      <div className={styles.form}>
        <input 
          id="task" 
          name="task" 
          placeholder="Add new task" 
        /> 

        <button type="button" onClick={() => {}}>Criar</button>
      </div>

      <div className={styles.tasks}>
        <h2>Atividades</h2>
        <span>1/4</span>
      </div>

      <ul>
        <li data-isDone={false} className={styles.task}>
          <span>Task 1</span>
          <div>             
            <button 
              onClick={() => {}}
              className={styles.taskBtnDone}>
                <Check />
            </button>
                          
            <button  
              onClick={() => {}}
              className={styles.taskBtnDelete}>
                <Trash />
              </button>
          </div>
        </li>

        <li data-isDone={false} className={styles.task}>
          <span>Task 2</span>
          <div>             
            <button 
              onClick={() => {}}
              className={styles.taskBtnDone}>
                <Check />
            </button>
                          
            <button  
              onClick={() => handleDeleteTask()}                
              className={styles.taskBtnDelete}>
                <Trash />
              </button>
          </div>
        </li>

        <li data-isDone={false} className={styles.task}>
          <span>Task 3</span>
          <div>             
            <button 
              onClick={() => handleDoneTask()} 
              className={styles.taskBtnDone}>
                <Check />
            </button>
                          
            <button  
              onClick={() => handleDeleteTask()}                
              className={styles.taskBtnDelete}>
                <Trash />
              </button>
          </div>
        </li>
      </ul>
    </main>
  );
}
