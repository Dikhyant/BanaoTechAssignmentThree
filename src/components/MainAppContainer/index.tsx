import { View } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "../../screens/Home"
import { CHAT_SCREEN, HOME } from "../../router/constants"
import ChatScreen from "../../screens/ChatScreen"

const Stack = createStackNavigator()

const MainAppContainer = () => {
    return (
        <View>
            <Stack.Navigator initialRouteName={HOME}>
                <Stack.Screen name={HOME} component={Home} />
                <Stack.Screen name={CHAT_SCREEN} component={ChatScreen}/>
            </Stack.Navigator>
        </View>
    )
}

export default MainAppContainer