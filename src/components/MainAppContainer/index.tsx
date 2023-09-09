import { View } from "react-native"
import { createStackNavigator , StackNavigationProp } from "@react-navigation/stack"
import Home from "../../screens/Home"
import { CHAT_SCREEN, HOME } from "../../router/constants"
import ChatScreen from "../../screens/ChatScreen"
import { Timestamp } from "firebase/firestore"

type MainAppStackParamList = {
    HOME: undefined;
    CHAT_SCREEN: {uid: string};
}

export type MainAppNavigationProp = StackNavigationProp<MainAppStackParamList>;

const Stack = createStackNavigator<MainAppStackParamList>()

const MainAppContainer = () => {
    return (
        <Stack.Navigator initialRouteName={HOME}>
            <Stack.Screen name={HOME} component={Home} options={{headerStyle: {height: 100}}} />
            <Stack.Screen name={CHAT_SCREEN} component={ChatScreen} options={{headerStyle: {height: 0}}}/>
        </Stack.Navigator>
    )
}

export default MainAppContainer