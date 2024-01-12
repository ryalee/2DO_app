import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './src/Routes/Stack.routes';

export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes/>
      <StatusBar style="dark"/>
    </NavigationContainer>
  );
};