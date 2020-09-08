import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

export default function App() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, [])

  async function handleAddProject() {
    // setProjects([...projects, `Novo projeto. Criado em ${Date.now()}`]);
    
    const newProject = {
      title: `Novo projeto. Criado em ${Date.now()}`,
      owner: 'Nilton Pontes',
    }

    const response = await api.post('projects', newProject)
    
    const project = response.data;

    setProjects([...projects, newProject]);
  }

  return(
    <>
      <Header title="Homepage"/>
      <ul>
        {projects.map(project => (
        
        <li key={project.id}>
          <h1>{project.title}</h1>
          <h2>{project.owner}</h2>
        </li>
        
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>Criar projeto.</button>
    </>
  )
}
