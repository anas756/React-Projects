export default function Saisir(props) {
    return (
        <>
        <h2 className="text-center mb-4">Todo Liste</h2>

        <label className="form-label">Nom de la tâche :</label>
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Écris une tâche..."
                value={props.task}
                onChange={(e) => props.setTask(e.target.value)}
            />
            <button className="btn btn-primary" onClick={props.addTask}>
                Ajouter
            </button>
        </div>
        </>
    )
}