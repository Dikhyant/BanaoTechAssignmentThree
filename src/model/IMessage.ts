import { IEntity } from "./IEntity";

export interface IMessage {
    text: string;
    day: number;
    month: number;
    year: number;
    second: number;
    minute: number;
    hour: number;
}

export interface IMessageCarrier {
    message: IMessage;
    sender: IEntity;
    receiver: IEntity;
}