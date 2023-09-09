import { Timestamp } from "firebase/firestore";

export interface IMessage {
    id: string;
    text: string;
    creator: string;
    creationTimeStamp: number
}