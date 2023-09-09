import { Firestore, doc, onSnapshot , query, collection} from "firebase/firestore";
import { IMessageSubscriber } from "../interfaces/IMessageSubscriber";
import { FirebaseConstants } from "../constants";
import { IUser as IUserFromFirestore } from "../../firebase/firestore/IUser";
import { IMessage as IMessageFromFirestore } from "../../firebase/firestore/IMessage";
import { CustomEventHandler } from "../../utils/customEvents/CustomEventHandler";
import store from "../../model/redux/store/store";
import { addMesagesToChatAction } from "../../model/redux/actions/addMesagesToChatAction";
import { IMessage } from "../../model/IMessage";

type ConstructorProp = {
    uid: string;
    db: Firestore;
}

export class MessageSubscriber implements IMessageSubscriber {
    constructor({uid, db}: ConstructorProp) {
        this.db = db
        this.uid = uid
    }

    init() {
        // TODO. implement subscription to firestore
        this.subscribeToFirestore();
    }

    subscribeToFirestore() {
        const userDocRef = doc(this.db, FirebaseConstants.USERS, this.uid )
        onSnapshot(userDocRef,
        (snapShot) => {
            const userData:IUserFromFirestore = snapShot.data() as IUserFromFirestore

            for(let i = 0; i < userData.chats.length; i++) {
                const messagesCollectionRef = collection(this.db, FirebaseConstants.CHATS, userData.chats[i], FirebaseConstants.MESSAGES)
                const chatDocRef = doc(this.db, FirebaseConstants.CHATS, userData.chats[i])

                onSnapshot(chatDocRef,
                (docSnapShot) => {
                    console.log("MessageSubscriber")
                    console.log(docSnapShot.data())
                },
                (error) => {
                    console.error("MessageSubscriber");
                    console.error(error)
                })

                return
                onSnapshot(messagesCollectionRef,
                (messageSnapshot) => {
                    const messages: IMessageFromFirestore[] = new Array<IMessageFromFirestore>()
                    messageSnapshot.forEach(data => {
                        const message: IMessageFromFirestore = data.data() as IMessageFromFirestore
                        messages.push(message)
                        
                    })

                    const messagesForStore: IMessage[] = new Array<IMessage>()
                    messages.forEach(m => {
                        messagesForStore.push({
                            id: m.id,
                            text: m.text,
                            creationTimeStamp: m.creationTimeStamp,
                            creator: m.creator
                        })
                    })

                    console.log("MessageSubscriber")
                    console.log(messages)

                    store.dispatch(addMesagesToChatAction({
                        chatId: userData.chats[i],
                        messages: messagesForStore
                    }))

                    /* CustomEventHandler.getInstance().emit_MessageReadFromFirestoreEvent({
                        chatId: userData.chats[i],
                        messages: messages
                    }) */
                },
                (error) => {
                    console.error(error)
                })
            }
        },
        (error) => {
            console.error(error)
        })
    }

    private uid: string;
    private db: Firestore;
}