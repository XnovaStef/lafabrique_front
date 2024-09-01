import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projectService from '../services/ProjectService';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await projectService.getAllProjects();
      setProjects(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des projets:', error);
    }
  };

  return (
    <div className="project-list">
      <h2>Liste des Projets</h2>
      <Link to="/project/new">Ajouter un nouveau projet</Link>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            {project.name} - {project.number}
            <Link to={`/project/edit/${project._id}`}>Modifier</Link>
            <button onClick={() => projectService.deleteProject(project._id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;