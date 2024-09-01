import { useState, useEffect } from 'react';
import { getProjects, getEcarts } from '../services/api';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [ecarts, setEcarts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await getProjects();
      setProjects(projectsData);

      if (projectsData.length > 0) {
        const ecartsData = await getEcarts(projectsData[0]._id);
        setEcarts(ecartsData);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tableau de bord</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Projets récents</h2>
          <ul className="bg-white shadow rounded-lg divide-y">
            {projects.slice(0, 5).map(project => (
              <li key={project._id} className="p-4">{project.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Écarts budgétaires</h2>
          <BarChart width={500} height={300} data={ecarts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="designation" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="montantDevis" fill="#8884d8" name="Devis" />
            <Bar dataKey="montantAchat" fill="#82ca9d" name="Achat" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;