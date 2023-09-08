import { 
    View,
    Text,
 } from "react-native"
import {FC} from "react"
import Chat, { ChatType } from "../common/Chat";

type PropType = {
    chats: ChatType[]
}

const ChatContainer:FC<PropType> = ({chats}) => {
    const chatComponents = chats.map((item) => {
        return (
            <Chat key={item.uid} uid={item.uid} name={item.name} />
        )
    })
    return (
        <View>
            {chatComponents}
        </View>
    )
}

export default ChatContainer;