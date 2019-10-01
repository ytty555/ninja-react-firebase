import React from 'react';

const ProjectDetails = props => {
  const id = props.match.params.id;

  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
            exercitationem. Nisi cupiditate perspiciatis, ex placeat recusandae
            minus voluptatum eos qui, assumenda ut, corporis aliquid vel
            ratione. Expedita obcaecati quaerat enim.
          </p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted by 111</div>
          <div>2rd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
