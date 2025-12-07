import TOdoItem from "../TodoItem/TodoItem.jsx";

export default function TodoList({ todos, setSelectedTodo }) {
    return (
        <div className="TodoList" style={{ borderRight: "1px solid #ccc", padding: "10px", width: "40%" }}>
            <h2>Todo List</h2>

            {
                todos.map(todo => (
                    <TOdoItem key={todo.id} todo={todo} setSelectedTodo={setSelectedTodo} />
                ))
            }

        </div>
    );
}

function todoList()
{
    return [
        {id: "1", title: "Learn Express", completed: false},
        {id: "2", title: "Learn Redis", completed: true},
        {id: "3", title: "Build Todo App", completed: false},
        {id: "4", title: "Evening walk", completed: true},
    ];
}
