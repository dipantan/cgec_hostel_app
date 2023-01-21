import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {fetchIsAuthenticated} from '../reducers/auth/selectors';

// screens
import Home from '../screens/home';
import Login from '../screens/login';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  const isAuthenticated = useSelector(fetchIsAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          {/* screens */}
          {isAuthenticated ? (
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
          ) : (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
          )}
        </Stack.Group>
        {/* modals */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
