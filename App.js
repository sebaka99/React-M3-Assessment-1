import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Screens
import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import DashboardScreen from './screens/dashboard';
import SettingsScreen from './screens/settings';
import SplashScreen from './screens/splash_screen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator>
   
       <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
  
        
        />

         <Stack.Screen 
         
        name="Register" 
        component={RegisterScreen} 
        options={{ title: 'Register' }}
        />

         <Stack.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{headerShown: false}} // This hides the title bar
        />

         <Stack.Screen 
        name="Settings" 
        component={SettingsScreen} 
       
        /> 

         <Stack.Screen 
        name="Splash" 
        component={SplashScreen} /> 

      </Stack.Navigator>

    </NavigationContainer>
  );
}




