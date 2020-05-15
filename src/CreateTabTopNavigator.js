import React from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import GroupSettingInfo from './GroupSettingInfo';
import GroupSettingAddUser from './GroupSettingAddUser';
import GroupSettingDeleteUser from './GroupSettingDeleteUser';

const TabNavigator = createMaterialTopTabNavigator(
    {
      Info: {
        screen: GroupSettingInfo,
        navigationOptions: {
          tabBarLabel: "Info",
          initialRouteName: "Info",
          activeColor: "#C71585",
          inactiveColor: "#226557",
          barStyle: {backgroundColor: "#FFC0CB"},
        },
      },
      AddMember: {
        screen: GroupSettingAddUser,
        navigationOptions: {
          tabBarLabel: "AddMember",
          activeColor: "#4B0082",
          inactiveColor: "#226557",
          barStyle: {backgroundColor: "#B0C4DE"},
        },
      },
      DeleteMember: {
        screen: GroupSettingDeleteUser,
        navigationOptions: {
          tabBarLabel: "DeleteMember",
          activeColor: "#006400",
          inactiveColor: "#226557",
          barStyle: {backgroundColor: "#8FBC8F"},
        },
      },
    },
    {
      animationEnabled: true,
      swipeEnabled: true,
      tabBarOptions: {
        pressColor: "black",
        style: {
          backgroundColor: "white",
        },
        indicatorStyle: {
          backgroundColor: "black",
        },
        activeTintColor: "#000",
        inactiveTintColor: "#d1cece",
        showLabel: false,
        showIcon: true,
      },
    },
  );
  
  export default createAppContainer(TabNavigator);