import { IChat } from "../../IChat";
import { IStore } from "./store";

const initializeStore = ():IStore => {
    return {
        currentUser: {
            uid: "sow68Pzduie22YUlUPdD",
            name: "Bruce"
        },
        chats: new Array<IChat>()
    }
}

export default initializeStore