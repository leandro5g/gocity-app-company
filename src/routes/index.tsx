import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../contexts/auth";

import { AuthRoutes } from "./AuthRoutes/auth.routes";

const Routes: React.FC = () => {
  const { token } = useAuth();

  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};

export { Routes };
