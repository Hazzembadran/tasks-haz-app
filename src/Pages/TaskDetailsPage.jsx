import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import FirstImage from "../Resources/img/1.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { tasksSliceActions } from "../redux/slices/tasks-slice";

const TaskDetailsPage = () => {
  let params = useParams();

  let token = useSelector((state) => state.auth.token);
  let taskDetails = useSelector((state) => state.task.taskDetails);
  let dispatch = useDispatch();

  let fetchTaskDetails = () => {
    dispatch(tasksSliceActions.showTaskDetails({ id: params.id }));
  };

  let statusChangeHandler = (status) => {
    axios
      .patch(
        `https://tasks-haz-app-default-rtdb.firebaseio.com/tasks/${taskDetails.id}.json?auth=${token}`,
        { status: status }
      )
      .then(() => {
        dispatch(
          tasksSliceActions.changeStatus({ id: params.id, status: status })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(fetchTaskDetails, []);

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Task Details ({taskDetails?.title}) </h1>

        <div className=" mb-2 mb-md-0">
          <div className="d-flex align-items-center ms-3 ms-lg-4"></div>
          <div className="d-flex align-items-center ms-3 ms-lg-4"></div>
        </div>

        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button
              type="button"
              onClick={() => statusChangeHandler("In Progress")}
              className={`btn btn-sm btn-outline-secondary ${
                taskDetails.status == "In Progress" ? "active" : ""
              }`}
            >
              In Progress
            </button>
            <button
              type="button"
              onClick={() => statusChangeHandler("Complete")}
              className={`btn btn-sm btn-outline-secondary ${
                taskDetails.status == "Complete" ? "active" : ""
              }`}
            >
              Complete
            </button>
            <button
              type="button"
              onClick={() => statusChangeHandler("Waiting")}
              className={`btn btn-sm btn-outline-secondary ${
                taskDetails.status == "Waiting" ? "active" : ""
              }`}
            >
              Waiting
            </button>
            <button
              type="button"
              onClick={() => statusChangeHandler("Canceled")}
              className={`btn btn-sm btn-outline-secondary ${
                taskDetails.status === "Canceled" ? "active" : ""
              }`}
            >
              Canceled
            </button>
          </div>
          <button type="button" className="btn btn-light-main btn">
            <span data-feather="edit-3"></span> Edit
          </button>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <img src={FirstImage} className="img-fluid rounded de-img" />
        </div>
        <div className="col-md-6  mt-5">
          <div className=" mb-3">
            <span data-feather="bookmark" className="main-color"></span>{" "}
            <strong>Title:</strong> {taskDetails?.title}
          </div>
          <div className="mb-3">
            <span data-feather="layers" className="main-color"></span>{" "}
            <strong>Category:</strong> {taskDetails?.categoray}
          </div>
          <div className="">
            <span data-feather="calendar" className="main-color"></span>{" "}
            <strong>Date:</strong> {taskDetails?.startDate} to
            {taskDetails?.endDate}
          </div>
        </div>

        <div className="row mt-5">
          <div className="task-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            accusantium alias, cum hhh ullam.
          </div>
        </div>
      </div>
    </main>
  );
};

export default TaskDetailsPage;
