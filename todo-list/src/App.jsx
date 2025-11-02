import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "900px" }}>
        <h2 className="text-center mb-4">Todo Liste</h2>

        <label className="form-label">Nom de la tâche :</label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Écris une tâche..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addTask}>
            Ajouter
          </button>
        </div>

        {/* Alors, Ca c'est une condition reduite: cond ? (...) : (...) */}
        {tasks.length > 0 ? (
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th>Nom de la tâche</th>
                <th>État</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((t, index) => (
                <tr key={index}>
                  <td style={{
                    textDecoration:
                      t.status === "Annulée" ? "line-through" : "none",
                    color:
                      t.status === "Annulée" ? "gray" : t.status === "Fait" ? "green" : "black",
                  }}
                  >
                    {t.name}
                  </td>
                  <td>
                    {t.status}
                  </td>
                  <td>
                    <button className="btn btn-success btn-sm me-2" onClick={() => updateStatus(index, "Fait")}>Fait</button>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => updateStatus(index, "En attente")}>En attente</button>
                    <button className="btn btn-secondary btn-sm me-2" onClick={() => updateStatus(index, "Annulée")}>Annuler</button>
                    <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-muted mt-3">
            Aucune tâche pour le moment...
          </p>
        )}

        <p className="mt-3 fw-bold text-center">
          Nombre de tâches : {tasks.length}
        </p>
      </div>
    </div>
  );
}

export default App;
