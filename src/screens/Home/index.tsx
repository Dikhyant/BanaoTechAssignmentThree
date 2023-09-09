import { 
    View,
    Text,
    ScrollView,
 } from "react-native"
import ChatContainer from "../../components/ChatContainer";
import { ChatType } from "../../components/common/Chat";

const Home = () => {
    const chats: ChatType[] = new Array<ChatType>()
    for(let i = 0; i < 30; i++) {
        chats.push({
            uid: i + "",
            name: "Chat " + i
        })
    }
    return (
        <View>
            <ScrollView>
                <ChatContainer chats={chats} />
            </ScrollView>
        </View>
    )
}

export default Home;