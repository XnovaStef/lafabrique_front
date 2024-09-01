import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectService from '../services/ProjectService';

const ProjectForm = () => {
  const [project, setProject] = useState({ name: '', description: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchProject();
    }
  }, [id]);

  const fetchProject = async () => {
    try {
      const data = await projectService.getProjectById(id);
      setProject(data);
    } catch (error) {
      console.error('Erreur lors de la récupération du projet:', error);
    }
  };

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await projectService.updateProject(id, project);
      } else {
        await projectService.createProject(project);
      }
      navigate('/projects');
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du projet:', error);
    }
  };

  return (
    <div className="project-form">
      <h2>{id ? 'Modifier le Projet' : 'Créer un Nouveau Projet'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={project.name}
          onChange={handleChange}
          placeholder="Nom du projet"
          required
        />
        <textarea
          name="description"
          value={project.description}
          onChange={handleChange}
          placeholder="Description du projet"
        />
        <button type="submit">{id ? 'Mettre à jour' : 'Créer'}</button>
      </form>
    </div>
  );
};

export default ProjectForm;