import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import { FontAwesome, Ionicons, AntDesign, Octicons } from '@expo/vector-icons';

import Home from '../../src/screens/Home/home';
import Settings from '../../src/screens/Settings/settings';
import Task from '../../src/screens/Tasks/tasks';
import Notifications from '../../src/screens/Notifications/notifications';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#072d42',
            borderTopWidth: 0,
            paddingBottom: 8,
            height: 60,
          },
          tabBarActiveTintColor: '#c1e8ff',
        }}
      >
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarLabel: 'Início', 
            headerShown: false,
            tabBarIcon: ({focused}) => {
              if(focused) {
                return ( <Ionicons name='home' color={'#c1e8ff'} size={22}/>)
              } else {
                return (<Ionicons name='home-outline' color={'#fff'} size={22}/>)
              }
            },
          }}
        />

        <Tab.Screen name='Tasks' component={Task}
          options={{
            tabBarLabel: 'Tasks',
            headerShown: false,
            tabBarIcon: ({focused}) => {
              if(focused) {
                return (<AntDesign name='checkcircle' color={'#c1e8ff'} size={22}/>)
              } else {
                return (<AntDesign name='checkcircleo' color={'#fff'} size={22}/>)
              }
            },
          }}
        />

        <Tab.Screen name='Notify' component={Notifications}
          options={{
            tabBarLabel: 'Notificações',
            headerShown: false,
            tabBarIcon: ({focused}) => {
              if(focused) {
                return (<FontAwesome name='bell' color={'#c1e8ff'} size={22}/>)
              } else {
                return (<FontAwesome name='bell-o' color={'#fff'} size={22}/>)
              }
            },
          }}
        />

        <Tab.Screen name='Settings' component={Settings}
          options={{
            tabBarLabel: 'Configurações',
            headerShown: false,
            tabBarIcon: ({focused}) => {
              if(focused) {
                return (<Ionicons name='settings' color={'#c1e8ff'} size={22}/>)
              } else {
                return (<Ionicons name='settings-outline' color={'#fff'} size={22}/>)
              }
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}