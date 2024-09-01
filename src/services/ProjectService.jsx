import axios from 'axios';

const API_URL = 'http://votre-api-url.com/api/projects'; // Remplacez par l'URL de votre API

const projectService = {
  // Récupérer tous les projets
  getAllProjects: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des projets:', error);
      throw error;
    }
  },

  // Récupérer un projet par son ID
  getProjectById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération du projet ${id}:`, error);
      throw error;
    }
  },

  // Créer un nouveau projet
  createProject: async (projectData) => {
    try {
      // Générer automatiquement le numéro du projet
      const projects = await projectService.getAllProjects();
      const maxNumber = Math.max(...projects.map(p => p.number), 0);
      projectData.number = maxNumber + 1;

      const response = await axios.post(API_URL, projectData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création du projet:', error);
      throw error;
    }
  },

  // Mettre à jour un projet
  updateProject: async (id, projectData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, projectData);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du projet ${id}:`, error);
      throw error;
    }
  },

  // Supprimer un projet
  deleteProject: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la suppression du projet ${id}:`, error);
      throw error;
    }
  },

  // Téléverser un devis pour un projet
  uploadQuote: async (projectId, quoteFile) => {
    try {
      const formData = new FormData();
      formData.append('quote', quoteFile);
      const response = await axios.post(`${API_URL}/${projectId}/upload-quote`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Erreur lors du téléversement du devis pour le projet ${projectId}:`, error);
      throw error;
    }
  },

  // Récupérer les désignations d'un devis pour un projet
  getQuoteDesignations: async (projectId) => {
    try {
      const response = await axios.get(`${API_URL}/${projectId}/quote-designations`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération des désignations du devis pour le projet ${projectId}:`, error);
      throw error;
    }
  },

  // Ajouter une nouvelle désignation à un projet
  addDesignation: async (projectId, designationData) => {
    try {
      const response = await axios.post(`${API_URL}/${projectId}/designations`, designationData);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de l'ajout d'une désignation au projet ${projectId}:`, error);
      throw error;
    }
  },

  // Calculer les écarts pour un projet
  calculateDeviation: async (projectId) => {
    try {
      const response = await axios.get(`${API_URL}/${projectId}/deviation`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors du calcul des écarts pour le projet ${projectId}:`, error);
      throw error;
    }
  },
};

export default projectService;