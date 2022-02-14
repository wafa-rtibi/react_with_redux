import React, { useState } from 'react';
import '../style/Home.css'
import AddTask from '../components/AddTask'
import ListTask from "../components/ListTask";
import { Button } from "semantic-ui-react";

const Home = () => {
  const [state, setState] = useState("all");
  return (
    <div className="home">
      <h1> To Do List </h1>
      <AddTask />
      <div className="buttons">
        <Button.Group>
          <Button onClick={() => setState("all")}>All</Button>
          <Button onClick={() => setState("done")}>Done</Button>
          <Button onClick={() => setState("undone")}>Undone</Button>
        </Button.Group>
      </div>
      <ListTask type={state} />
      
    </div>
  );
};
export default Home;
