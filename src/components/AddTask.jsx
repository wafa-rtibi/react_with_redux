import React from 'react';
import { useRef } from 'react';
import {Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/Actions'
import {Form} from 'react-bootstrap'
import '../style/AddTask.css'

const AddTask = () => {
    const  inputRef  = useRef();
    const dateRef=useRef()
    const dispatch=useDispatch()

    const handleAdd=()=>{
        dispatch(addTask({id:Math.random(),text:inputRef.current.value ,done:false,date:dateRef.current.value}))
        inputRef.current.value=""
    }
    
    return (
      <div className="add">
          <Form.Control className='inputs' type="text" placeholder="add new task" ref={inputRef} />
          <div className="col-md-6">
            <input
              ref={dateRef}
              type="date"
              className='inputs'
              class="form-control datepicker"
              placeholder="Select Date"
            />
          </div>
          <Button id="btn" variant="dark" onClick={() => dispatch(handleAdd())}>
            Add Task
          </Button>
      </div>
    );
};

export default AddTask;
