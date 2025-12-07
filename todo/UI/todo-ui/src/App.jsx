import TodoList from "./components/TodoList/TodoList.jsx";
import TodoDetails from "./components/TodoDetails/TodoDetails.jsx";

// state should be where a component can control it
import {useEffect, useState} from "react";
import API from './services/api.js';





export default function App() {
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [todoList, setTodo] = useState([]);


    async function fetchTodoList()
    {
        try {
            const response = await API.get('/todo/all');
            setTodo(response.data);
        } catch (error) {
            console.log("Error in fetchTodoList", error);
        }
    }
    useEffect(() => {
        fetchTodoList().then(r => console.log("data fetched",r));
    }, []);

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <TodoList todos={todoList}  setSelectedTodo={setSelectedTodo} />
            <TodoDetails selectedTodo={selectedTodo} />
        </div>
    );
}
