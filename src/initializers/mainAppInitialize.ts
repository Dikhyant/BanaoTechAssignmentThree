import { ChatSubscriber } from "../viewModels/classes/ChatSubscriber";
import getIChatSubscriber from "../viewModels/providers/getIChatSubscriber";
import { IChatSubscriber } from "../viewModels/interfaces/IChatSubscriber";
import getIMessageSubscriber from "../viewModels/providers/getIMessageSubscriber";
import { IChat as IChatFromFirestore } from "../firebase/firestore/IChat";
import { db } from "../firebase/firestore/firestore";
import { CustomEventHandler } from "../utils/customEvents/CustomEventHandler";
import store from "../model/redux/store/store";
import { addChatsAction } from "../model/redux/actions/addChatsAction";

const mainAppInitializer = () => {
    const { chatSubscriber } = getIChatSubscriber({uid: "sow68Pzduie22YUlUPdD", db: db});
    const { messageSubscriber } = getIMessageSubscriber({uid: "sow68Pzduie22YUlUPdD", db: db})
    CustomEventHandler.getInstance().attachEventHandlerTo_ChatReadFromFirestoreEvent(handleChatReadFromFirestoreEvent)
    chatSubscriber.init();
    // messageSubscriber.init();
}

function handleChatReadFromFirestoreEvent({chats}: {chats: IChatFromFirestore[]}) {
    store.dispatch(addChatsAction(chats))
}

export default mainAppInitializer