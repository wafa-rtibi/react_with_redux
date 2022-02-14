import React from 'react';
import { useSelector } from 'react-redux';
import { Task } from './Task';


const ListTask = ({type}) => {
    const tasks= useSelector(state=>state.todoReducer.tasks) // todoReducer : nom de pure function not the component 
    return (
    <div className="ListTask" style={{marginTop:'50px', display:'flex',flexDirection:'column'}}>
        
        {tasks
        .filter(el=>type=="done"? el.done==true : (type=="undone")? el.done==false : el)     
        .map((el) => <Task key={el.id} todo={el} />
        )}
      </div>
    );
};

export default ListTask;
