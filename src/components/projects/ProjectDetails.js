import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div>
      <div className="conatiner section project-details">
        <div className="card z-depth">
          <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
            <p>Lorem ipsum</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div> Posted by Mike and Garland</div>
            <div>3rd September, 3am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
