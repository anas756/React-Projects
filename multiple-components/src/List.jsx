export default function List (props) {
    return (
        <>
        {props.tasks.length > 0 ? (
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th>Nom de la tâche</th>
                <th>État</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {props.tasks.map((t, index) => (
                <tr key={index}>
                  <td style={{
                    textDecoration:
                      t.status === "Fait" ? "line-through" : "none",
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
                    <button className="btn btn-success btn-sm me-2" onClick={() => props.updateStatus(index, "Fait")}>Fait</button>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => props.updateStatus(index, "En attente")}>En attente</button>
                    <button className="btn btn-secondary btn-sm me-2" onClick={() => props.updateStatus(index, "Annulée")}>Annuler</button>
                    <button className="btn btn-danger btn-sm" onClick={() => props.deleteTask(index)}>Supprimer</button>
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
          Nombre de tâches : {props.tasks.length}
        </p>
        </>
    )
}