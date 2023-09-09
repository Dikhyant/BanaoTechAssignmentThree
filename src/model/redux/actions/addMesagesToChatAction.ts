import { IMessage } from "../../IMessage";
import { ADD_MESSAGES_TO_CHAT } from "../actionTypes/actionTypes";
import { IAction } from "./IAction";

export interface IaddMesagesToChatAction extends IAction {
    chatId: string;
    messages: IMessage[];
}

type PropType = {
    chatId: string;
    messages: IMessage[];
}

export function addMesagesToChatAction({chatId, messages}: PropType): IaddMesagesToChatAction {
    return {
        type: ADD_MESSAGES_TO_CHAT,
        chatId: chatId,
        messages: messages
    }
}