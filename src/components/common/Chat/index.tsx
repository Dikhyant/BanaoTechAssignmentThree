import { 
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
 } from "react-native"
import {FC} from "react"
import useChatViewController from "../../../viewControllers/hooks/useChatViewController";

export type ChatType = {
    uid: string;
    name: string;
}

const Chat:FC<ChatType> = ({uid, name}) => {
    const {onPress} = useChatViewController({uid: uid})
    return (
        <TouchableHighlight onPress={onPress}>
            <View style={styles.chat}>
                <View style={styles.nameContainer}><Text style={styles.name}>{name}</Text></View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    chat: {
        width: "100%",
        aspectRatio: 100 / 20,
        marginBottom: 2,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#157647ea"
    },
    nameContainer: {
        width: "auto",
        height: "auto",
    },
    name: {
        color: "#fff"
    }
})

export default Chat;