import { IChat } from "../../IChat";
import { IMessage } from "../../IMessage";
import { ADD_CHATS, ADD_MESSAGES_TO_CHAT, ADD_NEW_MESSAGE_TO_CHAT } from "../actionTypes/actionTypes";
import { IAction } from "../actions/IAction";
import { IAddChatsAction } from "../actions/addChatsAction";
import { IaddMesagesToChatAction } from "../actions/addMesagesToChatAction";
import { IAddNewMessageToChat } from "../actions/addNewMessageToChatAction";
import initializeStore from "../store/initializeStore";
import { IStore } from "../store/store";

const chatReducer = (store: IStore = initializeStore(), action: IAction): IStore => {
    switch (action.type) {
        case ADD_MESSAGES_TO_CHAT:
            return addMessageToStore(action as IaddMesagesToChatAction, store)
        case ADD_CHATS:
            return addChatsToStore(action as IAddChatsAction, store)
        default:
            return store
    }
}

function addMessageToStore(payload: IaddMesagesToChatAction, store: IStore):IStore {
    if(store.chats === null || store.chats === undefined) return store

    let chat: IChat = store.chats.find(chat => {
        return chat.id === payload.chatId
    })

    if(chat === null || chat === undefined) return store

    // if(chat.messages.find(message => message.id === payload.message.id)) return
    const chats: IChat[] = store.chats.filter(chat => chat.id !== payload.chatId) // creating a copy

    const messages: IMessage[] = chat.messages.filter(item => true) // creating a copy
    // messages.push(payload.message)
    payload.messages.forEach(message => {
        messages.push(message)
    })

    // sorting in old to new message order
    messages.sort((a, b) => b.creationTimeStamp - a.creationTimeStamp )
    chats.push({
        id: chat.id,
        messages: messages,
        participants: chat.participants,
        isGroup: chat.isGroup
    })

    // sorting in old to new message order
    chats.sort((a, b) => b.messages[b.messages.length - 1].creationTimeStamp - a.messages[a.messages.length - 1].creationTimeStamp)

    return {
        ...store,
        chats: chats
    }
}

function addChatsToStore(payload: IAddChatsAction, store: IStore):IStore {
    if(store.chats === null || store.chats === undefined) return store
    if(payload.chats === null || payload.chats === undefined) return store
    const chats: IChat[] = store.chats.filter(_ => true) // creating copy

    payload.chats.forEach(chat => {
        chats.push({
            id: chat.id,
            messages: new Array<IMessage>(),
            participants: chat.participants,
            isGroup: chat.isGroup
        })
    })

    return {
        ...store,
        chats: chats
    }
}

export default chatReducer;