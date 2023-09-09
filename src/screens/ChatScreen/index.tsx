import { 
    View,
    Text,
    StyleSheet,
 } from "react-native"
import { MainAppNavigationProp } from "../../components/MainAppContainer"
import useChatScreenViewController from "../../viewControllers/hooks/useChatScreenViewController"

const ChatScreen = (props) => {
    useChatScreenViewController({
        chatId: props.route.params.uid
    })
    return (
        <View style={styles.chatScreen} >
            
        </View>
    )
}

const styles = StyleSheet.create({
    chatScreen: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#26bbacef"
    },
})

export default ChatScreen