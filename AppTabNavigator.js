import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FoodDonationScreen from '../screens/FoodDonationScreen';
import FoodRequestScreen from '../screens/FoodRequestScreen';



export const AppTabNavigator = createBottomTabNavigator({
  DonateFood : {
    screen: FoodDonationScreen,
    navigationOptions :{
      tabBarLabel : "Donate Food",
    }
  },
  FoodRequest: {
    screen: FoodRequestScreen,
    navigationOptions :{
      tabBarLabel : "Food Request",
    }
  }
});