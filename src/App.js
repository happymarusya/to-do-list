import logo from './logo.png';
import './App.css';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="list">
          <div className="container">
            <h1>To Do List</h1>
          </div>
        <ToDoList/>
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
