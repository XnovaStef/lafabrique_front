import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import ProjectList from './pages/ProjectList';
import ProjectForm from './pages/ProjectForm';
//import './index.css';
import ProjectPage from './components/Projets/ProjectsPage';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/project/new" element={<ProjectPage />} />
        <Route path="/project/edit/:id" element={<ProjectForm />} />
        <Route path="/" element={<Navigate to="/projects" replace />} />
      </Routes>
    </Router>
  );
}

export default App;