import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import ShoppingLists from './components/ShoppingLists';
import Welcome from './components/Welcome';



const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCw8bgDFEiyohnMn-es09UaWTxAPIUWnys",
    authDomain: "shopping-list-demo-29686.firebaseapp.com",
    projectId: "shopping-list-demo-29686",
    storageBucket: "shopping-list-demo-29686.appspot.com",
    messagingSenderId: "1040296550451",
    appId: "1:1040296550451:web:758e36154f4f658da48346"
  };

  //Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen
          name='Welcome'
          component={Welcome}
        />
        <Stack.Screen
          name='ShoppingLists'
        >
          {props => <ShoppingLists db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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

export default App;
