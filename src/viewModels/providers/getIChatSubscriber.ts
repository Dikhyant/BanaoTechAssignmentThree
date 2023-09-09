import { Firestore } from "firebase/firestore";
import { ChatSubscriber } from "../classes/ChatSubscriber";
import { IChatSubscriber } from "../interfaces/IChatSubscriber"

export type ReturnType = {
    chatSubscriber: IChatSubscriber;
}

export type PropType = {
    uid: string;
    db: Firestore;
}

const getIChatSubscriber = ({uid, db}: PropType):ReturnType => {
    return {
        chatSubscriber: new ChatSubscriber({uid, db})
    }
}

export default getIChatSubscriber