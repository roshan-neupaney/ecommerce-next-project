import ProductCart from '@components/Navbar/ProductCart';
import React,{ createContext, useContext, useState } from 'react'

const TasksData = createContext();

const TasksDataProvider = (props) => {
    const [tasks, setTasks] = useState('jhdskfhas');
    setTasks('hello')
    
  return (
    <>
    <ProductCart tasks={tasks}/>
    
    </>
    
    // <TasksData.Provider value={tasks}>
    // </TasksData.Provider>
   
  );
}
const useTasksData = () => useContext(TasksData)

export { TasksDataProvider , useTasksData }