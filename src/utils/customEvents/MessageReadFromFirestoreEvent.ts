import { IMessage as IMessageFromFirestore } from "../../firebase/firestore/IMessage";
import { ICustomEvent } from "./ICustomEvent";

export type PropType = {
    chatId: string;
    messages: IMessageFromFirestore[]
}
export type CallbackType = (prop: PropType) => void

export class MessageReadFromFirestoreEvent implements ICustomEvent {
    constructor() {
        this.callbacks = new Array<CallbackType>();
    }
    unsubscribeAll() {
        this.callbacks = this.callbacks.filter(c => false);
    }
    subsribe(callback: CallbackType) {
        this.callbacks.push(callback)
    }
    unsubscribe(callback: CallbackType) {
        this.callbacks = this.callbacks.filter(c => c !== callback)
    }
    emit(props: PropType) {
        this.callbacks.forEach(c => {
            c(props)
        })
    }

    private callbacks: CallbackType[]
}