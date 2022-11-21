import { Route, Routes } from 'react-router-dom';
import './App.css';

import DashboardContent from './component/Dashboard';
import MenuBar from './component/MenuBar';
import SignIn from './feature/sign-in';

function App() {
  return (
    <div>

    <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/dashboard" element={<DashboardContent />} />
      <Route path="/menu" element={<MenuBar />} /> 
    </Routes>
    </div>

  );
}

export default App;
