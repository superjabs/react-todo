import Navbar from "./Components/Navbar";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="max-w-lg mx-auto p-4">
      <Navbar />
      <TodoList />
    </div>
  );
}

export default App;
