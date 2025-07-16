import { BrowserRouter } from "react-router";

import { useAuth } from "../hooks/useAuth";

import { Loading } from "../components/Loading";

import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";

export function Routes() {
  const context = useAuth();

  function Route() {
    switch (context.session?.user.role) {
      case "employee":
        return <EmployeeRoutes />;

      case "manager":
        return <ManagerRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  if (context.isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
