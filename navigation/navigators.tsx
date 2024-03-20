import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import Home from '../screens/Home';
import { NavigatorScreenParams } from '@react-navigation/native';

export type DashboardStackParams = {
  continentCode: string
}


export type MyStackParamsList = {
  Stack: NavigatorScreenParams<DashboardStackParams>;
  Home: { id: number } | undefined;
  Dashboard: { continentCode: string } | undefined;
}

const Stack = createNativeStackNavigator<MyStackParamsList>();


export function MyStack(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}