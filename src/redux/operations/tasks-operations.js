import { tasksSliceActions } from "../slices/tasks-slice";

export const featchAppTask = (token) => {

  return async (dispatch) => {
    const fatchData = async () => {
      const response = await fetch(`https://tasks-haz-app-default-rtdb.firebaseio.com/tasks.json?auth=${token}`);

      if (!response.ok) {
        throw new Error("Couldn't load fetch  data! ");
      }
      const data = response.json();
      return data;
    };

    try {
      const result = await fatchData();
      let tasks = [];
      for (let key in result) {
        let task = result[key];
        task.id = key;
        tasks.push(task);
      }

      dispatch(tasksSliceActions.refrechTasks(tasks));

    } catch (error) {
      console.log(error)
    }

  }
};

export const addTask = () => { }; 