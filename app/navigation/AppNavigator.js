import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingsEditScreen from "../screens/ListingsEditScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name='Feed' component={FeedNavigator} />
    <Tab.Screen name='ListingsEdit' component={ListingsEditScreen} />
    <Tab.Screen name='Account' component={AccountScreen} />
  </Tab.Navigator>
);

export default AppNavigator;