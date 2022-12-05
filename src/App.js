import { Route, Routes } from 'react-router-dom';
import './App.css';

import DashboardContent from './component/Dashboard';
import MenuBar from './component/MenuBar';
import EnhancedTable from './component/Table';
import Tables from './component/Table';
import SignIn from './feature/sign-in';
import TodoList from './feature/todo-list';

function App() {
  return (
    <div>

    <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/dashboard" element={<DashboardContent />} />
      <Route path="/todolist" element={<TodoList/>}/>
      <Route path="/menu" element={<MenuBar />} /> 
      <Route path="/table" element={<Tables/>}/>
    </Routes>
    </div>

  );
}

export default App;
