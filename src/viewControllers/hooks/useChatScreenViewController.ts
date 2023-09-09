import { RootState } from "../../model/redux/reducers/rootReducer";
import { IStore } from "../../model/redux/store/store";
import { IMessage } from "../IMessage"
import { useSelector } from "react-redux"


type ReturnType = {
    messages: IMessage[];
}

type PropType = {
    chatId: string;
}

const useChatScreenViewController = ({chatId}: PropType):ReturnType => {
    const store: IStore = useSelector((store: RootState) => store.reducer)
    const messages: IMessage[] = new Array<IMessage>()
    const chat = store.chats.find(chat => chat.id === chatId)

    if(chat === null || chat === undefined) return {
        messages: messages
    }
    for(let i = 0; i < chat.messages.length; i++) {
        messages.push({
            id: chat.messages[i].id,
            text: chat.messages[i].text,
            creationTime: chat.messages[i].creationTimeStamp,
            creator: chat.messages[i].creator
        })
    }
    
    return {
        messages: messages
    }
}

export default useChatScreenViewController