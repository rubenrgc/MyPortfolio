import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom'
import List from '../components/List';
import { useParams } from 'react-router-dom';
import React from 'react';
function ProjectDetail({ userName }) {
  const [loading, setLoading] = useState(false);
  const [projects, setProject] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://api.github.com/repos/${userName}/${name}`,
      );
      const result = await data.json();
      if (result) {
        setProject(result);
        setLoading(false);
      }
    }
    if (userName && name) {
      fetchData();
    }
  }, [userName, name]);
  return (
    <div className='Projects-container'>
    <h2>Projects</h2>
    {loading ? (
      <span>Loading...</span>
    ) : (
      <div>
        <List items={projects.map((project) => ({
          field: project.name,
          value: <RouterLink url={project.html_url}
          title={project.html_url} />,
            }))} />

      </div>
    )}
  </div>
  );
}
export default ProjectDetail;