import { Timestamp } from "firebase/firestore";
import { IUser } from "./IUser";

export interface IMessage {
    id: string;
    text: string;
    creationTime: number;
    creator: string;
}

export interface IDate {
    day: number;
    month: number;
    year: number;
}

export interface ITime {
    second: number;
    minute: number;
    hour: number;
}
