import React ,{useRef,useState} from 'react';
import { Icon } from "semantic-ui-react";
import {Button,Modal,InputGroup,FormControl} from 'react-bootstrap'
import { editTask } from '../redux/actions/Actions';
import { useDispatch } from 'react-redux';
const EditTask = ({todo}) => {
    const dispatch =useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const input = useRef();
    const date = useRef();
    const handleEdit=()=>{
                dispatch(editTask(todo.id,input.current.value, date.current.value));
                handleClose();
    }
    return (
        <div>
            <Button variant="primary" onClick={handleShow} style={{marginLeft:'5px'}}>
            <Icon name="edit" />
            <span>Edit</span>
            </Button>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Task</InputGroup.Text>
                <FormControl
                    ref={input}
                    placeholder="Task"
                    aria-label="Task"
                    aria-describedby="basic-addon1"
                />
                </InputGroup>
                <input
                ref={date}
                type="date"
                className="inputs"
                class="form-control datepicker"
                placeholder="Select Date"
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button
                variant="primary"
                onClick={handleEdit}>
                Save Changes
                </Button>
            </Modal.Footer>
            </Modal>
        </div>
    );
};

export default EditTask;
