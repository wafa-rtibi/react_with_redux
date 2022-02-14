import "../style/Task.css";
import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletTask, done } from "../redux/actions/Actions";
import { Icon } from "semantic-ui-react";
import EditTask from "./EditTask";

export const Task = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="task">
      <Container>
        <Row className="justify-content-md-center">
          <Col className="line">
            {todo.done == true ? (
              <div className="myTask">
                <Form.Check
                  checked
                  aria-label="option 1"
                  onClick={() => dispatch(done(todo.id))}
                />
                <span>
                  <del>{todo.text}</del>
                </span>
              </div>
            ) : (
              <div className="myTask">
                <Form.Check
                  aria-label="option 1"
                  onClick={() => dispatch(done(todo.id))}
                />
                <span>{todo.text}</span>
              </div>
            )}
          </Col>
          <Col>{todo.date}</Col>
          <Col className="buttons">
            <Button
              variant="danger"
              onClick={() => dispatch(deletTask(todo.id))}>
              <Icon link name="trash alternate outline" />
              <span>delete</span>
            </Button>
            <EditTask todo={todo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
