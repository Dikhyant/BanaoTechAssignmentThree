import { IMessage } from "../../IMessage";
import { IAction } from "./IAction";

export interface IAddNewMessageToChat extends IAction {
    chatId: string;
    message: IMessage;
}