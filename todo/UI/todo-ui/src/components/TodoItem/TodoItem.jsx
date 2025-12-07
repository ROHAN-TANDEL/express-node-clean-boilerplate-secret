export default function TOdoItem({ todo, setSelectedTodo })
{
    return (
        <div style={{ padding: "8px", borderBottom: "1px solid #eee", cursor: "pointer" }}
             onClick={() => setSelectedTodo(todo)}
        >
            {todo.title}
        </div>
    );
}
