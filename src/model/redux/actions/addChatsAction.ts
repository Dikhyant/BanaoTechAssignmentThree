import { IChat as IChatFirestore } from "../../../firebase/firestore/IChat";
import { ADD_CHATS } from "../actionTypes/actionTypes";
import { IAction } from "./IAction";

export interface IAddChatsAction extends IAction {
    chats: IChatFirestore[];
}

export const addChatsAction = (chats: IChatFirestore[]): IAddChatsAction => {
    return {
        type: ADD_CHATS,
        chats: chats
    }
}