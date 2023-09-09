import { ChatReadFromFirestoreEvent } from "./ChatReadFromFirestoreEvent";
import { ICustomEvent } from "./ICustomEvent";
import { MessageReadFromFirestoreEvent } from "./MessageReadFromFirestoreEvent";

export class CustomEventHandler {
    private constructor() {
        CustomEventHandler.messageReadFromFirestoreEvent = new MessageReadFromFirestoreEvent()
        CustomEventHandler.chatReadFromFirestoreEvent = new ChatReadFromFirestoreEvent()
    }

    static getInstance(): CustomEventHandler {
        if(this.instance == null) {
            this.instance = new CustomEventHandler();
        }
        return this.instance
    }

    attachEventHandlerTo_ChatReadFromFirestoreEvent(callback) {
        CustomEventHandler.chatReadFromFirestoreEvent.subsribe(callback)
    }

    dettachEventHandlerTo_ChatReadFromFirestoreEvent() {
        CustomEventHandler.chatReadFromFirestoreEvent.unsubscribeAll()
    }

    emit_ChatReadFromFirestoreEvent(props) {
        CustomEventHandler.chatReadFromFirestoreEvent.emit(props)
    }

    attachEventHandlerTo_MessageReadFromFirestoreEvent(callback) {
        CustomEventHandler.messageReadFromFirestoreEvent.subsribe(callback)
    }

    dettachAllEventHandlerTo_MessageReadFromFirestoreEvent() {
        CustomEventHandler.messageReadFromFirestoreEvent.unsubscribeAll()
    }

    emit_MessageReadFromFirestoreEvent(props) {
        CustomEventHandler.messageReadFromFirestoreEvent.emit(props)
    }

    private static instance: CustomEventHandler;
    private static messageReadFromFirestoreEvent: ICustomEvent;
    private static chatReadFromFirestoreEvent: ICustomEvent;
}