import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CoursesScreen from "./src/screens/CoursesScreen";
import CoursesInformation from "./src/screens/CoursesInformationScreen";
import CounterScreen from "./src/screens/CounterScreen";
import BoxScreen from "./src/screens/BoxScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Anasayfa" component={HomeScreen} />
        <Stack.Screen name="Kurslarim" component={CoursesScreen} />
        <Stack.Screen name="KursBilgilerim" component={CoursesInformation} />
        <Stack.Screen name="Sayac" component={CounterScreen} />
        <Stack.Screen name="Kutu Uygulamasi" component={BoxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
