import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainAppContainer from './src/components/MainAppContainer';
import { createStackNavigator } from '@react-navigation/stack';
import { HOME, MAIN_APP_CONTAINER } from './src/router/constants';
import Home from './src/screens/Home';
import { Provider } from 'react-redux';
import store from './src/model/redux/store/store';
import mainAppInitializer from './src/initializers/mainAppInitialize';

const Stack = createStackNavigator()

export default function App() {

  useEffect(() => {
    mainAppInitializer();
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={MAIN_APP_CONTAINER} component={MainAppContainer} options={{headerStyle: {height: 0}}} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
