import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Saisir from "./Saisir";
import List from "./List";

function App() {
  const [task, setTask] = useState("Learn Laravel");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    const newTask = { name: task, status: "En attente" };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const updateStatus = (index, newStatus) => {
    const newTasks = [...tasks];
    newTasks[index].status = newStatus;
    setTasks(newTasks);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="card shadow p-4 mx-auto" style={{ maxWidth: "900px" }}>
          <Saisir task = {task} addTask = {addTask} setTask = {setTask}/>
          <List tasks = {tasks} deleteTask = {deleteTask} updateStatus = {updateStatus}/>
        </div>
      </div>
    </>
  );
}

export default App;
