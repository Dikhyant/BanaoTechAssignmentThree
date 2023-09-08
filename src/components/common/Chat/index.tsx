import { 
    View,
    Text,
    StyleSheet
 } from "react-native"
import {FC} from "react"

export type ChatType = {
    uid: string;
    name: string;
}

const Chat:FC<ChatType> = ({name}) => {
    return (
        <View style={styles.chat}>
            <Text>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    chat: {
        width: "100%",
        aspectRatio: 100 / 20,
        marginBottom: 2,
        backgroundColor: "#157647ea"
    }
})

export default Chat;