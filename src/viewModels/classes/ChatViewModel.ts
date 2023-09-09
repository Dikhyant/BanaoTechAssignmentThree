import { IChat } from "../../model/IChat";
import { IChatViewModel } from "../interfaces/IChatViewModel";
import { Firestore, doc, onSnapshot , query, collection} from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FirebaseConstants } from "../constants";

const firebaseConfig = {
    apiKey: "AIzaSyD2IWr6rvWXr-r1uKyzDk5MtZnQN99ag_A",
    authDomain: "banaotechassignmentthree.firebaseapp.com",
    projectId: "banaotechassignmentthree",
    storageBucket: "banaotechassignmentthree.appspot.com",
    messagingSenderId: "699805909692",
    appId: "1:699805909692:web:397d46062bc3564f2a86b9"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

class ChatViewModel implements IChatViewModel {
    constructor(db: Firestore) {
        this.db = db;
    }
    getChats(uid: string, callback: (chats: IChat[]) => void) {
        const q = query(collection(this.db, FirebaseConstants.USERS))
        onSnapshot(doc(this.db, FirebaseConstants.USERS, uid),
        (doc) => {
            callback(null)
        })
        
    }

    private db: Firestore
}