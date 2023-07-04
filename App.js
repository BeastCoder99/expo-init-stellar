import DailyPicsScreen from "./Screens/DailyPic";
import SpaceCraftScreen from "./Screens/Spacecraft";

function App () {
return(
<NavigationContainer>
<Stack.Navigator initialRouteName= "Home" screenOptions= {{
headerShown: false
}}>

<Stack.Screen name = "Home" component={HomeScreen}/>
<Stack.Screen name = "SpaceCraft" component={SpaceCraftScreen}/>
<Stack.Screen name = "DailyPic" component={DailyPicsScreen}/>
<Stack.Screen name = "StarMap" component={StarMapScreen}/>






</Stack.Navigator>
</NavigationContainer>

)

}