import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import {Icons} from '../shared';

const Tab = createBottomTabNavigator();

const TabNavigator = ({}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let Icon;
          if (route.name === 'Home') {
            Icon = Icons.Home;
          }
          if (route.name === 'Browser') {
            Icon = Icons.Browser;
          }
          if (route.name === 'Bell') {
            Icon = Icons.Bell;
          }
          if (route.name === 'Person') {
            Icon = Icons.Explore;
          }
          return <Icon />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen name="Browser" component={HomeScreen} />
      <Tab.Screen name="Bell" component={HomeScreen} />
      <Tab.Screen name="Person" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
