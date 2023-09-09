import { IChat } from "../../model/IChat";

export interface IChatViewModel {
    getChats(uid: string, callback: (chats: IChat[]) => void);
}