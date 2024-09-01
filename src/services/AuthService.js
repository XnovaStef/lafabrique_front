import axios from 'axios';

const API_URL = 'http://votre-api-url.com/api/auth'; // Remplacez par l'URL de votre API d'authentification

const authService = {
  // Connexion de l'administrateur
  login: async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials);
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      console.error('Erreur de connexion:', error);
      throw error;
    }
  },

  // Déconnexion de l'administrateur
  logout: () => {
    localStorage.removeItem('user');
  },

  // Récupération de l'utilisateur actuellement connecté
  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },

  // Vérification si l'utilisateur est connecté
  isAuthenticated: () => {
    const user = authService.getCurrentUser();
    return !!user && !!user.token;
  },

  // Récupération du token d'authentification
  getAuthToken: () => {
    const user = authService.getCurrentUser();
    return user ? user.token : null;
  },

  // Configuration d'Axios pour inclure le token dans les en-têtes
  setAuthHeader: () => {
    const token = authService.getAuthToken();
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  },

  // Vérification de la validité du token (à implémenter côté serveur)
  checkTokenValidity: async () => {
    try {
      await axios.get(`${API_URL}/check-token`);
      return true;
    } catch (error) {
      console.error('Token invalide ou expiré:', error);
      authService.logout();
      return false;
    }
  },
};

// Configuration initiale de l'en-tête d'authentification
authService.setAuthHeader();

export default authService;