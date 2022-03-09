import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './Components/FirstScreen';
import Host from './Components/Host';
import Join from './Components/Join';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName ="firstscreen"
      screenOptions={{
        //headerShown:false
      }}>
        <Stack.Screen name='firstscreen' component={FirstScreen}options={{title:"Home"}}/>
        <Stack.Screen name='host' component={Host} options={{title:"Start Movie"}}/>
        <Stack.Screen name='join' component={Join} options={{title:"Select Friends"}}/>
        
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
