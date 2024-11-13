import React, { useEffect } from "react";
import TaskDetails from "../Components/Tasks/TaskDetails";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { tasksSliceActions } from "../redux/slices/tasks-slice";
import { featchAppTask } from "../redux/operations/tasks-operations";
import Swal from "sweetalert2";

const TasksPage = () => {
  let tasks = useSelector((state) => state.task.filterdTask);
  let token = useSelector((state) => state.auth.token);

  let dispatch = useDispatch();

  let fetchTasks = () => {
    if (tasks.length == 0) {
      dispatch(featchAppTask(token));

      // axios
      //   .get(
      //     `https://fake-api-tasks-default-rtdb.firebaseio.com/tasks.json?auth=${token}`
      //   )
      //   .then((response) => {
      //     let fetchedTasks = [];
      //     for (let key in response.data) {
      //       let task = response.data[key];
      //       task.id = key;
      //       fetchedTasks.push(task);
      //     }
      //     console.log(fetchedTasks);
      //     // setFilteredTasks(fetchTasks);
      //     dispatch(tasksSliceActions.refrechTasks(fetchedTasks));
      //     // setFilteredTasks(tasks);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    } else {
      
      // console.log("Read From Context Storage");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  let filtredTasksHandler = (event) => {
    if (event.target.value == -1) {
      dispatch(tasksSliceActions.resetFilter());
    } else {
      dispatch(tasksSliceActions.filterTask(event.target.value));
    }
  };

  return (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Dashboard</h1>

          <div className=" mb-2 mb-md-0">
            <div className="d-flex align-items-center ms-3 ms-lg-4"></div>
            <div className="d-flex align-items-center ms-3 ms-lg-4"></div>
          </div>

          <ul className="list-inline">
            <li className="list-inline-item">
              {/* {tasks.length > 0 && ( */}
              <select
                className=" dropdown form-control pull-right"
                placeholder="Filter By status"
                autoComplete="off"
                onChange={filtredTasksHandler}
              >
                <option value="-1">All</option>
                <option value="Waiting">Waiting</option>
                <option value="In Progress">In Progress</option>
                <option value="Complete">Complete</option>
                <option value="Canceled">Canceled</option>
              </select>
              {/* )} */}
            </li>
            {/* <li className="list-inline-item mt-3">
              {" "}
              <select
                className=" dropdown form-control pull-right"
                placeholder="Filter By status"
                autoComplete="off"
              >
                <option value="">Filter By category</option>
                <option value="4">Category 1</option>
                <option value="1"> Category 2</option>
                <option value="3">Category 3</option>
                <option value="5">Category 4</option>
              </select>
            </li> */}
          </ul>
        </div>

        <div className="row mt-5">
          {tasks.map((element) => (
            <TaskDetails
              key={element.id}
              id={element.id}
              title={element.title}
              startDate={element.startDate}
              endDate={element.startDate}
              description={element.details}
              status={element.status}
            />
          ))}

          {/* <TaskDetails
            id="2"
            title="Title 2"
            startDate="07-10-2022"
            endDate="27-10-2022"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusantium alias, cum hhh ullam."
            status="Canceled "
          />

          <TaskDetails
            id="3"
            title="Title 3"
            startDate="07-10-2022"
            endDate="27-10-2022"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusantium alias, cum hhh ullam."
            status="Waiting"
          /> */}
        </div>
      </main>
    </>
  );
};

export default TasksPage;
