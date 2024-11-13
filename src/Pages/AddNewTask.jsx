import React from "react";
import NewTaskController from "../Controller/NewTaskController";

const AddNewTask = () => {
  let taskController = new NewTaskController();

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2 mt-3">Add New Task </h1>
      </div>

      <form className="row mt-5" onSubmit={taskController.onFormSubmitHandler}>
        <div className="col-md-12">
          <div className="form-outline mb-4">
            <label className="form-label">Task name</label>
            <input
              type="texy"
              id="loginName"
              className="form-control"
              placeholder="Task name"
              ref={taskController.nameRef}
            />
          </div>
        </div>

        {/* <div className="col-md-12">
          <div className="form-outline mb-4">
            <label className="form-label">Task Category</label>
            <input
              id="input-tags"
              value="category 1,category 2, category 3 , name of category"
              autoComplete="off"
              placeholder="Add Category?"
            />
          </div>
        </div> */}

        <div className="col-md-12">
          <div className="form-outline mb-4">
            <label className="form-label">Task Category</label>
            <select ref={taskController.categoryRef} className="form-control">
              <option value="1">Work</option>
              <option value="2">Home</option>
              <option value="3">Family</option>
              <option value="4">Education</option>
            </select>
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-outline mb-4">
            <label className="form-label">Image For Task</label>
            <input className="form-control" type="file" id="formFile" />
          </div>
        </div>

        <div className="col-md-12">
          <label className="form-label">Task Details</label>
          <div className="form-outline mb-4">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              ref={taskController.detailsRef}
            ></textarea>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-outline mb-4">
            <label className="form-label">Start date</label>
            <input
              type="datetime-local"
              className="form-control"
              placeholder="Task name"
              ref={taskController.startDateRef}
            />
          </div>
        </div>

        <div className="col-md-6">
          <label className="form-label">End date</label>
          <div className="form-outline mb-4">
            <input
              type="datetime-local"
              className="form-control"
              placeholder="Task name"
              ref={taskController.endDateRef}
            />
          </div>
        </div>

        <div>
          <button type="submit" className="pull-right btn btn-main mb-4">
            Add New Task
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddNewTask;
