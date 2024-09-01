
{/*
import  { useState } from 'react';
import { uploadDevis } from '../services/api';

const DevisUpload = ({ projectId }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('devis', file);

    try {
      await uploadDevis(projectId, formData);
      alert('Devis téléversé avec succès!');
    } catch (error) {
      console.error('Erreur lors du téléversement du devis:', error);
      alert('Erreur lors du téléversement du devis');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="mb-2"
      />
      <button 
        type="submit" 
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Téléverser le devis
      </button>
    </form>
  );
};

export default DevisUpload;
*/}