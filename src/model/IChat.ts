import { IEntity } from "./IEntity";
import { IMessage } from "./IMessage";
import { IUser } from "./IUser";

export interface IChat {
    id: string;
    messages: IMessage[];
    participants: string[];
    isGroup: boolean;
}