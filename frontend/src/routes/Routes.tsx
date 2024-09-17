import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import ListChecklistsPage from "../pages/ListChecklistsPage";
import ChecklistDetailsPage from "../pages/ChecklistDetailsPage";
import CreateChecklist from "../pages/CreateChecklist";
import EditChecklistPage from "../pages/EditChecklistPage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoutes from "./ProtectedRoutes";
import ListUsersPage from "../pages/ListUsersPage";
import ListUserChecklistsPage from "../pages/ListUserChecklistsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <ProtectedRoutes>
            <HomePage />
          </ProtectedRoutes>
        ),
      },
      { path: "login", element: <LoginPage /> },
      {
        path: "checklists",
        element: (
          <ProtectedRoutes>
            <ListChecklistsPage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "checklists/respond/:id",
        element: (
          <ProtectedRoutes>
            <ChecklistDetailsPage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "checklists/create",
        element: (
          <ProtectedRoutes>
            <CreateChecklist />
          </ProtectedRoutes>
        ),
      },
      {
        path: "checklists/edit/:id",
        element: (
          <ProtectedRoutes>
            <EditChecklistPage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "checklists/user/:username",
        element: (
          <ProtectedRoutes>
            <ListUserChecklistsPage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "accounts/list",
        element: (
          <ProtectedRoutes>
            <ListUsersPage />
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);
