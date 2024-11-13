import { useRef } from "react";
import Task from "../Model/Task";
import axios from "axios";
import { useDispatch } from "react-redux";
import { tasksSliceActions } from "../redux/slices/tasks-slice";
import Helpers from "../Utils/Helpers";
import Swal from "sweetalert2";

// (s)olid => Single responsibility
class NewTaskController {
  nameRef = useRef();
  categoryRef = useRef();
  detailsRef = useRef();
  startDateRef = useRef();
  endDateRef = useRef();

  dispatch = useDispatch();

  onFormSubmitHandler = (event) => {
    event.preventDefault();
    this.addNewTask();
  };

  addNewTask = () => {
    if (this.checkForm()) {
      Swal.showLoading();
      const newTaskObject = this.newTask;
      
      const token = localStorage.getItem("token");
      axios

        .post(
          `https://tasks-haz-app-default-rtdb.firebaseio.com/tasks.json?auth=${token}`,

          newTaskObject
        )
        .then((response) => {
          this.dispatch(tasksSliceActions.createTask(this.newTask));
          Helpers.showMessage("Success ", "Adde Task Successfauly", "success");
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.clear();

          Swal.hideLoading();
        });
    }
  };

  clear = () => {
    
    this.nameRef.current.value = "";
    this.categoryRef.current.value = "";
    this.detailsRef.current.value = "";
    this.startDateRef.current.value = "";
    this.endDateRef.current.value = "";
  };

  checkForm = () => {
    if (
      this.nameRef.current.value !== "" &&
      this.categoryRef.current.value !== "" &&
      this.detailsRef.current.value !== "" &&
      this.startDateRef.current.value !== "" &&
      this.endDateRef.current.value !== ""
    ) {
      return true;
    }
    Helpers.showMessage("Error data", "Enter Task Info", "error");
    return false;
  };

  get newTask() {
    return new Task(
      Math.random(),
      this.nameRef.current.value,
      this.categoryRef.current.value,
      this.detailsRef.current.value,
      this.startDateRef.current.value,
      this.endDateRef.current.value,
      "Waiting"
    );
  }
}

export default NewTaskController;
