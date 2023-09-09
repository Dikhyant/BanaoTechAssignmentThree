import { Firestore } from "firebase/firestore";
import { MessageSubscriber } from "../classes/MessageSubscriber";
import { IMessageSubscriber } from "../interfaces/IMessageSubscriber";

export type ReturnType = {
    messageSubscriber: IMessageSubscriber;
}

export type PropType = {
    uid: string;
    db: Firestore;
}

const getIMessageSubscriber = ({uid, db}: PropType):ReturnType => {
    return {
        messageSubscriber: new MessageSubscriber({uid, db})
    }
}

export default getIMessageSubscriber