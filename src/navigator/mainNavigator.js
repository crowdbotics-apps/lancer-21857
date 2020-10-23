import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList156722Navigator from '../features/NotificationList156722/navigator';
import Settings156721Navigator from '../features/Settings156721/navigator';
import Settings156713Navigator from '../features/Settings156713/navigator';
import UserProfile156711Navigator from '../features/UserProfile156711/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList156722: { screen: NotificationList156722Navigator },
Settings156721: { screen: Settings156721Navigator },
Settings156713: { screen: Settings156713Navigator },
UserProfile156711: { screen: UserProfile156711Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
