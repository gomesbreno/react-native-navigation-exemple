import React from "react";
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";//essa é uma biblioteca de imagens
//você pode encontar o nome dos itens dos itens no link: https://fontawesome.com/icons?d=gallery

import Screen1 from "./screens/Screen1"
import Screen2 from "./screens/Screen2"
import Screen3 from "./screens/Screen3"
import Screen4 from "./screens/Screen4"
import Screen5 from "./screens/Screen5"

//cria uma navegação por meio de pilha de cenas
const StackRouter = createStackNavigator(
  {
    Screen1: { screen: Screen1, navigationOptions: { title: "Cena 1" } },
    Screen2: { screen: Screen2, navigationOptions: { title: "Cena 2" } },    
  },
  {
    initialRouteName: "Screen1"
  }
);
//cenas que você quer na navbar
const navbarRoutes = {
    Screen3: {
    name: "Screen 3",
    screen: Screen3,
    navigationOptions: {
      title: "Screen 3",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={30} color={tintColor} />
      )
    }
  },
  Screen4: {
    name: "Screen 4",
    screen: Screen4,
    navigationOptions: {
      title: "Screen 4",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="handshake" size={30} color={tintColor} />
      )
    }
  },
  Screen5: {
    name: "Screen 5",
    screen: Screen5,
    navigationOptions: {
      title: "Screen 5",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" size={30} color={tintColor} />
      )
    }
  }
};
//
const navbarConfig = {
  initialRouteName: "Screen3",
  tabBarOptions: {
    showLabel: false
  }
};
//cria uma navegação por meio navigation bar
const MenuNavigator = createBottomTabNavigator(navbarRoutes, navbarConfig);

//cria uma navegação entre telas simples
const Routers = createSwitchNavigator(
  {
    Menu: MenuNavigator,
    Stack: StackRouter
  },
  {
    initialRouteName: "Stack"
  }
);

class Navigation extends React.Component {
  static router = Routers.router;
  render() {
    const { navigation } = this.props;
    return <Routers navigation={navigation} />;
  }
}

export default Navigation;
