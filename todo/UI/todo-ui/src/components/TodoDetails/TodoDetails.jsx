export default function TodoDetails({ selectedTodo })
{
    if (!selectedTodo) {
        return (
            <div style={{ padding: "10px", width: "100%" }}>Select a todo...</div>
        );
    }

    return (
        <div style={{ padding: "10px", width: "100%" }}>
            <h2>Todo Details</h2>
            <div className="todoDetails">
                <h2>{selectedTodo.title}</h2>
                <p> Status : { selectedTodo.completed ? "Completed" : "Work in Progress" } </p>
            </div>
        </div>
    );
}
