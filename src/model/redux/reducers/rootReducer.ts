import { combineReducers } from "redux";
import chatReducer from "./chatReducer";

const rootReducer = combineReducers({
    reducer: chatReducer
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>