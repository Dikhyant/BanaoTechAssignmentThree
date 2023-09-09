import { Firestore, doc, onSnapshot , query, collection , getDocs, where} from "firebase/firestore";
import { IChatSubscriber } from "../interfaces/IChatSubscriber";
import { FirebaseConstants } from "../constants";
import { IUser as IUserFromFirestore } from "../../firebase/firestore/IUser";
import { IChat as IChatFromFirestore } from "../../firebase/firestore/IChat";
import { CustomEventHandler } from "../../utils/customEvents/CustomEventHandler";

type ConstructorProp = {
    uid: string;
    db: Firestore;
}

export class ChatSubscriber implements IChatSubscriber {
    constructor({uid, db}: ConstructorProp) {
        this.db = db
        this.uid = uid
    }

    init() {
        // TODO. implement subscription to firestore
        this.subscribeToCurrentUserChats();
    }

    subscribeToCurrentUserChats() {
        const userDocRef = doc(this.db, FirebaseConstants.USERS, this.uid )
        onSnapshot(userDocRef,
        async (snapShot) => {
            const userData:IUserFromFirestore = snapShot.data() as IUserFromFirestore
            console.log(userData.chats)
            const chatCollectionRef = collection(this.db, FirebaseConstants.CHATS)
            const q = query(chatCollectionRef, 
                where("id", "in", userData.chats)    
            )
            const chatCollectionSnapshot = await getDocs(q)
            const chats: IChatFromFirestore[] = new Array<IChatFromFirestore>()
            chatCollectionSnapshot.forEach(chatCollectionSnapshotDoc => {
                const chatData: IChatFromFirestore = chatCollectionSnapshotDoc.data() as IChatFromFirestore
                chats.push(chatData)
            })
            
            CustomEventHandler.getInstance().emit_ChatReadFromFirestoreEvent({
                chats: chats
            })
            
        },
        (error) => {
            console.error(error)
        })
    }

    private uid: string;
    private db: Firestore;
}