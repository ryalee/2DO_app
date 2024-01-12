import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screens/Welcome/welcome";
import SignIn from "../screens/SignIn/signIn";
import SignUp from "../screens/SignIn/signup";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
  );
};
