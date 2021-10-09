import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Bag from '../../screens/Bag/Bag';
import Home from '../../screens/Home/Home';
import Wishlist from '../../screens/Wishlist/Wishlist';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = '';
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Bag') {
            iconName = 'shoppingcart';
          } else if (route.name === 'Wishlist') {
            iconName = 'hearto';
          }
          return <AntIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Bag" component={Bag} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
    </Tab.Navigator>
  );
}
