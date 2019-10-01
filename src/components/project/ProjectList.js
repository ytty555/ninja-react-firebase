import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  const projectsList = projects.map(project => {
    return (
      <li key={project.id}>
        <ProjectSummary project={project} />
      </li>
    );
  });

  return (
    <div className='project-list section'>
      <ul>{projectsList}</ul>
    </div>
  );
};

export default ProjectList;
