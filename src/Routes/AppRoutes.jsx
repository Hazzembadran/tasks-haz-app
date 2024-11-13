import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard.jsx";
import TasksPage from "../Pages/TasksPage.jsx";
import LoginPage from "../Pages/LoginPage.jsx";
import AddNewTask from "../Pages/AddNewTask.jsx";
import TaskDetailsPage from "../Pages/TaskDetailsPage.jsx";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  let loggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          JSON.parse(loggedIn) ? (
            <Navigate to="/dashboard/tasks" />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/dashboard"
        element={
          JSON.parse(loggedIn) ? <Dashboard /> : <Navigate to="/login" />
        }
      >
        <Route path="/dashboard/tasks" element={<TasksPage />} />
        <Route path="/dashboard/tasks/new-task" element={<AddNewTask />} />
        <Route
          path="/dashboard/tasks/:id/details"
          element={<TaskDetailsPage />}
        />
      </Route>
      <Route
        path="/login"
        element={
          JSON.parse(loggedIn) !== "true" ? (
            <LoginPage />
          ) : (
            <Navigate to="/dashboard" />
          )
        }
      />
      <Route
        path="/*"
        element={
          JSON.parse(loggedIn) !== true ? (
            <Navigate to="/login" />
          ) : (
            <Navigate to="/dashboard" />
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;
