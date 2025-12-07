import TodoList from "./components/TodoList/TodoList.jsx";
import TodoDetails from "./components/TodoDetails/TodoDetails.jsx";

// state should be where a component can control it
import { useState } from "react";




export default function App() {
    const [selectedTodo, setSelectedTodo] = useState(null);

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <TodoList setSelectedTodo={setSelectedTodo} />
            <TodoDetails selectedTodo={selectedTodo} />
        </div>
    );
}
