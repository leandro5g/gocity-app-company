import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { OwnerCompanyRegister } from "../../pages/SignUp/OwnerCompanyRegister";
import { CompanyInfo } from "../../pages/SignUp/CompanyInfo";

const { Navigator, Screen } = createNativeStackNavigator();

const SignUpRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="OwnerCompanyRegister" component={OwnerCompanyRegister} />
      <Screen name="CompanyInfo" component={CompanyInfo} />
    </Navigator>
  );
};

export { SignUpRoutes };
