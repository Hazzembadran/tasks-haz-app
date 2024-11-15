import React from "react";
import ThirdImage from "../../Resources/img/3.png";
import { Link } from "react-router-dom";
const TaskDetails = (props) => {
  return (
    <div className="col-md-4">
      <div className="card task card">
        <img src={ThirdImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <span data-feather="calendar"></span> {props.startDate}
            <span className="main-color">To </span> {props.endDate}
          </h6>
          <p className="card-text">{props.description}</p>
          <hr />
          <span className="btn badge-light-primary inprogress">
            {props.status}
          </span>

          <Link
            to={`/dashboard/tasks/${props.id}/details`}
            className="btn btn-bg-gray pull-right"
          >
            <span data-feather="arrow-right"><i className="fas fa-edit"></i></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
