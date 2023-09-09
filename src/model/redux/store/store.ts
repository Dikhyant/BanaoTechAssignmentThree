import { configureStore } from "@reduxjs/toolkit";
import { IChat } from "../../IChat";
import { IUser } from "../../IUser";
import rootReducer from "../reducers/rootReducer";

export interface IStore {
    currentUser: IUser;
    chats: IChat[];
}

const store = configureStore({
    reducer: rootReducer
})

export default store;