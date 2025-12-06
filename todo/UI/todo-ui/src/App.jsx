import TodoList from "./components/TodoList/TodoList.jsx";
import TodoDetails from "./components/TodoDetails/TodoDetails.jsx";

export default function App() {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <TodoList/>
            <TodoDetails/>
        </div>
    );
}
